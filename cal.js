let html = "";
function appendToDisplay(input) {
  html += input;
  document.querySelector(".bottom").innerHTML = html;
  console.log(html);
}
function accclear() {
  html = "";
  document.querySelector(".bottom").innerHTML = "";
}
function oneclear() {
  html = html.slice(0, -1);
  document.querySelector(".bottom").innerHTML = html;
}
function cal() {
  document.querySelector(".bottom").innerHTML = `= ${eval(html)}`;
  html = "";
}
