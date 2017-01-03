(function(exports) {
  function NoteListView() {
    this.listOfNotes = new NoteList();
  }

  NoteListView.prototype.getListOfNotes = function() {
    return this.listOfNotes;
  };
  
  exports.NoteListView = NoteListView;
})(this);
