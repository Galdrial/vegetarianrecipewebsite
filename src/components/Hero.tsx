import heroimage from '../assets/hero.png';

function Hero() { 
  return (
    <section className="flex flex-col justify-center items-center h-80 md:h-60 xl:h-auto mt-10 bg-lime-100 text-center px-4 flex-wrap">
      <div className="relative w-full h-96">
        <img src={heroimage} alt="hero image" className="w-full xl:h-96 object-contain hidden xl:block" />
        <div className="absolute inset-0 flex flex-col justify-center items-center xl:w-[28%] xl:text-start xl:left-[20%]">
          <h1 className="text-5xl font-bold text-lime-700">FRESH, WHOLESOME & DELICIOUS VEGETARIAN RECEPIS</h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;