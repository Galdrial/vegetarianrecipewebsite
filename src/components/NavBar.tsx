import carrot from '../../public/carrot.png';
import Logo from './Logo';
import Navlink from './NavLink';
import Search from './Search';

function Navbar() {
  return (
    <nav className=" py-4 px-4 xl:px-[20vw] sticky top-0 w-full z-50 bg-white">
      <div className="flex items-center w-full gap-4 flex-wrap">
        <Logo href='/' alt="Carrot" text="Green Eats" src={carrot} />

        <Search />

        <Navlink href="./our-mission" text="Our Mission" />
       
      </div>
    </nav>
  );
}

export default Navbar;
