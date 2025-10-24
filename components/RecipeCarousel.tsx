"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Clock, Users } from "lucide-react";
import type { Recipe } from "@/types/recipe";

export default function RecipeCarousel({ recipes }: { recipes: Recipe[] }) {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 3;

  const canScrollLeft = startIndex > 0;
  const canScrollRight = startIndex < recipes.length - cardsToShow;

  const scrollLeft = () => {
    if (canScrollLeft) {
      setStartIndex(startIndex - 1);
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setStartIndex(startIndex + 1);
    }
  };

  const visibleRecipes = recipes.slice(startIndex, startIndex + cardsToShow);

  return (
    <div className="relative">
      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} className="text-gray-700" />
        </button>
      )}

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {visibleRecipes.map((recipe) => (
          <Link key={recipe.slug} href={`/recipes/${recipe.slug}`}>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 overflow-hidden h-full border border-gray-200 group">
              <div className="aspect-4/3 bg-linear-to-br from-green-50 to-blue-50 flex items-center justify-center overflow-hidden relative">
                {recipe.imagePath ? (
                  <div className="w-full h-full relative group-hover:scale-110 transition-transform duration-700 ease-out">
                    <Image
                      src={recipe.imagePath}
                      alt={recipe.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ) : (
                  <span className="text-8xl group-hover:scale-110 transition-transform duration-500 ease-out">{recipe.heroImage}</span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2 line-clamp-2 group-hover:text-green-600 transition-colors duration-300">{recipe.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={16} className="text-green-600" /> {recipe.totalTimeMinutes}m
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={16} className="text-blue-600" /> {recipe.servings}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} className="text-gray-700" />
        </button>
      )}
    </div>
  );
}