import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearResultsCards } from '../redux/ResultsCardsSlice';

// Utility function to strip HTML tags from a string
function stripHtml( html?: string ) {
  if ( !html ) return '';
  return html.replace( /<[^>]+>/g, '' );
}

// CardDetail component displays detailed information for a single recipe
// Includes image, title, formatted instructions, and a back button
function CardDetail( { src, alt, title, instructions, id, backTo }: { src?: string, alt?: string, title?: string, instructions?: string, id?: string, backTo?: string } ) {
  const dispatch = useDispatch();
  // Format instructions: use a bullet list if there are multiple steps, otherwise a single paragraph
  let formattedInstructions: React.ReactNode = null;
  if ( instructions ) {
    const cleanInstructions = stripHtml( instructions );
    // Split instructions into steps based on newlines or periods
    const steps = cleanInstructions.split( /\r?\n|\.(?=\s|$)/ ).map( s => s.trim() ).filter( Boolean );
    if ( steps.length > 1 ) {
      // Render as a bullet list
      formattedInstructions = (
        <ul className="list-disc pl-6">
          {steps.map( ( step, idx ) => (
            <li key={idx} className='text-green-900 mb-2 text-start text-lg'>
              {step.charAt( 0 ).toUpperCase() + step.slice( 1 )}
            </li>
          ) )}
        </ul>
      );
    } else {
      // Render as a single paragraph
      formattedInstructions = (
        <p className='text-green-900 mb-4 text-start text-lg'>
          {steps[0].charAt( 0 ).toUpperCase() + steps[0].slice( 1 )}
        </p>
      );
    }
  }
  const navigate = useNavigate();
  // Try to get a higher resolution image from Spoonacular if possible
  let highResSrc = src;
  if (src && src.match(/-\d+x\d+\.(jpg|jpeg|png)$/)) {
    // Replace the size in the filename with a larger one (636x393 is common for Spoonacular)
    highResSrc = src.replace(/-\d+x\d+(\.(jpg|jpeg|png))$/, '-636x393$1');
  }
  return (
    <div
      className="max-w-4xl text-black mx-auto mb-12 mt-6 px-12 bg-white"
      id={id}
      aria-label={`Recipe detail for ${ title }`}
    >
      {/* Recipe title */}
      <h2 className='text-lime-700 text-3xl text-center  mx-6 font-bold mb-10'>{title}</h2>
      {/* Recipe image */}
      <div className="w-full h-80 flex items-center justify-center bg-gray-100 rounded-t-xl overflow-hidden mb-12">
        <img src={highResSrc} alt={alt} className="w-full object-cover rounded-t-xl" aria-label={alt ? `Image of ${ alt }` : undefined} />
      </div>
      {/* Formatted instructions (list or paragraph) */}
      {formattedInstructions}
      {/* Back button to return to results or home */}
      <div className="flex justify-end">
        <button
          className="mt-6 px-4 py-2 bg-lime-700 text-white rounded-3xl hover:bg-lime-800 transition"
          onClick={() => {
            if ( backTo === '/' ) {
              dispatch( clearResultsCards() );
              window.dispatchEvent( new CustomEvent( 'clearCards' ) );
            }
            navigate( backTo || '/' );
          }}
          aria-label="Back to results"
        >
          Back to Results
        </button>
      </div>
    </div>
  );
}

export default CardDetail;