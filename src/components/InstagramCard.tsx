import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PROFILE_INFO } from '../data/makeupData';

export const InstagramCard: React.FC = () => {
  return (
    <a
      href={PROFILE_INFO.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="instagram-card"
      id="instagram-link"
      title="Kunjungi Instagram @azmiiamaliaa"
    >
      <div className="ig-left-content">
        <div className="ig-icon-badge">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </div>
        <div className="ig-text-col">
          <div className="ig-tag-row">
            <span className="ig-handle">{PROFILE_INFO.instagramHandle}</span>
            <Sparkles size={14} color="#E1306C" />
          </div>
          <span className="ig-subtitle">Official Portfolio, Reels & Video Tutorial</span>
        </div>
      </div>

      <div className="ig-action-pill">
        <span>Follow</span>
        <ArrowUpRight size={14} />
      </div>
    </a>
  );
};
