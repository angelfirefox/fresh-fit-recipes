import Link from "next/link";
import { Home, ChefHat, BookOpen, Info, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-lg transition-all duration-300"
      style={{
        background: 'linear-gradient(180deg, rgba(251,248,244,0.95), rgba(251,248,244,0.85))',
        borderBottom: '1px solid rgba(201,179,154,0.2)',
        boxShadow: '0 4px 12px rgba(26,26,23,0.04)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-6" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:24}}>
        <Link
          href="/"
          className="block mb-0 hover:opacity-95 transition-all duration-300 hover:scale-105"
          aria-label={siteConfig.name}
        >
          <Image
            src="/wordmark.svg"
            alt="Fresh Fit Recipes"
            width={320}
            height={77}
            className="wordmark w-64 h-auto md:w-80 lg:w-96"
            priority
          />
        </Link>

        <nav style={{display:'flex',gap:12,alignItems:'center'}}>
          <Link
            href="/"
            className="btn ink-shift"
            style={{
              transition: 'all 0.3s ease',
            }}
          >
            <Home size={16} /> Home
          </Link>
          <Link
            href="/recipes"
            className="btn ink-shift"
            style={{
              transition: 'all 0.3s ease',
            }}
          >
            <ChefHat size={16} /> Recipes
          </Link>
          <Link
            href="/blog"
            className="btn ink-shift"
            style={{
              transition: 'all 0.3s ease',
            }}
          >
            <BookOpen size={16} /> Blog
          </Link>
          <Link
            href="/about"
            className="btn ink-shift"
            style={{
              transition: 'all 0.3s ease',
            }}
          >
            <Info size={16} /> About
          </Link>
          <Link
            href="/contact"
            className="btn ink-shift"
            style={{
              transition: 'all 0.3s ease',
              background: 'linear-gradient(135deg, rgba(217,187,160,0.15), rgba(236,218,198,0.15))',
              fontWeight: '700',
            }}
          >
            <Mail size={16} /> Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}