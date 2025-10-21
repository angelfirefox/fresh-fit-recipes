import { siteConfig } from "@/config/site";

export default function ContactPage() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200 max-w-2xl">
        <p className="text-gray-600 mb-6">
          Have a question, recipe request, or feedback? We'd love to hear from you!
        </p>
        
        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-2">Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label className="block font-semibold mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block font-semibold mb-2">Message</label>
            <textarea 
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Your message..."
            />
          </div>
          
          <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 font-semibold transition-colors">
            Send Message
          </button>
          
          <div className="text-center text-sm text-gray-500 mt-4">
            Or email us directly at{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-green-600 hover:text-green-700">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}