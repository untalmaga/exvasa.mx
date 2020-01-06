let modalFooter = document.getElementById("modal-footer");
let spinner = document.getElementById("spinner");
let messageContainer = document.getElementById("message-container");

function ajaxPost(form, callback) {
  let url = form.action;
  let xhr = new XMLHttpRequest();
  let params = [].filter
    .call(form.elements, el => el.type != "radio" || el.checked == true)
    .filter(el => !!el.name)
    .filter(el => !el.disabled)
    .filter(el => el.value)
    .map(el => encodeURIComponent(el.name) + "=" + encodeURIComponent(el.value))
    .join("&");
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onload = callback.bind(xhr);
  console.log(params);
  xhr.send(params);
}

window.addEventListener("load", function() {
  document.getElementById("form").addEventListener("submit", function(e) {
    if (grecaptcha.getResponse() == "") {
      document.getElementById("captcha-fail").style.display = "block";
    } else {
      $("#successModal").modal();
      document.getElementById("captcha-fail").style.display = "none";
      ajaxPost(this, res => {
        spinner.style.display = "none";
        modalFooter.style.display = "block";
        messageContainer.style.display = "block";
      });
    }
  });
});
