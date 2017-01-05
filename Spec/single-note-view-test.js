function testSingleNoteView () {
  function NoteDouble(text) {};
  NoteDouble.prototype = {
    showNoteText: function() {
      return "I am trapped in a computer"
    }
  };
  var noteDouble = new NoteDouble();
  var singleNoteView = new SingleNoteView(noteDouble);
  assert.isTrue(singleNoteView, "tests there is single note view")

}



testSingleNoteView();
