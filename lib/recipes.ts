import { Recipe, BlogPost } from "@/types/recipe";

export const recipes: Recipe[] = [
  {
    slug: "green-protein-smoothie",
    title: "Green Protein Smoothie",
    description: "Spinach, banana, almond butter, and protein for a 2‑minute breakfast.",
    date: "2025-10-20",
    heroImage: "🥤",
    servings: 1,
    prepTimeMinutes: 2,
    cookTimeMinutes: 0,
    totalTimeMinutes: 2,
    dietTags: ["vegetarian", "gluten-free"],
    mealType: ["breakfast", "snack"],
    difficulty: "easy",
    ingredients: [
      { quantity: "1", item: "ripe banana" },
      { quantity: "2 cups", item: "fresh spinach" },
      { quantity: "1 tbsp", item: "almond butter" },
      { quantity: "1 scoop", item: "vanilla whey or plant protein" },
      { quantity: "1 cup", item: "unsweetened almond milk" },
      { item: "ice cubes", notes: "as desired" }
    ],
    nutrients: { calories: 350, protein: 28, carbs: 38, fat: 11, fiber: 6 },
    steps: [
      "Add all ingredients to a blender.",
      "Blend until smooth. Adjust milk or ice to reach desired thickness."
    ],
    tips: ["Swap almond butter for peanut butter and add cinnamon."]
  },
  {
    slug: "kale-chickpea-bowl",
    title: "Kale & Chickpea Power Bowl",
    description: "Hearty bowl with quinoa, kale, roasted chickpeas, and tahini lemon dressing.",
    date: "2025-10-20",
    heroImage: "🥗",
    servings: 2,
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    totalTimeMinutes: 30,
    dietTags: ["vegan", "dairy-free"],
    mealType: ["lunch", "dinner"],
    difficulty: "easy",
    ingredients: [
      { quantity: "1 cup", item: "quinoa", notes: "rinsed" },
      { quantity: "1 can", item: "chickpeas", notes: "drained & rinsed" },
      { quantity: "3 cups", item: "chopped kale" },
      { quantity: "1 tbsp", item: "olive oil" },
      { quantity: "1 tsp", item: "smoked paprika" },
      { quantity: "2 tbsp", item: "tahini" },
      { quantity: "1", item: "lemon", notes: "juiced" },
      { quantity: "1 tbsp", item: "maple syrup" },
      { item: "salt & pepper" }
    ],
    steps: [
      "Cook quinoa per package.",
      "Toss chickpeas with oil, salt, paprika; roast 425°F for 15–20 min.",
      "Massage kale with a pinch of salt.",
      "Whisk tahini, lemon juice, maple, warm water.",
      "Assemble bowls: quinoa, kale, chickpeas; drizzle dressing."
    ]
  },
  {
    slug: "sheet-pan-lemon-salmon",
    title: "Sheet‑Pan Lemon Salmon & Veggies",
    description: "One pan, 25 minutes: salmon with broccoli and potatoes.",
    date: "2025-10-20",
    heroImage: "🐟",
    servings: 4,
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    totalTimeMinutes: 25,
    dietTags: ["gluten-free"],
    mealType: ["dinner"],
    difficulty: "easy",
    ingredients: [
      { quantity: "4", unit: "fillets", item: "salmon" },
      { quantity: "2 cups", item: "broccoli florets" },
      { quantity: "2 cups", item: "baby potatoes", notes: "halved" },
      { quantity: "2 tbsp", item: "olive oil" },
      { quantity: "1", item: "lemon", notes: "zested & sliced" },
      { item: "salt & pepper" },
      { item: "garlic powder" }
    ],
    steps: [
      "Heat oven to 425°F (220°C). Toss potatoes and broccoli with oil, salt, pepper, garlic.",
      "Roast potatoes 10 min, add broccoli + salmon on top, lemon zest/slices.",
      "Roast 12–15 min until salmon flakes."
    ],
    tips: ["For extra protein, add chickpeas to the pan."]
  },
  {
    slug: "greek-yogurt-parfait",
    title: "High‑Protein Greek Yogurt Parfait",
    description: "5‑minute parfait with berries, nuts, and a touch of honey.",
    date: "2025-10-20",
    heroImage: "🍨",
    servings: 1,
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    totalTimeMinutes: 5,
    dietTags: ["vegetarian", "gluten-free"],
    mealType: ["breakfast", "snack"],
    difficulty: "easy",
    ingredients: [
      { quantity: "3/4 cup", item: "plain Greek yogurt (2% or 0%)" },
      { quantity: "1/2 cup", item: "mixed berries" },
      { quantity: "1 tbsp", item: "chopped nuts" },
      { quantity: "1 tsp", item: "honey", notes: "optional" }
    ],
    steps: [
      "Layer yogurt, berries, nuts. Drizzle honey.",
      "For extra protein, stir in vanilla protein powder and a splash of milk."
    ]
  },
  {
    slug: "spicy-tofu-stirfry",
    title: "Spicy Tofu Veggie Stir‑Fry",
    description: "Crispy tofu with colorful veggies in a chili‑garlic sauce.",
    date: "2025-10-20",
    heroImage: "🍜",
    servings: 3,
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    totalTimeMinutes: 25,
    dietTags: ["vegan", "dairy-free"],
    mealType: ["dinner"],
    difficulty: "medium",
    ingredients: [
      { quantity: "14 oz", item: "extra‑firm tofu", notes: "pressed & cubed" },
      { quantity: "2 cups", item: "mixed vegetables", notes: "bell pepper, snap peas, carrot" },
      { quantity: "1 tbsp", item: "cornstarch" },
      { quantity: "2 tbsp", item: "soy sauce or tamari" },
      { quantity: "1 tbsp", item: "chili‑garlic sauce" },
      { quantity: "1 tbsp", item: "rice vinegar" },
      { quantity: "1 tsp", item: "sesame oil" },
      { item: "neutral oil, salt, pepper" }
    ],
    steps: [
      "Toss tofu with cornstarch, salt; pan‑sear until crisp.",
      "Stir‑fry veggies; add sauces and tofu. Serve with brown rice."
    ]
  },
  {
    slug: "overnight-oats-3-ways",
    title: "Overnight Oats, 3 Ways",
    description: "Base recipe plus chocolate‑banana and blueberry‑lemon variations.",
    date: "2025-10-20",
    heroImage: "🥣",
    servings: 1,
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    totalTimeMinutes: 5,
    dietTags: ["vegetarian"],
    mealType: ["breakfast"],
    difficulty: "easy",
    ingredients: [
      { quantity: "1/2 cup", item: "rolled oats" },
      { quantity: "1/2 cup", item: "milk of choice" },
      { quantity: "1/4 cup", item: "Greek yogurt" },
      { quantity: "1 tsp", item: "chia seeds" },
      { item: "pinch of salt" }
    ],
    steps: [
      "Mix base in jar; refrigerate overnight.",
      "Add variation ingredients in the morning."
    ],
    tips: ["Variation 1: add banana + cocoa", "Variation 2: add blueberries + lemon zest"]
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "meal-prep-101",
    title: "Meal Prep 101: How to Save Time & Eat Better",
    description: "Simple framework to prep 3–4 healthy meals for the week.",
    date: "2025-10-20",
    heroImage: "📦",
    tags: ["meal-prep", "productivity"],
    excerpt: "Cook 3 proteins, 2 grains, 1 tray of veggies on Sunday. Mix & match throughout the week for easy, healthy meals."
  },
  {
    slug: "nutrition-labels-decoded",
    title: "Nutrition Labels, Decoded in 5 Minutes",
    description: "Calories vs. macros vs. serving size—what actually matters.",
    date: "2025-10-20",
    heroImage: "🏷️",
    tags: ["nutrition", "basics"],
    excerpt: "Focus on protein and fiber, watch added sugar and sodium. Learn to read labels like a pro."
  }
];

export function getAllRecipes(): Recipe[] {
  return recipes;
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find(recipe => recipe.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}