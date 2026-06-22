document.addEventListener('DOMContentLoaded', () => {
    // Gestione Form
    const form = document.getElementById('consulenza-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            const formData = new FormData(form);
            const name = formData.get('name') || '';
            const brand = formData.get('brand') || '';
            const email = formData.get('email') || '';
            const phone = formData.get('phone') || '';
            const sector = formData.get('sector') || '';
            const city = formData.get('city') || '';
            const service = formData.get('service_interest') || '';
            const problem = formData.get('problem') || '';
            const goal = formData.get('goal') || '';
            const budget = formData.get('budget') || '';
            const time_pref = formData.get('time_pref') || '';
            const contact_pref = formData.get('contact_pref') || '';

            const subject = encodeURIComponent(`Richiesta consulenza Socialin — ${brand}`);
            const bodyStr = `Nome e cognome: ${name}
Brand: ${brand}
Email: ${email}
Telefono: ${phone}
Settore: ${sector}
Città: ${city}
Servizio richiesto: ${service}
Problema: ${problem}
Obiettivo: ${goal}
Budget: ${budget}
Preferenza contatto: ${contact_pref}
Giorni/orari: ${time_pref}`;

            const body = encodeURIComponent(bodyStr);
            const mailtoLink = `mailto:socialincomunication@gmail.com?subject=${subject}&body=${body}`;
            
            window.location.href = mailtoLink;
        });
    }

    // Gestione Calendario
    const calendarSlots = document.querySelectorAll('.calendar-slots .slot');
    const timePrefInput = document.querySelector('input[name="time_pref"]');
    if (calendarSlots.length > 0 && timePrefInput) {
        calendarSlots.forEach(slot => {
            slot.addEventListener('click', function() {
                // Remove active style from all
                calendarSlots.forEach(s => s.style.background = 'rgba(255, 255, 255, 0.1)');
                // Add active style to current
                this.style.background = 'var(--brand-magenta)';
                timePrefInput.value = this.innerText;
            });
        });
    }
});
