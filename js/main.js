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
  event.preventDefault();
  var objform = {};
  objform.title = $form.elements.title.value;
  objform.photourl = $form.elements.photo.value;
  objform.notes = $form.elements.note.value;
  objform.EntryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(objform);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
}

$form.addEventListener('submit', formSubmit);
