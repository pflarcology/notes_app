function testNoteControllerCanBeInstantiated(){
  var noteController = new NoteController();
  assert.isTrue(noteController, "testNoteControllerCanBeInstantiated");
};

function testInnerHtml(){
  function NoteListViewDouble() {};
  // NoteListViewDouble.prototype = {
  //   returnsHtmlist: function() {
  //     return "<ul><li><div>Favourite food: pesto</div></li></ul>"
  //   }
  // };
  var noteController = new NoteController();
  var noteListViewDouble = new NoteListViewDouble();
  noteController.createNote("Favourite food: pesto");
  var noteListModel = new NoteList();
  var html = document.getElementById("app");
  noteController.getHtml();
  var noteListView = noteListViewDouble;
  element = document.getElementById('app')
  assert.isTrue(element.innerHTML === "<ul><li><div>Favourite food: pesto</div></li></ul>", "testInnerHtml")
};
testNoteControllerCanBeInstantiated();
testInnerHtml();
