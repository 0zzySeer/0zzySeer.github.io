/**
 * OSIEL & DANIELLE — RSVP
 *
 * 1. Crie/abra a planilha onde deseja receber as confirmações.
 * 2. Extensões > Apps Script.
 * 3. Cole este arquivo no editor.
 * 4. Ajuste SPREADSHEET_ID e SHEET_NAME.
 * 5. Implante como aplicativo da Web:
 *    - Executar como: você
 *    - Quem tem acesso: qualquer pessoa
 * 6. Copie a URL /exec para RSVP_ENDPOINT no index-rsvp-custom.html.
 */

const SPREADSHEET_ID = "COLE_AQUI_O_ID_DA_PLANILHA";
const SHEET_NAME = "RSVP";

function doPost(e) {
  try {
    const p = e && e.parameter ? e.parameter : {};
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Data/hora", "Nome", "Presença", "Mensagem", "Origem", "Data do evento"]);
    }

    sheet.appendRow([
      new Date(),
      p.nome || "",
      p.presenca || "",
      p.mensagem || "",
      p.origem || "site",
      p.data_evento || "14 de novembro de 2026"
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
