import logoCh from '../../assets/logos/logo_ch_3.png';

const logos = {
  header: { src: logoCh, alt: '德合信' },
};

export const LogoIcon = ({ variant = 'header', className = 'h-10 sm:h-12 w-auto object-contain' }) => {
  const { src, alt } = logos[variant] ?? logos.header;

  return <img src={src} alt={alt} className={className} draggable={false} />;
};
