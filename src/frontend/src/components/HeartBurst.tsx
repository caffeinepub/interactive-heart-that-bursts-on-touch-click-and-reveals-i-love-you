import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface HeartBurstProps {
  onComplete: () => void;
}

interface Particle {
  id: number;
  angle: number;
  distance: number;
  scale: number;
  delay: number;
}

export default function HeartBurst({ onComplete }: HeartBurstProps) {
  const [isBursting, setIsBursting] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles for burst effect
    const particleCount = 12;
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        angle: (360 / particleCount) * i,
        distance: 150 + Math.random() * 50,
        scale: 0.4 + Math.random() * 0.6,
        delay: Math.random() * 0.1,
      });
    }
    
    setParticles(newParticles);
  }, []);

  const handleActivate = () => {
    if (isBursting) return;
    
    setIsBursting(true);
    
    // Complete after animation duration
    setTimeout(() => {
      onComplete();
    }, 1200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleActivate();
    }
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Main Heart */}
      <button
        onClick={handleActivate}
        onKeyDown={handleKeyDown}
        disabled={isBursting}
        aria-label="Tap the heart to reveal a message"
        className={`
          relative z-10 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-romantic-heart/50 rounded-full
          transition-transform duration-200 hover:scale-110 active:scale-95
          disabled:cursor-default disabled:hover:scale-100
          ${isBursting ? 'animate-heart-burst' : 'animate-heart-beat'}
        `}
      >
        <Heart
          className={`
            w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56
            fill-romantic-heart stroke-romantic-heart-dark stroke-2
            drop-shadow-2xl
            ${isBursting ? 'opacity-0' : 'opacity-100'}
            transition-opacity duration-300
          `}
        />
      </button>

      {/* Burst Particles */}
      {isBursting && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                animation: `particle-burst 0.8s ease-out forwards`,
                animationDelay: `${particle.delay}s`,
                '--particle-angle': `${particle.angle}deg`,
                '--particle-distance': `${particle.distance}px`,
                '--particle-scale': particle.scale,
              } as React.CSSProperties}
            >
              <Heart
                className="w-8 h-8 sm:w-10 sm:h-10 fill-romantic-heart/80 stroke-romantic-heart-dark"
                style={{
                  transform: `scale(${particle.scale})`,
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Ripple effect */}
      {isBursting && (
        <>
          <div className="absolute inset-0 animate-ripple-1 rounded-full border-4 border-romantic-heart/40" />
          <div className="absolute inset-0 animate-ripple-2 rounded-full border-4 border-romantic-heart/30" />
          <div className="absolute inset-0 animate-ripple-3 rounded-full border-4 border-romantic-heart/20" />
        </>
      )}
    </div>
  );
}
