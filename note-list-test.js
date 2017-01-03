function testListModelIsInstantiated() {
  var noteList = new NoteList();
  assert.isTrue(noteList);
}

function testListModelIsAnArray() {
  var noteList = new NoteList();
  assert.isTrue(noteList.returnList() instanceof Array);
}

function testListModelStoresNotesInArray(){
  var noteList = new NoteList();
  noteList.createNote("Hello");
  assert.isTrue(noteList.returnList().length === 1);
}

testListModelIsInstantiated();
testListModelIsAnArray();
testListModelStoresNotesInArray();
