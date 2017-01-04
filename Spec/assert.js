var assert = {
  isTrue: function(assertionToCheck, nameOfAssertion) {
    if (assertionToCheck) {
      console.log (nameOfAssertion + " Passed");
    }else{
      throw new Error("Assertion failed: " + nameOfAssertion + " is not truthy");
    }
  }
};
