(function(exports) {
  function NoteListView(noteListModel) {
    this.noteListModel = noteListModel;
  }

  NoteListView.prototype.getListOfNotes = function() {
    return this.listOfNotes;
  };

  NoteListView.prototype.returnsHtmlList = function() {
    var output = "<ul>";
    this.noteListModel.noteList.forEach(function(note) {
      output += "<li><div>" + note.noteText.slice(0,20) + "</li></div>";
    })
    return output + "</ul>";
  }
  exports.NoteListView = NoteListView;
})(this);
