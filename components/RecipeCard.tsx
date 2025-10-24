import Link from "next/link";
import Image from "next/image";
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
        className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 cursor-pointer overflow-hidden border border-gray-200 h-full group relative"
        style={{
          boxShadow: '0 4px 6px rgba(0,0,0,0.05), 0 10px 15px rgba(217,187,160,0.1)',
        }}
        role="article"
      >
        <div
          className="aspect-4/3 bg-linear-to-br from-green-50 to-blue-50 flex items-center justify-center overflow-hidden relative"
          aria-hidden="true"
        >
          {recipe.imagePath ? (
            <div className="w-full h-full relative group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700 ease-out">
              <Image
                src={recipe.imagePath}
                alt={recipe.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                priority={false}
              />
              {/* Artistic gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ) : (
            <span className="text-7xl group-hover:scale-110 transition-transform duration-500 ease-out">
              {recipe.heroImage}
            </span>
          )}

          {/* Quick info overlay with enhanced styling */}
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-gray-700 flex items-center gap-1 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:bg-white group-hover:scale-105">
            <Clock size={12} className="text-green-600" /> {recipe.totalTimeMinutes}m
          </div>

          {/* Artistic corner accent */}
          <div className="absolute top-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-white/50 rounded-tl-lg" />
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="font-bold text-xl mb-2 line-clamp-2 group-hover:text-green-600 transition-colors duration-300 ease-out">
            {recipe.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-gray-900 transition-colors duration-300">{recipe.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Diet tags">
            {recipe.dietTags.slice(0, 2).map((tag, index) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-linear-to-br from-green-50 to-green-100 text-green-700 text-xs rounded-full font-semibold shadow-sm group-hover:shadow-md transition-all duration-300 border border-green-200"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
                role="listitem"
              >
                {tag}
              </span>
            ))}
            {recipe.dietTags.length > 2 && (
              <span
                className="px-3 py-1.5 bg-linear-to-br from-gray-50 to-gray-100 text-gray-600 text-xs rounded-full font-semibold shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-200"
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