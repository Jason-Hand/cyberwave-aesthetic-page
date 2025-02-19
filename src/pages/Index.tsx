
import { useEffect, useState } from 'react';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-cyber-black/80 backdrop-blur-md py-4' : 'py-6'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-6 md:space-x-12">
            <a href="#" className="nav-link">Home</a>
            <a href="#music" className="nav-link">Music</a>
            <a href="#lore" className="nav-link">Lore</a>
            <a href="#join" className="nav-link">Join Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative pt-20 md:pt-32">
        <div className="text-center space-y-4 md:space-y-8">
          <h1 className="relative">
            <span className="glitch-text" data-text="THE TRANSMISSION">THE TRANSMISSION</span>
            <br />
            <span className="glitch-text mt-4 inline-block" data-text="BEGINS">BEGINS</span>
          </h1>
        </div>

        <div className="relative w-full max-w-[200px] md:max-w-md aspect-square my-8 md:my-12">
          <img
            src="/lovable-uploads/4e25bcc6-1bbe-4ad7-8439-1637bd7cb5e2.png"
            alt="Cyberpunk Circuit"
            className="w-full h-full object-cover rounded-lg border-2 border-neon-cyan/50 animate-breathe"
          />
          <div className="absolute inset-0 rounded-lg animate-breathe"></div>
        </div>

        <p className="text-neon-cyan text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-center">
          Immerse yourself in the sound.
        </p>

        <div className="text-center mb-8">
          <p className="text-gray-400 mb-4">Listen on:</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {['Spotify', 'Apple Music', 'YouTube', 'Amazon', 'Deezer', 'iHeartRadio'].map((platform) => (
              <button key={platform} className="streaming-button text-sm md:text-base">
                {platform}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
