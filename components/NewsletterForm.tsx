"use client";

export default function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
  };

  return (
    <form
      className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        placeholder="Enter your email"
        aria-label="Email address"
        className="flex-1 px-6 py-4 rounded-xl text-gray-900 font-medium shadow-lg focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300"
        required
      />
      <button
        type="submit"
        className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
      >
        Subscribe
      </button>
    </form>
  );
}
