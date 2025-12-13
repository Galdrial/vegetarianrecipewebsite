
// SocialIcon component displays a social media icon with a link
interface SocialIconProps {
  href?: string;      // URL to the social profile
  alt?: string;       // Alt text for the icon
  src?: string;       // Image source for the icon
  ariaLabel?: string; // Optional ARIA label for accessibility
}

function SocialIcon({ href, alt, src, ariaLabel }: SocialIconProps) {
  // Render a link with a social media icon
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel || alt}
    >
      {/* Social media icon image */}
      <img src={src} alt={alt} className='w-10 hover:opacity-60 transition-opacity duration-200' />
    </a>
  );
}
export default SocialIcon;