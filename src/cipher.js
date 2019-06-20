
window.cipher ={
  encode:(offset, string)=>{
    offset = parseInt(offset);
    let cifradoCesar= "";

    for (let i = 0; i < string.length; i++) {
      let ascii = string.charCodeAt(i);
      let nuevoAscii = (ascii - 65 + offset) % 26 + 65;
      let toString = String.fromCharCode(nuevoAscii);
      cifradoCesar = cifradoCesar +  toString;
    }
    return cifradoCesar;
  },

  decode: (offset, string) => {
   offset = parseInt(offset);
   let cifradoCesar= "";

   for (let i = 0; i < string.length; i++) {
     let ascii = string.charCodeAt(i);
     console.log(ascii);
     let nuevoAscii = ((ascii + 65 - offset) % 26 + 65);
     console.log(nuevoAscii);
     let toString = String.fromCharCode(nuevoAscii);
     cifradoCesar = cifradoCesar + toString;
   }
   return cifradoCesar;

  }
};
