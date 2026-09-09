const PLANILHA_ID = "1a1cZyLKBgj3bIfvIlrsY85LwuqK_WxpKyZX64tdkJZ8";
const NOME_ABA = "RSVP";

function gravarResposta_(p) {
  const planilha = SpreadsheetApp.openById(PLANILHA_ID);
  let aba = planilha.getSheetByName(NOME_ABA);
  if (!aba) aba = planilha.insertSheet(NOME_ABA);

  if (aba.getLastRow() === 0) {
    aba.appendRow(["Data e hora", "Nome", "Presença", "Mensagem", "Origem", "Data do evento"]);
  }

  aba.appendRow([
    new Date(),
    p.nome || "",
    p.presenca || "",
    p.mensagem || "",
    p.origem || "site de casamento",
    p.data_evento || "14 de novembro de 2026"
  ]);
}

function doGet(e) {
  try {
    gravarResposta_(e && e.parameter ? e.parameter : {});
    const result = JSON.stringify({ok:true});
    const callback = e && e.parameter && e.parameter.callback;
    if (callback && /^[A-Za-z_$][0-9A-Za-z_$\.]*$/.test(callback)) {
      return ContentService.createTextOutput(callback + "(" + result + ");")
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    return ContentService.createTextOutput(result)
      .setMimeType(ContentService.MimeType.JSON);
  } catch (erro) {
    const result = JSON.stringify({ok:false, erro:String(erro)});
    const callback = e && e.parameter && e.parameter.callback;
    if (callback && /^[A-Za-z_$][0-9A-Za-z_$\.]*$/.test(callback)) {
      return ContentService.createTextOutput(callback + "(" + result + ");")
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    return ContentService.createTextOutput(result)
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  return doGet(e);
}
