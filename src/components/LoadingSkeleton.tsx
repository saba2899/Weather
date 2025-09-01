export function LoadingSkeleton() {
  return (
    <div className="w-full space-y-8 animate-pulse">
      {/* Current Weather Skeleton */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="h-20 w-48 bg-white/10 rounded-2xl mb-3"></div>
              <div className="h-6 w-32 bg-white/10 rounded-xl"></div>
            </div>
            <div className="h-24 w-24 bg-white/10 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="h-8 w-8 bg-white/10 rounded-full mx-auto mb-3"></div>
              <div className="h-4 w-16 bg-white/10 rounded mx-auto mb-2"></div>
              <div className="h-6 w-12 bg-white/10 rounded mx-auto"></div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="h-8 w-8 bg-white/10 rounded-full mx-auto mb-3"></div>
              <div className="h-4 w-16 bg-white/10 rounded mx-auto mb-2"></div>
              <div className="h-6 w-12 bg-white/10 rounded mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Forecast Skeleton */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="h-6 w-40 bg-white/10 rounded mx-auto mb-6"></div>
        <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className="text-center p-4 bg-white/5 rounded-2xl">
                <div className="h-4 w-12 bg-white/10 rounded mx-auto mb-3"></div>
                <div className="h-12 w-12 bg-white/10 rounded-full mx-auto mb-4"></div>
                <div className="space-y-1">
                  <div className="h-5 w-8 bg-white/10 rounded mx-auto"></div>
                  <div className="h-4 w-6 bg-white/10 rounded mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
