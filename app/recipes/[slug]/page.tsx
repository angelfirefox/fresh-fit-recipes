import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Clock, Users, ChefHat } from "lucide-react";
import { getAllRecipes, getRecipeBySlug } from "@/lib/recipes";
import PrintButton from "@/components/PrintButton";

export async function generateStaticParams() {
  const recipes = await getAllRecipes();
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = await getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link 
        href="/recipes"
        className="text-green-600 hover:text-green-700 mb-4 inline-block"
      >
        ← Back to Recipes
      </Link>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {recipe.imagePath ? (
          <div className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gradient-to-br from-green-50 to-blue-50">
            <Image
              src={recipe.imagePath}
              alt={recipe.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="animate-fade-in"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        ) : (
          <div className="text-8xl text-center py-16 bg-gradient-to-br from-green-50 to-blue-50">
            {recipe.heroImage}
          </div>
        )}

        <div className="p-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
            <p className="text-xl text-gray-600 mb-4">{recipe.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {recipe.dietTags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                  {tag}
                </span>
              ))}
              {recipe.mealType.map(type => (
                <span key={type} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                  {type}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 text-gray-600 mb-4 flex-wrap">
              <span className="flex items-center gap-2">
                <Clock size={20} />
                <div>
                  <div className="font-semibold">Total Time</div>
                  <div>{recipe.totalTimeMinutes} min</div>
                </div>
              </span>
              <span className="flex items-center gap-2">
                <Users size={20} />
                <div>
                  <div className="font-semibold">Servings</div>
                  <div>{recipe.servings}</div>
                </div>
              </span>
              <span className="flex items-center gap-2">
                <ChefHat size={20} />
                <div>
                  <div className="font-semibold">Difficulty</div>
                  <div className="capitalize">{recipe.difficulty}</div>
                </div>
              </span>
            </div>

            <PrintButton />
          </div>

          {recipe.nutrients && (
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Nutrition (per serving)</h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-center">
                {recipe.nutrients.calories && (
                  <div>
                    <div className="text-2xl font-bold text-green-600">{recipe.nutrients.calories}</div>
                    <div className="text-sm text-gray-600">Calories</div>
                  </div>
                )}
                {recipe.nutrients.protein && (
                  <div>
                    <div className="text-2xl font-bold text-green-600">{recipe.nutrients.protein}g</div>
                    <div className="text-sm text-gray-600">Protein</div>
                  </div>
                )}
                {recipe.nutrients.carbs && (
                  <div>
                    <div className="text-2xl font-bold text-green-600">{recipe.nutrients.carbs}g</div>
                    <div className="text-sm text-gray-600">Carbs</div>
                  </div>
                )}
                {recipe.nutrients.fat && (
                  <div>
                    <div className="text-2xl font-bold text-green-600">{recipe.nutrients.fat}g</div>
                    <div className="text-sm text-gray-600">Fat</div>
                  </div>
                )}
                {recipe.nutrients.fiber && (
                  <div>
                    <div className="text-2xl font-bold text-green-600">{recipe.nutrients.fiber}g</div>
                    <div className="text-sm text-gray-600">Fiber</div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-2xl mb-4">Ingredients</h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>
                      {ing.quantity && <strong>{ing.quantity} </strong>}
                      {ing.unit && <strong>{ing.unit} </strong>}
                      {ing.item}
                      {ing.notes && <span className="text-gray-500 italic"> ({ing.notes})</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-2xl mb-4">Instructions</h3>
              <ol className="space-y-3">
                {recipe.steps.map((step, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </span>
                    <span className="flex-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {recipe.tips && recipe.tips.length > 0 && (
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <h4 className="font-bold mb-2">💡 Tips</h4>
              <ul className="space-y-1">
                {recipe.tips.map((tip, idx) => (
                  <li key={idx} className="text-sm">{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}