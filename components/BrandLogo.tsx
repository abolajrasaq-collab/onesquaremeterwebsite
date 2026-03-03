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
  const boxSizes = {
    xs: 'w-4 h-4 text-[10px]',
    sm: 'w-8 h-8 text-lg',
    md: 'w-14 h-14 text-3xl',
    lg: 'w-24 h-24 text-6xl',
    xl: 'w-40 h-40 text-9xl'
  };

  const textSizes = {
    xs: 'text-[6px] leading-tight',
    sm: 'text-[9px] leading-tight',
    md: 'text-[14px] leading-tight',
    lg: 'text-[24px] leading-tight',
    xl: 'text-[40px] leading-tight'
  };

  const centeredTextSizes = {
    xs: 'text-[5px] mt-1',
    sm: 'text-[8px] mt-2',
    md: 'text-[12px] mt-3',
    lg: 'text-[18px] mt-4',
    xl: 'text-[32px] mt-8'
  };

  const gapSizes = {
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-10'
  };

  const isLight = variant === 'light';
  const isDark = variant === 'dark';

  // Updated to use Yellow (#FEC12C) and Navy (#325074)
  const boxBg = isLight ? 'bg-[#FEC12C]' : isDark ? 'bg-[#FEC12C]' : 'bg-[#325074]';
  const boxTextColor = 'text-[#325074]';
  const mainTextColor = isLight ? 'text-white' : 'text-[#325074]';

  const fontStyle = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

  const renderIcon = () => (
    <div
      className={`flex items-center justify-center font-black rounded-sm shadow-sm flex-shrink-0 ${boxSizes[size]} ${boxBg} ${boxTextColor}`}
      style={fontStyle}
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
          className={`font-medium uppercase tracking-[0.4em] ${mainTextColor} ${centeredTextSizes[size]}`}
          style={fontStyle}
        >
          One Square Meter
        </div>
        <span className={`text-[0.5em] opacity-60 tracking-widest mt-1 ${mainTextColor}`}>by Dantata</span>
      </div>
    );
  }

  // Default: Horizontal Layout
  return (
    <div className={`flex items-center ${gapSizes[size]}`}>
      {renderIcon()}
      <div
        className={`flex flex-col items-start font-medium uppercase tracking-[0.25em] ${mainTextColor} ${textSizes[size]}`}
        style={fontStyle}
      >
        <span>One</span>
        <span>Square</span>
        <span>Meter</span>
        <span className="text-[0.4em] opacity-60 tracking-widest mt-0.5 normal-case font-light">by Dantata</span>
      </div>
    </div>
  );
};

export default BrandLogo;