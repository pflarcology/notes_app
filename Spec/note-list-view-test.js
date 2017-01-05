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

function testReturnHtmlFirst20(){
  var noteListModel = new NoteList();
  noteListModel.createNote("Favourite food: chocolate cake");
  var noteListView = new NoteListView(noteListModel);
  console.log("testReturnHtml")
  assert.isTrue(noteListView.returnsHtmlList()=== "<ul><li><div>Favourite food: choc</li></div></ul>", "testReturnHtml", "testReturnHtmlFirst20")
}

testListViewModelIsInstantiated();
testListViewModelInstantiatesWithNoteListModel();
testReturnHtmlFirst20();
