import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About {siteConfig.name}</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            Welcome to {siteConfig.name}! We believe that healthy eating should be simple, 
            delicious, and accessible to everyone.
          </p>
          
          <h2 className="text-xl font-bold mb-3 mt-6">Our Mission</h2>
          <p className="mb-4">
            We create recipes that use everyday ingredients, require minimal prep time, and 
            deliver maximum flavor and nutrition. Every recipe is tested and designed to fit 
            into your busy lifestyle.
          </p>
          
          <h2 className="text-xl font-bold mb-3 mt-6">Meet the Chef</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="font-semibold mb-2">{siteConfig.author}</p>
            <p className="text-gray-600">
              Creator of {siteConfig.name}, passionate about making healthy cooking easy 
              and enjoyable for everyone.
            </p>
          </div>
          
          <h2 className="text-xl font-bold mb-3 mt-6">What You'll Find Here</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Quick and healthy recipes for every meal</li>
            <li>Detailed nutrition information</li>
            <li>Diet-friendly options (vegan, vegetarian, gluten-free, and more)</li>
            <li>Meal prep tips and cooking guides</li>
            <li>Step-by-step instructions that actually work</li>
          </ul>
        </div>
      </div>
    </div>
  );
}