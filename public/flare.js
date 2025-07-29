document.getElementById("lol").onclick = function () {
  var audio = document.getElementById("audio");
  if (audio.paused) audio.play();
  else audio.pause();
};