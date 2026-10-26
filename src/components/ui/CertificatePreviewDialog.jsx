import React, { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";

export function CertificatePreviewDialog({ certificate, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (certificate && !dialog.open) dialog.showModal();
    if (!certificate && dialog.open) dialog.close();
  }, [certificate]);

  return (
    <dialog
      className="certificate-dialog"
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      aria-label={certificate ? `${certificate.title} certificate` : "Certificate preview"}
    >
      {certificate && (
        <>
          <div className="certificate-dialog-header">
            <div>
              <h3>{certificate.title}</h3>
              <p>{certificate.issuer}</p>
            </div>
            <div className="certificate-dialog-actions">
              <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close certificate preview" title="Close preview">
                <X size={20} />
              </button>
              <a href={certificate.document} target="_blank" rel="noopener noreferrer" aria-label={`Open original ${certificate.title} certificate`} title="Open original">
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
          <div className="certificate-dialog-content">
            <img src={certificate.preview} alt={`${certificate.title} certificate`} />
          </div>
        </>
      )}
    </dialog>
  );
}
