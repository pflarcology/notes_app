(function(exports) {

  function NoteController(){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.createNote = function(text){
    this.noteList.createNote(text);
    return this.noteList.returnList();
  };

  NoteController.prototype.getHtml = function(){
    html = document.getElementById("app");
    html.innerHTML = this.noteListView.returnsHtmlList();
  };

  NoteController.prototype.getIdFromUrl = function() {
    return (window.location.hash.split("#")[1])
  }

  NoteController.prototype.returnsNoteFromId = function() {
    return this.noteList.noteListArray[this.getIdFromUrl()];
  }



  exports.NoteController = NoteController;
})(this);
