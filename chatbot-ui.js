/**
 * SOCIALIN ASSISTANT - Frontend Chatbot UI
 * 
 * Interfaccia e micro-interazioni avanzate.
 */

document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSendBtn = document.getElementById('chatbot-send-btn');
    const chatbotAttachBtn = document.getElementById('chatbot-attach-btn');
    const chatbotFile = document.getElementById('chatbot-file');
    
    // Quick Replies predefined
    const quickReplies = [
        "Voglio un sito o funnel",
        "Mi serve una strategia social",
        "Vorrei creare un avatar AI",
        "Mi serve un video o spot",
        "Voglio richiedere una consulenza"
    ];

    let isChatOpen = false;
    let hasWelcomed = false;
    
    // --- AUDIO SYNTHESIS (Twinkle Sound) ---
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioCtx = null;

    function playTwinkle() {
        if (!audioCtx) {
            try { audioCtx = new AudioContext(); } 
            catch(e) { return; } // Silently fail if blocked
        }
        
        if(audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        const t = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        // High frequency sine wave for "magical" feel
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, t);
        osc.frequency.exponentialRampToValueAtTime(2000, t + 0.1);
        
        // Envelope
        gainNode.gain.setValueAtTime(0, t);
        gainNode.gain.linearRampToValueAtTime(0.08, t + 0.05); // Molto dolce
        gainNode.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
        
        osc.start(t);
        osc.stop(t + 0.3);
    }

    // Apre/Chiude Chatbot
    chatbotToggle.addEventListener('click', () => {
        isChatOpen = !isChatOpen;
        chatbotWindow.classList.toggle('active', isChatOpen);
        
        // Audio interaction
        playTwinkle();
        
        // Glow effect
        chatbotToggle.classList.add('glow-pulse');
        setTimeout(() => chatbotToggle.classList.remove('glow-pulse'), 500);

        if (isChatOpen && !hasWelcomed) {
            initChat();
            hasWelcomed = true;
        }
    });

    chatbotClose.addEventListener('click', () => {
        isChatOpen = false;
        chatbotWindow.classList.remove('active');
        playTwinkle();
    });

    // Inizializza la chat
    function initChat() {
        appendMessage("bot", "Ciao, sono Socialin Assistant. Posso aiutarti a capire quale percorso è più adatto al tuo brand: social media, branding, sito web, funnel, e-commerce, AI content creation o Avatar Strategy AI.");
        appendQuickReplies(quickReplies);
    }

    // Aggiunge un messaggio in chat
    function appendMessage(sender, text) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('chat-msg', sender === 'bot' ? 'msg-bot' : 'msg-user');
        msgDiv.innerHTML = `<div class="msg-content">${text}</div>`;
        chatbotMessages.appendChild(msgDiv);
        scrollToBottom();
    }

    // Aggiunge pulsante CTA
    function appendCtaButton(text, href) {
        const ctaDiv = document.createElement('div');
        ctaDiv.classList.add('chat-cta-wrapper');
        ctaDiv.innerHTML = `<a href="${href}" class="chat-cta-btn" onclick="document.getElementById('chatbot-close').click()">${text}</a>`;
        chatbotMessages.appendChild(ctaDiv);
        scrollToBottom();
    }

    // Aggiunge pulsanti Quick Reply
    function appendQuickReplies(replies) {
        const qrContainer = document.createElement('div');
        qrContainer.classList.add('quick-replies-container');
        
        replies.forEach(reply => {
            const btn = document.createElement('button');
            btn.classList.add('quick-reply-btn');
            btn.innerText = reply;
            btn.addEventListener('click', () => {
                handleUserMessage(reply);
                qrContainer.remove(); // Rimuove le opzioni dopo la scelta
            });
            qrContainer.appendChild(btn);
        });
        
        chatbotMessages.appendChild(qrContainer);
        scrollToBottom();
    }

    // Gestisce l'invio testo libero
    chatbotSendBtn.addEventListener('click', () => {
        const text = chatbotInput.value.trim();
        if (text) {
            chatbotInput.value = '';
            handleUserMessage(text);
            const qr = document.querySelector('.quick-replies-container');
            if(qr) qr.remove();
        }
    });

    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') chatbotSendBtn.click();
    });

    // Simulazione allegato visivo (Solo UI)
    chatbotAttachBtn.addEventListener('click', () => {
        chatbotFile.click();
    });

    chatbotFile.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            const fileName = e.target.files[0].name;
            appendMessage("user", `📎 Allegato inviato: ${fileName}`);
            
            setTimeout(() => {
                appendMessage("bot", "Ho ricevuto l'allegato! Questo mi aiuta a capire meglio la tua estetica. Qual è l'obiettivo principale di questo progetto?");
            }, 1000);
        }
    });

    // Gestione logica messaggi e routing verso AI
    function handleUserMessage(text) {
        appendMessage("user", text);
        
        // Invia ad AI
        sendToAI(text);
    }

    /**
     * LOCAL INTENT MATCHING (NO EXTERNAL API)
     */
    async function sendToAI(userText) {
        const typingDiv = document.createElement('div');
        typingDiv.classList.add('chat-msg', 'msg-bot', 'typing-indicator');
        typingDiv.innerHTML = '<div class="msg-content">Sta scrivendo...</div>';
        chatbotMessages.appendChild(typingDiv);
        scrollToBottom();

        // Simulazione ritardo di rete per maggiore realismo
        setTimeout(() => {
            typingDiv.remove();
            const response = getLocalResponse(userText);
            appendMessage("bot", response);
            
            // Re-inserisce le quick reply se siamo nel messaggio di fallback
            if (response.startsWith("Posso aiutarti a orientarti")) {
                appendQuickReplies(quickReplies);
            }
        }, 1200);
    }

    function getLocalResponse(text) {
        const lowerText = text.toLowerCase();
        
        const intents = [
            {
                triggers: ["servizi", "cosa fate", "socialin", "agenzia", "comunicazione"],
                response: "Socialin Communication / Federica Creative integra branding, gestione social, contenuti foto e video, siti web, funnel, e-commerce, campagne pubblicitarie, avatar AI, automazioni e consulenza strategica. Posso aiutarti a capire da quale servizio partire."
            },
            {
                triggers: ["sito", "funnel", "landing", "ecommerce", "e-commerce", "shop"],
                response: "Possiamo progettare un sito, una landing page o un funnel in base al tuo obiettivo: presentare il brand, raccogliere contatti, vendere prodotti o organizzare richieste di consulenza. Per orientarti bene: hai già un sito oppure parti da zero?"
            },
            {
                triggers: ["social", "instagram", "tiktok", "facebook", "piano editoriale", "contenuti"],
                response: "Una strategia social parte da obiettivo, target, posizionamento, contenuti, calendario editoriale e analisi dei risultati. Socialin può affiancarti nella costruzione del sistema, non solo nella pubblicazione dei post. Qual è il tuo settore?"
            },
            {
                triggers: ["avatar", "ai", "intelligenza artificiale", "virtual influencer", "strategia senza volto"],
                response: "Gli avatar AI possono essere usati per contenuti, video, presentazioni, assistenti virtuali e strategie senza volto. Il progetto viene costruito partendo da identità, tono di voce, immagini, script, formati video e obiettivo di comunicazione. Vuoi usare un avatar per il tuo brand, per vendere un servizio o per creare un personaggio digitale?"
            },
            {
                triggers: ["video", "spot", "reel", "fotografia", "shooting", "contenuti"],
                response: "Socialin può progettare contenuti video, reel, spot, shooting fotografici e visual per i social, con attenzione a identità visiva, messaggio e obiettivo strategico. Hai già un prodotto o servizio da raccontare?"
            },
            {
                triggers: ["consulenza", "preventivo", "contatto", "prezzo", "costi", "budget"],
                response: "Per una consulenza o un preventivo serve prima comprendere il progetto, il settore, gli obiettivi e i canali già attivi. Puoi lasciare una breve descrizione del tuo bisogno e Socialin potrà ricontattarti tramite la sezione contatti del sito."
            },
            {
                triggers: ["aia pura bio", "filiera", "bianca"],
                response: "Aia Pura Bio è uno studio di fattibilità strategica su un modello consortile ipotetico di filiera avicola biologica. Il progetto non deve essere presentato come azienda già attiva o come caso con vendite validate."
            },
            {
                triggers: ["fisiointegra", "fisioterapia", "salute", "riabilitazione"],
                response: "FisioIntegra è un caso di strategia comunicativa dedicato a fisioterapia, prevenzione, riabilitazione ed educazione al movimento. Il chatbot non fornisce diagnosi, consigli medici o indicazioni terapeutiche: per esigenze personali è necessario rivolgersi a professionisti sanitari qualificati."
            },
            {
                triggers: ["essereape", "miele", "apicoltura", "melia"],
                response: "EssereApe è un caso dedicato all’apicoltura etica, territoriale e digitale, con focus su racconto della filiera, tracciabilità e assistente virtuale Mèlia."
            },
            {
                triggers: ["claudio", "scrittore", "libro", "romanzo", "autore"],
                response: "Il caso Claudio Stella riguarda una proposta strategica di posizionamento autore, contenuti social e promozione editoriale. È un caso reale potenziale, non un risultato già validato."
            }
        ];

        for (const intent of intents) {
            for (const trigger of intent.triggers) {
                if (lowerText.includes(trigger)) {
                    return intent.response;
                }
            }
        }

        return "Posso aiutarti a orientarti tra sito/funnel, strategia social, avatar AI, contenuti video, branding e consulenza. Puoi scegliere una delle opzioni qui sotto oppure raccontarmi in breve di cosa hai bisogno.";
    }

    function scrollToBottom() {
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
});
