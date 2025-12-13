
// Navlink component displays a navigation link styled for the navbar
import { Link } from 'react-router-dom';

interface NavlinkProps {
  href: string;        // Destination URL
  text: string;        // Link text
  ariaLabel?: string;  // Optional ARIA label for accessibility
}

function Navlink({ href, text, ariaLabel }: NavlinkProps) {
  // Render a styled navigation link for the navbar
  return (
    <Link to={href} className="flex items-center min-w-max ml-auto" aria-label={ariaLabel || text}>
      {/* Link text with custom styles */}
      <span className="text-lime-700 font-playwrite text-lg p-2 hover:underline decoration-2 hover:underline-offset-4">{text}</span>
    </Link>
  );
}

export default Navlink;