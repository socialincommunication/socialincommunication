const fs = require('fs');

const filePath = '/Users/macbookretina/Downloads/SOCIALIN_SITO_WEB/fisiointegra-sistema-visivo/fisiointegra-sistema-visivo-completo.html';

try {
  let html = fs.readFileSync(filePath, 'utf8');

  const css = `
<style>
.fisio-add-grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; }
.fisio-add-grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; }
.fisio-add-grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 32px; }
.fisio-add-card { background: white; border: 1px solid rgba(0,0,0,0.05); padding: 32px; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.02); }
.fisio-add-num { font-family: var(--display); font-size: 24px; font-weight: 700; color: var(--teal); margin-bottom: 16px; }
.fisio-add-ctitle { font-family: var(--display); font-size: 20px; font-weight: 700; color: var(--petrolio); margin-bottom: 12px; }
.fisio-add-cdesc { font-family: var(--body); font-size: 15px; color: #555; line-height: 1.5; margin:0;}

.fisio-add-card-img { background: white; border-radius: 16px; overflow: hidden; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 4px 12px rgba(0,0,0,0.02); display: flex; flex-direction: column; }
.fisio-add-img { width: 100%; height: 200px; object-fit: cover; border-bottom: 1px solid rgba(0,0,0,0.05); }
.fisio-add-card-body { padding: 24px; flex-grow: 1; }
.fisio-add-label { font-size: 12px; font-weight: 700; color: var(--teal); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px; }
.fisio-add-meta { display: flex; flex-direction: column; gap: 8px; margin-top: 16px; font-size: 13px; color: #666; border-top: 1px solid rgba(0,0,0,0.05); padding-top: 16px; }
.fisio-add-meta strong { color: var(--petrolio); }

.fisio-add-box { background: var(--crema); border-radius: 16px; padding: 32px; border: 1px solid rgba(0,0,0,0.05); }
.fisio-add-box h3 { font-family: var(--display); font-size: 20px; font-weight: 700; color: var(--petrolio); margin-bottom: 16px; }
.fisio-add-box ul { margin: 0; padding-left: 20px; color: #555; font-size: 15px; line-height: 1.6; }
.fisio-add-box p { margin: 0; color: #555; font-size: 15px; line-height: 1.6; }

.fisio-add-highlights-grid { display: flex; flex-wrap: wrap; gap: 32px; justify-content: flex-start; margin-top: 32px; }
.fisio-add-highlight-item { display: flex; flex-direction: column; align-items: center; gap: 12px; width: 80px; }
.fisio-add-highlight-circle { width: 80px; height: 80px; border-radius: 50%; background: white; border: 2px solid var(--teal); display: flex; align-items: center; justify-content: center; overflow: hidden; padding: 4px; }
.fisio-add-highlight-circle img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
.fisio-add-highlight-label { font-size: 13px; font-weight: 600; color: var(--petrolio); text-align: center; }

.fisio-add-text-card { background: white; border-left: 4px solid var(--teal); padding: 24px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.02); }
.fisio-add-text-card-num { font-size: 14px; font-weight: 700; color: var(--teal); margin-bottom: 8px; }
.fisio-add-text-card h3 { font-family: var(--display); font-size: 18px; font-weight: 700; color: var(--petrolio); margin-bottom: 12px; line-height: 1.3; margin-top:0; }
.fisio-add-text-card p { font-size: 15px; color: #555; line-height: 1.5; margin: 0; }
</style>
`;

  const section1 = `
  <section class="sec" id="obiettivo">
    <div class="sec-content">
      <h2 class="sec-title">Obiettivo del documento</h2>
      <p class="sec-desc" style="max-width:800px; margin-bottom: 40px; font-size: 1.1rem; line-height: 1.6; color: var(--petrolio);">Questo documento presenta un prototipo operativo di sistema visivo-editoriale per FisioIntegra. Il progetto integra identità, contenuti informativi, format social, storytelling, touchpoint digitali, piano editoriale e strumenti di monitoraggio futuri. La comunicazione è pensata per rendere più leggibili i temi del movimento, della prevenzione e del percorso, senza sostituire il rapporto professionale o formulare promesse di risultato.</p>
      <div class="fisio-add-grid-4">
        <div class="fisio-add-card">
          <div class="fisio-add-num">01</div>
          <h3 class="fisio-add-ctitle">Identità visiva</h3>
          <p class="fisio-add-cdesc">Palette, tipografia, gerarchie e applicazioni coerenti del sistema FisioIntegra.</p>
        </div>
        <div class="fisio-add-card">
          <div class="fisio-add-num">02</div>
          <h3 class="fisio-add-ctitle">Sistema social</h3>
          <p class="fisio-add-cdesc">Feed preview, template Instagram, contenuti educativi e organizzazione dei formati.</p>
        </div>
        <div class="fisio-add-card">
          <div class="fisio-add-num">03</div>
          <h3 class="fisio-add-ctitle">Educazione e storytelling</h3>
          <p class="fisio-add-cdesc">Reel, carousel e spot progettati per orientare, informare e creare fiducia.</p>
        </div>
        <div class="fisio-add-card">
          <div class="fisio-add-num">04</div>
          <h3 class="fisio-add-ctitle">Piano operativo</h3>
          <p class="fisio-add-cdesc">Calendario, workflow, dashboard e KPI futuri come strumenti di pianificazione.</p>
        </div>
      </div>
    </div>
  </section>
`;

  const section2 = `
  <section class="sec" id="direzioni-visive">
    <div class="sec-content">
      <h2 class="sec-title">Sei direzioni visive</h2>
      <p class="sec-desc">Sei territori narrativi coerenti, ciascuno con una funzione comunicativa precisa. Insieme costruiscono il sistema visivo di FisioIntegra.</p>
      <div class="fisio-add-grid-3">
        <div class="fisio-add-card-img">
          <img src="assets/problema-movimento.jpg" alt="MOVIMENTO CONSAPEVOLE" class="fisio-add-img">
          <div class="fisio-add-card-body">
            <div class="fisio-add-label">MOVIMENTO CONSAPEVOLE</div>
            <h3 class="fisio-add-ctitle">Muoversi con maggiore consapevolezza</h3>
            <div class="fisio-add-meta">
              <span><strong>Funzione:</strong> Awareness / Educazione</span>
              <span><strong>Emozione:</strong> Fiducia e vicinanza</span>
              <span><strong>Colore:</strong> Petrolio / Teal</span>
              <span><strong>Asset:</strong> Movimento quotidiano, postura, gesto semplice</span>
            </div>
          </div>
        </div>
        <div class="fisio-add-card-img">
          <img src="assets/02_ascolto.png" alt="ASCOLTO E ORIENTAMENTO" class="fisio-add-img">
          <div class="fisio-add-card-body">
            <div class="fisio-add-label">ASCOLTO E ORIENTAMENTO</div>
            <h3 class="fisio-add-ctitle">Il primo passo è comprendere il percorso</h3>
            <div class="fisio-add-meta">
              <span><strong>Funzione:</strong> Informazione / Relazione</span>
              <span><strong>Emozione:</strong> Accoglienza e chiarezza</span>
              <span><strong>Colore:</strong> Crema / Verde salvia</span>
              <span><strong>Asset:</strong> Dialogo, ascolto, ambiente professionale</span>
            </div>
          </div>
        </div>
        <div class="fisio-add-card-img">
          <img src="assets/metodo-fisiointegra.jpg" alt="METODO E PERCORSO" class="fisio-add-img">
          <div class="fisio-add-card-body">
            <div class="fisio-add-label">METODO E PERCORSO</div>
            <h3 class="fisio-add-ctitle">Un metodo leggibile, passo dopo passo</h3>
            <div class="fisio-add-meta">
              <span><strong>Funzione:</strong> Consideration</span>
              <span><strong>Emozione:</strong> Ordine e affidabilità</span>
              <span><strong>Colore:</strong> Petrolio / Bianco caldo</span>
              <span><strong>Asset:</strong> Metodo, grafica, percorso visuale</span>
            </div>
          </div>
        </div>
        <div class="fisio-add-card-img">
          <img src="assets/problema-prevenzione.jpg" alt="PREVENZIONE QUOTIDIANA" class="fisio-add-img">
          <div class="fisio-add-card-body">
            <div class="fisio-add-label">PREVENZIONE QUOTIDIANA</div>
            <h3 class="fisio-add-ctitle">Piccoli gesti, continuità, attenzione</h3>
            <div class="fisio-add-meta">
              <span><strong>Funzione:</strong> Educazione</span>
              <span><strong>Emozione:</strong> Cura e costanza</span>
              <span><strong>Colore:</strong> Verde / Salvia</span>
              <span><strong>Asset:</strong> Pausa attiva, movimento leggero, quotidianità</span>
            </div>
          </div>
        </div>
        <div class="fisio-add-card-img">
          <img src="assets/Post “Tornare allo sport”.png" alt="MOVIMENTO E SPORT" class="fisio-add-img">
          <div class="fisio-add-card-body">
            <div class="fisio-add-label">MOVIMENTO E SPORT</div>
            <h3 class="fisio-add-ctitle">Il movimento come continuità</h3>
            <div class="fisio-add-meta">
              <span><strong>Funzione:</strong> Engagement</span>
              <span><strong>Emozione:</strong> Energia e fiducia</span>
              <span><strong>Colore:</strong> Teal / Verde acqua</span>
              <span><strong>Asset:</strong> Attività fisica, recupero graduale, dinamismo</span>
            </div>
          </div>
        </div>
        <div class="fisio-add-card-img">
          <img src="assets/05_cta.png" alt="CONTATTO E RELAZIONE" class="fisio-add-img">
          <div class="fisio-add-card-body">
            <div class="fisio-add-label">CONTATTO E RELAZIONE</div>
            <h3 class="fisio-add-ctitle">Un contatto che orienta</h3>
            <div class="fisio-add-meta">
              <span><strong>Funzione:</strong> CTA / Conversione informativa</span>
              <span><strong>Emozione:</strong> Sicurezza e prossimità</span>
              <span><strong>Colore:</strong> Petrolio / Crema</span>
              <span><strong>Asset:</strong> Contatto, appuntamento, informazione, team</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

  const section4 = `
  <section class="sec" id="fiducia">
    <div class="sec-content">
      <h2 class="sec-title">Perché il movimento comunica fiducia</h2>
      <p class="sec-desc">Sei messaggi visivi che mostrano come una comunicazione chiara, coerente e responsabile possa orientare la relazione con il pubblico.</p>
      <div class="fisio-add-grid-3">
        <div class="fisio-add-text-card">
          <div class="fisio-add-text-card-num">1</div>
          <h3>La fiducia non si dichiara. Si costruisce.</h3>
          <p>La comunicazione deve essere coerente, riconoscibile e rispettosa della persona.</p>
        </div>
        <div class="fisio-add-text-card">
          <div class="fisio-add-text-card-num">2</div>
          <h3>Un linguaggio chiaro riduce l’incertezza.</h3>
          <p>Ogni contenuto deve rendere il percorso più comprensibile, senza creare aspettative improprie.</p>
        </div>
        <div class="fisio-add-text-card">
          <div class="fisio-add-text-card-num">3</div>
          <h3>Il metodo rende il percorso leggibile.</h3>
          <p>L’identità visiva trasforma un servizio complesso in passaggi ordinati e orientanti.</p>
        </div>
        <div class="fisio-add-text-card">
          <div class="fisio-add-text-card-num">4</div>
          <h3>La prevenzione vive nella quotidianità.</h3>
          <p>Piccoli gesti, consapevolezza e continuità diventano contenuti educativi accessibili.</p>
        </div>
        <div class="fisio-add-text-card">
          <div class="fisio-add-text-card-num">5</div>
          <h3>Ogni contenuto deve orientare, non prescrivere.</h3>
          <p>Reel, post e carousel informano, ma non sostituiscono valutazioni professionali individuali.</p>
        </div>
        <div class="fisio-add-text-card">
          <div class="fisio-add-text-card-num">6</div>
          <h3>Il contatto è il primo passo per conoscere il percorso.</h3>
          <p>La CTA non promette risultati: invita a richiedere informazioni e a comprendere il servizio.</p>
        </div>
      </div>
    </div>
  </section>
`;

  const section5 = `
  <section class="sec" id="highlights">
    <div class="sec-content">
      <h2 class="sec-title">Otto copertine evidenziate</h2>
      <p class="sec-desc">Icone e copertine essenziali, coerenti con il sistema. Una grammatica visiva per rendere più chiari i principali capitoli di FisioIntegra.</p>
      <div class="fisio-add-highlights-grid">
        <div class="fisio-add-highlight-item">
          <div class="fisio-add-highlight-circle"><img src="assets/metodo-fisiointegra.jpg" alt="Metodo"></div>
          <div class="fisio-add-highlight-label">Metodo</div>
        </div>
        <div class="fisio-add-highlight-item">
          <div class="fisio-add-highlight-circle"><img src="assets/problema-movimento.jpg" alt="Movimento"></div>
          <div class="fisio-add-highlight-label">Movimento</div>
        </div>
        <div class="fisio-add-highlight-item">
          <div class="fisio-add-highlight-circle"><img src="assets/problema-prevenzione.jpg" alt="Prevenzione"></div>
          <div class="fisio-add-highlight-label">Prevenzione</div>
        </div>
        <div class="fisio-add-highlight-item">
          <div class="fisio-add-highlight-circle"><img src="assets/problema-postura.jpg" alt="Falsi miti"></div>
          <div class="fisio-add-highlight-label">Falsi miti</div>
        </div>
        <div class="fisio-add-highlight-item">
          <div class="fisio-add-highlight-circle"><img src="assets/_anteprima_carosello.png" alt="Percorsi"></div>
          <div class="fisio-add-highlight-label">Percorsi</div>
        </div>
        <div class="fisio-add-highlight-item">
          <div class="fisio-add-highlight-circle"><img src="assets/Post “Tornare allo sport”.png" alt="Sport"></div>
          <div class="fisio-add-highlight-label">Sport</div>
        </div>
        <div class="fisio-add-highlight-item">
          <div class="fisio-add-highlight-circle"><img src="assets/02_ascolto.png" alt="FAQ"></div>
          <div class="fisio-add-highlight-label">FAQ</div>
        </div>
        <div class="fisio-add-highlight-item">
          <div class="fisio-add-highlight-circle"><img src="assets/05_cta.png" alt="Contatti"></div>
          <div class="fisio-add-highlight-label">Contatti</div>
        </div>
      </div>
    </div>
  </section>
`;

  const section6 = `
  <section class="sec" id="workflow">
    <div class="sec-content">
      <h2 class="sec-title">Dal materiale al KPI futuro</h2>
      <p class="sec-desc">Nove fasi sequenziali per produrre contenuti con metodo: dalla scelta della strategia fino alla lettura dei segnali futuri.</p>
      <div class="fisio-add-grid-3">
        <div class="fisio-add-card">
          <div class="fisio-add-num">1</div>
          <h3 class="fisio-add-ctitle">Strategia</h3>
          <p class="fisio-add-cdesc">Scelta del pilastro e dell’obiettivo.</p>
        </div>
        <div class="fisio-add-card">
          <div class="fisio-add-num">2</div>
          <h3 class="fisio-add-ctitle">Idea</h3>
          <p class="fisio-add-cdesc">Definizione del formato e dell’angolo narrativo.</p>
        </div>
        <div class="fisio-add-card">
          <div class="fisio-add-num">3</div>
          <h3 class="fisio-add-ctitle">Asset</h3>
          <p class="fisio-add-cdesc">Selezione di foto, video, visual o prompt dedicati.</p>
        </div>
        <div class="fisio-add-card">
          <div class="fisio-add-num">4</div>
          <h3 class="fisio-add-ctitle">Copywriting</h3>
          <p class="fisio-add-cdesc">Caption, microcopy e CTA essenziale.</p>
        </div>
        <div class="fisio-add-card">
          <div class="fisio-add-num">5</div>
          <h3 class="fisio-add-ctitle">Design</h3>
          <p class="fisio-add-cdesc">Applicazione del contenuto nel template visivo.</p>
        </div>
        <div class="fisio-add-card">
          <div class="fisio-add-num">6</div>
          <h3 class="fisio-add-ctitle">Revisione</h3>
          <p class="fisio-add-cdesc">Controllo editoriale, coerenza del tone of voice e chiarezza del messaggio.</p>
        </div>
        <div class="fisio-add-card">
          <div class="fisio-add-num">7</div>
          <h3 class="fisio-add-ctitle">Approvazione</h3>
          <p class="fisio-add-cdesc">Validazione finale del contenuto prima della pubblicazione.</p>
        </div>
        <div class="fisio-add-card">
          <div class="fisio-add-num">8</div>
          <h3 class="fisio-add-ctitle">Scheduling</h3>
          <p class="fisio-add-cdesc">Inserimento in calendario e organizzazione dei formati.</p>
        </div>
        <div class="fisio-add-card">
          <div class="fisio-add-num">9</div>
          <h3 class="fisio-add-ctitle">Analisi</h3>
          <p class="fisio-add-cdesc">Lettura futura di reach, salvataggi, interazioni, click e richieste ricevute.</p>
        </div>
      </div>
      <div class="fisio-add-grid-2" style="margin-top: 40px;">
        <div class="fisio-add-box">
          <h3>Prima di pubblicare</h3>
          <ul>
            <li>Il messaggio è chiaro e non ambiguo?</li>
            <li>Il visual rispetta il sistema FisioIntegra?</li>
            <li>La CTA è singola e comprensibile?</li>
            <li>Il tono è informativo e non prescrittivo?</li>
            <li>Il contenuto evita promesse o risultati garantiti?</li>
          </ul>
        </div>
        <div class="fisio-add-box">
          <h3>Guida alla lettura</h3>
          <p>Questo sistema traduce una strategia di comunicazione in contenuti, formati e touchpoint digitali. I dati, i numeri e i KPI indicati hanno funzione progettuale e futura: non rappresentano risultati già ottenuti, ma parametri da monitorare in una successiva fase reale di pubblicazione e analisi.</p>
        </div>
      </div>
    </div>
  </section>
`;

  // Insert CSS
  html = html.replace('</head>', css + '</head>');

  // Section 1 -> Before <section class="sec" id="identita">
  html = html.replace('<section class="sec" id="identita">', section1 + '\n    <section class="sec" id="identita">');

  // Section 2 -> Before <section class="sec" id="spot">
  html = html.replace('<section class="sec" id="spot">', section2 + '\n    <section class="sec" id="spot">');

  // Feed preview 3x3 already exists.

  // Section 4 -> Before <section class="sec" id="calendario">
  html = html.replace('<section class="sec" id="calendario">', section4 + '\n    <section class="sec" id="calendario">');

  // Section 5 -> Before <section class="sec" id="calendario"> (so it ends up between 4 and calendario)
  html = html.replace('<section class="sec" id="calendario">', section5 + '\n    <section class="sec" id="calendario">');

  // Section 6 -> Before <section class="sec" id="prompt-ai">
  html = html.replace('<section class="sec" id="prompt-ai">', section6 + '\n    <section class="sec" id="prompt-ai">');

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('Sections added successfully.');

} catch (err) {
  console.error('Error:', err);
}
