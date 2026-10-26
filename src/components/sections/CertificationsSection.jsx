import React, { useState } from "react";
import { Award, Eye } from "lucide-react";
import { certifications } from "../../data/portfolioData";
import { CertificatePreviewDialog } from "../ui/CertificatePreviewDialog";
import { SectionHeading } from "../ui/SectionHeading";
import "../../styles/certifications.css";

const certificationTabs = ["Courses & Programs", "Professional Certification"];

export function CertificationsSection({ activeCertification, onCertificationChange }) {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const visibleCertifications = certifications.filter((cert) => cert.category === activeCertification);

  function handleTabKeyDown(event, index) {
    let nextIndex;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % certificationTabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + certificationTabs.length) % certificationTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = certificationTabs.length - 1;
    if (nextIndex === undefined) return;

    event.preventDefault();
    onCertificationChange(certificationTabs[nextIndex]);
    event.currentTarget.parentElement.querySelectorAll('[role="tab"]')[nextIndex].focus();
  }

  return (
    <section className="section-band certs-band" id="certifications">
      <div className="section-shell reveal">
        <SectionHeading kicker="Certifications" title="Credentials" split>
          <div className="tabs" role="tablist" aria-label="Certification categories">
            {certificationTabs.map((tab, index) => (
              <button
                key={tab}
                id={`certification-tab-${index}`}
                className={activeCertification === tab ? "active" : ""}
                type="button"
                role="tab"
                aria-controls="certification-panel"
                aria-selected={activeCertification === tab}
                tabIndex={activeCertification === tab ? 0 : -1}
                onClick={() => onCertificationChange(tab)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                {tab}
              </button>
            ))}
          </div>
        </SectionHeading>
        <div
          className="cert-grid tab-content"
          id="certification-panel"
          key={activeCertification}
          role="tabpanel"
          aria-labelledby={`certification-tab-${certificationTabs.indexOf(activeCertification)}`}
          tabIndex={0}
        >
          {visibleCertifications.map((cert) => (
            <article className="cert-card" key={cert.title}>
              <div className="cert-card-body">
                <Award size={23} aria-hidden="true" />
                <div><h3>{cert.title}</h3><p>{cert.issuer}</p><span>{cert.date}</span></div>
              </div>
              <button className="cert-view-button" type="button" onClick={() => setSelectedCertificate(cert)}>
                <Eye size={17} /> View certificate
              </button>
            </article>
          ))}
        </div>
        <CertificatePreviewDialog certificate={selectedCertificate} onClose={() => setSelectedCertificate(null)} />
      </div>
    </section>
  );
}
