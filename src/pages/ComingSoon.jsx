import React from 'react';

const ComingSoon = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 via-green-900 to-emerald-900 overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-green-400 rotate-45 animate-spin opacity-30" style={{ animationDuration: '10s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-green-500 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-12 h-12 border-2 border-emerald-400 animate-pulse opacity-30" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-green-300 rotate-12 animate-spin opacity-20" style={{ animationDuration: '15s' }} />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
        {/* Main heading with gradient text animation */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-yellow-400 to-green-500 bg-clip-text text-transparent animate-pulse">
            Suvman Foundation
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-300 animate-pulse" style={{ animationDelay: '0.3s' }}>
            Coming Soon
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-yellow-400 mx-auto rounded-full animate-pulse" />
        </div>

        {/* Subtitle with fade-in animation */}
        <p className="text-xl md:text-2xl text-gray-300 text-center mb-16 max-w-2xl leading-relaxed animate-pulse" style={{ animationDelay: '0.5s' }}>
          Empowering communities, transforming lives. Our mission to create positive change begins soon.
        </p>

        {/* Social links */}
        <div className="flex space-x-6">
          {/* Twitter */}
          <a href='https://x.com/SuvmanOrg'
            className="w-12 h-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-opacity-15 hover:text-green-200 transition-all duration-300 transform hover:scale-110 border border-white border-opacity-20 hover:border-green-400"
            style={{ animationDelay: '1s' }}
          >
            <svg className="w-5 h-5" fill="green" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          
          {/* Instagram */}
          <a href='https://www.instagram.com/suvman_foundation/'
            className="w-12 h-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-opacity-15 transition-all duration-300 transform hover:scale-110 border border-white border-opacity-20 hover:border-green-400"
            style={{ animationDelay: '1.1s' }}
          >
            <svg className="w-5 h-5" fill="green" viewBox="0 0 24 24">
              <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.48.204 4.955.388a5.42 5.42 0 00-1.962 1.277A5.42 5.42 0 00.716 3.627c-.184.525-.306 1.139-.34 2.086C.341 6.661.328 7.068.328 10.689s.013 4.028.048 4.976c.034.947.156 1.561.34 2.086a5.42 5.42 0 001.277 1.962 5.42 5.42 0 001.962 1.277c.525.184 1.139.306 2.086.34.948.034 1.355.048 4.976.048s4.028-.013 4.976-.048c.947-.034 1.561-.156 2.086-.34a5.42 5.42 0 001.962-1.277 5.42 5.42 0 001.277-1.962c.184-.525.306-1.139.34-2.086.034-.948.048-1.355.048-4.976s-.013-4.028-.048-4.976c-.034-.947-.156-1.561-.34-2.086a5.42 5.42 0 00-1.277-1.962A5.42 5.42 0 0018.905.388C18.38.204 17.766.082 16.819.048 15.871.013 15.464 0 11.843 0h.174zm-.145 2.171c3.573 0 4.002.015 5.408.051 1.304.06 2.014.274 2.486.456.624.244 1.07.535 1.538 1.003.468.468.759.914 1.003 1.538.182.472.396 1.182.456 2.486.036 1.406.051 1.835.051 5.408s-.015 4.002-.051 5.408c-.06 1.304-.274 2.014-.456 2.486-.244.624-.535 1.07-1.003 1.538-.468.468-.914.759-1.538 1.003-.472.182-1.182.396-2.486.456-1.406.036-1.835.051-5.408.051s-4.002-.015-5.408-.051c-1.304-.06-2.014-.274-2.486-.456a4.147 4.147 0 01-1.538-1.003 4.147 4.147 0 01-1.003-1.538c-.182-.472-.396-1.182-.456-2.486-.036-1.406-.051-1.835-.051-5.408s.015-4.002.051-5.408c.06-1.304.274-2.014.456-2.486.244-.624.535-1.07 1.003-1.538a4.147 4.147 0 011.538-1.003c.472-.182 1.182-.396 2.486-.456 1.406-.036 1.835-.051 5.408-.051z"/>
              <path d="M12.017 15.33a3.659 3.659 0 110-7.318 3.659 3.659 0 010 7.318zm0-9.489a5.83 5.83 0 100 11.66 5.83 5.83 0 000-11.66zm7.408-1.406a1.36 1.36 0 11-2.72 0 1.36 1.36 0 012.72 0z"/>
            </svg>
          </a>
          
          {/* Facebook */}
          <a href=''
            className="w-12 h-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-opacity-15 transition-all duration-300 transform hover:scale-110 border border-white border-opacity-20 hover:border-green-400"
            style={{ animationDelay: '1.2s' }}
          >
            <svg className="w-5 h-5" fill="green" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-8 text-center text-gray-400 text-sm">
          <p className="animate-pulse" style={{ animationDelay: '2s' }}>
            © 2025 Suvman Foundation. Building a better tomorrow, together.
          </p>
        </div>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 pointer-events-none" />
    </div>
  );
};

export default ComingSoon;