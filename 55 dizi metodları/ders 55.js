//DİZİ METODLARI

// push= dizinin sonuna eleman ekler ayrıca dizinin uzunluğunu verir
// unshift=dizinin başına eleman ekler ayrıca dizinin eleman sayısını döner
// pop= dizinin sonundan eleman siler ayrıca eleman sayısını döner
// shift= dizinin başından eleman siler ayrıca eleman sayısını döner 
// splice(index,index) = eleman eklemek ve silmek için kullanılır
// toString= diziyi string veri tipine dönüştürebiliriz(normalde object veri tipindedir)
// join= diziyi stringe çevirir farkı ise araya eleman ekleyebiliriz 
// concat= dizileri birleştirmemizi sağlar
// slice(dilimlemek)= diziyi istediğimiz yerden bölüp yeni bir dizi elde edebiliriz
// length= dizinin uzunluğunu verir
// reverse=dizinin elemanlarını terse çevirmek
// split(bölmek)= belirli bir ifadeye göre bölüp diziye çevirmek
// indexOf = elemanın index numarasını verir
// includes = verilen elemanı içeriyor mu ona bakar


let arabalar=["mercedes","porsche","toyota","renault","bmw"];
let arabalar2=["hundai","tofas"];

//PUSH METOD

/*
console.log(arabalar.length);
arabalar.push("opel");
console.log(arabalar);
*/

//UNSHİFT METOD
/*
arabalar.unshift("hundai");
console.log(arabalar);
*/

//POP METOD
/*
let silinenElaman = arabalar.pop();
console.log(arabalar);
console.log(silinenElaman);
*/

//SHİFT METOD
/*
let silinenElaman= arabalar.shift();
console.log(arabalar);
console.log(silinenElaman);
*/

//SPLİCE METOD
/*
arabalar.splice(2,0,"hundai");//bunun anlamı 2.indekse herhangi bir eleman silmeden hundai ekle 
console.log(arabalar);
*/
/*
console.log(arabalar);
arabalar.splice(1,2);//1 indeks dahil olmak üzere sırayla iki eleman sil
console.log(arabalar);
*/
/*
console.log(arabalar);
arabalar.splice(2,2,"hundai");//2.indekten itibaren iki eleman sil yerine hundai koy
console.log(arabalar);
*/

//TOSTRİNG METODU

/*
arabalar.toString();
console.log(arabalar);
console.log(typeof arabalar);
*/

//JOİN METODU
/*
let stringArabalar = arabalar.join("-");//elemanların arasına - koyar
console.log(stringArabalar);
*/

//CONCAT METODU
/*
let birlestirilmis= arabalar.concat(arabalar2);
console.log(birlestirilmis);
*/

//SLİCE METODU
/*
let ayriDizi= arabalar.slice(1,3);//1 den 3 e kadar elemanları tut ve ayrı bir dizi oluştur
console.log(ayriDizi);
*/


//LENGTH METODU
/*
console.log(arabalar.length)
*/

//REVERSE METODU
/*
arabalar.reverse();
console.log(arabalar);
*/

//SPLİT METODU
/*
let isimler="koray-gulcan-gulsah";
let isimlerDizi=isimler.split("-");// - işaretine göre elemanlı böl ve bir dizi oluştur
console.log(isimlerDizi);
*/

//İNDEXOF METODU
/*
let index=arabalar.indexOf("renault");//yok ise -1 döner
console.log(index);
*/

// İNCLUDES METODU
let sonuc=arabalar.includes("porsche");//içerip içermediğine göre true false döndürür
console.log(sonuc);