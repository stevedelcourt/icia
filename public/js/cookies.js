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
  "cookieslist": true,
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

  // French labels
  "title": "Gestion des cookies",
  "alertInfo": "En naviguant sur ce site, vous acceptez l'utilisation des cookies pour améliorer votre expérience.",
  "alertInfoThird": "Ces cookies sont déposés par des services tiers pour vous proposer des contenus adaptés.",
  "optional": "Optionnel",
  "required": "Nécessaire",
  "accept": "Tout accepter",
  "refuse": "Tout refuser",
  "close": "Fermer",
  "manage": "Gérer les préférences",
  "all": "Tout accepter",
  "info": "Protéger votre vie privée",
  "disclaimer": "En cliquant sur \"Tout accepter\", vous autorisez le dépôt de cookies pour la personnalisation et l'analyse de votre navigation.",
  "allow": "Autoriser",
  "deny": "Refuser",
  "link": "En savoir plus",
  "css": "/css/tarteaucitron.css",
  "privacy": "Politique de confidentialité",

  // Hack to hide "Personalize" button
  "readmoreLink": "/politique-confidentialite",

  // Services - empty by default, only GA enabled
  "services": {
    "gtag": {
      "allowed": false,
      "denied": true,
      "consent": false
    }
  }
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

// Add logo to cookie banner
document.addEventListener("tarteaucitron_loaded", function() {
  setTimeout(function() {
    var main = document.querySelector("#tarteaucitronMain");
    if (main) {
      main.style.textAlign = "center";
      main.style.maxWidth = "800px";
      main.style.margin = "0 auto";
      main.style.padding = "20px";
    }
  }, 100);
});