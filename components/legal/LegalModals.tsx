"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface LegalModalsProps {
  isOpen: boolean;
  onClose: () => void;
  type: "privacidad" | "aviso";
}

export function LegalModals({ isOpen, onClose, type }: LegalModalsProps) {
  // Cierre con tecla ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Cierre al hacer clic fuera del modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const renderPrivacidadContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading font-bold text-xl text-carbon mb-3">
          Responsable del tratamiento
        </h3>
        <p className="text-carbon/80 leading-relaxed">
          CR PROJECT S.A.S., identificada con NIT 901.148.775-4, con domicilio
          en Mosquera, Cundinamarca, Colombia, es responsable del tratamiento de
          los datos personales suministrados por los usuarios a través de este
          sitio web.
        </p>
      </div>

      <div>
        <h3 className="font-heading font-bold text-xl text-carbon mb-3">
          Datos recolectados
        </h3>
        <p className="text-carbon/80 leading-relaxed mb-3">
          Podemos recopilar información como:
        </p>
        <ul className="list-disc list-inside space-y-2 text-carbon/80 ml-4">
          <li>Nombre y apellido</li>
          <li>Número telefónico</li>
          <li>Correo electrónico</li>
          <li>Empresa</li>
          <li>
            Información relacionada con solicitudes de cotización o servicio
            técnico
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-heading font-bold text-xl text-carbon mb-3">
          Finalidad
        </h3>
        <p className="text-carbon/80 leading-relaxed mb-3">
          Los datos personales serán utilizados exclusivamente para:
        </p>
        <ul className="list-disc list-inside space-y-2 text-carbon/80 ml-4">
          <li>Atender solicitudes de información</li>
          <li>Elaborar cotizaciones</li>
          <li>Gestionar servicios técnicos</li>
          <li>
            Contactar al usuario respecto de productos y servicios solicitados
          </li>
          <li>Cumplir obligaciones legales y comerciales</li>
        </ul>
      </div>

      <div>
        <h3 className="font-heading font-bold text-xl text-carbon mb-3">
          Autorización
        </h3>
        <p className="text-carbon/80 leading-relaxed">
          El usuario autoriza de manera libre, previa, expresa e informada a CR
          PROJECT S.A.S. para el tratamiento de sus datos personales al
          diligenciar formularios o comunicarse mediante WhatsApp, correo
          electrónico o cualquier otro canal de contacto.
        </p>
      </div>

      <div>
        <h3 className="font-heading font-bold text-xl text-carbon mb-3">
          Derechos del titular
        </h3>
        <p className="text-carbon/80 leading-relaxed mb-3">
          De conformidad con la Ley 1581 de 2012, el titular podrá:
        </p>
        <ul className="list-disc list-inside space-y-2 text-carbon/80 ml-4">
          <li>Conocer sus datos personales</li>
          <li>Actualizarlos</li>
          <li>Rectificarlos</li>
          <li>Solicitar su eliminación cuando sea procedente</li>
          <li>Revocar la autorización otorgada</li>
          <li>Solicitar prueba de la autorización</li>
        </ul>
      </div>

      <div>
        <h3 className="font-heading font-bold text-xl text-carbon mb-3">
          Contacto para ejercer derechos
        </h3>
        <div className="space-y-2 text-carbon/80">
          <p>
            <strong>Correo:</strong>{" "}
            <a
              href="mailto:crprojectsas@gmail.com"
              className="text-carbon/80 hover:text-brand-amber transition-colors"
            >
              crprojectsas@gmail.com
            </a>
          </p>
          <p>
            <strong>Teléfono:</strong>{" "}
            <a
              href="tel:+573133799992"
              className="text-carbon/80 hover:text-brand-amber transition-colors"
            >
              +57 313 3799992
            </a>
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-heading font-bold text-xl text-carbon mb-3">
          Vigencia
        </h3>
        <p className="text-carbon/80 leading-relaxed">
          La presente política podrá ser actualizada en cualquier momento para
          dar cumplimiento a cambios normativos o internos.
        </p>
      </div>
    </div>
  );

  const renderAvisoContent = () => (
    <div className="space-y-6">
      <p className="text-carbon/80 leading-relaxed">
        CR PROJECT S.A.S., identificada con NIT 901.148.775-4, informa a los
        usuarios de este sitio web que los datos personales suministrados
        mediante formularios, WhatsApp, llamadas telefónicas o correo
        electrónico serán tratados conforme a la Ley 1581 de 2012 y demás normas
        aplicables en Colombia.
      </p>

      <p className="text-carbon/80 leading-relaxed">
        La finalidad del tratamiento es atender solicitudes de información,
        cotizaciones, prestación de servicios técnicos, venta de maquinaria,
        comercialización de repuestos y actividades relacionadas con el objeto
        social de la compañía.
      </p>

      <p className="text-carbon/80 leading-relaxed">
        El titular de los datos podrá ejercer sus derechos de consulta,
        actualización, rectificación o supresión enviando una solicitud al
        correo{" "}
        <a
          href="mailto:crprojectsas@gmail.com"
          className="text-carbon/80 hover:text-brand-amber transition-colors font-medium"
        >
          crprojectsas@gmail.com
        </a>
        .
      </p>

      <div className="bg-steel/10 p-6 rounded-lg">
        <h3 className="font-heading font-bold text-lg text-carbon mb-4">
          Responsable del tratamiento:
        </h3>
        <div className="space-y-2 text-carbon/80">
          <p>
            <strong>CR PROJECT S.A.S.</strong> NIT 901.148.775-4
          </p>
          <p>
            <strong>Correo:</strong>{" "}
            <a
              href="mailto:crprojectsas@gmail.com"
              className="text-carbon/80 hover:text-brand-amber transition-colors"
            >
              crprojectsas@gmail.com
            </a>
          </p>
          <p>
            <strong>Teléfono:</strong>{" "}
            <a
              href="tel:+573133799992"
              className="text-carbon/80 hover:text-brand-amber transition-colors"
            >
              +57 313 3799992
            </a>
          </p>
          <p>
            <strong>Dirección:</strong> El Cerrito, Mosquera, Cundinamarca,
            Colombia
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-steel/20">
            <h2
              id="modal-title"
              className="font-heading font-bold text-2xl text-carbon"
            >
              {type === "privacidad"
                ? "Política de Tratamiento de Datos Personales"
                : "Aviso de Privacidad"}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-steel/10 rounded-lg transition-colors group"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6 text-carbon/60 group-hover:text-carbon" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(80vh-140px)]">
            {type === "privacidad"
              ? renderPrivacidadContent()
              : renderAvisoContent()}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end p-6 border-t border-steel/20 bg-steel/5">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-brand-yellow hover:bg-brand-amber text-carbon font-medium rounded-lg transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
