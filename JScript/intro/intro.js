


// let yearBurn = yearBurned%12;



// switch(yearBurn) {
//   case 0:
//     console.log("Цей рік мавпи");
//     break;
//   case 1:
//     console.log("Цей рік півня");
//     break;
//   case 2:
//     console.log("Цей рік собаки");
//     break;
//   case 3:
//     console.log("Цей рік свині");
//     break;
//   case 4:
//     console.log("Цей рік щура");
//     break;
//   case 5:
//     console.log("Цей рік бика");
//     break;
//   case 6:
//     console.log("Цей рік тигра");
//     break;
//   case 7:
//     console.log("Цей рік кроліка");
//     break;
//   case 8:
//     console.log("Цей рік дракона");
//     break;
//   case 9:
//     console.log("Цей рік змії");
//     break;
//   case 10:
//     console.log("Цей рік коня");
//     break;
//   case 11:
//     console.log("Цей рік вівці");
//     break;
//     default:
//       console.log("Цей не рік, це хуйня якась");
//       break;

// }


function myYear() {
  const input = parseInt(document.getElementById("year").value);
  const yearBurn = input % 12;
  let output;

  switch (yearBurn) {
    case 0:
      output = "Цей рік мавпи";
      break;
    case 1:
      output = "Цей рік півня";
      break;
    case 2:
      output = "Цей рік собаки";
      break;
    case 3:
      output = "Цей рік свині";
      break;
    case 4:
      output = "Цей рік щура";
      break;
    case 5:
      output = "Цей рік бика";
      break;
    case 6:
      output = "Цей рік тигра";
      break;
    case 7:
      output = "Цей рік кроля";
      break;
    case 8:
      output = "Цей рік дракона";
      break;
    case 9:
      output = "Цей рік змії";
      break;
    case 10:
      output = "Цей рік коня";
      break;
    case 11:
      output = "Цей рік вівці";
      break;
    default:
      output = "Цей не рік, це хуйня якась";
      break;

  }

  document.getElementById("output").innerHTML = output;

}

