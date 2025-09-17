"use client";

import React, { useEffect, useRef } from 'react';

export default function JourneyTimeline({ timelineData = [], settings = {} }) {
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const progress = progressRef.current;
    if (!container || !progress) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      const total = rect.height + viewportH * 0.5;
      const visible = Math.min(Math.max(viewportH * 0.75 - rect.top, 0), total);
      const ratio = Math.max(0, Math.min(1, visible / total));
      progress.style.height = `${ratio * 100}%`;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="journey-section" ref={containerRef}>
      <div className="journey-header">
        <h2 className="journey-title">{settings.title || "THE JOURNEY"}</h2>
        <p className="journey-subtitle">{settings.subtitle || "Humble beginnings to mastering tech: my evolving path."}</p>
        <a className="journey-chip" href="#changelog" aria-label="Changelog">
          <span className="chip-emoji">{settings.changelog_emoji || "🎉"}</span>
          <span className="chip-text">{settings.changelog_text || "Changelog"}</span>
          <span className="chip-arrow">›</span>
        </a>
        <p className="journey-intro">{settings.intro || "Here's my education and work experience timeline."}</p>
      </div>

      <div className="timeline">
        <div className="timeline-line">
          <div className="timeline-progress" ref={progressRef} />
        </div>
        {timelineData.map((item) => (
          <div className="timeline-row" key={item.year}>
            <div className="timeline-left">
              <div className="timeline-dot" />
              <div className="timeline-year">{item.year}</div>
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


