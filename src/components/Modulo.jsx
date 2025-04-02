import React, { useState, useEffect } from "react";
import FileCard from "./ModuloComponents/FileCard";
import LoadingState from "./ModuloComponents/LoadingState";
import ErrorState from "./ModuloComponents/ErrorState";
import FileModal from "./ModuloComponents/FileModal";

export default function Modulo() {
  // Estados modificados para control único de expansión
  const [moduleData, setModuleData] = useState([]);
  const [expandedModuleId, setExpandedModuleId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Datos mock de ejemplo
  const mockModuleData = [
    {
      id: 1,
      number: "1",
      title: "Fase de Planificación y Diseño 📝",
      description: "En esta fase inicial se evalúa la viabilidad del proyecto, se desarrollan los planos arquitectónicos y estructurales, y se obtienen los permisos necesarios para iniciar la obra. Esta documentación es fundamental para garantizar que el proyecto cumpla con todas las normativas vigentes.",
      imageUrl: "/img/planiydiseno.jpg",
      files: [
        {
          id: 1,
          fileName: "Análisis de viabilidad.xlsx",
          fileType: "xlsx",
          description: "Análisis económico y técnico del proyecto con proyecciones a 5 años."
        },
        {
          id: 2,
          fileName: "Planos arquitectónicos.pdf",
          fileType: "pdf",
          description: "Conjunto de planos que muestran el diseño conceptual y detallado del proyecto."
        },
        {
          id: 3,
          fileName: "Cálculos estructurales.pdf",
          fileType: "pdf",
          description: "Documentación técnica con los cálculos y especificaciones estructurales del proyecto."
        },
        {
          id: 4,
          fileName: "Permisos municipales.docx",
          fileType: "docx",
          description: "Este documento contiene todas las solicitudes de permisos presentadas a la municipalidad, incluyendo los formatos requeridos para la licencia de construcción, los permisos ambientales y las certificaciones de compatibilidad urbanística. Es importante revisar cada sección detalladamente antes de presentar los documentos, ya que cualquier error puede resultar en retrasos significativos para el inicio del proyecto."
        }
      ]
    },
    {
      id: 2,
      number: "2",
      title: "Fase de Preparación del Terreno 🌍",
      description: "En esta fase se prepara el terreno para recibir la construcción, realizando limpieza, nivelación, excavaciones y estableciendo la infraestructura temporal necesaria para el desarrollo de la obra.",
      imageUrl: "/img/preparacionterreno.jpg",
      files: [
        {
          id: 5,
          fileName: "Estudio topográfico.pdf",
          fileType: "pdf",
          description: "Mediciones y análisis detallados del terreno, incluyendo niveles, pendientes y características geográficas."
        },
        {
          id: 6,
          fileName: "Plan de limpieza y desbroce.docx",
          fileType: "docx",
          description: "Documento que detalla los procedimientos para la limpieza del terreno, remoción de vegetación y obstáculos."
        },
        {
          id: 7,
          fileName: "Protocolo de excavación.pdf",
          fileType: "pdf",
          description: "Especificaciones técnicas para las excavaciones de cimientos, zanjas y otras estructuras subterráneas."
        },
        {
          id: 8,
          fileName: "Plano de instalaciones temporales.dwg",
          fileType: "dwg",
          description: "Plano arquitectónico que muestra la ubicación de oficinas de obra, almacenes de materiales, instalaciones sanitarias y otras infraestructuras temporales necesarias durante la construcción."
        },
        {
          id: 9,
          fileName: "Informe geotécnico.pdf",
          fileType: "pdf",
          description: "Estudio detallado de las características del suelo, capacidad portante y recomendaciones para cimentación."
        }
      ]
    }
  ];

  // Simular carga de datos
  useEffect(() => {
    setTimeout(() => {
      setModuleData(mockModuleData);
      setIsLoading(false);
    }, 500);
  }, []);

  // Manejar expansión de módulos
  const toggleExpand = (moduleId) => {
    setExpandedModuleId(currentId => 
      currentId === moduleId ? null : moduleId
    );
  };

  // Manejar visualización de archivos
  const handleViewFile = (file) => {
    setSelectedFile(file);
    setModalOpen(true);
  };

  // Manejar descarga de archivos
  const handleDownloadFile = (file) => {
    console.log("Descargando archivo:", file.fileName);
    alert(`Descargando: ${file.fileName}`);
  };

  // Cerrar modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedFile(null);
  };

  // Estados de carga y error
  if (isLoading) return <LoadingState />;
  if (error || !moduleData) return <ErrorState error={error} />;

  return (
    <div className="w-full flex flex-col lg:flex-row">
      {/* Sidebar de módulos */}
      <div className="w-full lg:w-1/4 pr-0 lg:pr-4">
        <div className="sticky top-4 space-y-4">
          <h2 className="text-xl font-bold mb-4">Fases del Proyecto</h2>
          {moduleData.map((module) => (
            <div 
              key={module.id} 
              className={`border rounded p-3 cursor-pointer transition-all ${
                expandedModuleId === module.id 
                  ? "bg-blue-50 border-blue-200" 
                  : "bg-white hover:bg-gray-50"
              }`}
              onClick={() => toggleExpand(module.id)}
            >
              <div className="flex items-center justify-between">
                <div className="font-medium text-sm">
                  {module.number}. {module.title}
                </div>
                <div className="text-gray-500">
                  {expandedModuleId === module.id ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m18 15-6-6-6 6"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="w-full lg:w-3/4 mt-6 lg:mt-0">
        {moduleData.map((module) => (
          <div 
            key={module.id} 
            className={`transition-all duration-300 overflow-hidden mb-8 ${
              expandedModuleId === module.id 
                ? "opacity-100 max-h-screen" 
                : "opacity-0 max-h-0"
            }`}
          >
            {/* Cabecera del módulo */}
            <div className="border rounded-md mb-4">
              <div className="flex items-start p-4 gap-4">
                <div className="bg-gray-100 p-2 rounded-md min-w-[150px] flex items-center justify-center">
                  <div className="relative w-[120px] h-[120px]">
                    <img
                      src={module.imageUrl || "/placeholder-image.jpg"}
                      alt={module.title}
                      className="object-contain w-[120px] h-[120px]"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold uppercase">{module.number}. {module.title}</h2>
                  <p className="text-sm mt-1">{module.description}</p>
                </div>
              </div>
            </div>

            {/* Lista de archivos */}
            <div className="space-y-4">
              {module.files?.map((file) => (
                <FileCard 
                  key={file.id} 
                  file={file} 
                  onView={handleViewFile} 
                  onDownload={handleDownloadFile} 
                />
              ))}
            </div>
          </div>
        ))}
        
        {/* Mensaje sin selección */}
        {expandedModuleId === null && (
          <div className="flex flex-col items-center justify-center h-64 border rounded-lg bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mb-4">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <line x1="10" y1="9" x2="8" y2="9"/>
            </svg>
            <p className="text-gray-600 text-center max-w-md px-4">
              Selecciona una Fase de la lista para ver sus detalles y archivos.
            </p>
          </div>
        )}
      </div>

      {/* Modal de archivo */}
      {modalOpen && selectedFile && (
        <FileModal 
          file={selectedFile} 
          onClose={closeModal} 
          onDownload={handleDownloadFile} 
        />
      )}
    </div>
  );
}