import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import Logo from '../components/Logo';
import CreateAccountModal from '../components/CreateAccountModal';
import SelectAccountModal from '../components/SelectAccountModal';
import '../styles/account.css';

const AccountPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);
  const [clientName, setClientName] = useState('');
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});
  const [tableData, setTableData] = useState([
    { id: 'A-101', concept: 'Diseño de la Estrategia Digital', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-102', concept: 'Definiciones Iniciales Estratégicas', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-103', concept: 'Integración de Data existente', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-104', concept: 'Recopilación de Insights', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-105', concept: 'Recopilación de Multimedia', cost: 0, quantity: 0, discount: 0, subtotal: 0 }
  ]);
  const [anthropologicalData, setAnthropologicalData] = useState([
    { id: 'A-106', concept: 'Análisis del Humor Social', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-107', concept: 'Histograma del humor social', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-108', concept: 'Estudio de identificación y definición del perfil y sus adjetivos', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-109', concept: 'Identificación de los dilemas rentables', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-110', concept: 'Fracturas antropológicas', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-111', concept: 'Duelo de un tema', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-112', concept: 'Matriz de valores', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-113', concept: 'Psicografía General de los Adjetivos', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-114', concept: 'Semiósfera General de los Adjetivos', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-115', concept: 'Identificación de Microsegmentos Demográficos', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-116', concept: 'Identificación de Microsegmentos Etnográficos', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-117', concept: 'Identificación de Microsegmentos Fandoms', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-118', concept: 'Identificación de Microsegmentos Partidistas', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-119', concept: 'Identificación de Microsegmentos Psicográficos', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-120', concept: 'Identificación de Microsegmentos Psicopatográficos (por trastornos)', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-121', concept: 'Identificación de Microsegmentos por Intereses', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-122', concept: 'Identificación de Microsegmentos por gremio/industria', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-123', concept: 'Identificación de Microsegmentos por beneficiarios', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-124', concept: 'Tablero de Microsegmentación Integrado', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-125', concept: 'Psicografía de los Microsegmentos', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-126', concept: 'Semiósfera de la Psicografía Táctica de los Microsegmentos', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-127', concept: 'Razones de nanosegmentos partidistas', cost: 0, quantity: 0, discount: 0, subtotal: 0 }
  ]);
  const [otherStudiesData, setOtherStudiesData] = useState([
    { id: 'A-128', concept: 'Social Listening Base', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-129', concept: 'Investigación en Sitio (Paneles)', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-130', concept: 'Encuesta Basal', cost: 0, quantity: 0, discount: 0, subtotal: 0 }
  ]);
  const [digitalAccompanimentData, setDigitalAccompanimentData] = useState([
    { id: 'A-201', concept: 'Definiciones iniciales para programa de acompañamiento', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-202', concept: 'Diseño de proceso estratega digital en sitio (cuarto de coyuntura)', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-203', concept: 'Diseño del sistema de acompañamiento (reporte diario)', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-204', concept: 'Diseño del sistema de acompañamiento (playbook)', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-205', concept: 'Diseño del proceso de comunicación instantánea', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-206', concept: 'Diseño del proceso de levantamiento de imagen', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-207', concept: 'Diseño del proceso de campañas concurrentes', cost: 0, quantity: 0, discount: 0, subtotal: 0 }
  ]);
  const [digitalManagementData, setDigitalManagementData] = useState([
    { id: 'A-301', concept: 'Definiciones iniciales para sistema de Gerencia Digital', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-302', concept: 'Organigrama, funciones, metas, contratación participantes', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-303', concept: 'Sistema de Gestión de desempeño', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-304', concept: 'Procesos con áreas externas', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-305', concept: 'Elaboración Presupuesto y flujo', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-306', concept: 'Diseño de minuta', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-307', concept: 'Diseño de playbook', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-308', concept: 'Formato de parrilla', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-309', concept: 'Diseño de sistema de reportes', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-310', concept: 'Instalación de mesas, cuartos y torres', cost: 0, quantity: 0, discount: 0, subtotal: 0 }
  ]);
  const [productionData, setProductionData] = useState([
    { id: 'A-401', concept: 'Definiciones iniciales Producción', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-402', concept: 'Identidad Gráfica', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-403', concept: 'Sesión de fotos inicial', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-404', concept: 'Benchmark digital', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-405', concept: 'Estudio de tendencias gráficas', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-406', concept: 'Optimización de contenidos iniciales', cost: 0, quantity: 0, discount: 0, subtotal: 0 }
  ]);
  const [diffusionData, setDiffusionData] = useState([
    { id: 'A-501', concept: 'Definiciones Iniciales para difusión', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-502', concept: 'Estudio de demografía digital', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-503', concept: 'Estudio de audiencia de medios', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-504', concept: 'Estudio de impacto de medios', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-505', concept: 'Estudio de influenciadores', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-506', concept: 'Estudio de fórmulas de viralización', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-507', concept: 'Benchmark de difusión oficial', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-508', concept: 'Benchmark de difusión alterna', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-509', concept: 'Estudio de rentabilidad por microsegmento', cost: 0, quantity: 0, discount: 0, subtotal: 0 },
    { id: 'A-510', concept: 'Definición y recopilación de Bases de datos a gestar', cost: 0, quantity: 0, discount: 0, subtotal: 0 }
  ]);

  useEffect(() => {
    // Get client name from location state if available
    const state = location.state as { clientName?: string };
    if (state?.clientName) {
      setClientName(state.clientName);
    }
  }, [location]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (index: number, field: 'cost' | 'quantity' | 'discount', value: string) => {
    const newData = [...tableData];
    const numValue = parseFloat(value) || 0;
    
    newData[index][field] = numValue;
    
    // Calculate new subtotal
    const cost = newData[index].cost;
    const quantity = newData[index].quantity;
    const discount = newData[index].discount;
    
    const subtotal = cost * quantity * (1 - discount / 100);
    newData[index].subtotal = Math.round(subtotal * 100) / 100;
    
    setTableData(newData);
  };

  const handleAnthropologicalInputChange = (index: number, field: 'cost' | 'quantity' | 'discount', value: string) => {
    const newData = [...anthropologicalData];
    const numValue = parseFloat(value) || 0;
    
    newData[index][field] = numValue;
    
    // Calculate new subtotal
    const cost = newData[index].cost;
    const quantity = newData[index].quantity;
    const discount = newData[index].discount;
    
    const subtotal = cost * quantity * (1 - discount / 100);
    newData[index].subtotal = Math.round(subtotal * 100) / 100;
    
    setAnthropologicalData(newData);
  };

  const handleOtherStudiesInputChange = (index: number, field: 'cost' | 'quantity' | 'discount', value: string) => {
    const newData = [...otherStudiesData];
    const numValue = parseFloat(value) || 0;
    
    newData[index][field] = numValue;
    
    // Calculate new subtotal
    const cost = newData[index].cost;
    const quantity = newData[index].quantity;
    const discount = newData[index].discount;
    
    const subtotal = cost * quantity * (1 - discount / 100);
    newData[index].subtotal = Math.round(subtotal * 100) / 100;
    
    setOtherStudiesData(newData);
  };

  const handleDigitalAccompanimentInputChange = (index: number, field: 'cost' | 'quantity' | 'discount', value: string) => {
    const newData = [...digitalAccompanimentData];
    const numValue = parseFloat(value) || 0;
    
    newData[index][field] = numValue;
    
    // Calculate new subtotal
    const cost = newData[index].cost;
    const quantity = newData[index].quantity;
    const discount = newData[index].discount;
    
    const subtotal = cost * quantity * (1 - discount / 100);
    newData[index].subtotal = Math.round(subtotal * 100) / 100;
    
    setDigitalAccompanimentData(newData);
  };

  const handleDigitalManagementInputChange = (index: number, field: 'cost' | 'quantity' | 'discount', value: string) => {
    const newData = [...digitalManagementData];
    const numValue = parseFloat(value) || 0;
    
    newData[index][field] = numValue;
    
    // Calculate new subtotal
    const cost = newData[index].cost;
    const quantity = newData[index].quantity;
    const discount = newData[index].discount;
    
    const subtotal = cost * quantity * (1 - discount / 100);
    newData[index].subtotal = Math.round(subtotal * 100) / 100;
    
    setDigitalManagementData(newData);
  };

  const handleProductionInputChange = (index: number, field: 'cost' | 'quantity' | 'discount', value: string) => {
    const newData = [...productionData];
    const numValue = parseFloat(value) || 0;
    
    newData[index][field] = numValue;
    
    // Calculate new subtotal
    const cost = newData[index].cost;
    const quantity = newData[index].quantity;
    const discount = newData[index].discount;
    
    const subtotal = cost * quantity * (1 - discount / 100);
    newData[index].subtotal = Math.round(subtotal * 100) / 100;
    
    setProductionData(newData);
  };

  const handleDiffusionInputChange = (index: number, field: 'cost' | 'quantity' | 'discount', value: string) => {
    const newData = [...diffusionData];
    const numValue = parseFloat(value) || 0;
    
    newData[index][field] = numValue;
    
    // Calculate new subtotal
    const cost = newData[index].cost;
    const quantity = newData[index].quantity;
    const discount = newData[index].discount;
    
    const subtotal = cost * quantity * (1 - discount / 100);
    newData[index].subtotal = Math.round(subtotal * 100) / 100;
    
    setDiffusionData(newData);
  };

  const handleCheckboxChange = (itemId: string, dataType: string, index: number) => {
    const isChecked = !checkedItems[itemId];
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: isChecked
    }));

    // Update quantity based on checkbox state
    const newQuantity = isChecked ? 1 : 0;
    
    switch (dataType) {
      case 'tableData':
        handleInputChange(index, 'quantity', newQuantity.toString());
        break;
      case 'anthropologicalData':
        handleAnthropologicalInputChange(index, 'quantity', newQuantity.toString());
        break;
      case 'otherStudiesData':
        handleOtherStudiesInputChange(index, 'quantity', newQuantity.toString());
        break;
      case 'digitalAccompanimentData':
        handleDigitalAccompanimentInputChange(index, 'quantity', newQuantity.toString());
        break;
      case 'digitalManagementData':
        handleDigitalManagementInputChange(index, 'quantity', newQuantity.toString());
        break;
      case 'productionData':
        handleProductionInputChange(index, 'quantity', newQuantity.toString());
        break;
      case 'diffusionData':
        handleDiffusionInputChange(index, 'quantity', newQuantity.toString());
        break;
    }
  };

  // Check if at least one checkbox is selected
  const hasSelectedItems = Object.values(checkedItems).some(checked => checked);

  return (
    <div className="account-page">
      <div className="account-header">
        <div className="header-left">
          <button 
            onClick={() => navigate('/trackline')}
            className="back-link"
          >
            <ArrowLeft size={16} />
            <span>Volver a TrackLine</span>
          </button>
          <h1 className="client-name">{clientName}</h1>
        </div>
        
        <div className="header-right">
          <button 
            className="account-button"
            onClick={() => setIsCreateModalOpen(true)}
          >
            Crear cuenta
          </button>
          <button 
            className="account-button"
            onClick={() => setIsSelectModalOpen(true)}
          >
            Seleccionar cuenta
          </button>
          <Logo />
        </div>
      </div>

      <div className={`account-content ${isVisible ? 'visible' : ''}`}>
        <div className="tables-column">
          <div className="table-section">
            <h2 className="table-title">1) Set Up Estrategia Digital</h2>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th className="w-12"></th>
                    <th>Item</th>
                    <th>Concepto</th>
                    <th>Costo unitario</th>
                    <th>Cantidad</th>
                    <th>Descuento</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                  <tr key={row.id} className={!checkedItems[row.id] ? 'disabled' : ''}>
                    <td className="text-center">
                      <input 
                        type="checkbox" 
                        className="checkbox" 
                        checked={checkedItems[row.id] || false}
                        onChange={() => handleCheckboxChange(row.id, 'tableData', index)}
                      />
                    </td>
                    <td>{row.id}</td>
                    <td>{row.concept}</td>
                    <td>
                      <div className="input-with-prefix">
                        <span className="input-prefix">$</span>
                        <input
                          type="number"
                          value={row.cost}
                          onChange={(e) => handleInputChange(index, 'cost', e.target.value)}
                          className="table-input"
                          min="0"
                          step="0.01"
                          disabled={!checkedItems[row.id]}
                        />
                      </div>
                    </td>
                    <td>
                      <input
                        type="number"
                        value={row.quantity}
                        onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                        className="table-input"
                        min="1"
                        step="1"
                        disabled={!checkedItems[row.id]}
                      />
                    </td>
                    <td>
                      <div className="input-with-suffix">
                        <input
                          type="number"
                          value={row.discount}
                          onChange={(e) => handleInputChange(index, 'discount', e.target.value)}
                          className="table-input"
                          min="0"
                          max="100"
                          step="1"
                          disabled={!checkedItems[row.id]}
                        />
                        <span className="input-suffix">%</span>
                      </div>
                    </td>
                    <td>${row.subtotal.toFixed(2)}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="table-section">
            <h2 className="table-title">1.1) Estudios antropológicos para la estrategia digital</h2>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th className="w-12"></th>
                    <th>Item</th>
                    <th>Concepto</th>
                    <th>Costo unitario</th>
                    <th>Cantidad</th>
                    <th>Descuento</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {anthropologicalData.map((row, index) => (
                  <tr key={row.id} className={!checkedItems[row.id] ? 'disabled' : ''}>
                    <td className="text-center">
                      <input 
                        type="checkbox" 
                        className="checkbox" 
                        checked={checkedItems[row.id] || false}
                        onChange={() => handleCheckboxChange(row.id, 'anthropologicalData', index)}
                      />
                    </td>
                    <td>{row.id}</td>
                    <td>{row.concept}</td>
                    <td>
                      <div className="input-with-prefix">
                        <span className="input-prefix">$</span>
                        <input
                          type="number"
                          value={row.cost}
                          onChange={(e) => handleAnthropologicalInputChange(index, 'cost', e.target.value)}
                          className="table-input"
                          min="0"
                          step="0.01"
                          disabled={!checkedItems[row.id]}
                        />
                      </div>
                    </td>
                    <td>
                      <input
                        type="number"
                        value={row.quantity}
                        onChange={(e) => handleAnthropologicalInputChange(index, 'quantity', e.target.value)}
                        className="table-input"
                        min="1"
                        step="1"
                        disabled={!checkedItems[row.id]}
                      />
                    </td>
                    <td>
                      <div className="input-with-suffix">
                        <input
                          type="number"
                          value={row.discount}
                          onChange={(e) => handleAnthropologicalInputChange(index, 'discount', e.target.value)}
                          className="table-input"
                          min="0"
                          max="100"
                          step="1"
                          disabled={!checkedItems[row.id]}
                        />
                        <span className="input-suffix">%</span>
                      </div>
                    </td>
                    <td>${row.subtotal.toFixed(2)}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="table-section">
            <h2 className="table-title">1.2) Otros estudios para la estrategia digital</h2>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th className="w-12"></th>
                    <th>Item</th>
                    <th>Concepto</th>
                    <th>Costo unitario</th>
                    <th>Cantidad</th>
                    <th>Descuento</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {otherStudiesData.map((row, index) => (
                  <tr key={row.id} className={!checkedItems[row.id] ? 'disabled' : ''}>
                    <td className="text-center">
                      <input 
                        type="checkbox" 
                        className="checkbox" 
                        checked={checkedItems[row.id] || false}
                        onChange={() => handleCheckboxChange(row.id, 'otherStudiesData', index)}
                      />
                    </td>
                    <td>{row.id}</td>
                    <td>{row.concept}</td>
                    <td>
                      <div className="input-with-prefix">
                        <span className="input-prefix">$</span>
                        <input
                          type="number"
                          value={row.cost}
                          onChange={(e) => handleOtherStudiesInputChange(index, 'cost', e.target.value)}
                          className="table-input"
                          min="0"
                          step="0.01"
                          disabled={!checkedItems[row.id]}
                        />
                      </div>
                    </td>
                    <td>
                      <input
                        type="number"
                        value={row.quantity}
                        onChange={(e) => handleOtherStudiesInputChange(index, 'quantity', e.target.value)}
                        className="table-input"
                        min="1"
                        step="1"
                        disabled={!checkedItems[row.id]}
                      />
                    </td>
                    <td>
                      <div className="input-with-suffix">
                        <input
                          type="number"
                          value={row.discount}
                          onChange={(e) => handleOtherStudiesInputChange(index, 'discount', e.target.value)}
                          className="table-input"
                          min="0"
                          max="100"
                          step="1"
                          disabled={!checkedItems[row.id]}
                        />
                        <span className="input-suffix">%</span>
                      </div>
                    </td>
                    <td>${row.subtotal.toFixed(2)}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="table-section digital-accompaniment-table">
            <h2 className="table-title">2) Set Up Acompañamiento Digital</h2>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th className="w-12"></th>
                    <th>Item</th>
                    <th>Concepto</th>
                    <th>Costo unitario</th>
                    <th>Cantidad</th>
                    <th>Descuento</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {digitalAccompanimentData.map((row, index) => (
                  <tr key={row.id} className={!checkedItems[row.id] ? 'disabled' : ''}>
                    <td className="text-center">
                      <input 
                        type="checkbox" 
                        className="checkbox" 
                        checked={checkedItems[row.id] || false}
                        onChange={() => handleCheckboxChange(row.id, 'digitalAccompanimentData', index)}
                      />
                    </td>
                    <td>{row.id}</td>
                    <td>{row.concept}</td>
                    <td>
                      <div className="input-with-prefix">
                        <span className="input-prefix">$</span>
                        <input
                          type="number"
                          value={row.cost}
                          onChange={(e) => handleDigitalAccompanimentInputChange(index, 'cost', e.target.value)}
                          className="table-input"
                          min="0"
                          step="0.01"
                          disabled={!checkedItems[row.id]}
                        />
                      </div>
                    </td>
                    <td>
                      <input
                        type="number"
                        value={row.quantity}
                        onChange={(e) => handleDigitalAccompanimentInputChange(index, 'quantity', e.target.value)}
                        className="table-input"
                        min="1"
                        step="1"
                        disabled={!checkedItems[row.id]}
                      />
                    </td>
                    <td>
                      <div className="input-with-suffix">
                        <input
                          type="number"
                          value={row.discount}
                          onChange={(e) => handleDigitalAccompanimentInputChange(index, 'discount', e.target.value)}
                          className="table-input"
                          min="0"
                          max="100"
                          step="1"
                          disabled={!checkedItems[row.id]}
                        />
                        <span className="input-suffix">%</span>
                      </div>
                    </td>
                    <td>${row.subtotal.toFixed(2)}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="tables-column">
          <div className="table-section">
            <h2 className="table-title">3) Set Up Gerencia Digital</h2>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th className="w-12"></th>
                    <th>Item</th>
                    <th>Concepto</th>
                    <th>Costo unitario</th>
                    <th>Cantidad</th>
                    <th>Descuento</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {digitalManagementData.map((row, index) => (
                  <tr key={row.id} className={!checkedItems[row.id] ? 'disabled' : ''}>
                    <td className="text-center">
                      <input 
                        type="checkbox" 
                        className="checkbox" 
                        checked={checkedItems[row.id] || false}
                        onChange={() => handleCheckboxChange(row.id, 'digitalManagementData', index)}
                      />
                    </td>
                    <td>{row.id}</td>
                    <td>{row.concept}</td>
                    <td>
                      <div className="input-with-prefix">
                        <span className="input-prefix">$</span>
                        <input
                          type="number"
                          value={row.cost}
                          onChange={(e) => handleDigitalManagementInputChange(index, 'cost', e.target.value)}
                          className="table-input"
                          min="0"
                          step="0.01"
                          disabled={!checkedItems[row.id]}
                        />
                      </div>
                    </td>
                    <td>
                      <input
                        type="number"
                        value={row.quantity}
                        onChange={(e) => handleDigitalManagementInputChange(index, 'quantity', e.target.value)}
                        className="table-input"
                        min="1"
                        step="1"
                        disabled={!checkedItems[row.id]}
                      />
                    </td>
                    <td>
                      <div className="input-with-suffix">
                        <input
                          type="number"
                          value={row.discount}
                          onChange={(e) => handleDigitalManagementInputChange(index, 'discount', e.target.value)}
                          className="table-input"
                          min="0"
                          max="100"
                          step="1"
                          disabled={!checkedItems[row.id]}
                        />
                        <span className="input-suffix">%</span>
                      </div>
                    </td>
                    <td>${row.subtotal.toFixed(2)}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="table-section">
            <h2 className="table-title">4) Set Up Producción</h2>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th className="w-12"></th>
                    <th>Item</th>
                    <th>Concepto</th>
                    <th>Costo unitario</th>
                    <th>Cantidad</th>
                    <th>Descuento</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {productionData.map((row, index) => (
                  <tr key={row.id} className={!checkedItems[row.id] ? 'disabled' : ''}>
                    <td className="text-center">
                      <input 
                        type="checkbox" 
                        className="checkbox" 
                        checked={checkedItems[row.id] || false}
                        onChange={() => handleCheckboxChange(row.id, 'productionData', index)}
                      />
                    </td>
                    <td>{row.id}</td>
                    <td>{row.concept}</td>
                    <td>
                      <div className="input-with-prefix">
                        <span className="input-prefix">$</span>
                        <input
                          type="number"
                          value={row.cost}
                          onChange={(e) => handleProductionInputChange(index, 'cost', e.target.value)}
                          className="table-input"
                          min="0"
                          step="0.01"
                          disabled={!checkedItems[row.id]}
                        />
                      </div>
                    </td>
                    <td>
                      <input
                        type="number"
                        value={row.quantity}
                        onChange={(e) => handleProductionInputChange(index, 'quantity', e.target.value)}
                        className="table-input"
                        min="1"
                        step="1"
                        disabled={!checkedItems[row.id]}
                      />
                    </td>
                    <td>
                      <div className="input-with-suffix">
                        <input
                          type="number"
                          value={row.discount}
                          onChange={(e) => handleProductionInputChange(index, 'discount', e.target.value)}
                          className="table-input"
                          min="0"
                          max="100"
                          step="1"
                          disabled={!checkedItems[row.id]}
                        />
                        <span className="input-suffix">%</span>
                      </div>
                    </td>
                    <td>${row.subtotal.toFixed(2)}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="table-section">
            <h2 className="table-title">5) Set up Difusión</h2>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th className="w-12"></th>
                    <th>Item</th>
                    <th>Concepto</th>
                    <th>Costo unitario</th>
                    <th>Cantidad</th>
                    <th>Descuento</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {diffusionData.map((row, index) => (
                  <tr key={row.id} className={!checkedItems[row.id] ? 'disabled' : ''}>
                    <td className="text-center">
                      <input 
                        type="checkbox" 
                        className="checkbox" 
                        checked={checkedItems[row.id] || false}
                        onChange={() => handleCheckboxChange(row.id, 'diffusionData', index)}
                      />
                    </td>
                    <td>{row.id}</td>
                    <td>{row.concept}</td>
                    <td>
                      <div className="input-with-prefix">
                        <span className="input-prefix">$</span>
                        <input
                          type="number"
                          value={row.cost}
                          onChange={(e) => handleDiffusionInputChange(index, 'cost', e.target.value)}
                          className="table-input"
                          min="0"
                          step="0.01"
                          disabled={!checkedItems[row.id]}
                        />
                      </div>
                    </td>
                    <td>
                      <input
                        type="number"
                        value={row.quantity}
                        onChange={(e) => handleDiffusionInputChange(index, 'quantity', e.target.value)}
                        className="table-input"
                        min="1"
                        step="1"
                        disabled={!checkedItems[row.id]}
                      />
                    </td>
                    <td>
                      <div className="input-with-suffix">
                        <input
                          type="number"
                          value={row.discount}
                          onChange={(e) => handleDiffusionInputChange(index, 'discount', e.target.value)}
                          className="table-input"
                          min="0"
                          max="100"
                          step="1"
                          disabled={!checkedItems[row.id]}
                        />
                        <span className="input-suffix">%</span>
                      </div>
                    </td>
                    <td>${row.subtotal.toFixed(2)}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {hasSelectedItems && (
        <div className="continue-button-container">
        <button 
          className="continue-button"
          onClick={() => navigate('/checklist-captura', { 
            state: { 
              clientName,
              selectedItems: checkedItems,
              allData: {
                tableData,
                anthropologicalData,
                otherStudiesData,
                digitalAccompanimentData,
                digitalManagementData,
                productionData,
                diffusionData
              }
            }
          })}
        >
          <span className="button-text">Continuar</span>
        </button>
        </div>
      )}

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

export default AccountPage;