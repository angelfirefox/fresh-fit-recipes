import Link from "next/link";
import { Clock, Users, Star } from "lucide-react";
import type { Recipe } from "@/types/recipe";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link 
      href={`/recipes/${recipe.slug}`} 
      className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 rounded-xl"
      aria-label={`View recipe: ${recipe.title}`}
    >
      <div 
        className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden border border-gray-200 h-full group"
        role="article"
      >
        <div 
          className="aspect-4/3 bg-linear-to-br from-green-50 to-blue-50 flex items-center justify-center overflow-hidden relative"
          aria-hidden="true"
        >
          <span className="text-7xl group-hover:scale-110 transition-transform duration-500 ease-out">{recipe.heroImage}</span>
          
          {/* Quick info overlay */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 flex items-center gap-1 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:bg-white">
            <Clock size={12} className="text-green-600" /> {recipe.totalTimeMinutes}m
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="font-bold text-xl mb-2 line-clamp-2 group-hover:text-green-600 transition-colors duration-300 ease-out">
            {recipe.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-gray-900 transition-colors duration-300">{recipe.description}</p>
          
          <div className="flex flex-wrap gap-1 mb-4" role="list" aria-label="Diet tags">
            {recipe.dietTags.slice(0, 2).map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium"
                role="listitem"
              >
                {tag}
              </span>
            ))}
            {recipe.dietTags.length > 2 && (
              <span 
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium"
                role="listitem"
                aria-label={`and ${recipe.dietTags.length - 2} more diet tags`}
              >
                +{recipe.dietTags.length - 2}
              </span>
            )}
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100" role="list" aria-label="Recipe details">
            <span className="flex items-center gap-1" role="listitem">
              <Users size={14} aria-hidden="true" /> 
              <span>{recipe.servings} servings</span>
            </span>
            {recipe.nutrients?.calories && (
              <span className="font-semibold text-green-600" role="listitem" aria-label={`${recipe.nutrients.calories} calories per serving`}>
                {recipe.nutrients.calories} cal
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}