// Load custom CSS first
var tacStyle = document.createElement('link');
tacStyle.rel = 'stylesheet';
tacStyle.href = '/css/tarteaucitron.css';
document.head.appendChild(tacStyle);

// Init TarteAuCitron
tarteaucitron.init({
  "privacyUrl": "/politique-confidentialite",
  "hashtag": "#tarteaucitron",
  "cookieName": "tarteaucitran",
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
  "showPersonalize": false,

  // French
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
  "disclaimer": "En cliquant sur « Tout accepter », vous autorisez le dépôt de cookies.",
  "allow": "Autoriser",
  "deny": "Refuser",
  "link": "En savoir plus",
  "privacy": "Politique de confidentialité",
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

tarteaucitron.user.gtagUa = 'G-NJWMZE9B0P';
(tarteaucitron.job = tarteaucitron.job || []).push('gtag');

// Add logo after TarteAuCitron loads
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    var main = document.getElementById("tarteaucitronMain");
    if (main) {
      // Add logo div at the top
      if (!main.querySelector('.tac-logo')) {
        var logoDiv = document.createElement('div');
        logoDiv.className = 'tac-logo';
        logoDiv.innerHTML = '<img src="/MariusIA-logo.svg" alt="Marius IA" />';
        main.insertBefore(logoDiv, main.firstChild);
      }
    }
  }, 300);
});