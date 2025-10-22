export default function Loading() {
  return (
    <div className="container mx-auto animate-fade-in">
      <div className="card-grid">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-sepia h-[420px] overflow-hidden">
            <div className="aspect-4/3 bg-linear-to-r from-paper to-warm/10 animate-pulse" />
            <div className="p-5">
              <div className="w-3/4 h-6 bg-linear-to-r from-paper to-warm/10 rounded-full mb-3 animate-pulse" />
              <div className="w-full h-4 bg-linear-to-r from-paper to-warm/10 rounded-full mb-2 animate-pulse" />
              <div className="w-2/3 h-4 bg-linear-to-r from-paper to-warm/10 rounded-full mb-4 animate-pulse" />
              
              <div className="flex gap-2 mb-4">
                {[1, 2].map((tag) => (
                  <div key={tag} className="w-16 h-6 bg-linear-to-r from-paper to-warm/10 rounded-full animate-pulse" />
                ))}
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-sepia">
                <div className="w-24 h-4 bg-linear-to-r from-paper to-warm/10 rounded-full animate-pulse" />
                <div className="w-16 h-4 bg-linear-to-r from-paper to-warm/10 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}