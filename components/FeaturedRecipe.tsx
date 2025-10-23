import Link from "next/link";
import Image from "next/image";
import { Clock, Users } from "lucide-react";
import type { Recipe } from "@/types/recipe";

export default function FeaturedRecipe({ recipe }: { recipe: Recipe }) {
  return (
    <div className="relative bg-linear-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {recipe.imagePath ? (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={recipe.imagePath}
              alt={recipe.title}
              fill
              style={{objectFit:'cover'}}
              priority
              className="animate-fade-in"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60 z-10"></div>
          {/* Artistic overlay accents */}
          <div className="absolute inset-0 z-10 opacity-30">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-orange-500/20 to-transparent blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-500/20 to-transparent blur-3xl"></div>
          </div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0">
            <span className="text-[40rem]">{recipe.heroImage}</span>
          </div>
        </>
      )}

      <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <div
            className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-lg animate-float"
            style={{
              boxShadow: '0 10px 30px rgba(16,185,129,0.3), 0 0 20px rgba(16,185,129,0.2)',
            }}
          >
            ⭐ FEATURED RECIPE
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up drop-shadow-2xl">
            {recipe.title}
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {recipe.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 shadow-lg">
              <Clock size={24} className="text-green-400" />
              <div>
                <div className="text-sm text-gray-300">Total Time</div>
                <div className="font-bold text-lg">{recipe.totalTimeMinutes} min</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 shadow-lg">
              <Users size={24} className="text-blue-400" />
              <div>
                <div className="text-sm text-gray-300">Servings</div>
                <div className="font-bold text-lg">{recipe.servings}</div>
              </div>
            </div>
            {recipe.nutrients?.calories && (
              <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 shadow-lg">
                <div className="text-sm text-gray-300">Calories</div>
                <div className="font-bold text-lg text-orange-400">{recipe.nutrients.calories}</div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            {recipe.dietTags.map((tag, index) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30 shadow-md hover:bg-white/30 transition-all duration-300"
                style={{animationDelay: `${0.5 + index * 0.1}s`}}
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/recipes/${recipe.slug}`}
            className="inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-green-500/50 hover:scale-105 animate-fade-in-up"
            style={{
              animationDelay: '0.6s',
              boxShadow: '0 20px 50px rgba(16,185,129,0.4)',
            }}
          >
            Get the Recipe →
          </Link>
        </div>
      </div>
    </div>
  );
}