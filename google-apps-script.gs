const SPREADSHEET_ID = "1a1cZyLKBgj3bIfvIlrsY85LwuqK_WxpKyZX64tdkJZ8";
const SHEET_NAME = "RSVP";

function doGet() {
  return ContentService.createTextOutput("RSVP Osiel & Danielle funcionando!");
}

function doPost(e) {
  try {
    const p = e && e.parameter ? e.parameter : {};
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Data e hora", "Nome", "Presença", "Mensagem", "Origem", "Data do evento"]);
    }
    sheet.appendRow([new Date(), p.nome || "", p.presenca || "", p.mensagem || "", p.origem || "site de casamento", p.data_evento || "14 de novembro de 2026"]);
    return ContentService.createTextOutput("OK");
  } catch (erro) {
    return ContentService.createTextOutput("ERRO: " + erro.message);
  }
}
