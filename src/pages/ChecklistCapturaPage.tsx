import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Circle } from 'lucide-react';
import Logo from '../components/Logo';
import '../styles/checklist-captura.css';

interface ChecklistItem {
  id: string;
  concept: string;
  section: string;
  completed: boolean;
}

const ChecklistCapturaPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [clientName, setClientName] = useState('');
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([]);

  useEffect(() => {
    const state = location.state as any;
    if (state?.clientName) {
      setClientName(state.clientName);
    }

    // Generate checklist items from selected data
    if (state?.selectedItems && state?.allData) {
      const items: ChecklistItem[] = [];
      const { selectedItems, allData } = state;

      // Process each data type
      Object.entries(allData).forEach(([dataType, data]: [string, any[]]) => {
        data.forEach((item) => {
          if (selectedItems[item.id]) {
            let sectionName = '';
            switch (dataType) {
              case 'tableData':
                sectionName = 'Set Up Estrategia Digital';
                break;
              case 'anthropologicalData':
                sectionName = 'Estudios Antropológicos';
                break;
              case 'otherStudiesData':
                sectionName = 'Otros Estudios';
                break;
              case 'digitalAccompanimentData':
                sectionName = 'Acompañamiento Digital';
                break;
              case 'digitalManagementData':
                sectionName = 'Gerencia Digital';
                break;
              case 'productionData':
                sectionName = 'Producción';
                break;
              case 'diffusionData':
                sectionName = 'Difusión';
                break;
            }

            items.push({
              id: item.id,
              concept: item.concept,
              section: sectionName,
              completed: false
            });
          }
        });
      });

      setChecklistItems(items);
    }
  }, [location]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleItemCompletion = (itemId: string) => {
    setChecklistItems(prev => 
      prev.map(item => 
        item.id === itemId 
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  // Group items by section
  const groupedItems = checklistItems.reduce((acc, item) => {
    if (!acc[item.section]) {
      acc[item.section] = [];
    }
    acc[item.section].push(item);
    return acc;
  }, {} as Record<string, ChecklistItem[]>);

  const completedCount = checklistItems.filter(item => item.completed).length;
  const totalCount = checklistItems.length;
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="checklist-captura-page">
      <div className="checklist-header">
        <div className="header-left">
          <button 
            onClick={() => navigate('/account', { state: { clientName } })}
            className="back-link"
          >
            <ArrowLeft size={16} />
            <span>Volver a cuenta</span>
          </button>
          <div className="header-info">
            <h1 className="page-title">Engagement Hands-Off</h1>
            <h2 className="client-name">{clientName}</h2>
          </div>
        </div>
        
        <div className="header-right">
          <div className="progress-info">
            <span className="progress-text">
              {completedCount} de {totalCount} completados
            </span>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
          <Logo />
        </div>
      </div>

      <div className={`checklist-content ${isVisible ? 'visible' : ''}`}>
        <div className="checklist-table-container">
          <table className="checklist-table">
            <thead>
              <tr>
                <th>✓</th>
                <th>Item</th>
                <th>Perfil</th>
                <th>Tipo</th>
                <th>Kpi</th>
                <th>Meta</th>
                <th>Freq</th>
                <th>Duración</th>
                <th>Sueldo/Costo</th>
                <th>Otros Items</th>
                <th>Otras Cuentas</th>
                <th>Tipo de Contratación</th>
                <th>Días de Pago</th>
                <th>Contrato a Firmar</th>
                <th>Propuesta</th>
                <th>Escritorio, Silla Etc</th>
                <th>Viajes/Hospedajes Descriptivo</th>
                <th>Viajes/Hospedajes Monto</th>
                <th>Equipo de Cómputo</th>
                <th>Recursos Tecnológicos y Materiales Adicionales Descriptivo</th>
                <th>Recursos Tecnológicos y Materiales Adicionales Monto</th>
                <th>Empresa Descriptivo</th>
                <th>Empresa Monto</th>
                <th>Pauta Descriptivo</th>
                <th>Pauta Monto</th>
                <th>Otros Gastos Descriptivos</th>
                <th>Otros Gastos Monto</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(groupedItems).map(([sectionName, items]) => (
                <React.Fragment key={sectionName}>
                  <tr className="section-header">
                    <td colSpan={26} className="section-title">
                      {(() => {
                        switch (sectionName) {
                          case 'Set Up Estrategia Digital':
                            return 'Set Up Estrategia Digital';
                          case 'Estudios Antropológicos':
                            return 'Estudios Antropológicos';
                          case 'Otros Estudios':
                            return 'Otros Estudios';
                          case 'Acompañamiento Digital':
                            return 'Acompañamiento Digital';
                          case 'Gerencia Digital':
                            return 'Gerencia Digital';
                          case 'Producción':
                            return 'Producción';
                          case 'Difusión':
                            return 'Difusión';
                          default:
                            return sectionName;
                        }
                      })()}
                    </td>
                  </tr>
                  {items.map((item) => (
                    <tr key={item.id} className={item.completed ? 'completed' : ''}>
                      <td className="checkbox-cell">
                        <button
                          className="checkbox-button"
                          onClick={() => toggleItemCompletion(item.id)}
                        >
                          {item.completed ? (
                            <CheckCircle2 size={18} className="check-icon completed" />
                          ) : (
                            <Circle size={18} className="check-icon" />
                          )}
                        </button>
                      </td>
                      <td className="item-id">{item.id}</td>
                      <td className="task-cell">{item.concept}</td>
                      <td>
                        <select className="table-input">
                          <option value="">Seleccionar</option>
                          <option value="freelance">FREELANCE</option>
                          <option value="interno">INTERNO</option>
                        </select>
                      </td>
                      <td><input type="text" className="table-input" placeholder="KPI" /></td>
                      <td><input type="text" className="table-input" placeholder="Meta" /></td>
                      <td><input type="text" className="table-input" placeholder="Frecuencia" /></td>
                      <td><input type="text" className="table-input" placeholder="Duración" /></td>
                      <td><input type="number" className="table-input" placeholder="Sueldo/Costo" /></td>
                      <td><input type="text" className="table-input" placeholder="Otros items" /></td>
                      <td>
                        <select className="table-input">
                          <option value="">Seleccionar</option>
                          <option value="compartido">COMPARTIDO</option>
                          <option value="no_compartido">NO COMPARTIDO</option>
                        </select>
                      </td>
                      <td>
                        <select className="table-input">
                          <option value="">Seleccionar</option>
                          <option value="imss">IMSS</option>
                          <option value="honorarios">HONORARIOS</option>
                          <option value="imss_honorarios">IMSS+HONORARIOS</option>
                        </select>
                      </td>
                      <td><input type="text" className="table-input" placeholder="Días de pago" /></td>
                      <td><input type="text" className="table-input" placeholder="Contrato" /></td>
                      <td><input type="text" className="table-input" placeholder="Propuesta" /></td>
                      <td><input type="text" className="table-input" placeholder="Escritorio, silla, etc." /></td>
                      <td><input type="text" className="table-input" placeholder="Viajes/Hospedajes desc." /></td>
                      <td><input type="number" className="table-input" placeholder="Monto viajes" /></td>
                      <td><input type="text" className="table-input" placeholder="Equipo de cómputo" /></td>
                      <td><input type="text" className="table-input" placeholder="Recursos tecnológicos desc." /></td>
                      <td><input type="number" className="table-input" placeholder="Monto recursos" /></td>
                      <td><input type="text" className="table-input" placeholder="Empresa desc." /></td>
                      <td><input type="number" className="table-input" placeholder="Monto empresa" /></td>
                      <td><input type="text" className="table-input" placeholder="Pauta desc." /></td>
                      <td><input type="number" className="table-input" placeholder="Monto pauta" /></td>
                      <td><input type="text" className="table-input" placeholder="Otros gastos desc." /></td>
                      <td><input type="number" className="table-input" placeholder="Monto otros" /></td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChecklistCapturaPage;