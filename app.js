console.log("Hello B2S");

const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

function logWorkbookInfo() {
  // grab the workbook name
  workbook = viz.workbook;
  console.log(`The workbook name is ${workbook.name}`);
  // get the array of dashboards
  let sheets = workbook.publishedSheetsInfo;
  console.log(sheets);
  sheets.forEach((dog) => {
    index = dog.index;
    console.log(`The sheet with index ${index} is ${dog.name}`);
  });
  // find the active sheet
  vizActiveSheet = workbook.activeSheet;
  console.log(`The active sheet is ${vizActiveSheet.name}`);
  // list all sheets within this active sheet
  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((cat) => {
    index = cat.index;
    console.log(`The worksheet with index ${index} is ${cat.name}`);
  });
}

viz.addEventListener("firstinteractive", logWorkbookInfo);

// defining buttons
const onwButton = document.getElementById("onw");
const clearButton = document.getElementById("clear");
const undoButton = document.getElementById("undo");

//logic for button functions
function onwFunc() {
  listSheets.forEach((pig) => {
    pig.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
  });
}

function clearFunc() {
  listSheets.forEach((cow) => {
    cow.clearFilterAsync("State");
  });
}

function undoFunc() {
  viz.undoAsync();
}

//event listener to run logic
onwButton.addEventListener("click", onwFunc);
clearButton.addEventListener("click", clearFunc);
undoButton.addEventListener("click", undoFunc);
