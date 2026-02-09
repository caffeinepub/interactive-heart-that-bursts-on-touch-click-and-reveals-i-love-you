import { useState } from 'react';
import HeartBurst from './components/HeartBurst';

export default function App() {
  const [showMessage, setShowMessage] = useState(false);

  const handleBurstComplete = () => {
    setShowMessage(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-romantic-dawn via-romantic-blush to-romantic-dusk animate-gradient-shift" />
      
      {/* Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4">
        {!showMessage ? (
          <HeartBurst onComplete={handleBurstComplete} />
        ) : (
          <div className="animate-fade-in-scale max-w-2xl">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-romantic-deep text-center tracking-tight">
              I love you
            </h1>
            <p className="text-romantic-medium text-center mt-8 text-base sm:text-lg md:text-xl font-light tracking-wide whitespace-pre-line leading-relaxed">
              {`I know I'm not perfect , i know that I make mistakes in the worst way possible, thank you for tolerating me and staying beside me always. 
 I will make sure that you will never be sad because of me 💓 

Love you di , muah 💋, to my wifey`}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 text-center text-sm text-romantic-medium/60 z-20">
        <p>
          © {new Date().getFullYear()} · Built with{' '}
          <span className="text-romantic-heart inline-block animate-pulse-subtle">❤️</span> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'heart-burst-app'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-romantic-deep transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
