// Nascondi il loading screen e mostra il contenuto dopo un breve ritardo (simulando il caricamento)
setTimeout(() => {
    document.getElementById("pageLoading").style.display = "none";
    document.getElementById("header").style.display = "block";
    document.getElementById("main").style.display = "block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("buttonBackToTop").style.display = "block";
}, 4000);