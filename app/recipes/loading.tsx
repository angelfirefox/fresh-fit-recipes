export default function Loading() {
  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <div className="w-full h-64 bg-linear-to-r from-paper to-warm/10 rounded-xl mb-8 animate-pulse" />
      
      <div className="max-w-4xl mx-auto">
        <div className="w-3/4 h-8 bg-linear-to-r from-paper to-warm/10 rounded-full mb-4 animate-pulse" />
        <div className="w-1/2 h-6 bg-linear-to-r from-paper to-warm/10 rounded-full mb-8 animate-pulse" />
        
        <div className="grid gap-4 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-4 bg-linear-to-r from-paper to-warm/10 rounded-full animate-pulse" 
                 style={{ width: `${Math.random() * 20 + 80}%` }} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 bg-linear-to-r from-paper to-warm/10 rounded-full animate-pulse" 
                   style={{ width: `${Math.random() * 30 + 70}%` }} />
            ))}
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 bg-linear-to-r from-paper to-warm/10 rounded-full animate-pulse" 
                   style={{ width: `${Math.random() * 30 + 70}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}