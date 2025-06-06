import React from 'react';
import { X } from 'lucide-react';

interface LogoutDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutDialog: React.FC<LogoutDialogProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-50 flex items-center justify-center">
      <div className="bg-zinc-900/70 border border-white/10 rounded-2xl w-full max-w-md p-6 shadow-2xl animate-in fade-in duration-200 backdrop-blur-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Cerrar sesión</h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <p className="text-white/80 mb-6">
          ¿Estás seguro que deseas cerrar la sesión?
        </p>
        
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-red-500/80 hover:bg-red-500 text-white transition-all backdrop-blur-sm"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutDialog;