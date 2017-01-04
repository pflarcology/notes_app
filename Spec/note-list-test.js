function testListModelIsInstantiated() {
  var noteList = new NoteList();
  assert.isTrue(noteList, "testListModelIsInstantiated");
}

function testListModelIsAnArray() {
  var noteList = new NoteList();
  assert.isTrue(noteList.returnList() instanceof Array, "testListModelIsAnArray");
}

function testListModelStoresNotesInArray(){
  var noteList = new NoteList();
  noteList.createNote("Hello");
  assert.isTrue(noteList.returnList().length === 1, "testListModelStoresNotesInArray");
}

testListModelIsInstantiated();
testListModelIsAnArray();
testListModelStoresNotesInArray();
