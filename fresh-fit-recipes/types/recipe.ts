export interface Recipe {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  heroImage: string;
  servings: number;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  totalTimeMinutes: number;
  dietTags: string[];
  mealType: string[];
  difficulty: "easy" | "medium" | "hard";
  ingredients: {
    quantity?: string;
    unit?: string;
    item: string;
    notes?: string;
  }[];
  nutrients?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
    fiber?: number;
  };
  steps: string[];
  tips?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  heroImage: string;
  tags: string[];
  excerpt: string;
}