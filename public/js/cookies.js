// Load custom CSS first
var tacStyle = document.createElement('link');
tacStyle.rel = 'stylesheet';
tacStyle.href = '/css/tarteaucitron.css';
document.head.appendChild(tacStyle);

// Init TarteAuCitron - French localization
tarteaucitron.init({
  "privacyUrl": "/politique-confidentialite",
  "hashtag": "#tarteaucitron",
  "cookieName": "tarteaucitron",
  "orientation": "bottom",
  "groupServices": false,
  "showDetailsOnClick": false,
  "serviceDefaultState": "wait",
  "showAlertSmall": false,
  "cookieslist": false,
  "handleOutsideRTI": false,
  "cookie": {
    "secure": true,
    "expires": 365,
    "samesite": "strict"
  },
  "adblocker": false,
  "showLegalNotice": true,
  "multiline": true,
  "click3C": true,

  // Force French
  "locale": "fr",

  // French labels
  "title": "Gestion des cookies",
  "alertInfo": "En naviguant sur ce site, vous acceptez l'utilisation des cookies pour améliorer votre expérience.",
  "optional": "Optionnel",
  "required": "Nécessaire",
  "accept": "Tout accepter",
  "refuse": "Tout refuser",
  "close": "Fermer",
  "manage": "Gérer les préférences",
  "all": "Tout accepter",
  "info": "Protéger votre vie privée",
  "disclaimer": "En cliquant sur « Tout accepter », vous autorisez le dépôt de cookies pour la personnalisation et l'analyse de votre navigation.",
  "allow": "Autoriser",
  "deny": "Refuser",
  "link": "En savoir plus",
  "css": "/css/tarteaucitron.css",
  "privacy": "Politique de confidentialité",

  // Hide personalize button
  "showPersonalize": false,
  "readmoreLink": "/politique-confidentialite"
});

// Google Analytics
tarteaucitron.services.gtag = {
  "key": "gtag",
  "type": "analytic",
  "name": "Google Analytics",
  "uri": "https://policies.google.com/privacy",
  "needConsent": true,
  "cookies": ['_ga', '_gid', '_gat'],
  "js": function () {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-NJWMZE9B0P');
  }
};

// 1. Declare UA ID
tarteaucitron.user.gtagUa = 'G-NJWMZE9B0P';

// 2. Launch service
(tarteaucitron.job = tarteaucitron.job || []).push('gtag');

// Style the banner after load
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    var main = document.getElementById("tarteaucitronMain");
    if (main) {
      main.style.cssText = "text-align:center !important; max-width:800px !important; margin:0 auto !important; padding:30px !important; background:#ffffff !important; border-radius:12px 12px 0 0 !important; box-shadow:0 -4px 20px rgba(0,0,0,0.1) !important; font-family:'Work Sans',sans-serif !important;";
    }

    var title = document.getElementById("tarteaucitronTitle");
    if (title) {
      title.style.cssText = "display:none !important;";
    }

    var paragraph = document.getElementById("tarteaucitronParagraph");
    if (paragraph) {
      paragraph.style.cssText = "font-size:14px !important; color:#333 !important; line-height:1.6 !important; margin-bottom:20px !important;";
    }

    // Style buttons
    var buttons = document.querySelectorAll(".tarteaucitronButton");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.cssText = "background:#bdf5ab !important; color:#00255D !important; border:none !important; padding:12px 30px !important; font-size:14px !important; font-weight:600 !important; border-radius:6px !important; cursor:pointer !important; transition:all 0.2s ease !important; margin:5px !important; display:inline-block !important;";
    }

    // Hide personalize
    var personalize = document.getElementById("tarteaucitronPersonalize");
    if (personalize) {
      personalize.style.cssText = "display:none !important;";
    }

    // Add logo
    var logo = document.querySelector("#tarteaucitronMain");
    if (logo && !logo.querySelector('.tac-logo')) {
      var logoDiv = document.createElement('div');
      logoDiv.className = 'tac-logo';
      logoDiv.innerHTML = '<img src="/MariusIA-logo.svg" alt="Marius IA" style="width:160px; height:auto; margin-bottom:20px; display:block; margin-left:auto; margin-right:auto;" />';
      logo.insertBefore(logoDiv, logo.firstChild);
    }
  }, 200);
});