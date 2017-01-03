(function(exports){
  function NoteListView(noteListModel) {
    this.noteListModel = noteListModel;
  }

  NoteListView.prototype = {
    convertedToHTML: function() {
      var output = "<ul>"
      this.noteListModel.listOfNotes.forEach(function(note){
        output += "<li><div>" + note + "</div></li>";
      })
      output += "</ul>"
      return output;
  }}

  exports.NoteListView = NoteListView;
})(this);
