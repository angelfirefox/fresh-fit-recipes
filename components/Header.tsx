import Link from "next/link";
import { Home, ChefHat, BookOpen, Info, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-screen-lg mx-auto px-4 py-4">
        <Link href="/" className="block mb-4 hover:opacity-80 transition-opacity">
          <h1 className="text-2xl font-bold text-green-700">{siteConfig.name}</h1>
          <p className="text-sm text-gray-600">{siteConfig.tagline}</p>
        </Link>
        
        <nav className="flex gap-6 text-sm">
          <Link href="/" className="flex items-center gap-1 hover:text-green-700 transition-colors">
            <Home size={16} /> Home
          </Link>
          <Link href="/recipes" className="flex items-center gap-1 hover:text-green-700 transition-colors">
            <ChefHat size={16} /> Recipes
          </Link>
          <Link href="/blog" className="flex items-center gap-1 hover:text-green-700 transition-colors">
            <BookOpen size={16} /> Blog
          </Link>
          <Link href="/about" className="flex items-center gap-1 hover:text-green-700 transition-colors">
            <Info size={16} /> About
          </Link>
          <Link href="/contact" className="flex items-center gap-1 hover:text-green-700 transition-colors">
            <Mail size={16} /> Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}