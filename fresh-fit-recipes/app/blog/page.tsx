import { getAllBlogPosts } from "@/lib/recipes";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      
      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.slug} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="text-4xl">{post.heroImage}</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-500">{post.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}