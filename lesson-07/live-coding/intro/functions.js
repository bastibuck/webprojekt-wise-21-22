// 1 = "sehr gut"

const note = 3;

if (note === 1) {
  console.log("Sehr gut");
} else if (note === 2) {
  console.log("Gut");
} else if (note === 3) {
  console.log("Befriedigend");
} else if (note === 4) {
  console.log("Ausreichend");
} else if (note === 5) {
  console.log("Mangelhaft");
} else if (note === 6) {
  console.log("Schlecht");
} else {
  console.log("Fallback");
}

if (note === 3) {
  console.log("Ausgabe nur wenn die Bedingung wahr ist");
}

// logische operatoren am beispiel von email validierung
const email = "f.de";

// if (email.length > 0) {
//   if (email.includes("@")) {
//     if (email.includes(".de")) {
//       console.log("valide email");
//     } else {
//       console.log("FALSCHE EMAIL!");
//     }
//   } else {
//     console.log("FALSCHE EMAIL!");
//   }
// } else {
//   console.log("FALSCHE EMAIL!");
// }

if (email.length > 0 && email.includes("@") && email.includes(".de")) {
  console.log("valide email");
} else {
  console.log("FALSCHE EMAIL!");
}

const age = 46;

// if (age < 10) {
//   console.log("günstiger Eintritt");
// } else if (age > 80) {
//   console.log("günstiger Eintritt");
// } else {
//   console.log("Normalpreis");
// }

if (age < 10 || age > 80) {
  console.log("günstiger Eintritt");
} else {
  console.log("Normalpreis");
}

const loggedIn = false;

// if (loggedIn === false) {
//   console.log("show login");
// }

// if (loggedIn !== true) {
//   console.log("show login");
// }

if (!loggedIn) {
  console.log("show login");
}

// schleifen
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

for (let itterator = 1; itterator <= 5; itterator++) {
  console.log(itterator);
}

let num = 6;

while (num < 10) {
  console.log(num);

  num++;
}

// funktionen
function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

const sum = add(2, 3);

console.log("summe");
console.log(sum);

// add(6, 54);
// add(22, 35);
// add(1232, 3546);
// add(25, 3675);
// add(1232, 35445);

let clicked = false;

function clickMe() {
  if (clicked === false) {
    document.getElementById("myID").textContent = "Was anderes";
    clicked = true;
  } else {
    document.getElementById("myID").remove();
  }
}
