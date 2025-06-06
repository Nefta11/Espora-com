import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Construction, ArrowLeft } from 'lucide-react';
import Logo from '../components/Logo';
import '../styles/construction.css';

const ConstructionPage: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="construction-page">
      <div className="construction-overlay" />
      <div className="construction-overlay" style={{ transform: 'rotate(180deg)' }} />
      
      <div className="construction-header">
        <button 
          onClick={() => navigate('/dashboard')}
          className="back-link"
        >
          <ArrowLeft size={16} />
          <span>Volver al menú</span>
        </button>
        <Logo />
      </div>

      <div className={`construction-content ${isVisible ? 'visible' : ''}`}>
        <div className="icon-container">
          <Construction className="construction-icon" size={64} />
        </div>
        <h1 className="text-white">Sitio en construcción</h1>

        <div className="progress-bar">
          <div className="progress-value" />
        </div>
      </div>
    </div>
  );
};

export default ConstructionPage;