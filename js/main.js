var $photoUrlInput = document.querySelector('.photourl');
var $img = document.querySelector('.imageurl');

function photoInput(event) {
  $img.setAttribute('src', event.target.value);

}

$photoUrlInput.addEventListener('input', photoInput);

var $form = document.querySelector('.form');

function formSubmit(event) {
  event.preventDefault();
  if (data.editing !== null) {
    for (var i = 0; i < data.entries.length; i++) {
      if (data.editing.entryId === data.entries[i].entryId) {
        data.entries[i].title = $form.elements.title.value;
        data.entries[i].photourl = $form.elements.photo.value;
        data.entries[i].notes = $form.elements.note.value;
      }
    }
    var $findLi = document.querySelectorAll('li');
    for (var j = 0; j < $findLi.length; j++) {
      var $dataEntryId = $findLi[j].getAttribute('data-entry-id');
      $dataEntryId = Number($dataEntryId);
      if ($dataEntryId === data.entries[j].entryId) {
        $findLi[j].replaceWith(renderJournalEntry(data.entries[j]));
      }
    }
    data.editing = null;
    $img.setAttribute('src', 'images/placeholder-image-square.jpg');
    $form.reset();
  } else {
    var objform = {};
    objform.title = $form.elements.title.value;
    objform.photourl = $form.elements.photo.value;
    objform.notes = $form.elements.note.value;
    objform.entryId = data.nextEntryId;
    data.nextEntryId++;
    data.entries.unshift(objform);
    var entrytest = renderJournalEntry(objform);
    ul.prepend(entrytest);
    $placeholder.className = 'hidden';
    $img.setAttribute('src', 'images/placeholder-image-square.jpg');
    $form.reset();
  }
  viewSwap('entries');
}

$form.addEventListener('submit', formSubmit);

function renderJournalEntry(objform) {

  var liColumn = document.createElement('li');
  liColumn.setAttribute('class', 'column-full');
  liColumn.setAttribute('data-entry-id', objform.entryId);

  var divRow = document.createElement('div');
  divRow.setAttribute('class', 'row');

  liColumn.appendChild(divRow);

  var divColumn = document.createElement('div');
  divColumn.setAttribute('class', 'column-half column-full');

  divRow.appendChild(divColumn);

  var journalImg = document.createElement('img');
  journalImg.setAttribute('src', objform.photourl);

  divColumn.appendChild(journalImg);

  var divColumn2 = document.createElement('div');
  divColumn2.setAttribute('class', 'column-half column-full');

  divRow.appendChild(divColumn2);

  var divRowTest = document.createElement('div');
  divRowTest.setAttribute('class', 'row space-between align-center');
  divColumn2.appendChild(divRowTest);

  var titleContent = document.createElement('h2');
  titleContent.setAttribute('class', 'title');
  titleContent.textContent = objform.title;

  divRowTest.appendChild(titleContent);

  var editIcon = document.createElement('i');
  editIcon.setAttribute('class', 'fa-solid fa-pen pen');
  divRowTest.appendChild(editIcon);

  var notesContent = document.createElement('p');
  notesContent.setAttribute('class', 'notes');
  notesContent.textContent = objform.notes;

  divColumn2.appendChild(notesContent);

  return liColumn;

}

var ul = document.querySelector('ul');
var $placeholder = document.querySelector('.placeholder');
var $deleteEntryButton = document.querySelector('.delete-entry-button');

function viewSwap(viewData) {
  for (var i = 0; i < $allView.length; i++) {
    var $dataView = $allView[i].getAttribute('data-view');
    if (viewData === $dataView) {
      $allView[i].className = 'view';
      data.view = viewData;
    } else if (viewData !== $dataView) {
      $allView[i].className = 'view hidden';
    }
  }
}

function contentLoaded(event) {
  if (data.entries.length > 0) {
    $placeholder.className = 'hidden';
  }
  for (var i = 0; i < data.entries.length; i++) {
    var content = renderJournalEntry(data.entries[i]);
    ul.appendChild(content);
  }
  viewSwap(data.view);
}

window.addEventListener('DOMContentLoaded', contentLoaded);

var $anchor = document.querySelector('.entries');
var $allView = document.querySelectorAll('.view');

function changeDataView(event) {
  var $dataView = event.target.getAttribute('data-view');
  viewSwap($dataView);
  data.editing = null;
  $deleteEntryButton.className = 'visibility-hidden delete-entry-button';
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
}

$anchor.addEventListener('click', changeDataView);

var $buttonAnchor2 = document.querySelector('.new-button');

$buttonAnchor2.addEventListener('click', changeDataView);

var $parentUlElement = document.querySelector('ul');

function parentUlView(event) {
  if (event.target.tagName === 'I') {
    viewSwap('entry-form');
    var $closestEntryId = event.target.closest('li').getAttribute('data-entry-id');
    $closestEntryId = Number($closestEntryId);
    for (var i = 0; i < data.entries.length; i++) {
      if ($closestEntryId === data.entries[i].entryId) {
        data.editing = data.entries[i];
        var $journalTitle = document.getElementById('journal-title');
        $journalTitle.value = data.entries[i].title;
        var $journalPhotoUrl = document.getElementById('photo-url');
        $journalPhotoUrl.value = data.entries[i].photourl;
        var $journalNotes = document.getElementById('notes');
        $journalNotes.value = data.entries[i].notes;
        var $placeholderImg = document.querySelector('.imageurl');
        $placeholderImg.setAttribute('src', data.entries[i].photourl);
        $deleteEntryButton.className = 'delete-entry-button';
      }
    }
  }
}
$parentUlElement.addEventListener('click', parentUlView);

// if (data.editing !== null) {
//   $deleteEntryButton.className = 'delete-entry-button';
// } else {
//   $deleteEntryButton.className = 'hidden delete-entry-button';
// }
