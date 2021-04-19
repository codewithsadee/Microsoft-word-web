var bold = document.querySelectorAll(".font button")[0];
var italic = document.querySelectorAll(".font button")[1];
var underline = document.querySelectorAll(".font button")[2];
var alignLeft = document.querySelectorAll(".align button")[0];
var alignCenter = document.querySelectorAll(".align button")[1];
var alignRight = document.querySelectorAll(".align button")[2];
var alignJustify = document.querySelectorAll(".align button")[3];
var artBoard = document.querySelector(".artboard");

bold.addEventListener("click", function () {
  artBoard.classList.toggle("bold");
  bold.classList.toggle("b");
});

italic.addEventListener("click", function () {
  artBoard.classList.toggle("italic");
  italic.classList.toggle("i");
});

underline.addEventListener("click", function () {
  artBoard.classList.toggle("underline");
  underline.classList.toggle("u");
});

alignLeft.addEventListener("click", function () {
  artBoard.classList.add("alignLeft");
  alignLeft.classList.add("l");
  artBoard.classList.remove("alignCenter");
  alignCenter.classList.remove("c");
  artBoard.classList.remove("alignRight");
  alignRight.classList.remove("r");
  artBoard.classList.remove("alignJustify");
  alignJustify.classList.remove("j");
});

alignCenter.addEventListener("click", function () {
  artBoard.classList.remove("alignLeft");
  alignLeft.classList.remove("l");
  artBoard.classList.add("alignCenter");
  alignCenter.classList.add("c");
  artBoard.classList.remove("alignRight");
  alignRight.classList.remove("r");
  artBoard.classList.remove("alignJustify");
  alignJustify.classList.remove("j");
});

alignRight.addEventListener("click", function () {
  artBoard.classList.remove("alignLeft");
  alignLeft.classList.remove("l");
  artBoard.classList.remove("alignCenter");
  alignCenter.classList.remove("c");
  artBoard.classList.add("alignRight");
  alignRight.classList.add("r");
  artBoard.classList.remove("alignJustify");
  alignJustify.classList.remove("j");
});

alignJustify.addEventListener("click", function () {
  artBoard.classList.remove("alignLeft");
  alignLeft.classList.remove("l");
  artBoard.classList.remove("alignCenter");
  alignCenter.classList.remove("c");
  artBoard.classList.remove("alignRight");
  alignRight.classList.remove("r");
  artBoard.classList.add("alignJustify");
  alignJustify.classList.add("j");
});
