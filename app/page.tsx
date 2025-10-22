import Link from "next/link";
import { getAllRecipes } from "@/lib/recipes";
import type { Recipe } from "@/types/recipe";
import RecipeCard from "@/components/RecipeCard";
import FeaturedRecipe from "@/components/FeaturedRecipe";
import RecipeCarousel from "@/components/RecipeCarousel";

export default async function Home() {
  const allRecipes = await getAllRecipes();
  const featuredRecipe = allRecipes[0];
  const latestRecipes = allRecipes.slice(0, 4);
  const quickMeals = allRecipes.filter((r: Recipe) => r.totalTimeMinutes <= 20);
  const veganRecipes = allRecipes.filter((r: Recipe) => r.dietTags.includes("vegan"));

  return (
    <>
      {/* Hero Section with Featured Recipe */}
      <FeaturedRecipe recipe={featuredRecipe} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Latest Recipes Section */}
        <section className="mb-16">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Latest & Greatest</h2>
              <p className="text-lg text-gray-600">Fresh recipes added just for you</p>
            </div>
            <Link 
              href="/recipes"
              className="text-green-600 hover:text-green-700 font-semibold text-lg"
            >
              See all →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestRecipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        </section>

        {/* Quick Meals Carousel */}
        {quickMeals.length > 0 && (
          <section className="mb-16">
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">⚡ Quick & Easy</h2>
              <p className="text-lg text-gray-600">Delicious meals ready in 20 minutes or less</p>
            </div>
            <RecipeCarousel recipes={quickMeals} />
          </section>
        )}

        {/* Plant-Based Section */}
        {veganRecipes.length > 0 && (
          <section className="mb-16">
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">🌱 Plant-Powered</h2>
              <p className="text-lg text-gray-600">Vibrant vegan recipes full of flavor</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {veganRecipes.slice(0, 3).map((recipe) => (
                <RecipeCard key={recipe.slug} recipe={recipe} />
              ))}
            </div>
          </section>
        )}

        {/* Categories Grid */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/recipes?meal=breakfast" className="group">
              <div className="bg-linear-to-br from-orange-100 to-orange-200 rounded-xl p-6 h-32 flex items-center justify-center hover:shadow-lg transition-all">
                <div className="text-center">
                  <div className="text-4xl mb-2">🍳</div>
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-600">Breakfast</h3>
                </div>
              </div>
            </Link>
            <Link href="/recipes?meal=lunch" className="group">
              <div className="bg-linear-to-br from-green-100 to-green-200 rounded-xl p-6 h-32 flex items-center justify-center hover:shadow-lg transition-all">
                <div className="text-center">
                  <div className="text-4xl mb-2">🥗</div>
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-green-600">Lunch</h3>
                </div>
              </div>
            </Link>
            <Link href="/recipes?meal=dinner" className="group">
              <div className="bg-linear-to-br from-blue-100 to-blue-200 rounded-xl p-6 h-32 flex items-center justify-center hover:shadow-lg transition-all">
                <div className="text-center">
                  <div className="text-4xl mb-2">🍽️</div>
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600">Dinner</h3>
                </div>
              </div>
            </Link>
            <Link href="/recipes?meal=snack" className="group">
              <div className="bg-linear-to-br from-purple-100 to-purple-200 rounded-xl p-6 h-32 flex items-center justify-center hover:shadow-lg transition-all">
                <div className="text-center">
                  <div className="text-4xl mb-2">🍪</div>
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-600">Snacks</h3>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-linear-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss a Recipe</h2>
          <p className="text-xl mb-6 opacity-90">Get weekly recipes and cooking tips delivered to your inbox</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </>
  );
}