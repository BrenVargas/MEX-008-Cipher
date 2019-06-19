
window.cipher ={
  encode:(offset, string)=>{
    offset = parseInt(offset)
    let cifradoCesar="";
    for (let i = 0; i < string.length; i++) {
      let ascii = string.charCodeAt(i);
      let nuevoAscii = (ascii - 65 + offset) % 26 + 65;
      let toString = String.fromCharCode(nuevoAscii)
      cifradoCesar=cifradoCesar +  toString;
    }
    return cifradoCesar;
  },
  decode: (offset, string) => {
    
  }
};

// window.cipher = {
//   encode : (offset, string) => {
//     string=string.toUpperCase();
//     offset=parseInt(offset);
//     let shift=" ";
//     let encryptedMessage=" ";
//
//   }
//
// for (var i = 0; i < string.length; i++) {
//   let ascii = string.charCodeAt(i);
//   shift=(ascii-65+offset)%26+65;
//   encryptedMessage=encryptedMessage+string.fromCharCode();
//
// }
