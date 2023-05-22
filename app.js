let dayI = document.getElementById("dayI")
let monthI = document.getElementById("monthI")
let yearI = document.getElementById("yearI");
let dayO = document.getElementById("dayO")
let monthO = document.getElementById("monthO")
let yearO = document.getElementById("yearO")
let subB = document.getElementById("subB")
subB.onclick = () => {
  if (dayI.value < 5) {
    dayO.innerHTML = 5 - dayI.value
  }
  else {
    dayO.innerHTML = dayI.value - 5
  }
  if (monthI.value < 22) {
    monthO.innerHTML = 22 - monthI.value
  }
  else {
    monthO.innerHTML = monthI.value - 22
  }
  yearO.innerHTML = 2023 - yearI.value
}