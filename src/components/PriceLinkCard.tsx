import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { PriceCategory } from '../types';

interface PriceLinkCardProps {
  category: PriceCategory;
  onClick: (category: PriceCategory) => void;
}

export const PriceLinkCard: React.FC<PriceLinkCardProps> = ({ category, onClick }) => {
  // Extract "(BACA DULU)" and the rest of the title
  const rawTitle = category.buttonLabel;
  const hasBacaDulu = rawTitle.startsWith('(BACA DULU)');
  const mainTitle = hasBacaDulu ? rawTitle.replace('(BACA DULU)', '').trim() : rawTitle;

  return (
    <button
      className="price-link-card"
      onClick={() => onClick(category)}
      id={`btn-category-${category.id}`}
      aria-label={category.buttonLabel}
    >
      <div className="card-main-content">
        <div className="card-title-line">
          {hasBacaDulu && <span className="baca-dulu-tag">(BACA DULU)</span>}
          <span>{mainTitle}</span>
        </div>
        <span className="card-subtext">
          {category.packages.length} Paket Layanan · Termasuk S&K & Estimasi Biaya
        </span>
      </div>

      <div className="card-arrow-pill">
        <ChevronRight size={18} strokeWidth={2.5} />
      </div>
    </button>
  );
};
