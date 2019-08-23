/* eslint-disable for-direction */
// Adicionar funções de cifrar e decifrar

window.cipher = {
  encode: encode,
  decode: decode
};

// encoda a mensagem com o descol
function encode(offsetEncode, inputEncode) {
  let resultEncode = "";

  for (let i = 0; i < inputEncode.length; i++) {
    let messageForInput = inputEncode[i].charCodeAt();
    let messageCharCode = ((messageForInput - 65 + offsetEncode) % 26) + 65;
    resultEncode += String.fromCharCode(messageCharCode);
  }

  return resultEncode;
}

// desencoda a mensagem com o descol
function decode(offsetDecode, inputDecode) {
  let resultDecode = "";

  for (let i = 0; i < inputDecode.length; i++) {
    let messageForInputDecode = inputDecode[i].charCodeAt();
    let messageCharCode = ((messageForInputDecode - 90 - offsetDecode) % 26) + 90;
    resultDecode += String.fromCharCode(messageCharCode);
  }

  return resultDecode;
}
