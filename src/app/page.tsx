export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Main Hello World Message */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
            Hello World
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Welcome to your new Next.js application
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="space-y-6">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30">
            <p className="text-lg text-gray-700 leading-relaxed">
              This is a simple Hello World page built with{' '}
              <span className="font-semibold text-indigo-600">Next.js 15</span>,{' '}
              <span className="font-semibold text-indigo-600">React 19</span>, and{' '}
              <span className="font-semibold text-indigo-600">Tailwind CSS</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center border border-white/30">
              <div className="text-2xl font-bold text-indigo-600 mb-2">⚡</div>
              <h3 className="font-semibold text-gray-800 mb-1">Fast</h3>
              <p className="text-sm text-gray-600">Built with performance in mind</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center border border-white/30">
              <div className="text-2xl font-bold text-indigo-600 mb-2">🎨</div>
              <h3 className="font-semibold text-gray-800 mb-1">Beautiful</h3>
              <p className="text-sm text-gray-600">Modern design with Tailwind</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center border border-white/30">
              <div className="text-2xl font-bold text-indigo-600 mb-2">📱</div>
              <h3 className="font-semibold text-gray-800 mb-1">Responsive</h3>
              <p className="text-sm text-gray-600">Works on all devices</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8">
          <p className="text-sm text-gray-500">
            Ready to start building something amazing?
          </p>
        </div>
      </div>
    </main>
  )
}