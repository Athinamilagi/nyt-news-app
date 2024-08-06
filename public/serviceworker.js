importScripts("https://cdn.jsdelivr.net/npm/@suprsend/web-sdk@0.1.30/serviceworker/serviceworker.min.js");
init_workspace("nz1ue991NIwZZTK5aceq");
suprsend.init("nz1ue991NIwZZTK5aceq","SS.WSS.dLrtbNCdLg8fAJgupT1HQCtjoxclGTkmvlEx01vE", {vapid_key:"BDa2CE-mS9eEfKxr37msc4lifLmCcKsQMiU9a5H5c3qS89wtuUcGuxV8cAvSujPBfaT1SvVhnEkrixx9PrbNmf8"});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceworker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }
  