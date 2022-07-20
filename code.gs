function doGet(e) {
  
  if(e.parameters.v == "form") {
    var cadastroPage = HtmlService.createTemplateFromFile('cadastro').evaluate().setTitle("New Register");
   return cadastroPage;
  } 
  if(e.parameters.x == "formd") {
    var cadastradosPage = HtmlService.createTemplateFromFile('cadastrados').evaluate().setTitle("Registered");
     return cadastradosPage;
  } 
  if(e.parameters.x == "return1") {
    var retornoPage = HtmlService.createTemplateFromFile('retorno').evaluate().setTitle("New register successfully completed");
     return retornoPage;
  } 
  else {
    var indexPage = HtmlService.createTemplateFromFile('index').evaluate().setTitle("Home");
     return indexPage;
  } 
}

/*
*fução que "linka" o style.css.html
*/
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/*
* função que grava os valores na tabela
*/
function gravaValores(valueId, valueName, valueEmail, valuePhone, valueAddress){
  var spreadSheet = SpreadsheetApp.openById(ID_SHEET);
  var mainSheet = spreadSheet.getSheetByName(NAME_SHEET);
  lastRow = mainSheet.getLastRow() + 1;
  mainSheet.getRange('A' + lastRow).setValue(valueId);
  mainSheet.getRange('B' + lastRow).setValue(valueName);
  mainSheet.getRange('C' + lastRow).setValue(valueEmail);
  mainSheet.getRange('D' + lastRow).setValue(valuePhone);
  mainSheet.getRange('E' + lastRow).setValue(valueAddress);
}

/*
*função que delimita o espaço da tabela para mostrar na page de cadastrados
*/
function getSheetData() { 
  var spreadSheet= SpreadsheetApp.openById(ID_SHEET);
  mainSheet = spreadSheet.getSheetByName(NAME_SHEET); 
  var dataRange = mainSheet.getRange("A1:E");
  var dataValues = dataRange.getValues();  
  return dataValues;
}