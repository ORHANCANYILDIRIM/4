// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Kendini Ne Zaman", time: 15 },
  { text: "Kötü", time: 18 },
  { text: "Mutsuz", time: 19 },
  { text: "Kararsız", time: 20 },
  { text: "Düşünceli", time: 21 },
  { text: "Hatta", time: 22 },
  { text: "Öfkeli", time: 23 },
  { text: "Hissettiğinde Bile", time: 24 },
  { text: "Benimle Konuşabilmeni İstiyorum", time: 25 },
  { text: "Çünkü", time: 27 },
  { text: "Beni Sadece", time: 28 },
  { text: "Kardeşin Olarak Değil", time: 29 },
  { text: "Aynı Zamanda", time: 30 },
  { text: "Bir Abi,Anne,Arkadaş ve Baba olarak da ", time: 31 },
  { text: "Görebilmen İçin Uğraşacağım", time: 33 },
  { text: "Neye İhtiyacın Olursa", time: 35 },
  { text: "Ben O Olacağım", time: 36 },
  { text: "Benden Her Şeyi İsteyebilirsin.", time: 37 },
  { text: "", time: 148 },
  { text: "", time: 153 },
  { text: "", time: 158 },
  { text: "", time: 164 },
  { text: "", time: 169 },
  { text: "", time: 176 },
  { text: "", time: 183 },
  { text: "", time: 188 },
  { text: "", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
