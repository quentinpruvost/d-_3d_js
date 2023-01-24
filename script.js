var dice = document.getElementById("dice");
var rollButton = document.getElementById("roll-button");
var result = document.getElementById("result");

rollButton.addEventListener("click", function() {
  var randomNum = Math.floor(Math.random() * 6) + 1;
  var rotation = Math.floor(Math.random() * 9999);
  dice.style.transform = "rotateX(" + rotation + "deg) rotateY(" + rotation + "deg) rotateZ(" + rotation + "deg)";

  var topImg = document.getElementById("top-img");
  var bottomImg = document.getElementById("bottom-img");
  var frontImg = document.getElementById("front-img");
  var backImg = document.getElementById("back-img");
  var leftImg = document.getElementById("left-img");
  var rightImg = document.getElementById("right-img");
  
  topImg.src = "https://irem.univ-rouen.fr/sites/irem.univ-rouen.fr/files/groupes/Images_Mentales_et_TICE/jean-luc.de-seegner%40ac-rouen.fr/Programmation_au_college/D6_-_" + randomNum + ".png";
  bottomImg.src = "https://irem.univ-rouen.fr/sites/irem.univ-rouen.fr/files/groupes/Images_Mentales_et_TICE/jean-luc.de-seegner%40ac-rouen.fr/Programmation_au_college/D6_-_" + randomNum + ".png";
  frontImg.src = "https://irem.univ-rouen.fr/sites/irem.univ-rouen.fr/files/groupes/Images_Mentales_et_TICE/jean-luc.de-seegner%40ac-rouen.fr/Programmation_au_college/D6_-_" + randomNum + ".png";
  backImg.src = "https://irem.univ-rouen.fr/sites/irem.univ-rouen.fr/files/groupes/Images_Mentales_et_TICE/jean-luc.de-seegner%40ac-rouen.fr/Programmation_au_college/D6_-_" + randomNum + ".png";
  leftImg.src = "https://irem.univ-rouen.fr/sites/irem.univ-rouen.fr/files/groupes/Images_Mentales_et_TICE/jean-luc.de-seegner%40ac-rouen.fr/Programmation_au_college/D6_-_" + randomNum + ".png";
  rightImg.src = "https://irem.univ-rouen.fr/sites/irem.univ-rouen.fr/files/groupes/Images_Mentales_et_TICE/jean-luc.de-seegner%40ac-rouen.fr/Programmation_au_college/D6_-_" + randomNum + ".png";

  result.innerHTML = "Résultat : " + randomNum;
});
