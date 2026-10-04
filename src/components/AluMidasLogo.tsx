import React, { useState } from 'react';

interface AluMidasLogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' for dark backgrounds, 'dark' for light backgrounds
  height?: number | string;
}

/**
 * Official ALU MIDAS (PVT) LTD Brand Logo
 * Preserves the exact proportions, colours, lettering, and geometry of the uploaded official logo:
 * - Geometric interlocking AM monogram (Navy #0B1340 top peak, Golden Yellow #FFCC00 bottom chevron)
 * - Solid Navy blue rectangle with bold white condensed "ALU"
 * - Bold golden yellow condensed "MIDAS"
 */
export const AluMidasLogo: React.FC<AluMidasLogoProps> = ({
  className = '',
  variant = 'dark',
  height = 40,
}) => {
  const [imageError, setImageError] = useState(false);

  // Deep Navy: #0B1340 | Golden Yellow: #FFCC00
  const navyColor = '#0B1340';
  const yellowColor = '#FFCC00';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {!imageError ? (
        <img
          src="/alumidas_official_logo_1790941267009.png"
          alt="ALU MIDAS (PVT) LTD"
          className="h-10 md:h-12 w-auto object-contain transition-opacity duration-200"
          onError={() => setImageError(true)}
          referrerPolicy="no-referrer"
        />
      ) : (
        /* High-Precision Vector SVG Fallback identical to the official mark */
        <svg
          viewBox="0 0 680 160"
          style={{ height: typeof height === 'number' ? `${height}px` : height, width: 'auto' }}
          className="overflow-visible"
          aria-label="ALU MIDAS (PVT) LTD"
        >
          {/* AM Monogram Emblem */}
          <g transform="translate(10, 10)">
            {/* Top Navy 'A' Apex */}
            <polygon
              points="70,5 120,110 95,110 70,55 45,110 20,110"
              fill={variant === 'light' ? '#FFFFFF' : navyColor}
            />
            {/* Bottom Golden Yellow 'M' Chevron */}
            <polygon
              points="10,135 44,60 70,112 96,60 130,135 106,135 83,84 70,110 57,84 34,135"
              fill={yellowColor}
            />
          </g>

          {/* Wordmark Container */}
          <g transform="translate(170, 20)">
            {/* Navy Solid Block for 'ALU' */}
            <rect
              x="0"
              y="0"
              width="190"
              height="115"
              fill={variant === 'light' ? '#0F1E5C' : navyColor}
              rx="2"
            />
            {/* ALU Text in Clean Bold White Condensed Lettering */}
            <text
              x="95"
              y="85"
              fill="#FFFFFF"
              fontFamily="'Oswald', 'Plus Jakarta Sans', Arial, sans-serif"
              fontWeight="700"
              fontSize="82"
              letterSpacing="10"
              textAnchor="middle"
            >
              ALU
            </text>

            {/* MIDAS Text in Bold Golden Yellow Condensed Lettering */}
            <text
              x="215"
              y="85"
              fill={yellowColor}
              fontFamily="'Oswald', 'Plus Jakarta Sans', Arial, sans-serif"
              fontWeight="700"
              fontSize="82"
              letterSpacing="6"
              textAnchor="start"
            >
              MIDAS
            </text>
          </g>
        </svg>
      )}
    </div>
  );
};
export default AluMidasLogo;
