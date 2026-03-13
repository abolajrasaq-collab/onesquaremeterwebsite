import * as React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'monochrome';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'horizontal' | 'centered' | 'icon';
}

const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  size = 'md',
  layout = 'horizontal'
}) => {
  const isLight = variant === 'light';
  const isDark = variant === 'dark';

  // Base colors from client SVG
  const navy = '#325175';
  const yellow = '#fdc02b';
  
  const boxBg = yellow;
  const boxTextColor = navy;
  const mainTextColor = isLight ? '#FFFFFF' : navy;
  const secondaryTextColor = isLight ? 'rgba(255,255,255,0.7)' : navy;
  const lineColor = isLight ? 'rgba(255,255,255,0.2)' : navy;

  const fontStyle = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

  // Scale map based on size prop
  const scales = {
    xs: 0.25,
    sm: 0.45,
    md: 0.75,
    lg: 1.2,
    xl: 1.8
  };

  const scale = scales[size];

  const renderIcon = () => (
    <div
      className="flex items-center justify-center font-bold rounded-sm shadow-sm flex-shrink-0"
      style={{
        ...fontStyle,
        width: 323 * scale * 0.25,
        height: 323 * scale * 0.25,
        backgroundColor: boxBg,
        color: boxTextColor,
        fontSize: 216 * scale * 0.25,
        lineHeight: 1
      }}
    >
      1
    </div>
  );

  if (layout === 'icon') {
    return renderIcon();
  }

  if (layout === 'centered') {
    return (
      <div className="flex flex-col items-center text-center">
        {renderIcon()}
        <div
          className="font-semibold uppercase tracking-[0.2em] mt-2"
          style={{
            ...fontStyle,
            color: mainTextColor,
            fontSize: 93 * scale * 0.25,
            lineHeight: 1.1
          }}
        >
          ONE SQUARE METER
        </div>
        <div
          className="font-medium uppercase tracking-[0.4em] mt-1"
          style={{
            ...fontStyle,
            color: secondaryTextColor,
            fontSize: 69 * scale * 0.18,
          }}
        >
          BY DANTATA
        </div>
      </div>
    );
  }

  // New refined Horizontal Layout based on SVG
  return (
    <div className="flex flex-col items-start" style={{ gap: 8 * scale }}>
      <div className="flex items-center" style={{ gap: 40 * scale * 0.25 }}>
        {renderIcon()}
        <div
          className="flex flex-col font-semibold uppercase leading-tight"
          style={{
            ...fontStyle,
            color: mainTextColor,
            fontSize: 93 * scale * 0.25,
            letterSpacing: '0.05em'
          }}
        >
          <span>ONE</span>
          <span>SQUARE</span>
          <span>METER</span>
        </div>
      </div>
      
      {/* Separator Line */}
      <div 
        className="w-full h-[1px] opacity-30" 
        style={{ backgroundColor: lineColor }} 
      />
      
      {/* Subtitle */}
      <div
        className="font-medium uppercase tracking-[0.5em] w-full text-right"
        style={{
          ...fontStyle,
          color: secondaryTextColor,
          fontSize: 69 * scale * 0.22,
          paddingRight: '2%'
        }}
      >
        BY DANTATA
      </div>
    </div>
  );
};

export default BrandLogo;