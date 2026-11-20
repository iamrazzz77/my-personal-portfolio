import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/home/Hero';
import { TechMarquee } from '../components/home/TechMarquee';
import { StatusStrip } from '../components/home/StatusStrip';
import { CurrentWorkSection } from '../components/home/CurrentWorkSection';
import { AboutServices } from '../components/home/AboutServices';
import { FeaturedCaseStudy } from '../components/home/FeaturedCaseStudy';
import { ProjectsGrid } from '../components/home/ProjectsGrid';
import { TechStack } from '../components/home/TechStack';
import { TechnicalOwnership } from '../components/home/TechnicalOwnership';
import { ExperienceTimeline } from '../components/home/ExperienceTimeline';
import { CertificationsGrid } from '../components/home/CertificationsGrid';
import { Achievements } from '../components/home/Achievements';
import { AiCtaSection } from '../components/home/AiCtaSection';
import { ContactSection } from '../components/home/ContactSection';
import { portfolioData } from '../data/portfolioData';

export const Home = () => {
  const { profile } = portfolioData;

  return (
    <>
      <Helmet>
        <title>{profile.name} — {profile.title}</title>
        <meta name="description" content={profile.positioningStatement} />
        <meta property="og:title" content={`${profile.name} — ${profile.title}`} />
        <meta property="og:description" content={profile.tagline} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${profile.name} — ${profile.title}`} />
        <meta name="twitter:description" content={profile.tagline} />
      </Helmet>

      <main className="space-y-0">
        <Hero />
        <TechMarquee />
        <StatusStrip />
        <CurrentWorkSection />
        <AboutServices />
        <FeaturedCaseStudy />
        <ProjectsGrid />
        <TechStack />
        <TechnicalOwnership />
        <ExperienceTimeline />
        <CertificationsGrid />
        <Achievements />
        <AiCtaSection />
        <ContactSection />
      </main>
    </>
  );
};

