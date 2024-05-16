let names= ["ali","koray","gulsah","kerim"];
sessionStorage.setItem("names",JSON.stringify(names));
let value =JSON.parse(sessionStorage.getItem("names"));
// value.forEach(function(name) {
//     console.log(name);
// });
console.log(names[2]);

sessionStorage.setItem("koray","19");
sessionStorage.setItem("gülşah","20");
let value2 = sessionStorage.getItem("koray");
console.log(value2); 
console.log(typeof value2);
sessionStorage.removeItem("koray");//değer siler
sessionStorage.clear()// ehpsini temizler