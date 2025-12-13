import { Link } from 'react-router-dom';

// Logo component displays the site logo and name as a link

interface LogoProps {
  href: string;         // Destination URL
  alt: string;          // Alt text for the logo image
  text: string;         // Text to display next to the logo
  src: string;          // Logo image source
  ariaLabel?: string;   // Optional ARIA label for accessibility
}

function Logo({ href, alt, text, src, ariaLabel }: LogoProps) {
  return (
    <Link to={href} className="flex items-center min-w-max" aria-label={ariaLabel || text}>
      {/* Logo image */}
      <img src={src} alt={alt} className="w-10 inline" />
      {/* Site name next to the logo */}
      <span className="font-playwrite text-2xl text-lime-700">{text}</span>
    </Link>
  );
}

export default Logo;