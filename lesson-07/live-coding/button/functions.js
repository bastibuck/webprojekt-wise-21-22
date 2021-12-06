let isLarge = false;

function changeSize() {
  if (isLarge === false) {
    document.getElementById("my-id").style.padding = "30px 50px";
    document.getElementById("my-id").style.fontSize = "70px";

    isLarge = true;
  } else {
    document.getElementById("my-id").style.padding = "20px 40px";
    document.getElementById("my-id").style.fontSize = "50px";

    isLarge = false;
  }

  // document.getElementById("my-id").classList.toggle("larger");
}
