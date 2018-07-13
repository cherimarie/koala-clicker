// 1. get the element we want (maybe document.getElementById?)
// 2. elVariableName.click syntax
//    or addEventListener syntax (see debugging project for example)
document.querySelector("img.clickable").addEventListener("click", handleClicks)
// declare the counter variable
let counter = 0
console.log("counter: ", counter)


// click handler function
function handleClicks(){
  counter++
  console.log("updated counter: ", counter)
  printCount(counter)
}


  // track total clicks- increment the counter variable


  // output click count to container in DOM
function printCount(count){
  document.querySelector("p#clickcount").innerHTML = count
}
