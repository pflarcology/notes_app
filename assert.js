var assert = {
  isTrue: function(assertionToCheck) {
    if (assertionToCheck) {
      console.log (assertionToCheck + " Passed");
    }else{
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};
