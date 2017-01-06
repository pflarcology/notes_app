function testNoteControllerCanBeInstantiated(){
  var noteController = new NoteController(noteList = {}, noteListView = {});
  assert.isTrue(noteController, "testNoteControllerCanBeInstantiated");
};

function testInnerHtml(){
  function NoteListViewDouble() {};
  NoteListViewDouble.prototype = {
    returnsHtmlList: function() {
      return "<ul><li><div>Favourite food: pesto</div></li></ul>"
    }
  };
  var noteListViewDouble = new NoteListViewDouble();
  var noteController = new NoteController(notList= {}, noteListViewDouble);
  noteController.getHtml(noteListViewDouble.returnsHtmlList());
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
  var noteListViewDouble = new NoteListViewDouble();
  var noteController = new NoteController(notList= {}, noteListViewDouble);
  noteController.getHtml(noteListViewDouble.returnsHtmlList());
  document.getElementById('link-0').click();
  assert.isTrue(noteController.getIdFromUrl() === "0", "testGettingIdFromURL");
};

function testGetNoteUsingId() {
  var noteListViewDouble = {returnsHtmlList: function(){return "<ul><li><a id='link-0' href='#0'><div>Favourite food: choc</div></a></li></ul>"}};
  var noteDouble = {showText: function(){return "Favourite food: chocolate cake"}};
  var noteListDouble = {noteListArray: [noteDouble]};
  var noteController = new NoteController(noteListDouble, noteListViewDouble);
  document.getElementById('link-0').click();
  assert.isTrue(noteController.returnsNoteFromId().showText() === "Favourite food: chocolate cake", "testGetNoteUsingId")
}

function testupdatingSingleNoteView() {
  var noteController = new NoteController(noteList = {}, noteListView = {});
  noteController.getSingleNote = function() {return "<div>Favourite food: chocolate cake</div>"}
  noteController.updateSingleNote();
  element = document.getElementById('app')
  assert.isTrue(element.innerHTML === "<div>Favourite food: chocolate cake</div>", "testupdatingSingleNoteView")

}

testNoteControllerCanBeInstantiated();
testInnerHtml();
testGettingIdFromUrl();
testGetNoteUsingId();
testupdatingSingleNoteView();
