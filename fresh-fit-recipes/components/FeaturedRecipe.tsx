import Link from "next/link";
import { Clock, Users } from "lucide-react";
import type { Recipe } from "@/types/recipe";
import Image from "next/image";

export default function FeaturedRecipe({ recipe }: { recipe: Recipe }) {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Background emoji as decorative element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0">
        <span className="text-[40rem]">{recipe.heroImage}</span>
      </div>

      <div className="relative z-20 max-w-screen-xl mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            ⭐ FEATURED RECIPE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {recipe.title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {recipe.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Clock size={24} />
              <div>
                <div className="text-sm text-gray-300">Total Time</div>
                <div className="font-bold">{recipe.totalTimeMinutes} min</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users size={24} />
              <div>
                <div className="text-sm text-gray-300">Servings</div>
                <div className="font-bold">{recipe.servings}</div>
              </div>
            </div>
            {recipe.nutrients?.calories && (
              <div>
                <div className="text-sm text-gray-300">Calories</div>
                <div className="font-bold">{recipe.nutrients.calories}</div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {recipe.dietTags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                {tag}
              </span>
            ))}
          </div>

          <Link 
            href={`/recipes/${recipe.slug}`}
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Get the Recipe →
          </Link>
        </div>
      </div>
    </div>
  );
}