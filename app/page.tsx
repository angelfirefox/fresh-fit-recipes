import Link from "next/link";
import { getAllRecipes } from "@/lib/recipes";
import type { Recipe } from "@/types/recipe";
import RecipeCard from "@/components/RecipeCard";
import FeaturedRecipe from "@/components/FeaturedRecipe";
import RecipeCarousel from "@/components/RecipeCarousel";

export default async function Home() {
  const allRecipes: Recipe[] = await getAllRecipes();
  const featuredRecipe = allRecipes[0];
  const latestRecipes = allRecipes.slice(0, 4);
  const quickMeals = allRecipes.filter((r: Recipe) => r.totalTimeMinutes <= 20);
  const veganRecipes = allRecipes.filter((r: Recipe) => r.dietTags.includes("vegan"));

  return (
    <>
      {/* Hero Section with Featured Recipe */}
      <FeaturedRecipe recipe={featuredRecipe} />

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Latest Recipes Section */}
        <section className="mb-20 relative">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>

          <div className="flex items-end justify-between mb-8">
            <div className="relative">
              <div className="paint-stroke">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Latest & Greatest</h2>
              </div>
              <p className="text-lg text-gray-600 mt-3">Fresh recipes added just for you</p>
            </div>
            <Link
              href="/recipes"
              className="text-green-600 hover:text-green-700 font-bold text-lg transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group"
            >
              See all
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestRecipes.map((recipe, index) => (
              <div key={recipe.slug} className={`animate-fade-in-up stagger-${index + 1}`}>
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        </section>

        {/* Quick Meals Carousel */}
        {quickMeals.length > 0 && (
          <section className="mb-20 relative watercolor-bg rounded-3xl p-8 md:p-12">
            {/* Decorative background */}
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-orange-100 to-yellow-100 rounded-full blur-3xl opacity-30 -z-10"></div>

            <div className="mb-8">
              <div className="paint-stroke inline-block">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">⚡ Quick & Easy</h2>
              </div>
              <p className="text-lg text-gray-600 mt-3">Delicious meals ready in 20 minutes or less</p>
            </div>
            <RecipeCarousel recipes={quickMeals} />
          </section>
        )}

        {/* Plant-Based Section */}
        {veganRecipes.length > 0 && (
          <section className="mb-20 relative">
            {/* Decorative background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur-3xl opacity-20 -z-10"></div>

            <div className="mb-8">
              <div className="paint-stroke inline-block">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">🌱 Plant-Powered</h2>
              </div>
              <p className="text-lg text-gray-600 mt-3">Vibrant vegan recipes full of flavor</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {veganRecipes.slice(0, 3).map((recipe, index) => (
                <div key={recipe.slug} className={`animate-fade-in-up stagger-${index + 1}`}>
                  <RecipeCard recipe={recipe} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Categories Grid */}
        <section className="mb-20">
          <div className="mb-8">
            <div className="paint-stroke inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Browse by Category</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/recipes?meal=breakfast" className="group">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 h-40 flex items-center justify-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border-2 border-orange-200/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-center relative z-10">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">🍳</div>
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Breakfast</h3>
                </div>
              </div>
            </Link>
            <Link href="/recipes?meal=lunch" className="group">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 h-40 flex items-center justify-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border-2 border-green-200/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-center relative z-10">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">🥗</div>
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-green-600 transition-colors duration-300">Lunch</h3>
                </div>
              </div>
            </Link>
            <Link href="/recipes?meal=dinner" className="group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-40 flex items-center justify-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border-2 border-blue-200/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-center relative z-10">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">🍽️</div>
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Dinner</h3>
                </div>
              </div>
            </Link>
            <Link href="/recipes?meal=snack" className="group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8 h-40 flex items-center justify-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border-2 border-purple-200/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-center relative z-10">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">🍪</div>
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-purple-600 transition-colors duration-300">Snacks</h3>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="relative bg-gradient-to-r from-green-600 via-green-700 to-blue-600 rounded-3xl p-10 md:p-16 text-white text-center overflow-hidden shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="inline-block mb-4">
              <div className="text-6xl mb-4 animate-float">📧</div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Never Miss a Recipe</h2>
            <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-2xl mx-auto">Get weekly recipes and cooking tips delivered to your inbox</p>
            <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 font-medium shadow-lg focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300"
              />
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-6 opacity-80">Join 10,000+ food lovers getting fresh recipes weekly</p>
          </div>
        </section>
      </div>
    </>
  );
}