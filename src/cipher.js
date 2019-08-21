/* eslint-disable for-direction */
// Adicionar funções de cifrar e decifrar
// Funções do Dani

window.cipher = {
  encode: encode,
  decode: decode
};
// encoda a mensagem com o descol
function encode(offset,inputEncode) {
  let messageForInput;
  let messageCharCode;
  let resultEncode;

  for (let i= 0; i < inputEncode.length; i++) {
    messageForInput = inputEncode[i].charCodeAt();
    messageCharCode = ((messageForInput - 32 + offset) % 108 + 32);
    resultEncode += String.fromCharCode(messageCharCode);
  }
  return resultEncode ;

}

// desencoda a mensagem com o descol
function decode(offset,inputDecode) {
  let messageForInputDecode;
  let messageCharCode;
  let resultDecode;

  for (let i = 0; i < inputDecode.length; i++) {
    messageForInputDecode = inputDecode[i].charCodeAt();
    messageCharCode = ((messageForInputDecode - 32 - offset) % 108 + 32);
    resultDecode += String.fromCharCode(messageCharCode);
  }

  return resultDecode ;
}
