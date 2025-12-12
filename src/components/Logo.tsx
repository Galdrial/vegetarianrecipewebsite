
// Logo component displays the site logo and name as a link
import { Link } from 'react-router-dom';

interface LogoProps {
  /** Destination URL */
  href: string;
  /** Alt text for the logo image */
  alt: string;
  /** Text to display next to the logo */
  text: string;
  /** Logo image source */
  src: string;
  /** Optional ARIA label for accessibility */
  ariaLabel?: string;
}

function Logo({ href, alt, text, src, ariaLabel }: LogoProps) {
  return (
    // Link to the homepage or another route, with logo image and text
    <Link to={href} className="flex items-center min-w-max" aria-label={ariaLabel || text}>
      <img src={src} alt={alt} className="w-10 inline" />
      <span className="font-playwrite text-2xl text-lime-700">{text}</span>
    </Link>
  );
}

export default Logo;