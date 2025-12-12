
// Hero component displays the main banner with a headline and image
import heroimage from '../assets/img/hero.png';

function Hero() { 
  return (
    // Section with hero image and headline
    <section className="flex flex-col justify-center items-center h-80 md:h-60 xl:h-auto mt-4 bg-lime-100 text-center px-4 flex-wrap">
      <div className="relative w-full h-96">
        {/* Hero image, visible only on extra large screens */}
        <img src={heroimage} alt="hero image" className="w-full xl:h-96 object-contain hidden xl:block" />
        {/* Headline text overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center xl:w-[28%] xl:text-start xl:left-[20%]">
          <h1 className="text-5xl font-bold text-lime-700">FRESH, WHOLESOME & DELICIOUS VEGETARIAN RECIPES</h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;