let githubCache = {
  data: null,
  lastFetched: null,
  ttl: 15 * 60 * 1000 // 15 minutes cache
};

export const getGithubStats = async (req, res) => {
  try {
    const now = Date.now();

    if (githubCache.data && githubCache.lastFetched && (now - githubCache.lastFetched < githubCache.ttl)) {
      return res.status(200).json({ success: true, cached: true, data: githubCache.data });
    }

    const username = process.env.GITHUB_USERNAME || 'faishalsaif';
    const headers = { 'User-Agent': 'Faishal-Saif-Portfolio-Server' };

    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(`https://api.github.com/users/${username}`, { headers }).catch(() => null);

    if (response && response.ok) {
      const userData = await response.json();
      
      const payload = {
        username: userData.login,
        publicRepos: userData.public_repos,
        followers: userData.followers,
        avatarUrl: userData.avatar_url,
        bio: userData.bio,
        htmlUrl: userData.html_url
      };

      githubCache.data = payload;
      githubCache.lastFetched = now;

      return res.status(200).json({ success: true, cached: false, data: payload });
    }

    // Fallback response if GitHub API is unreachable or rate-limited
    const fallbackData = {
      username: username,
      publicRepos: 12,
      followers: 8,
      bio: "IT Engineer & Full-Stack Developer based in Riyadh",
      htmlUrl: `https://github.com/${username}`
    };

    return res.status(200).json({ success: true, cached: true, fallback: true, data: fallbackData });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to retrieve GitHub metrics.' });
  }
};
