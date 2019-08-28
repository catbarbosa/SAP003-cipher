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
    let messageForInputEncode = inputEncode[i].charCodeAt();
    let messageCharCode = ((messageForInputEncode - 65 + offsetEncode) % 26) + 65;
    if (messageForInputEncode >= 65 && messageForInputEncode <= 90) {
      resultEncode += String.fromCharCode(messageCharCode);
    } else if (messageForInputEncode >=97 && messageForInputEncode<= 122) {
      let messageCharCodeTiny = ((messageForInputEncode - 97 + offsetEncode) % 26) + 97;
      resultEncode += String.fromCharCode(messageCharCodeTiny);
    } else {
      let messageCharEncodeSpecial = ((messageForInputEncode - 32 + offsetEncode) % 33) + 32;
      resultEncode += String.fromCharCode(messageCharEncodeSpecial);
    }
  }
  return resultEncode;
}

// desencoda a mensagem com o descol
function decode(offsetDecode, inputDecode) {
  let resultDecode = "";

  for (let i = 0; i < inputDecode.length; i++) {
    let messageForInputDecode = inputDecode[i].charCodeAt();
    let messageCharDecode = ((messageForInputDecode - 90 - offsetDecode) % 26) + 90;
    if (messageForInputDecode >= 65 && messageForInputDecode <= 90) {
      resultDecode += String.fromCharCode(messageCharDecode);
    } else if (messageForInputDecode >=97 && messageForInputDecode <= 122) {
      let messageCharCodeTiny = ((messageForInputDecode - 122 - offsetDecode) % 26) + 122;
      resultDecode += String.fromCharCode(messageCharCodeTiny);
    } else {
      let messageCharDecodeSpecial = ((messageForInputDecode - 64 - offsetDecode) % 33) + 64;
      resultDecode += String.fromCharCode(messageCharDecodeSpecial);
    }
  }
  return resultDecode;
}
