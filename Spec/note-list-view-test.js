function testListViewModelIsInstantiated() {
  var noteListView = new NoteListView();
  assert.isTrue(noteListView, "testListViewModelIsInstantiated");
}

function testListViewModelInstantiatesWithNoteListModel() {
  var noteListModel = new NoteList();
  var noteListView = new NoteListView(noteListModel);
  console.log("testListViewModelInstantiatesWithNoteListModel")
  assert.isTrue(noteListView.noteListModel === noteListModel, "testListViewModelInstantiatesWithNoteListModel");
}

function testReturnHtml(){
  var noteListModel = new NoteList();
  noteListModel.createNote("Favourite food: pesto");
  var noteListView = new NoteListView(noteListModel);
  console.log("testReturnHtml")
  assert.isTrue(noteListView.returnsHtmlList()=== "<ul><li><div>Favourite food: pesto</li></div></ul>", "testReturnHtml")
}

testListViewModelIsInstantiated();
testListViewModelInstantiatesWithNoteListModel();
testReturnHtml();
