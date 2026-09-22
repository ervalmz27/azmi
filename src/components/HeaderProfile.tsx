import React from 'react';
import { BadgeCheck, MapPin } from 'lucide-react';
import { PROFILE_INFO } from '../data/makeupData';

interface HeaderProfileProps {
  onAvatarClick?: () => void;
}

export const HeaderProfile: React.FC<HeaderProfileProps> = ({ onAvatarClick }) => {
  return (
    <header className="profile-section">
      {/* Profile Avatar with Glowing Aura */}
      <div className="avatar-wrapper" onClick={onAvatarClick} title="Azmi Amalia - Professional MUA">
        <div className="avatar-aura" />
        <div className="avatar-container">
          <img
            src={PROFILE_INFO.avatarUrl}
            alt="Azmi Amalia"
            className="avatar-img"
            loading="eager"
          />
        </div>
      </div>

      {/* Profile Handle & Verified Badge */}
      <div className="profile-handle-row">
        <h1 className="profile-handle">{PROFILE_INFO.handle}</h1>
        <span className="verified-badge" title="Verified Professional MUA">
          <BadgeCheck size={26} fill="#3897F0" color="#FFF" />
        </span>
      </div>

      {/* Bio / Tagline matching original reference */}
      <p className="profile-bio">
        Makeup artist · wedding & non-wedding · kelas make up
      </p>

      {/* Location */}
      <div className="profile-location">
        <MapPin size={13} />
        <span>{PROFILE_INFO.location}</span>
      </div>
    </header>
  );
};
