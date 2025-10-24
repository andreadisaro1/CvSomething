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
        /* Education */
        Education1: "Education",
        Education2: "Here you can learn all about my education.",
        /* Skills */
        Skills1: "Skills",
        Skills2: "Here you can find my most important skills, both interpersonal as well as job related.",
        /* Certification */
        Certification1: "Certification",
        Certification2: "Here you can find my certifications.",
        /* Languages */
        Languages1: "Languages",
        Languages2: "Here you can learn what languages I can speak and understand.",
        /* Hobbies */
        Hobbies1: "Hobbies and Interests",
        Hobbies2: "Here you can learn what are my hobbies and my interests.",
        /* Contacts */
        Contacts1: "Contacts",
        Contacts2: "Informations and Contacts Details",
        Contacts3: "Here you will find all my contacts informations.",
        /* Privacy */
        Privacy1: "Privacy"
    },
    it: {
        /* Home */
        Home1: "Home",
        /* Description */ 
        Description1: "Descrizione Personale",
        Description2: "Qui troverai la mia descrizione e come mi descriverei.",
        /* Education */
        Education1: "Educazione",
        Education2: "Qui potrai sapere tutto riguardo la mia educazione.",
        /* Skills */
        Skills1: "Skills",
        Skills2: "Qui potrai scoprire le mie abilità più importanti, sia riguardante il lavoro sia intrapersonali.",
        /* Certification */
        Certification1: "Certificazioni",
        Certification2: "Qui potrai trovare le mie certificazioni.",
        /* Languages */
        Languages1: "Lingue",
        Languages2: "Qui potrai sapere quali lingue sono in grado di capire e parlare.",
        /* Hobbies */
        Hobbies1: "Hobby e Interessi",
        Hobbies2: "Qui potrai scoprire quali sono i miei hobby e interessi.",
        /* Contacts */
        Contacts1: "Contatti",
        Contacts2: "Informazioni Personali e Contatti",
        Contacts3: "Qui potrai trovare le mie informazioni personali e i miei contatti.",
        /* Privacy */
        Privacy1: "Privacy"
    }
};

let currentLang = "it";

    function setLanguage(lang) {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            el.textContent = translations[lang][key] || key;
        });
        currentLang = lang;
    }

    const toggleButton = document.getElementById("toggle-lang");
    toggleButton.addEventListener("click", () => {
        const newLang = currentLang === "it" ? "en" : "it";
        setLanguage(newLang);
    });

setLanguage(currentLang);