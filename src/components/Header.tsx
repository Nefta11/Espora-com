import React, { useEffect, useState, useRef } from 'react';
import VideoBackground from './VideoBackground';
import LoginButton from './LoginButton';
import BackgroundAudio from './BackgroundAudio';
import Logo from './Logo';
import FlowEffect from './FlowEffect';
import MeltingText from './MeltingText';
import '../styles/header.css';
import '../styles/flow-effect.css';
import { Volume2, VolumeX } from 'lucide-react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const titleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    }
  };

  return (
    <header className="header">
      <BackgroundAudio isMuted={isMuted} />
      <VideoBackground isMuted={isMuted} />
      <FlowEffect />
      <div className="absolute top-8 left-8 z-10">
        <Logo />
      </div>
      <button
        className="audio-control-button"
        onClick={() => setIsMuted(!isMuted)}
        title={isMuted ? "Activar sonido" : "Silenciar"}
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
      <div className={`overlay ${isVisible ? 'visible' : ''}`}>
        <div className="content">
          <h1 className="title">
            <MeltingText text="esporahub" />
          </h1>
          <LoginButton />
        </div>
      </div>
    </header>
  );
};

export default Header;