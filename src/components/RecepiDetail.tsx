import axios from 'axios';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CardDetail from './CardDetail';


interface RecipeDetail {
  id: string;
  title: string;
  src: string;
  instructions?: string;
}

const RecipeDetail: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const [recipe, setRecipe] = React.useState<RecipeDetail | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
      .then(response => {
        const recipe = response.data;
        if (recipe) {
          setRecipe({
            id: String(recipe.id),
            title: recipe.title,
            src: recipe.image,
            instructions: recipe.instructions,
          });
        } else {
          setError('Recipe not found');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Loading error');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!recipe) return null;

  if (!recipe.instructions || recipe.instructions.trim() === "") {
    return <div>Instructions not available for this recipe.</div>;
  }

  const backTo = location.state?.from === 'search' ? '/search' : '/';
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