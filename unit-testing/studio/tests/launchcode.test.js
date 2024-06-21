// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("Should be organization: nonprofit", function() {
    expect(launchcode.organization).toBe("nonprofit");
  });
  test("Should return executiveDirector: 'Jeff'", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  test("Should return percentageCoolEmployees: '100'", function() {
    expect(launchcode.percentageCoolEmployees).toBe("100");
  });
  test("Should return 'number' for typeof percerntageCoolEmployee", function() {
    expect((typeof(launchcode.percentageCoolEmployees))).toBe("number");
  });
  // Write your unit tests here!
  
});


