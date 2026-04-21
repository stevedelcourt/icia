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
  "cookieslist": true,
  "handleOutsideRTI": false,
  "cookie": {
    "secure": true,
    "expires": 365
  }
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