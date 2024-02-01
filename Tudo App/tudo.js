let btn = document.querySelector("button")
let ipt = document.querySelector("input")
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let list = document.createElement("li");
    list.innerText = ipt.value;
    
    let dltbtn = document.createElement("button");
    dltbtn.innerText = "delete";
    dltbtn.classList.add("delete");
    list.appendChild(dltbtn);
    ul.appendChild(list);
    ipt.value = "";

});

// using event Bubbling case 

ul.addEventListener("click" , function(event){
    if(event.target.nodeName == "BUTTON"){
        let par = event.target.parentElement; 
        par.remove();
    }
})


// let dltbtns = document.querySelectorAll(".delete");
// for (dltbtn of dltbtns){
//     dltbtn.addEventListener("click", function(){
//       let par = this.parentElement;
//       par.remove();
//   })
// }
