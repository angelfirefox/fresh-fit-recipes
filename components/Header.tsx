import Link from "next/link";
import { Home, ChefHat, BookOpen, Info, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50" style={{background:'transparent'}}>
      <div className="max-w-5xl mx-auto px-4 py-4" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:24}}>
        <Link href="/" className="block mb-0 hover:opacity-95 transition-opacity" aria-label={siteConfig.name}>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <Image src="/wordmark.svg" alt="wordmark" width={200} height={40} className="wordmark" />
            <div style={{display:'flex',flexDirection:'column'}}>
              <span className="eyebrow">{siteConfig.tagline}</span>
              <span className="flourish">{siteConfig.name}</span>
            </div>
          </div>
        </Link>

        <nav style={{display:'flex',gap:18,alignItems:'center'}}>
          <Link href="/" className="btn ink-shift"><Home size={16} /> Home</Link>
          <Link href="/recipes" className="btn ink-shift"><ChefHat size={16} /> Recipes</Link>
          <Link href="/blog" className="btn ink-shift"><BookOpen size={16} /> Blog</Link>
          <Link href="/about" className="btn ink-shift"><Info size={16} /> About</Link>
          <Link href="/contact" className="btn ink-shift"><Mail size={16} /> Contact</Link>
        </nav>
      </div>
    </header>
  );
}