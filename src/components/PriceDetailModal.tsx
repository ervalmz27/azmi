import React, { useEffect } from 'react';
import { X, Check, AlertCircle, MessageCircle, Clock, Sparkles, PlusCircle } from 'lucide-react';
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

              <div className="pkg-price-row">
                <div className="pkg-price-tag">
                  <span className="pkg-price-num">{pkg.priceEstimate}</span>
                  {pkg.priceSub && (
                    <span className="pkg-price-sub">{pkg.priceSub}</span>
                  )}
                </div>

                {pkg.duration && (
                  <div className="pkg-duration-pill">
                    <Clock size={13} />
                    <span>{pkg.duration}</span>
                  </div>
                )}
              </div>

              <p className="pkg-desc">{pkg.description}</p>

              {/* Inclusions */}
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

              {/* Add-Ons / Pilihan Tambahan */}
              {pkg.addOns && pkg.addOns.length > 0 && (
                <div className="pkg-addons-box">
                  <h4 className="pkg-addons-title">
                    <Sparkles size={14} />
                    <span>Pilihan Tambahan / Add-On:</span>
                  </h4>
                  <div className="pkg-addons-list">
                    {pkg.addOns.map((addon, aIdx) => (
                      <div key={aIdx} className="pkg-addon-item">
                        <span className="pkg-addon-name">{addon.name}</span>
                        <span className="pkg-addon-price">{addon.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

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

          {/* Additional Services (e.g. Wedding) */}
          {category.additionalServices && category.additionalServices.length > 0 && (
            <div className="additional-services-box">
              <div className="add-svc-header">
                <PlusCircle size={16} />
                <span>Layanan Tambahan (Additional Services)</span>
              </div>
              <div className="add-svc-grid">
                {category.additionalServices.map((svc, sIdx) => (
                  <div key={sIdx} className="add-svc-item">
                    <span className="add-svc-name">{svc.name}</span>
                    <span className="add-svc-price">{svc.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Product Use (Product Brands Used) */}
          {category.productUse && category.productUse.length > 0 && (
            <div className="product-use-box">
              <div className="product-use-header">
                <Sparkles size={16} />
                <span>Product Use / Pilihan Kosmetik Premium</span>
              </div>
              <p className="product-use-desc">
                Azmi Amalia menggunakan perpaduan produk kosmetik luxury & internasional berstandar tinggi:
              </p>
              <div className="product-brand-tags">
                {category.productUse.map((brand, bIdx) => (
                  <span key={bIdx} className="product-brand-tag">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Contact Info Footer inside Modal */}
          <div className="modal-contact-footer">
            <div className="contact-footer-item">
              <span className="contact-label">Instagram:</span>
              <a
                href={PROFILE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-value"
              >
                {PROFILE_INFO.instagramHandle}
              </a>
            </div>
            <div className="contact-footer-item">
              <span className="contact-label">WhatsApp:</span>
              <a
                href={`https://wa.me/${PROFILE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-value"
              >
                {PROFILE_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

