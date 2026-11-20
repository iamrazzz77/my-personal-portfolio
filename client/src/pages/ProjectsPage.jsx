import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ProjectsGrid } from '../components/home/ProjectsGrid';

export const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Engineering Projects — Faishal Saif</title>
        <meta name="description" content="Explore full-stack web applications, IT infrastructure tools, and API microservices by Faishal Saif." />
      </Helmet>

      <div className="pt-24">
        <ProjectsGrid />
      </div>
    </>
  );
};
