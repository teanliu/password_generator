// const divtest = document.querySelector("#divtest")
// console.log(divtest.innerText)
// divtest.innerHTML = "aaa"
function copyPassword() {
  const errorMsg = 'There is no valid characters in your selection.'
  if (document.getElementById("code").innerText === errorMsg) {
    return
  } else {
    console.log(document.getElementById("code").innerText)
    let range = document.createRange();
    range.selectNode(document.getElementById("code"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
  }
 
}
const copybtn = document.querySelector("#copy_btn")
copybtn.addEventListener("click", copyPassword)

