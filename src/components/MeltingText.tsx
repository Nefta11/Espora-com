import React, { useState } from 'react';
import '../styles/melting-text.css';

interface MeltingTextProps {
  text: string;
}

const MeltingText: React.FC<MeltingTextProps> = ({ text }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="melting-text">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`char ${hoveredIndex === index ? 'melting' : ''}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default MeltingText;