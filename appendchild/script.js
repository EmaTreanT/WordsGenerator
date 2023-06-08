// const node = document.createElement("h1");
// let textnode = document.createTextNode("dioladro")

window.addEventListener('DOMContentLoaded', function() {
  var fullscreenAnimation = document.querySelector('.fullscreen-animation');
  fullscreenAnimation.style.display = 'block';
});


const button = document.getElementById("btn");
let wordchange = document.getElementById("wordchange")
const words = [
  "ragazzo", "bicicletta", "tavolo", "giornale", "montagna", "fratello", "giardino", "zaino", "tempo", "città", "libro", "strada", "musica", "occhiali", "mare", "sole", "parco", "scuola", "cane", "felicità", "luna", "viaggio", "dolce", "arancia", "gioco", "gelato", "parola", "amico", "gatto", "carta", "notte", "fiori", "finestra", "porta", "soleggiato", "cielo", "stella", "mattina", "ponte", "chitarra", "storia", "mente", "prato", "giornata", "corpo", "lavoro", "computer", "pensiero", "nuvola", "vacanza", "straniero", "mareggiata", "felice", "sorpresa", "famiglia", "ricordo", "ragazza", "amore", "terra", "tramonto", "cibo", "caldo", "notizia", "giacca", "maglia", "neve", "vestito", "profumo", "colori", "passione", "parlare", "pensiero", "risata", "sorriso", "domani", "andare", "venire", "correre", "fermarsi", "aspettare", "sognare", "cantare", "ballare", "dormire", "leggere", "scrivere", "ridere", "pensare", "ascoltare", "vedere", "sentire", "mangiare", "bere", "giocare", "vivere", "sperare", "volare", "perdere", "trovare", "aprire", "chiudere", "scegliere", "cambiare", "iniziare", "terminare", "guardare", "immaginare", "festeggiare", "condividere", "capire", "esplorare", "preoccuparsi", "sorridere", "osservare", "rispettare", "incantarsi", "creare", "abitare", "comunicare", "ascoltare", "raggiungere", "scoprire", "immergersi", "sperimentare", "conquistare", "rispettare", "trasformarsi", "annusare", "desiderare", "ospitare", "dedicare", "affrontare", "emozionarsi", "relazionarsi", "cercare", "sognare", "ricordare", "aspirare", "abbracciare", "sfidare", "lottare", "sopravvivere", "ricercare", "interagire", "ritrovare", "affezionarsi", "coltivare", "proteggere", "evolvere", "meravigliarsi", "illuminare", "respirare", "adorare", "assecondare", "esprimere", "stupirsi", "esplodere", "eccitarsi", "rallentare", "costruire", "strutturare", "raccontare", "reagire", "attendere", "salvare", "commuoversi", "incantare", "indovinare", "tuffarsi", "sospirare", "approfondire", "scommettere", "nutrire", "preservare", "abbronzarsi", "distrarsi", "meravigliarsi", "prepararsi", "esplorare", "rallentare", "coricarsi", "rispettare", "sognare", "sussurrare", "innamorarsi", "affacciarsi", "offrire", "celebrare", "scoppiare", "admirarsi", "passeggiare", "sbocciare", "ringraziare", "brillare", "meritare", "splendere", "giurare", "dimagrire", "scoprire", "condividere", "incantare", "risorgere", "emozionare", "tentare", "vivere", "recitare", "sorprendere", "risplendere", "contemplare", "giganteggiare", "immergersi", "incantarsi", "avventurarsi", "divertirsi", "gioire", "distrarsi", "svelare", "brillare", "incontrarsi", "sorprendere", "coinvolgere", "ispirare", "splendere", "guarire", "fiorire", "meravigliarsi", "godere", "inspirarsi", "scoprire", "inseguire", "raggiungere", "ammirare", "sperare", "trionfare", "trattenere", "esaltare", "rimpiangere", "scivolare", "voltarsi", "nuotare", "sospirare", "ardere", "giocare", "plasmarsi", "compiacersi", "volare", "stare", "divorare", "sudare", "strappare", "attraversare", "strillare", "cantare", "distendere", "festeggiare", "vibrare", "erigere", "risuonare", "donare", "impazzire", "comunicare", "mirare", "innalzare", "fuggire", "riscaldarsi", "risorgere", "frugare", "disegnare", "bruciare", "brindare", "accompagnare", "rovinare", "comporre", "tessere", "svegliarsi", "apparire", "fuggire", "dominare", "abbandonarsi", "comunicare", "cogliere", "muoversi", "riconoscere", "cercare", "immergersi", "abbandonarsi", "avvolgere", "mordere", "imparare", "allontanarsi", "combattere", "sbocciare", "intrattenere", "aspettare", "abbracciare", "arricchire", "visitare", "celebrare", "sognare", "girare", "esplorare", "cambiare", "prendersi", "illuminare", "respirare", "addormentarsi", "offrire", "scoprire", "lavorare", "sorprendere", "ascoltare", "coltivare", "rivivere", "adattarsi", "capire", "vivere", "convivere", "vedere", "arrivare", "abitare", "amare", "andare", "annusare", "appartenere", "aspettare", "assaporare", "assecondare", "ascoltare", "avanzare", "avere", "brillare", "camminare", "cantare", "capire", "celebrare", "chiedere", "chiudere", "cominciare", "completare", "condurre", "conoscere", "consolare", "contemplare", "correre", "crescere", "cresta", "curare", "dare", "decidere", "dedicare", "definire", "desiderare", "dimenticare", "dirigere", "disegnare", "discutere", "distinguere", "diventare", "domandare", "dormire", "emergere", "esaminare", "eseguire", "esistere", "esplorare", "festeggiare", "fidarsi", "fingere", "finire", "fornire", "fuggire", "girare", "godere", "guardare", "guidare", "illuminare", "immaginare", "imparare", "imparare", "imparare", "importare", "incontrare", "insegnare", "interpretare",
]


// button.addEventListener("click", addBestemmia());

function changeword(){
  console.log(wordchange)
  var randomIndex = Math.floor(Math.random() * words.length);
 
  wordchange.innerText = words[randomIndex];
  
}





