'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Gamepad2, Monitor, Zap, Users, Trophy } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

type BackgroundPattern = 'dots' | 'grid' | 'gradient';

const DEFAULT_HERO = {
  badge: 'Join 50,000+ Gamers Worldwide',
  title: 'Ultimate Gaming',
  titleHighlight: 'Experience',
  subtitle:
    'Discover the latest PC and console games, connect with fellow gamers, and elevate your gaming journey with GameStation.',
  primaryCTA: 'Start Gaming',
  secondaryCTA: 'Browse Games',
  primaryCTAHref: '/games',
  secondaryCTAHref: '/browse',
  feature1Icon: 'gamepad2',
  feature1Text: 'Console Gaming',
  feature2Icon: 'monitor',
  feature2Text: 'PC Gaming',
  feature3Icon: 'users',
  feature3Text: 'Gaming Community',
  trustedByText: 'Trusted by gaming enthusiasts worldwide',
  showTrustedLogos: true,
  backgroundPattern: 'gradient' as BackgroundPattern,
  showAnimatedBadge: true,
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'gamepad2':
        return Gamepad2;
      case 'monitor':
        return Monitor;
      case 'users':
        return Users;
      case 'trophy':
        return Trophy;
      case 'zap':
        return Zap;
      default:
        return Gamepad2;
    }
  };

  const Feature1Icon = getIcon(config.feature1Icon);
  const Feature2Icon = getIcon(config.feature2Icon);
  const Feature3Icon = getIcon(config.feature3Icon);

  return (
    <section data-editable="hero" className="relative min-h-screen overflow-hidden bg-background">
      {/* Dynamic Gaming Background */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.15) 0%, rgba(59, 130, 246, 0.1) 25%, rgba(6, 182, 212, 0.05) 50%, transparent 70%)`,
          }}
        />

        {/* Floating gaming elements */}
        <div className="absolute inset-0">
          {/* Gaming controller icons floating */}
          <div className="absolute top-20 left-10 animate-bounce animation-delay-1000">
            <Gamepad2 className="h-8 w-8 text-purple-400/30" />
          </div>
          <div className="absolute top-40 right-20 animate-bounce animation-delay-2000">
            <Monitor className="h-10 w-10 text-blue-400/30" />
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce animation-delay-3000">
            <Trophy className="h-6 w-6 text-cyan-400/30" />
          </div>

          {/* Animated particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--primary)_1px,transparent_1px)] [background-size:100px_100px] opacity-[0.02]" />
      </div>

      {/* Floating gradient orbs with gaming colors */}
      <div
        className="absolute h-96 w-96 rounded-full bg-purple-500/10 blur-3xl transition-all duration-1000"
        style={{
          left: `${20 + mousePosition.x * 0.1}%`,
          top: `${20 + mousePosition.y * 0.1}%`,
        }}
      />
      <div
        className="absolute h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-1000"
        style={{
          right: `${20 + (100 - mousePosition.x) * 0.1}%`,
          bottom: `${20 + (100 - mousePosition.y) * 0.1}%`,
        }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col items-center justify-center py-20 text-center">
          {/* Animated Gaming Badge */}
          {config.showAnimatedBadge && (
            <div className="mb-8 inline-flex animate-fade-in">
              <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-background/10 backdrop-blur-md px-6 py-3 text-sm shadow-lg shadow-primary/5">
                <Gamepad2 className="h-4 w-4 text-primary animate-pulse" />
                <span data-editable="badge" className="text-foreground/90 font-medium">
                  {config.badge}
                </span>
              </div>
            </div>
          )}

          {/* Main Gaming Title */}
          <h1 className="max-w-5xl text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl animate-fade-in animation-delay-100">
            <span data-editable="title" className="text-foreground">
              {config.title}
            </span>
            <span className="relative ml-4 block sm:inline">
              <span
                data-editable="titleHighlight"
                className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse"
              >
                {config.titleHighlight}
              </span>
              <div className="absolute -right-4 -top-4 h-8 w-8">
                <div
                  className="h-full w-full rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 animate-spin opacity-60"
                  style={{
                    clipPath:
                      'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                  }}
                />
              </div>
            </span>
          </h1>

          {/* Gaming Subtitle */}
          <p
            data-editable="subtitle"
            className="mt-8 max-w-3xl text-xl leading-relaxed text-foreground/80 sm:text-2xl animate-fade-in animation-delay-200"
          >
            {config.subtitle}
          </p>

          {/* Gaming Feature Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 animate-fade-in animation-delay-300">
            <div className="flex items-center gap-3 rounded-full border border-purple-400/20 bg-purple-500/5 backdrop-blur-sm px-6 py-3 text-base shadow-lg">
              <Feature1Icon className="h-5 w-5 text-purple-400" />
              <span data-editable="feature1Text" className="text-foreground/90 font-medium">
                {config.feature1Text}
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/5 backdrop-blur-sm px-6 py-3 text-base shadow-lg">
              <Feature2Icon className="h-5 w-5 text-blue-400" />
              <span data-editable="feature2Text" className="text-foreground/90 font-medium">
                {config.feature2Text}
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/5 backdrop-blur-sm px-6 py-3 text-base shadow-lg">
              <Feature3Icon className="h-5 w-5 text-cyan-400" />
              <span data-editable="feature3Text" className="text-foreground/90 font-medium">
                {config.feature3Text}
              </span>
            </div>
          </div>

          {/* Gaming CTA Buttons */}
          <div className="mt-12 flex flex-col gap-6 sm:flex-row animate-fade-in animation-delay-400">
            <Button
              size="lg"
              className="group px-10 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 border-0"
              onClick={() => navigate(config.primaryCTAHref)}
              data-editable-href="primaryCTAHref"
              data-href={config.primaryCTAHref}
            >
              <span data-editable="primaryCTA">{config.primaryCTA}</span>
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-400/30 backdrop-blur-md text-lg font-semibold px-10 py-4 hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300 text-foreground"
              onClick={() => navigate(config.secondaryCTAHref)}
              data-editable-href="secondaryCTAHref"
              data-href={config.secondaryCTAHref}
            >
              <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
            </Button>
          </div>

          {/* Gaming Community Section */}
          {config.showTrustedLogos && (
            <div className="mt-24 w-full max-w-5xl animate-fade-in animation-delay-500">
              <p
                data-editable="trustedByText"
                className="mb-8 text-base text-foreground/70 font-medium"
              >
                {config.trustedByText}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
                {/* Gaming platform placeholders */}
                {['Steam', 'Epic', 'Xbox', 'PlayStation', 'Nintendo'].map((platform, i) => (
                  <div
                    key={i}
                    className="h-12 w-32 rounded-lg bg-gradient-to-r from-foreground/5 to-foreground/10 backdrop-blur-sm flex items-center justify-center"
                  >
                    <span className="text-foreground/40 font-semibold text-sm">{platform}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced CSS animations for gaming theme */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          40%,
          43% {
            transform: translate3d(0, -15px, 0);
          }
          70% {
            transform: translate3d(0, -7px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce {
          animation: bounce 3s infinite;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
}
