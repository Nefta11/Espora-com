import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown, UserPlus, Users } from 'lucide-react';
import Logo from '../components/Logo';
import CreateAccountModal from '../components/CreateAccountModal';
import SelectAccountModal from '../components/SelectAccountModal';
import TracklineBackground from '../components/TracklineBackground';
import '../styles/trackline.css';

const options = [
  { value: 'all', label: 'Todos los proyectos' },
  { value: 'active', label: 'Proyectos activos' },
  { value: 'completed', label: 'Proyectos completados' },
  { value: 'archived', label: 'Proyectos archivados' }
];

const TracklinePage: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('all');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [shouldShowElements, setShouldShowElements] = useState(true);
  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);
  const [clientName, setClientName] = useState('');
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isCreateModalOpen || isSelectModalOpen) {
      setShouldShowElements(false);
    } else {
      // Add a small delay before showing elements again
      const timer = setTimeout(() => setShouldShowElements(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isCreateModalOpen, isSelectModalOpen]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="trackline-page">
      <TracklineBackground />
      <div className="trackline-header">
        <button 
          onClick={() => navigate('/dashboard')}
          className="back-link"
        >
          <ArrowLeft size={16} />
          <span>Volver al menú</span>
        </button>
        <h1 className={`trackline-title ${shouldShowElements ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
          TrackLine
        </h1>
        <Logo />
      </div>

      <div className={`trackline-buttons ${isVisible && shouldShowElements ? 'visible' : ''}`}>
        <button className="trackline-button" onClick={() => setIsCreateModalOpen(true)}>
          <UserPlus size={24} className="button-icon" />
          <span className="button-text">Crear Cuenta</span>
        </button>
        <button className="trackline-button" onClick={() => setIsSelectModalOpen(true)}>
          <Users size={24} className="button-icon" />
          <span className="button-text">Seleccionar Cuenta</span>
        </button>
      </div>
      
      <CreateAccountModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateAccount={setClientName}
      />
      <SelectAccountModal
        isOpen={isSelectModalOpen}
        onClose={() => setIsSelectModalOpen(false)}
      />
    </div>
  );
};

export default TracklinePage;