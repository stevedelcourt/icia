// Init TarteAuCitron
tarteaucitron.init({
  "privacyUrl": "/politique-confidentialite",
  "hashtag": "#tarteaucitron",
  "cookieName": "tarteaucitron",
  "orientation": "bottom",
  "groupServices": false,
  "showDetailsOnClick": true,
  "serviceDefaultState": "wait",
  "showAlertSmall": false,
  "cookieslist": true
});

// Google Analytics via consentement
tarteaucitron.services.gtag = {
  "key": "gtag",
  "type": "analytic",
  "name": "Google Analytics",
  "uri": "https://policies.google.com/privacy",
  "needConsent": true,
  "cookies": ['_ga', '_gid', '_gat'],
  "js": function () {
    var script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-NJWMZE9B0P";
    script.async = true;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-NJWMZE9B0P', { anonymize_ip: true });
  }
};

// Lancer le service
(tarteaucitron.job = tarteaucitron.job || []).push('gtag');