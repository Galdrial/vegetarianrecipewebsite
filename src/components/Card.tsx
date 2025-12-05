


function Card({src, alt, title, description, span }: {src?: string, alt?: string, title?: string, description?: string, span?: string}) { 
  return (
    <div className={`${span} bg-green-500 p-6 rounded-lg flex flex-col items-center text-center`}>
      <img src={src} alt={alt} className='w-32' />
      <h2 className='text-green-950 text-2xl font-bold mt-4 mb-2'>{title}</h2>
      <p className='text-green-900'>{description} </p>
    </div>
  );
}

export default Card;