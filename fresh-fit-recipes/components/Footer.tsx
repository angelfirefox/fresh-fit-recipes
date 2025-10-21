import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-screen-lg mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-bold mb-2">{siteConfig.name}</h3>
            <p className="text-sm text-gray-600">{siteConfig.tagline}</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <div className="text-sm space-y-1">
              <div>
                <Link href="/recipes" className="text-gray-600 hover:text-green-700">
                  All Recipes
                </Link>
              </div>
              <div>
                <Link href="/blog" className="text-gray-600 hover:text-green-700">
                  Blog
                </Link>
              </div>
              <div>
                <Link href="/about" className="text-gray-600 hover:text-green-700">
                  About
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2">Connect</h3>
            <p className="text-sm text-gray-600">{siteConfig.email}</p>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 pt-6 border-t border-gray-200">
          © 2025 {siteConfig.author}. Licensed under {siteConfig.license}
        </div>
      </div>
    </footer>
  );
}