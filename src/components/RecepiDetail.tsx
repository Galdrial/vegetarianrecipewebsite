
// RecipeDetail component fetches and displays detailed information for a single recipe
// Uses a custom hook to fetch data from the Spoonacular API
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CardDetail from './CardDetail';
import { useFetchRecipes } from './hooks/useFetchRecipes';

interface RecipeDetail {
  id: string;
  title: string;
  src: string;
  instructions?: string;
}

const RecipeDetail: React.FC = () => {
  // Get recipe ID from route params
  const { id } = useParams();
  // Get navigation location (to determine where to go back)
  const location = useLocation();
  // Local state for the recipe detail
  const [recipe, setRecipe] = React.useState<RecipeDetail | null>(null);
  // Build API URL for recipe detail
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
  const url = id ? `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}` : '';

  // Types for API response and card data
  type SpoonacularDetailResult = {
    id: number;
    title: string;
    image: string;
    instructions?: string;
  };
  type RecipeCard = { id: string; title: string; src: string; instructions?: string };
  // Map API data to card format
  const mapFn = (data: SpoonacularDetailResult): RecipeCard[] => data && data.id ? [{
    id: String(data.id),
    title: data.title,
    src: data.image,
    instructions: data.instructions,
  }] : [];
  // Custom hook for fetching recipe detail
  const { data, loading, error, fetchData } = useFetchRecipes<SpoonacularDetailResult, RecipeCard[]>(url, mapFn);

  // Fetch recipe detail when ID changes
  React.useEffect(() => {
    if (id) fetchData();
  }, [id, fetchData]);

  // Update local state when new data is fetched
  React.useEffect(() => {
    if (data && data.length > 0) {
      setRecipe(data[0]);
    }
  }, [data]);

  // Handle loading, error, and missing data states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!recipe) return null;
  if (!recipe.instructions || recipe.instructions.trim() === "") {
    return <div>Instructions not available for this recipe.</div>;
  }

  // Determine where to go back (search or home)
  const backTo = location.state?.from === 'search' ? '/search' : '/';
  // Render the CardDetail component with recipe data
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