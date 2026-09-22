import React, { useState } from 'react';
import { HeaderProfile } from './components/HeaderProfile';
import { InstagramCard } from './components/InstagramCard';
import { PriceLinkCard } from './components/PriceLinkCard';
import { PriceDetailModal } from './components/PriceDetailModal';
import { WhatsAppBanner } from './components/WhatsAppBanner';
import { PRICE_CATEGORIES } from './data/makeupData';
import type { PriceCategory } from './types';
import confetti from 'canvas-confetti';

export const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PriceCategory | null>(null);

  const handleAvatarClick = () => {
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.25 },
      colors: ['#B45339', '#C59A58', '#E39774'],
    });
  };

  return (
    <>
      {/* 2026 Ethereal Ambient Glow Mesh */}
      <div className="ambient-mesh" aria-hidden="true">
        <div className="ambient-orb orb-1" />
        <div className="ambient-orb orb-2" />
        <div className="ambient-orb orb-3" />
      </div>

      <div className="app-container">
        {/* Profile Header with user's uploaded portrait */}
        <HeaderProfile onAvatarClick={handleAvatarClick} />

        {/* 3 Core Reference Links with (BACA DULU) */}
        <div className="links-stack" id="price-links-container">
          {PRICE_CATEGORIES.map((cat) => (
            <PriceLinkCard
              key={cat.id}
              category={cat}
              onClick={(c) => setSelectedCategory(c)}
            />
          ))}
        </div>

        {/* Dedicated Instagram Card (above WhatsApp) */}
        <InstagramCard />

        {/* Direct WhatsApp Consultation CTA */}
        <WhatsAppBanner />

        {/* Elegant Footer */}
        <footer className="footer-section">
          <p className="footer-copy">© azmiamalia</p>
          <span className="footer-sub">
            Bridal & Commercial Makeup Artist · All Rights Reserved
          </span>
        </footer>

        {/* Interactive Price & S&K Modal */}
        <PriceDetailModal
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      </div>
    </>
  );
};

export default App;
