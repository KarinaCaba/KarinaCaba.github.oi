// Define el objeto JSON con las traducciones
var translations = {
    "en": {
      "title": "Welcome",
      "description": "This is a simple language switcher example."
    },
    "es": {
      "title": "Bienvenido",
      "description": "Este es un ejemplo simple de cambio de idioma."
    },
    "it": {
      "title": "Benvenuto",
      "description": "Questo è un semplice esempio di cambio lingua."
    },
    "de": {
      "title": "Willkommen",
      "description": "Dies ist ein einfaches Beispiel für den Sprachwechsel."
    },
    "fr": {
      "title": "Bienvenue",
      "description": "Ceci est un exemple simple de commutation de langue."
    }
  };
  
  // Función para cambiar el idioma al inglés
  document.getElementById("en-btn").addEventListener("click", function() {
    changeLanguage("en");
  });
  
  // Función para cambiar el idioma al español
  document.getElementById("es-btn").addEventListener("click", function() {
    changeLanguage("es");
  });
  
  // Función para cambiar el idioma al italiano
  document.getElementById("it-btn").addEventListener("click", function() {
    changeLanguage("it");
  });
  
  // Función para cambiar el idioma al alemán
  document.getElementById("de-btn").addEventListener("click", function() {
    changeLanguage("de");
  });
  
  // Función para cambiar el idioma al francés
  document.getElementById("fr-btn").addEventListener("click", function() {
    changeLanguage("fr");
  });
  
  // Función para cambiar el idioma
  function changeLanguage(language) {
    // Actualiza los textos con las traducciones correspondientes
    document.getElementById("title").textContent = translations[language].title;
    document.getElementById("description").textContent = translations[language].description;
  }
  