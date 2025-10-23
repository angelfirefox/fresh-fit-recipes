import { getAllRecipes } from "@/lib/recipes";
import type { Recipe } from "@/types/recipe";
import RecipeCard from "@/components/RecipeCard";

export default async function RecipesPage() {
  const recipes: Recipe[] = await getAllRecipes();

  return (
  <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Recipes</h1>
      
      <div className="mb-4 text-gray-600">
        Showing {recipes.length} recipes
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}