// Configuração do GTranslate
window.gtranslateSettings = {
  default_language: "en",
  languages: ["en", "pt", "es", "hi", "ru"],
  flag_style: "3d",
  flag_size: 24,
  wrapper_selector: "#gt-wrapper-73583990",
  alt_flags: { en: "usa", pt: "brazil" },
  flags_location: "https://cdn.gtranslate.net/flags/",
};

// Criar e carregar o script externo do GTranslate
const script = document.createElement("script");
script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
script.async = true;
document.body.appendChild(script);
