import React, { useEffect } from 'react';
import { X, Check, AlertCircle, MessageCircle } from 'lucide-react';
import type { PriceCategory } from '../types';
import { PROFILE_INFO } from '../data/makeupData';

interface PriceDetailModalProps {
  category: PriceCategory | null;
  onClose: () => void;
}

export const PriceDetailModal: React.FC<PriceDetailModalProps> = ({ category, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (category) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [category, onClose]);

  if (!category) return null;

  const createWhatsAppUrl = (customText: string) => {
    return `https://wa.me/${PROFILE_INFO.whatsappNumber}?text=${encodeURIComponent(customText)}`;
  };

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-content-container">
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <h2 className="modal-title">{category.modalTitle}</h2>
            <p className="modal-subtitle">{category.modalSubtitle}</p>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Tutup Detail"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* S&K "BACA DULU" Important Banner */}
          <div className="baca-dulu-box">
            <div className="baca-dulu-header">
              <AlertCircle size={16} />
              <span>{category.bacaDuluPoints.title}</span>
            </div>
            <ul className="baca-dulu-list">
              {category.bacaDuluPoints.points.map((pt, idx) => (
                <li key={idx} className="baca-dulu-item">
                  <span className="baca-dulu-dot" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* List of Available Packages */}
          {category.packages.map((pkg) => (
            <div key={pkg.id} className="pkg-card">
              <div className="pkg-header-row">
                <div>
                  <h3 className="pkg-title">{pkg.title}</h3>
                  <p className="card-subtext">{pkg.subtitle}</p>
                </div>
                {pkg.badge && <span className="pkg-badge">{pkg.badge}</span>}
              </div>

              <div className="pkg-price-tag">
                <span className="pkg-price-num">{pkg.priceEstimate}</span>
                <span className="pkg-price-sub">/ sesi</span>
              </div>

              <p className="pkg-desc">{pkg.description}</p>

              <div>
                <h4 className="pkg-inclusions-title">Yang Termasuk Dalam Paket:</h4>
                <ul className="pkg-inclusions-list">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="pkg-inc-item">
                      <Check size={14} className="check-icon" strokeWidth={3} />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={createWhatsAppUrl(pkg.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="pkg-book-btn"
                title={`Booking ${pkg.title}`}
              >
                <MessageCircle size={16} />
                <span>Konsultasi & Booking Paket Ini</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
