// Funcionalidade dos botões pegar dados do HTML

function giveEncode() {
  let offset = Number(document.getElementById("offset").value);
  let inputEncode= document.getElementById("inputEncode").value;
  let resultEncode = cipher.encode(offset,inputEncode);
  document.getElementById("resultEncode").innerHTML= `<p> Sua mensagem codificada é ${resultEncode} </p>`;

}

function giveDecode() {
  let offset = Number(document.getElementById("offset").value);
  let inputDecode = document.getElementById("inputDecode").value;
  let resultDecode = cipher.decode(offset, inputDecode);
  document.getElementById("resultDecode").innerHTML= `<p> Sua mensagem decodificada é ${resultDecode} </p>`;

}
