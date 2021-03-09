/*
1. Hicri yili miladi yila ceviren fonksiyonu olustur
2. Bu fonksiyonu export et
3. Miladi yili hicri yila ceviren fonksion olusturulur
4. Bu fonksiyonda export edilir
5. App.js de export edilen fonksiyonlar import edilir
6. Consola yazdirilir.
*/

let hicriDate = require("./src/hicri-converter.js");
let miladiDate = require("./src/miladi-converter.js");

console.log("Miladi yil: " + miladiDate.hicriYear(1423));
console.log("Hicri yil: " + hicriDate.miladiYear(2021));
