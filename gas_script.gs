function doGet(e) {
  DriveApp.createFile("script/get.txt", JSON.stringify(e));
  // listデータをjsonに変換
  payload = JSON.stringify({type: 'get'})
  // payloadをreturnするだけではだめ
  // ContentServiceを利用して、responseを作成
  ContentService.createTextOutput()
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(payload);
  // return response-data
  return output;
}

function doPost(e) {
  DriveApp.createFile("script/post.txt", JSON.stringify(e));
  var c = e.postData.contents;
  var cj = JSON.parse(c);
  DriveApp.createFile("script/post_.txt", c);
  if (cj.action == "labeled") {
    DriveApp.createFile("script/post_l.txt", cj.label.name);
  }
  // listデータをjsonに変換
  payload = JSON.stringify({type: 'post'})
  // payloadをreturnするだけではだめ
  // ContentServiceを利用して、responseを作成
  ContentService.createTextOutput()
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(payload);
  // return response-data
  return output;
}
