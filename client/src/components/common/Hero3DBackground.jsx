import React, { useEffect, useRef } from 'react';

export const Hero3DBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking for interactive 3D distortion
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Particle nodes for 3D Mesh
    const numParticles = Math.min(Math.floor((width * height) / 12000), 65);
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 500 + 1, // Depth component
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1.2,
      });
    }

    // 3D Geometric Floating Wireframe Cubes
    const numCubes = 3;
    const cubes = [];
    for (let i = 0; i < numCubes; i++) {
      cubes.push({
        x: (Math.random() * 0.6 + 0.2) * width,
        y: (Math.random() * 0.6 + 0.2) * height,
        z: Math.random() * 300 + 100,
        size: Math.random() * 40 + 30,
        rotX: Math.random() * Math.PI,
        rotY: Math.random() * Math.PI,
        rotSpeedX: (Math.random() - 0.5) * 0.01,
        rotSpeedY: (Math.random() - 0.5) * 0.01,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01;

      // Smooth mouse damping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Check if light mode is active
      const isLight = document.documentElement.classList.contains('light');

      const primaryColor = isLight ? 'rgba(2, 132, 199,' : 'rgba(56, 189, 248,';
      const accentColor = isLight ? 'rgba(79, 70, 229,' : 'rgba(129, 140, 248,';

      // Update & Draw 3D Particles
      const fov = 300; // Field of view
      const centerX = width / 2 + (mouse.x - width / 2) * 0.08;
      const centerY = height / 2 + (mouse.y - height / 2) * 0.08;

      const projectedParticles = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Bounce boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        if (p.z < 1 || p.z > 600) p.vz *= -1;

        // 3D Perspective Projection
        const scale = fov / (fov + p.z);
        const projX = (p.x - centerX) * scale + centerX;
        const projY = (p.y - centerY) * scale + centerY;
        const projRadius = p.radius * scale;

        projectedParticles.push({ projX, projY, projRadius, scale, p });

        // Draw particle node
        const alpha = Math.min(scale * 0.7, 0.8);
        ctx.beginPath();
        ctx.arc(projX, projY, Math.max(projRadius, 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `${primaryColor} ${alpha})`;
        ctx.fill();
      }

      // Draw 3D Mesh Connections
      for (let i = 0; i < projectedParticles.length; i++) {
        for (let j = i + 1; j < projectedParticles.length; j++) {
          const p1 = projectedParticles[i];
          const p2 = projectedParticles[j];

          const dx = p1.projX - p2.projX;
          const dy = p1.projY - p2.projY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.25 * p1.scale;
            ctx.beginPath();
            ctx.moveTo(p1.projX, p1.projY);
            ctx.lineTo(p2.projX, p2.projY);
            ctx.strokeStyle = `${accentColor} ${alpha})`;
            ctx.lineWidth = 0.8 * p1.scale;
            ctx.stroke();
          }
        }
      }

      // Draw Wireframe 3D Floating Cubes
      cubes.forEach((cube) => {
        cube.rotX += cube.rotSpeedX;
        cube.rotY += cube.rotSpeedY;

        const scale = fov / (fov + cube.z);
        const cx = (cube.x - centerX) * scale + centerX;
        const cy = (cube.y - centerY) * scale + centerY;
        const s = cube.size * scale;

        // Cube 8 vertices in 3D
        const v = [
          [-s, -s, -s], [s, -s, -s], [s, s, -s], [-s, s, -s],
          [-s, -s, s], [s, -s, s], [s, s, s], [-s, s, s]
        ];

        // Rotate vertices
        const rotated = v.map(([x, y, z]) => {
          // Rotate X
          let y1 = y * Math.cos(cube.rotX) - z * Math.sin(cube.rotX);
          let z1 = y * Math.sin(cube.rotX) + z * Math.cos(cube.rotX);
          // Rotate Y
          let x2 = x * Math.cos(cube.rotY) + z1 * Math.sin(cube.rotY);
          let z2 = -x * Math.sin(cube.rotY) + z1 * Math.cos(cube.rotY);
          return [cx + x2, cy + y1];
        });

        // Edges connecting vertices
        const edges = [
          [0,1],[1,2],[2,3],[3,0],
          [4,5],[5,6],[6,7],[7,4],
          [0,4],[1,5],[2,6],[3,7]
        ];

        ctx.strokeStyle = `${primaryColor} ${0.12 * scale})`;
        ctx.lineWidth = 1 * scale;

        edges.forEach(([i1, i2]) => {
          ctx.beginPath();
          ctx.moveTo(rotated[i1][0], rotated[i1][1]);
          ctx.lineTo(rotated[i2][0], rotated[i2][1]);
          ctx.stroke();
        });
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default Hero3DBackground;
