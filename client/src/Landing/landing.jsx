import styles from './index.module.css';
import timeTrackingIcon from './assets/icons/time-tracking.png';
import manageTeam from './assets/images/manageTeam.jpg';
import productivity from './assets/images/productivity.jpg';
import leaderships from './assets/images/leaderships.jpg';
import work from './assets/images/work.jpg';
import makingDecision from './assets/images/makingDecision.jpg';
import reportsIcon from './assets/icons/reports.png';
import pdfImage from './assets/icons/kisspng-pdf-computer-file-clip-art-file-format-document-international-conference-on-materials-energy-april-5b630034cc5aa3.784415241533214772837.png';
import wordImage from './assets/icons/kisspng-microsoft-word-office-open-xml-document-computer-i-word-file-icon-5ab06a4fe9e182.970236431521510991958.png';
import { Link } from 'react-router-dom';
import { Input, Button, SelectDropdown } from '../components/Shared';
import React, { Component }  from 'react';
import relevamientoCompletoWord from "../components/views/assets/PlantillaRelevamiento.docx"
import fraudeCompletoWord from "../components/views/assets/PlantillaFraude.docx"
import desistoL2S from "../components/views/assets/DesistoL2S.docx"
import desistoRUS from "../components/views/assets/DesistoRUS.docx"
import desistoSCS from "../components/views/assets/DesistoSCS.docx"
import fraudeEjemplo from "../components/views/assets/FraudeEjemplo.docx"
import instructivoFO from "../components/views/assets/InstructivoFotografiasOriginales.pdf"
import instructivoGL from "../components/views/assets/InstructivoGeolocalizacion.pdf"
import relevamientoEjemplo from "../components/views/assets/RelevamientoEjemplo.docx"



const landing = () => {
  return (
    <div className={styles.main}>
      <main>
        <section>
          <div>
            <h2 className={styles.sectionTypo}>Plantillas de Informes</h2>
          </div>
          <div className={styles.functionalities}>
            <section>
              <h3 className={styles.titleTypo}>Relevamiento Completo (Vacío)</h3>
              <figure>
                <img src={wordImage} alt="Relevamiento Completo" />
              </figure>
              <p className={styles.paragraphTypo}>
                Planilla en Microsoft Word referente a relevamientos. Los campos dentro del archivo se encuentran incompletos.
              </p>
              <div>
                <a href={relevamientoCompletoWord} download>Click aqui para descargar.</a>
              </div>
            </section>
            <section>
              <h3 className={styles.titleTypo}>Fraude Completo (Vacío)</h3>
              <figure>
                <img src={wordImage} alt="Reports icon" />
              </figure>
              <p className={styles.paragraphTypo}>
                Planilla en Microsoft Word referente a fraudes. Los campos dentro del archivo se encuentran incompletos.
              </p>
              <div>
                <a href={fraudeCompletoWord} download>Click aqui para descargar.</a>
              </div>
            </section>
            <section>
              <h3 className={styles.titleTypo}>Fraude Completo Ejemplo</h3>
              <figure>
                <img src={wordImage} alt="Resource management icon" />
              </figure>
              <p className={styles.paragraphTypo}>
              Planilla en Microsoft Word referente a fraudes. Los campos dentro del archivo se encuentran completados.
              </p>
              <div>
                <a href={fraudeEjemplo} download>Click aqui para descargar.</a>
              </div>
            </section>
            <section className ="section">
              <h3 className={styles.titleTypo}>Relevamiento Completo Ejemplo</h3>
              <figure>
                <img src={wordImage} alt="Resource management icon" />
              </figure>
              <p className={styles.paragraphTypo}>
              Planilla en Microsoft Word referente a relevamientos. Los campos dentro del archivo se encuentran completados.
              </p>
              <div>
                <a href={relevamientoEjemplo} download>Click aqui para descargar.</a>
              </div>
            </section>
          </div>
        </section>

        <section>
          <div>
            <h2 className={styles.sectionTypo}>Plantillas de Desistos</h2>
          </div>
          <div className={styles.functionalities}>
            <section>
              <h3 className={styles.titleTypo}>Plantilla de Desisto (Ejemplo 1)</h3>
              <figure>
                <img src={wordImage} alt="Relevamiento Completo" />
              </figure>
              <p className={styles.paragraphTypo}>
                Planilla en Microsoft Word referente a desistos. El archivo esta basado en el formato aportado por LA SEGUNDA SEGUROS.
              </p>
              <div>
                <a href={desistoL2S} download>Click aqui para descargar.</a>
              </div>
            </section>
            <section>
              <h3 className={styles.titleTypo}>Plantilla de Desisto (Ejemplo 2)</h3>
              <figure>
                <img src={wordImage} alt="Reports icon" />
              </figure>
              <p className={styles.paragraphTypo}>
              Planilla en Microsoft Word referente a desistos. El archivo esta basado en el formato aportado por SAN CRISTOBAL SEGUROS.
              </p>
              <div>
                <a href={desistoSCS} download>Click aqui para descargar.</a>
              </div>
            </section>
            <section>
              <h3 className={styles.titleTypo}>Plantilla de Desisto (Ejemplo 3)</h3>
              <figure>
                <img src={wordImage} alt="Resource management icon" />
              </figure>
              <p className={styles.paragraphTypo}>
              Planilla en Microsoft Word referente a desistos. El archivo esta basado en el formato aportado por RIO URUGUAY SEGUROS.
              </p>
              <div>
                <a href={desistoRUS} download>Click aqui para descargar.</a>
              </div>
            </section>
          </div>
        </section>
        <section>
          <div>
            <h2 className={styles.sectionTypo}>Tutoriales Adicionales</h2>
          </div>
          <div className={styles.functionalities}>
            <section>
              <h3 className={styles.titleTypo}>Instructivo Fotografias Originales</h3>
              <figure>
                <img src={pdfImage} alt="Relevamiento Completo" />
              </figure>
              <p className={styles.paragraphTypo}>
              Documento PDF con instrucciones para solicitar fotografias originales sin metadatos comprometidos.
              </p>
              <div>
                <a href={instructivoFO} download>Click aqui para descargar.</a>
              </div>
            </section>
            <section>
              <h3 className={styles.titleTypo}>Instructivo Geolocalizacion</h3>
              <figure>
                <img src={pdfImage} alt="Reports icon" />
              </figure>
              <p className={styles.paragraphTypo}>
              Documento PDF con instrucciones para solicitar registros de Geolocalizacion de un telefono celular.
              </p>
              <div>
                <a href={instructivoGL} download>Click aqui para descargar.</a>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default landing;
