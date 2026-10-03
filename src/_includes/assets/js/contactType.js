/* 
  Script to automatically select the contact type radio button based on the URL parameter 'type'.
  Example: if the URL is 'contact.html?type=equine-physio', the corresponding radio button will be checked.
*/
$(document).ready(function () {
  let params = new URLSearchParams(document.location.search);
  let contactType = params.get('type');
  document.getElementById("i-topic-" + contactType).checked = true;
});
