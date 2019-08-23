// Funcionalidade dos botões pegar dados do HTML
document.getElementById("btn-enviarCode").addEventListener("click", giveEncode);
document.getElementById("btn-enviarDecode").addEventListener("click", giveDecode);

function giveEncode() {
  let offsetEncode = Number(document.getElementById("offsetEncode").value);
  let inputEncode = document.getElementById("inputEncode").value;
  let resultEncode = window.cipher.encode(offsetEncode, inputEncode);
  document.getElementById("resultEncode").innerHTML = `<p> Sua mensagem codificada é ${resultEncode} </p>`;
}

function giveDecode() {
  let offsetDecode = Number(document.getElementById("offsetDecode").value);
  let inputDecode = document.getElementById("inputDecode").value;
  let resultDecode = window.cipher.decode(offsetDecode, inputDecode);
  document.getElementById("resultDecode").innerHTML = `<p> Sua mensagem decodificada é ${resultDecode} </p>`;
}
