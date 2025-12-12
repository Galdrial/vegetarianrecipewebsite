// Component for rendering a social media icon with a link
interface SocialIconProps {
  href?: string;        // URL to open when icon is clicked
  alt?: string;         // Alternative text for the icon image
  src?: string;         // Source URL for the icon image
  ariaLabel?: string;   // Accessible label for screen readers
}

function SocialIcon({ href, alt, src, ariaLabel }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel || alt}
    >
      {/* Render the icon image */}
      <img src={src} alt={alt} className='w-10 hover:opacity-60 transition-opacity duration-200' />
    </a>
  );
}

export default SocialIcon;