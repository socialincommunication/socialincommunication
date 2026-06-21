document.addEventListener('DOMContentLoaded', () => {

    // 1. Click Glow Effect
    document.addEventListener('click', (e) => {
        if (window.matchMedia("(hover: none)").matches) return; // Skip on touch
        const glow = document.createElement('div');
        glow.className = 'click-glow';
        glow.style.left = e.pageX + 'px';
        glow.style.top = e.pageY + 'px';
        document.body.appendChild(glow);
        setTimeout(() => glow.remove(), 600);
    });

    // 2. Sticky Menu active state
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 100;
            const height = sec.offsetHeight;
            if (top >= offset && top < offset + height) {
                current = sec.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 3. Tabs per Calendario
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });

    // 4. Generazione Archivio Visivo
    const archiveGrid = document.getElementById('archive-grid');
    if (archiveGrid && typeof assetsManifest !== 'undefined') {
        const renderArchive = (filter = 'tutti') => {
            archiveGrid.innerHTML = '';
            let count = 0;
            assetsManifest.forEach(asset => {
                if (filter !== 'tutti' && asset.categoria !== filter && filter !== 'da_generare') return;
                if (filter === 'da_generare' && asset.stato !== 'DA PRODURRE') return;

                count++;
                const card = document.createElement('div');
                card.className = 'gallery-card card-glow';
                
                const badgeClass = asset.stato === 'DA PRODURRE' ? 'da-generare' : 
                                  (asset.stato === 'DA VALIDARE' ? 'da-validare' : 'pronto');

                let visualHTML = `<img src="${asset.file}" class="gallery-img" onerror="this.src=''; this.parentElement.innerHTML='<div class=\\'placeholder-img\\'>${asset.soggetto}<br><br><span class=\\'badge da-generare\\'>DA PRODURRE</span></div>';">`;
                
                if (asset.stato === 'DA PRODURRE') {
                    visualHTML = `<div class="placeholder-img">${asset.soggetto}<br><br><span class="badge da-generare">DA PRODURRE</span></div>`;
                }

                card.innerHTML = `
                    <div class="gallery-img-container">${visualHTML}</div>
                    <div class="gallery-info">
                        <div class="gallery-category">${asset.categoria}</div>
                        <div class="gallery-title">${asset.soggetto}</div>
                        <span class="badge ${badgeClass}">${asset.stato}</span>
                    </div>
                `;
                
                card.addEventListener('click', () => {
                    openModal(`
                        <h3 style="color: var(--avorio); margin-bottom: 1.5rem; font-size: 1.4rem; line-height: 1.3;">${asset.soggetto}</h3>
                        <div style="margin-bottom: 1.25rem;">
                            <span style="color: var(--oro-imperiale); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 0.25rem;">Categoria</span>
                            <span style="color: var(--grigio-gelo); font-size: 0.95rem;">${asset.categoria}</span>
                        </div>
                        <div style="margin-bottom: 1.25rem;">
                            <span style="color: var(--oro-imperiale); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 0.25rem;">Descrizione</span>
                            <p style="color: var(--grigio-gelo); line-height: 1.6; font-size: 0.95rem; margin: 0;">${asset.descrizione}</p>
                        </div>
                        <div style="margin-bottom: 1.5rem;">
                            <span style="color: var(--oro-imperiale); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 0.25rem;">Funzione Editoriale</span>
                            <p style="color: var(--grigio-gelo); line-height: 1.6; font-size: 0.95rem; margin: 0;">${asset.funzione}</p>
                        </div>
                        <div class="modal-meta" style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1);">
                            <span style="color: var(--grigio-gelo); margin-right: 0.5rem;">Stato:</span> <span class="badge ${badgeClass}">${asset.stato}</span>
                        </div>
                    `);
                });
                archiveGrid.appendChild(card);
            });

            if (count === 0 && filter === 'da_generare') {
                archiveGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; border: 1px dashed rgba(255,255,255,0.1); border-radius: 8px;">
                        <h4 style="color: var(--avorio); margin-bottom: 0.5rem; font-size: 1.1rem; letter-spacing: 1px;">NESSUN ASSET DA PRODURRE IN QUESTA FASE</h4>
                        <p style="color: var(--grigio-gelo); font-size: 0.9rem; max-width: 400px; margin: 0 auto; line-height: 1.5;">Le immagini previste per il sistema visuale sono state integrate nell’archivio disponibile.</p>
                    </div>
                `;
            }
        };
        
        renderArchive();

        const filterBtns = document.querySelectorAll('.gallery-filters .filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderArchive(btn.dataset.filter);
            });
        });
    }

    // 5. Modali generiche (Spot, Template, Feed, Carosello)
    const modalOverlay = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.modal-close');

    function openModal(htmlContent) {
        modalBody.innerHTML = htmlContent;
        modalOverlay.classList.add('active');
    }

    if(closeBtn) {
        closeBtn.addEventListener('click', () => modalOverlay.classList.remove('active'));
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) modalOverlay.classList.remove('active');
        });
    }

    // Trigger modali per Feed
    document.querySelectorAll('.insta-post').forEach(post => {
        post.addEventListener('click', () => {
            const hook = post.dataset.hook || '';
            const obj = post.dataset.obj || '';
            const cta = post.dataset.cta || '';
            const stato = post.dataset.stato || 'PRONTO';
            const pilastro = post.dataset.pilastro || '';
            
            openModal(`
                <h3>Contenuto Instagram</h3>
                <p><strong>Hook / Copy:</strong> ${hook}</p>
                <p><strong>Pilastro:</strong> ${pilastro}</p>
                <p><strong>Obiettivo:</strong> ${obj}</p>
                <p><strong>CTA:</strong> ${cta}</p>
                <div class="modal-meta">
                    Stato: <span class="badge ${stato.includes('GENERARE') ? 'da-generare' : 'pronto'}">${stato}</span>
                </div>
            `);
        });
    });

    // Trigger modali per Carosello
    document.querySelectorAll('.car-slide').forEach(slide => {
        slide.addEventListener('click', () => {
            openModal(`
                <h3>${slide.querySelector('.car-title').innerText}</h3>
                <p>${slide.querySelector('.car-sub').innerText}</p>
                <p><em>Nota creativa: Usare luce fredda, mantenere il design coerente con la palette.</em></p>
                <div class="modal-meta">Stato: <span class="badge da-validare">DA VALIDARE</span></div>
            `);
        });
    });

    // --- SPOT VIDEO PLAYER LOGIC ---
    const video = document.getElementById('spotVideo');
    const audioCta = document.getElementById('spotAudioCta');
    const playPauseBtn = document.getElementById('spotPlayPause');
    const muteToggleBtn = document.getElementById('spotMuteToggle');
    const fullscreenBtn = document.getElementById('spotFullscreen');
    const timeline = document.getElementById('spotTimeline');
    const currentTimeEl = document.getElementById('spotCurrentTime');
    const durationEl = document.getElementById('spotDuration');
    const statusEl = document.getElementById('spotVideoStatus');

    if (video) {
        // Format time (seconds to m:ss)
        const formatTime = (timeInSeconds) => {
            if (isNaN(timeInSeconds)) return "0:00";
            const m = Math.floor(timeInSeconds / 60);
            const s = Math.floor(timeInSeconds % 60);
            return `${m}:${s < 10 ? '0' : ''}${s}`;
        };

        // Update timeline & time display
        video.addEventListener('timeupdate', () => {
            timeline.value = video.currentTime;
            currentTimeEl.textContent = formatTime(video.currentTime);
        });

        // Set duration when metadata is loaded
        video.addEventListener('loadedmetadata', () => {
            timeline.max = video.duration;
            durationEl.textContent = formatTime(video.duration);
        });

        // Timeline interaction
        timeline.addEventListener('input', () => {
            video.currentTime = timeline.value;
        });

        // Play/Pause toggle
        const togglePlay = () => {
            if (video.paused) {
                video.play();
                playPauseBtn.textContent = 'Pausa';
            } else {
                video.pause();
                playPauseBtn.textContent = 'Play';
            }
        };

        playPauseBtn.addEventListener('click', togglePlay);
        video.addEventListener('click', togglePlay); // clicking video toggles play/pause after initial unmute

        // First interaction: unmute and hide CTA
        const activateAudio = (e) => {
            if (e) {
                e.stopPropagation(); // prevent triggering video click
            }
            video.muted = false;
            muteToggleBtn.textContent = 'Audio on';
            audioCta.classList.add('hidden');
            statusEl.textContent = 'Audio attivato';
            statusEl.classList.add('show');
            setTimeout(() => statusEl.classList.remove('show'), 2000);
            
            // Remove this specific listener so future clicks on video just toggle play/pause
            audioCta.removeEventListener('click', activateAudio);

            // Se il video era in pausa a causa del prefers-reduced-motion, fallo partire
            if (video.paused) {
                video.play();
                playPauseBtn.textContent = 'Pausa';
            }
        };

        audioCta.addEventListener('click', activateAudio);

        // Mute toggle
        muteToggleBtn.addEventListener('click', () => {
            video.muted = !video.muted;
            muteToggleBtn.textContent = video.muted ? 'Audio off' : 'Audio on';
            if (video.muted) {
                audioCta.classList.remove('hidden');
            } else {
                audioCta.classList.add('hidden');
            }
        });

        // Fullscreen
        fullscreenBtn.addEventListener('click', () => {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) { /* Safari */
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) { /* IE11 */
                video.msRequestFullscreen();
            }
        });

        // Keyboard support
        video.addEventListener('keydown', (e) => {
            switch(e.key.toLowerCase()) {
                case ' ':
                case 'k':
                    e.preventDefault();
                    togglePlay();
                    break;
                case 'm':
                    muteToggleBtn.click();
                    break;
                case 'arrowright':
                    video.currentTime = Math.min(video.duration, video.currentTime + 5);
                    break;
                case 'arrowleft':
                    video.currentTime = Math.max(0, video.currentTime - 5);
                    break;
            }
        });

        // Intersection Observer to pause when scrolling away
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting && !video.paused) {
                    video.pause();
                    playPauseBtn.textContent = 'Play';
                } else if (entry.isIntersecting && video.paused && entry.intersectionRatio >= 0.5) {
                    // Solo in autoplay silente e se non c'è prefers-reduced-motion
                    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                    if (video.muted && !prefersReducedMotion) {
                        video.play().catch(() => {});
                        playPauseBtn.textContent = 'Pausa';
                    }
                }
            });
        }, { threshold: [0, 0.5] });

        observer.observe(video);

        // TEST 08 - PREFERS REDUCED MOTION
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            video.autoplay = false;
            video.pause();
            playPauseBtn.textContent = 'Play';
            audioCta.querySelector('span:last-child').textContent = 'Riproduci spot';
        }

        // TEST 04 - FINE VIDEO
        video.addEventListener('ended', () => {
            playPauseBtn.textContent = 'Rivedi lo spot';
        });

        const originalTogglePlay = togglePlay;
        playPauseBtn.removeEventListener('click', togglePlay);
        playPauseBtn.addEventListener('click', () => {
            if (video.ended || playPauseBtn.textContent === 'Rivedi lo spot') {
                video.currentTime = 0;
                video.muted = true;
                muteToggleBtn.textContent = 'Audio off';
                audioCta.classList.remove('hidden');
                audioCta.querySelector('span:last-child').textContent = 'Attiva audio';
                audioCta.addEventListener('click', activateAudio);
                video.play();
                playPauseBtn.textContent = 'Pausa';
            } else {
                originalTogglePlay();
            }
        });
    }
});
