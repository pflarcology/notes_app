(function(exports) {

  function NoteController(){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.createNote = function(text){
    this.noteList.createNote(text);
    return this.noteList.returnList();
  }

  NoteController.prototype.getHtml = function(){
    html = document.getElementById("app");
    html.innerHTML = this.noteListView.returnsHtmlList();
  }

  exports.NoteController = NoteController;
})(this);
