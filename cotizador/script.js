let is_pallet = document.getElementById("is_pallet");
let isnt_pallet = document.getElementById("isnt_pallet");
let collect = document.getElementById("collect-cp");
let deliver = document.getElementById("deliver-cp");
let radios_pallet = document.forms["form"].elements["pallet"];
let radios_collect = document.forms["form"].elements["collect"];
let radios_deliver = document.forms["form"].elements["deliver"];
let description_fields = document.getElementById("description_fields");
let inputs = document.getElementsByClassName("inputform");

radios_pallet.forEach(element => {
  element.addEventListener("click", event => {
    if (event.target.id === "yes_pallet") {
      is_pallet.style.display = "flex";
      isnt_pallet.style.display = "none";
      is_pallet.children[1].setAttribute("required", "");
      isnt_pallet.children[1].removeAttribute("required");
    } else if (event.target.id === "no_pallet") {
      isnt_pallet.style.display = "flex";
      is_pallet.style.display = "none";
      isnt_pallet.children[1].setAttribute("required", "");
      is_pallet.children[1].removeAttribute("required");
    }
    description_fields.style.display = "block";
    document.forms["form"].classList.add("open");
  });
});

radios_collect.forEach(element => {
  element.addEventListener("click", event => {
    if (event.target.id === "yes_collect") {
      collect.style.display = "flex";
      collect.children[1].setAttribute("required", "");
    } else if (event.target.id === "no_collect") {
      collect.style.display = "none";
      collect.children[1].removeAttribute("required");
    }
  });
});

radios_deliver.forEach(element => {
  element.addEventListener("click", event => {
    if (event.target.id === "yes_deliver") {
      deliver.style.display = "flex";
      deliver.children[1].setAttribute("required", "");
    } else if (event.target.id === "no_deliver") {
      deliver.style.display = "none";
      deliver.children[1].removeAttribute("required");
    }
  });
});

for (i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("blur", function(e) {
    e.target.classList.add("touched");
  });
}
