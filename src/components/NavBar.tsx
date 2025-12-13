
// Navbar component displays the main navigation bar with logo, search, and links
import carrot from '../../public/carrot.png';
import Logo from './Logo';
import Navlink from './NavLink';
import Search from './Search';


function Navbar() {
  // Render the main navigation bar with logo, search bar, and mission link
  return (
    <nav className="py-4 px-4 xl:px-[20vw] sticky top-1 w-full z-50 bg-white" aria-label="Main navigation">
      <div className="flex items-center w-full gap-4 flex-wrap">
        {/* Site logo linking to homepage */}
        <Logo href='/' alt="Carrot" text="Green Eats" src={carrot} ariaLabel="Homepage Green Eats" />
        {/* Search bar for recipes */}
        <Search />
        {/* Link to the Our Mission page */}
        <Navlink href="./our-mission" text="Our Mission" ariaLabel="Go to Our Mission page" />
      </div>
    </nav>
  );
}

export default Navbar;
