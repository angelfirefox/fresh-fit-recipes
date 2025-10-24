import Link from "next/link";
import { Home, ChefHat, BookOpen, Info, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm transition-all duration-300"
      style={{
        background: 'linear-gradient(180deg, rgba(251,248,244,0.92), rgba(251,248,244,0.88))',
        borderBottom: '0.5px solid rgba(201,179,154,0.15)',
        boxShadow: '0 2px 8px rgba(26,26,23,0.02)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-2" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:32}}>
        <Link
          href="/"
          className="flex items-center gap-4 hover:opacity-95 transition-all duration-300 group"
          aria-label={siteConfig.name}
        >
          <Image
            src="/images/recipes/foxy logo.png"
            alt="Foxy Recipe Box"
            width={200}
            height={200}
            className="logo w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-normal tracking-wide text-gray-800" 
                style={{
                  fontFamily: 'var(--font-caveat), "Segoe Print", "Bradley Hand", cursive',
                  color: '#2d2d2d',
                  letterSpacing: '0.02em',
                  transform: 'rotate(-1deg)',
                }}>
              Foxy's Recipe Box
            </h1>
            <p className="text-xs md:text-sm text-gray-600 font-medium tracking-wide mt-0.5"
               style={{ 
                 fontFamily: 'var(--font-kalam), "Segoe Print", "Bradley Hand", cursive',
                 transform: 'rotate(-1deg)',
                 marginLeft: '2px'
               }}>
              Delicious Recipes, Simple Ingredients
            </p>
          </div>
        </Link>

        <nav style={{display:'flex',gap:12,alignItems:'center'}}>
          <Link
            href="/"
            className="nav-btn flex items-center gap-2 px-4 py-2 rounded-xl text-[0.95rem] font-medium text-[#4a4a4a] transition-all duration-200 hover:bg-[#D9BBA014] hover:-translate-y-px"
          >
            <Home size={18} /> Home
          </Link>
          <Link
            href="/recipes"
            className="nav-btn flex items-center gap-2 px-4 py-2 rounded-xl text-[0.95rem] font-medium text-[#4a4a4a] transition-all duration-200 hover:bg-[#D9BBA014] hover:-translate-y-px"
          >
            <ChefHat size={18} /> Recipes
          </Link>
          <Link
            href="/blog"
            className="nav-btn flex items-center gap-2 px-4 py-2 rounded-xl text-[0.95rem] font-medium text-[#4a4a4a] transition-all duration-200 hover:bg-[#D9BBA014] hover:-translate-y-px"
          >
            <BookOpen size={18} /> Blog
          </Link>
          <Link
            href="/about"
            className="nav-btn flex items-center gap-2 px-4 py-2 rounded-xl text-[0.95rem] font-medium text-[#4a4a4a] transition-all duration-200 hover:bg-[#D9BBA014] hover:-translate-y-px"
          >
            <Info size={18} /> About
          </Link>
          <Link
            href="/contact"
            className="nav-btn highlight flex items-center gap-2 px-5 py-2 rounded-xl text-[0.95rem] font-semibold text-[#3d3d3d] transition-all duration-200 bg-linear-to-br from-[#D9BBA01F] to-[#ECDAC61F] border border-[#D9BBA026] hover:from-[#D9BBA02E] hover:to-[#ECDAC62E] hover:-translate-y-px"
          >
            <Mail size={18} /> Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}