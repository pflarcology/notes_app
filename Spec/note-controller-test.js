function testNoteControllerCanBeInstantiated(){
  var noteController = new NoteController();
  assert.isTrue(noteController, "testNoteControllerCanBeInstantiated");
};

function testInnerHtml(){
  function NoteListViewDouble() {};
  NoteListViewDouble.prototype = {
    returnsHtmlList: function() {
      return "<ul><li><div>Favourite food: pesto</div></li></ul>"
    }
  };
  var noteController = new NoteController();
  var noteListViewDouble = new NoteListViewDouble();
  noteController.noteListView = noteListViewDouble;
  noteController.getHtml();
  element = document.getElementById('app')
  assert.isTrue(element.innerHTML === "<ul><li><div>Favourite food: pesto</div></li></ul>", "testInnerHtml")

};

function testGettingIdFromUrl() {
  function NoteListViewDouble() {};
  NoteListViewDouble.prototype = {
    returnsHtmlList: function() {
      return "<ul><li><a id='link-0' href='#0'><div>Favourite food: choc</div></a></li></ul>"
    }
  };
  var noteController = new NoteController();
  var noteListViewDouble = new NoteListViewDouble();
  noteController.noteListView = noteListViewDouble;
  noteController.getHtml();
  document.getElementById('link-0').click();
  assert.isTrue(noteController.getIdFromUrl() === "0", "testGettingIdFromURL");
};

function testGetNoteUsingId() {
  var noteListViewDouble = {returnsHtmlList: function(){return "<ul><li><a id='link-0' href='#0'><div>Favourite food: choc</div></a></li></ul>"}};
  var noteDouble = {showText: function(){return "Favourite food: chocolate cake"}};
  var noteListDouble = {noteListArray: [noteDouble]};
  var noteController = new NoteController();
  noteController.noteListView = noteListViewDouble;
  noteController.noteList = noteListDouble
  document.getElementById('link-0').click();
  assert.isTrue(noteController.returnsNoteFromId().showText() === "Favourite food: chocolate cake", "testGetNoteUsingId")
}

testNoteControllerCanBeInstantiated();
testInnerHtml();
testGettingIdFromUrl();
testGetNoteUsingId();
