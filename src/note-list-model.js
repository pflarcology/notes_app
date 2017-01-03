(function(exports) {
  function AllNotes() {
    this.listOfNotes = [];
  }
  AllNotes.prototype = {
    createNote: function(noteText) {
      note = new Note(noteText);
      this.listOfNotes.push(note.text);
    }
  }


  exports.AllNotes = AllNotes;
})(this);
