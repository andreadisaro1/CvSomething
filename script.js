const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
})

/* Robo per cambiare la lingua */
const translations = {
    en: {
        /* Home */
        Home1: "Home",
        /* Description */ 
        Description1: "Personal Description",
        Description2: "Here you will find my description and how I would describe myself.",
        Description3: "I consider myself a motivated and open-minded high school student who’s not afraid to make mistakes and learn from them. My motto is: “Truth above all”. This I because I believe that honesty is the key factor for a efficient and enjoyable work environment.",
        /* Education */
        Education1: "Education",
        Education2: "Here you can learn all about my education.",
        Education3: "To be awarded - ITI Severi High School",
        Education4: "12/09/2022 - CURRENT Padua, Italy",
        Education5: "Technical Subjects: Information and Communication Technology (ICT), Networking, Computer System and Architecture, Telecommunication;",
        Education6: "General Subjects: Italian, English, Mathematics;",
        Education7: "I am able to: Design, document and implement algorithms in procedural languages and object oriented language; Design and implement Web pages following W3C standards; Design, implement and manage Web pages with client-side applications;",
        /* Skills */
        Skills1: "Skills",
        Skills2: "Here you can find my most important skills, both interpersonal as well as job related.",
        Skills31: "Job Related",
        Skills32: "Object Oriented Programming Languages:",
        Skills33: "I am able to create programs and algorithms using object oriented programming languages such as Python and Java.",
        Skills34: "Procedural Programming Languages:",
        Skills35: "I am able to write codes using procedural programming languages such as C",
        Skills36: "Websites:",
        Skills37: "I am able to create website using HTML, CSS and Javascript",
        Skills41: "Interpersonal",
        Skills42: "Teamwork and Leadership:",
        Skills43: "I can work in a team as well as when I am alone; I can lead a team to success in completing a task;",
        Skills44: "Communication Skills:",
        Skills45: "I am able to convey my thoughts andunderstand other’s efficiently;",
        Skills46: "Adaptability and Pressure Management:",
        Skills47: "I am able to adapt to the current situation by learning from past mistakes and experiences; this is also thanks to my ability  to work under pressure without my deteriorating",
        /* Certification */
        Certification1: "Certification",
        Certification2: "Here you can find my certifications.",
        Certification31: "Safety Certificate",
        Certification32: "I participated in a security course where I learned what safety on the job look like. Examples are safety gears, safety measures and what to do in dangerous situations and emergencies such as fires and machine malfunctions.",
        Certification41: "Cambridge C1 Certification",
        Certification42: "The Cambridge C1 English Certification is an advanced-level English proficiency qualification that proves my skills for high-level academic and professional environments. I obtained it after passing the final exam following a 15h course.",
        /* Languages */
        Languages1: "Languages",
        Languages2: "Here you can learn what languages I can speak and understand.",
        Languages3: "Italian",
        Languages31: "Mother Tongue",
        Languages4: "English",
        Languages5: "Spanish",
        Languages6: "Listening: ",
        Languages7: "Reading: ",
        Languages8: "Writing: ",
        Languages9: "Spoken Production: ",
        Languages10: "Spoken Interactions:  ",
        /* Hobbies */
        Hobbies1: "Hobbies and Interests",
        Hobbies2: "Here you can learn what are my hobbies and my interests.",
        Hobbies3: "Coding",
        Hobbies31: "I like to use Java and Python to create codes and algorithms to optimize mundane and repetitive tasks.",
        Hobbies4: "Reading",
        Hobbies41: "Sometimes I spend my time reading books, this allows me to improve my vocabulary and speaking ability while doing something I enjoy.",
        Hobbies5: "Playing video games",
        /* Contacts */
        Contacts1: "Contacts",
        Contacts2: "Informations and Contacts Details",
        Contacts3: "Here you will find all my contacts informations.",
        Contacts4: "Date of Birth: 21/05/2007",
        Contacts5: "Place of Birth: Padua, Italy",
        Contacts6: "Phone number: 349 084 0138",
        Contacts7: "Adress: Antonio Ceron St, Padua, Italy",
        /* Privacy */
        Privacy1: "Privacy",
        Privacy2: "Privacy and CV/Resume download",
        Privacy3: "Here you can download my CV and sesume",
        Privacy4: "Download my CV here:",
        Privacy5: "Download my resume here:",
        /* Download */
        title1: "CV",
        title2: "resume",
        CV1: "Click the button view to the CV.",
        CV2: "Click the button view to the resume.",
        openBtn: "Open",
        closeBtn: "Close",
    },
    it: {
        /* Home */
        Home1: "Home",
        /* Description */ 
        Description1: "Descrizione Personale",
        Description2: "Qui troverai la mia descrizione e come mi descriverei.",
        Description3: "Mi considero uno studente motivato e di mentalità aperta che non ha paura di commettere errori e di imparare da essi. Il mio motto è: \"La verità prima di tutto\". Questo perché credo che l'onestà sia il fattore chiave per un ambiente di lavoro efficiente e sereno.",
        /* Education */
        Education1: "Educazione",
        Education2: "Qui potrai sapere tutto riguardo la mia educazione.",
        Education3: "12/09/2022 - ATTUALE Padova, Italia",
        Education4: "Diploma di Scuola Superiore - ITI Severi High School",
        Education5: "Materie tecniche: Tecnologie dell'informazione e della comunicazione (TIC), Reti, Sistemi e architettura informatica, Telecomunicazioni;",
        Education6: "Materie generali: Italiano, Inglese, Matematica;",
        Education7: "Sono in grado di: Progettare, documentare e implementare algoritmi in linguaggi procedurali e orientati agli oggetti; Progettare e implementare pagine web secondo gli standard W3C; Progettare, implementare e gestire pagine web con applicazioni lato client;",
        /* Skills */
        Skills1: "Competenze",
        Skills2: "Qui potrai scoprire le mie abilità più importanti, sia riguardante il lavoro sia intrapersonali.",
        Skills31: "Informatiche",
        Skills32: "Linguaggi di programmazione orientati agli oggetti: ",
        Skills33: "sono in grado di scrivere codice utilizzando linguaggi di programmazione orientati agli oggetti come Java e Python.",
        Skills34: "Linguaggi di programmazione procedurali:",
        Skills35: "sono in grado di scrivere codice utilizzando linguaggi di programmazione procedurali come C",
        Skills36: "Siti web:",
        Skills37: "sono in grado di creare siti web utilizzando HTML, CSS e Javascript",
        Skills41: "Intrapersonali",
        Skills42: "Lavoro di squadra e Leadership:",
        Skills43: "sono in grado di lavorare in team così come da solo; If I have to work in a team I am able to lead towards success in completing a task;",
        Skills44: "Capacità comunicative:",
        Skills45: "sono in grado di esprimere i miei pensieri e capire quelli degli altri in modo efficiente",
        Skills46: "Adattabilità e Gestione della pressione:",
        Skills47: " sono in grado di adattarmi alla situazione attuale imparando dagli errori e dalle esperienze passate; queste grazie anche alla mia capacità di lavorare sotto pressione senza che le mie prestazioni peggiorino",
        /* Certification */
        Certification1: "Certificazioni",
        Certification2: "Qui potrai trovare le mie certificazioni.",
        Certification31: "Corso di Sicurezza",
        Certification32: "Ho partecipato a un corso sulla sicurezza dove ho imparato cosa significa sicurezza sul lavoro. Alcuni esempi sono i dispositivi di sicurezza, le misure di sicurezza e cosa fare in situazioni pericolose ed emergenze come incendi e malfunzionamenti dei macchinari.",
        Certification41: "Certificazione Cambridge C1",
        Certification42: "La certificazione Cambridge C1 English è una certificazione di livello avanzato che attesta le mie competenze in inglese per contesti accademici e professionali di alto livello. L'ho ottenuta dopo aver superato l'esame finale di un corso di 15 ore.",
        /* Languages */
        Languages1: "Lingue",
        Languages2: "Qui potrai sapere quali lingue sono in grado di capire e parlare.",
        Languages3: "Italiano",
        Languages31: "Madre Lingua",
        Languages4: "Inglese",
        Languages5: "Spagnolo",
        Languages6: "Ascolto: ",
        Languages7: "Lettura: ",
        Languages8: "Scrittura: ",
        Languages9: "Produzione orale: ",
        Languages10: "Interazione orale:  ",
        /* Hobbies */
        Hobbies1: "Hobby e Interessi",
        Hobbies2: "Qui potrai scoprire quali sono i miei hobby e interessi.",
        Hobbies3: "Programmare",
        Hobbies31: "Mi piace usare Java e Python per creare codici e algoritmi per ottimizzare attività banali e ripetitive",
        Hobbies4: "Leggere",
        Hobbies41: "A volte passo il tempo a leggere libri, questo mi permette di migliorare il mio vocabolario e la mia capacità di parlare mentre faccio qualcosa che mi piace.",
        Hobbies5: "Giocare ai Videogiochi",
        /* Contacts */
        Contacts1: "Contatti",
        Contacts2: "Informazioni Personali e Contatti",
        Contacts3: "Qui potrai trovare le mie informazioni personali e i miei contatti.",
        Contacts4: "Nato il: 21/05/2007",
        Contacts5: "Nato a: Padova, Italia",
        Contacts6: "Numero di telefono: 349 084 0138",
        Contacts7: "Indirizzo: Via Antonio Ceron, Padova, Italia",
        /* Privacy */
        Privacy1: "Privacy",
        Privacy2: "Privacy e Download del CV/Resume",
        Privacy3: "Qui potrai scaricare il mio CV e il mio resume",
        Privacy4: "Scarica il mio CV qui sotto:",
        Privacy5: "Scarica il mio resume qui sotto:",
        /* Download */
        title1: "CV",
        title2: "resume",
        CV1: "Clicca sul pulsante per visualizzare il CV.",
        CV2: "Clicca sul pulsante per visualizzare il resume.",
        openBtn: "Apri",
        closeBtn: "Chiudi",
    }
};

let currentLang = "it";
let pdfOpen = [false, false];
// Percorsi PDF
const pdfFiles = {
    it: ["FinalCVITA.pdf", "RESUMEITA.pdf"],
    en: ["FinalCV.pdf", "RESUME.pdf"]
};

    function setLanguage(lang) {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            el.textContent = translations[lang][key] || key;
        });
        document.getElementById("preview1").src = pdfFiles[lang][0];
        document.getElementById("preview2").src = pdfFiles[lang][1];
        currentLang = lang;
    }

    // Mostra il PDF fullscreen
    function openPDF(index) {
        const container = document.getElementById("pdf-container");
        const frame = document.getElementById("pdf-frame");
        frame.src = pdfFiles[currentLang][index];
        container.style.display = "block";
        document.body.style.overflow = "hidden"; // blocca scroll
    }

    // Chiude il PDF fullscreen
    function closePDF() {
        const container = document.getElementById("pdf-container");
        const frame = document.getElementById("pdf-frame");
        frame.src = "";
        container.style.display = "none";
        document.body.style.overflow = "auto";
    }

    document.getElementById("open-pdf1").addEventListener("click", () => openPDF(0));
    document.getElementById("open-pdf2").addEventListener("click", () => openPDF(1));
    document.getElementById("close-pdf").addEventListener("click", closePDF);
    document.getElementById("toggle-lang").addEventListener("click", () => {
        const newLang = currentLang === "it" ? "en" : "it";
        setLanguage(newLang);
    });
    
setLanguage(currentLang);