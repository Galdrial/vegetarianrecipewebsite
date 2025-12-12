
// Navlink component displays a navigation link styled for the navbar
import { Link } from 'react-router-dom';

interface NavlinkProps {
  /** Destination URL */
  href: string;
  /** Link text */
  text: string;
  /** Optional ARIA label for accessibility */
  ariaLabel?: string;
}

function Navlink({ href, text, ariaLabel }: NavlinkProps) {
  return (
    // Navigation link styled for the navbar
    <Link to={href} className="flex items-center min-w-max ml-auto" aria-label={ariaLabel || text}>
      <span className="text-lime-700 font-playwrite text-lg p-2 hover:underline decoration-2 hover:underline-offset-4">{text}</span>
    </Link>
  );
}

export default Navlink;