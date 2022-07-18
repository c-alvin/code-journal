var $photoUrlInput = document.querySelector('.photourl');
var $img = document.querySelector('.imageurl');

function photoInput(event) {
  if (event.target.matches('.photourl')) {
    $img.setAttribute('src', event.target.value);
  }
}

$photoUrlInput.addEventListener('input', photoInput);

var $form = document.querySelector('.form');

function formSubmit(event) {
  var objform = {};
  objform.title = $form.elements.title.value;
  objform.photourl = $form.elements.photo.value;
  objform.notes = $form.elements.note.value;
  objform.nextEntryId = data.nextEntryId;

}

$form.addEventListener('submit', formSubmit);
