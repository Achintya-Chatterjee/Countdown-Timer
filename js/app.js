const endDate = "30 April 2024 2:05 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
//const clock = ()=>{

//}

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  console.log(diff);
  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600 % 24)
}

clock();
