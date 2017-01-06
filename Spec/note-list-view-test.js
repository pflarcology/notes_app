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
  console.log("testReturnHtmlFirst20")
  assert.isTrue(noteListView.returnsHtmlList()=== "<ul><li><a id='link-5' href='#5'><div>Favourite food: choc</div></a></li></ul>", "testReturnHtmlFirst20")
}

testListViewModelIsInstantiated();
testListViewModelInstantiatesWithNoteListModel();
testReturnHtmlFirst20();
