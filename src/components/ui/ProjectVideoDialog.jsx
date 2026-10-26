import React, { useEffect, useRef } from "react";
import { ExternalLink, X } from "lucide-react";

export function ProjectVideoDialog({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  return (
    <dialog
      className="project-video-dialog"
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      aria-label={project ? `${project.title} demo video` : "Project demo video"}
    >
      {project && (
        <>
          <div className="project-video-header">
            <h2>{project.title} demo</h2>
            <div className="project-video-actions">
              <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close demo video" title="Close video">
                <X size={20} />
              </button>
              <a href={project.demo.watchUrl} target="_blank" rel="noopener noreferrer" aria-label="Open video in Google Drive" title="Open in Google Drive">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
          <div className="project-video-frame">
            <iframe
              src={project.demo.embedUrl}
              title={`${project.title} demo video player`}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </>
      )}
    </dialog>
  );
}
