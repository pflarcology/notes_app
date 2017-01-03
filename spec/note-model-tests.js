
function testNoteIsStored() {
  var note = new Note("I am undecided on my favourite programming language");
  assert.isTrue(note.text === "I am undecided on my favourite programming language", "Test note is stored")
}

function testNoteIsReturned() {
  var note = new Note("I am undecided on my favourite programming language");
  assert.isTrue(note.showText() === "I am undecided on my favourite programming language", "Test note is returned")
}


testNoteIsStored();
testNoteIsReturned();
