
// RecipeDetail component fetches and displays detailed information for a single recipe
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CardDetail from './CardDetail';
import { useFetchRecipes } from './hooks/useFetchRecipes';

interface RecipeDetail {
  id: string;            // Recipe ID
  title: string;         // Recipe title
  src: string;           // Image source
  instructions?: string; // Optional instructions
}


const RecipeDetail: React.FC = () => {
  // Get the recipe ID from the URL params
  const { id } = useParams();
  // Get the current location (used to determine navigation origin)
  const location = useLocation();
  // Local state to store the fetched recipe
  const [recipe, setRecipe] = React.useState<RecipeDetail | null>(null);
  // Get the API key from environment variables
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
  // Build the API URL for fetching recipe details
  const url = id ? `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}` : '';

  // Define the expected structure of the API response
  type SpoonacularDetailResult = {
    id: number;
    title: string;
    image: string;
    instructions?: string;
  };
  // Define the structure for the card data used in the UI
  type RecipeCard = { id: string; title: string; src: string; instructions?: string };

  // Map the API response to the card format
  const mapFn = (data: SpoonacularDetailResult): RecipeCard[] => data && data.id ? [{
    id: String(data.id),
    title: data.title,
    src: data.image,
    instructions: data.instructions,
  }] : [];

  // Use the custom hook to fetch recipe details
  const { data, loading, error, fetchData } = useFetchRecipes<SpoonacularDetailResult, RecipeCard[]>(url, mapFn);

  // Fetch recipe details when the component mounts or the ID changes
  React.useEffect(() => {
    if (id) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // Update local state when new data is fetched
  React.useEffect(() => {
    if (data && data.length > 0) {
      setRecipe(data[0]);
    }
  }, [data]);

  // Show loading indicator while fetching data
  if (loading) return <div>Loading...</div>;
  // Show error message if fetch fails
  if (error) return <div>{error}</div>;
  // If recipe is not loaded, render nothing
  if (!recipe) return null;
  // If instructions are missing, show a message
  if (!recipe.instructions || recipe.instructions.trim() === "") {
    return <div>Instructions not available for this recipe.</div>;
  }

  // Determine where to navigate back to (search or home)
  const backTo = location.state?.from === 'search' ? '/search' : '/';
  // Render the CardDetail component with the fetched recipe data
  return (
    <CardDetail
      key={recipe.id}
      src={recipe.src}
      alt={recipe.title}
      title={recipe.title}
      instructions={recipe.instructions}
      backTo={backTo}
    />
  );
};

export default RecipeDetail;