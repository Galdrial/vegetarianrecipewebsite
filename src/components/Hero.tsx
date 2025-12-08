import heroimage from '../assets/hero.png';

function Hero() { 
  return (
    <section className="flex flex-col justify-center items-center bg-gradient-to-r from-lime-100 to-white text-center  px-4 ">
      <div className="relative w-full h-96">
        <img src={heroimage} alt="hero image" className="w-full h-96 object-contain" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white w-[28%] text-start left-[20%]">
          <h1 className="text-5xl font-bold text-lime-700">FRESH, WHOLESOME & DELICIOUS VEGETARIAN RECEPIS</h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;