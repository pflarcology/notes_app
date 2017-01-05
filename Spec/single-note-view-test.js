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

function testSingleNoteViewInstantiatesWithANoteModel() {
  function NoteDouble(text) {};
  NoteDouble.prototype = {
    showNoteText: function() {
      return "I am trapped in a computer"
    }
  };
  var noteDouble = new NoteDouble();
  var singleNoteView = new SingleNoteView(noteDouble);
  singleNoteView.note = noteDouble;
  assert.isTrue(singleNoteView.note === noteDouble, "testSingleNoteViewInstantiatesWithANoteModel")
};

function testStringHtmlFromNoteModel() {
  function NoteDouble(text) {};
  NoteDouble.prototype = {
    showNoteText: function() {
      return "I am trapped in a computer"
    }
  };
  var noteDouble = new NoteDouble();
  var singleNoteView = new SingleNoteView(noteDouble);
  assert.isTrue(singleNoteView.returnSingleNoteHtml() === "<div>I am trapped in a computer</div>", "testStringHtmlFromNoteModel")
};



testSingleNoteView();
testSingleNoteViewInstantiatesWithANoteModel();
testStringHtmlFromNoteModel();
