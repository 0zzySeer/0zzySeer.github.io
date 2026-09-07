/**
 * OSIEL & DANIELLE — RSVP
 *
 * Este script cria automaticamente uma planilha "RSVP — Osiel & Danielle"
 * na conta Google que publicou o Web App e grava cada confirmação nela.
 *
 * Não é necessário criar uma planilha antes.
 * Depois da primeira confirmação, a URL da planilha fica disponível nos logs
 * da execução do script e o ID é guardado nas propriedades do projeto.
 */

const SHEET_NAME = "RSVP";
const FILE_NAME = "RSVP — Osiel & Danielle";

function getSpreadsheet_() {
  const props = PropertiesService.getScriptProperties();
  let id = props.getProperty("SPREADSHEET_ID");

  if (id) {
    try {
      return SpreadsheetApp.openById(id);
    } catch (e) {
      props.deleteProperty("SPREADSHEET_ID");
    }
  }

  const ss = SpreadsheetApp.create(FILE_NAME);
  const sheet = ss.getSheets()[0];
  sheet.setName(SHEET_NAME);
  sheet.appendRow(["Data/hora", "Nome", "Presença", "Mensagem", "Origem", "Data do evento"]);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, 6);

  props.setProperty("SPREADSHEET_ID", ss.getId());
  console.log("PLANILHA DE CONFIRMAÇÕES: " + ss.getUrl());
  return ss;
}

function doPost(e) {
  try {
    const p = e && e.parameter ? e.parameter : {};
    const ss = getSpreadsheet_();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    sheet.appendRow([
      new Date(),
      p.nome || "",
      p.presenca || "",
      p.mensagem || "",
      p.origem || "site de casamento",
      p.data_evento || "14 de novembro de 2026"
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ok:true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    console.error(err);
    return ContentService
      .createTextOutput(JSON.stringify({ok:false}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput("RSVP Osiel & Danielle ativo.")
    .setMimeType(ContentService.MimeType.TEXT);
}
