const endDate = "30 April 2024 2:05 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
//const clock = ()=>{

//}

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  //convert into days
  inputs[0].value = Math.floor(diff / 3600 / 24);
  //convert into hours
  inputs[1].value = Math.floor((diff / 3600) % 24);
  //convert into minutes
  inputs[2].value = Math.floor(diff / 60) % 60;
  //converts into seconds
  inputs[3].value = Math.floor(diff) % 60;
}

clock();

setInterval(() => {
  clock();
}, 1000);
