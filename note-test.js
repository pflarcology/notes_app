function testNoteTakesTextUponInstantiation() {
  var note = new Note("a string");
  assert.isTrue(note.noteText === "a string");
};

function testNoteTextCanBeSeen() {
  var note = new Note("a string");
  assert.isTrue(note.showNoteText() === "a string");
};


testNoteTakesTextUponInstantiation();
testNoteTextCanBeSeen();
