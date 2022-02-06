console.log("Hello 🌎");
const btn = document.querySelector("button");
if (btn) {
  btn.onclick = function() {
    btn.classList.toggle("dipped");
  };
}


