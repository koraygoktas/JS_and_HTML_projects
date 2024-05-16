//string sınıfının metodları

let kurs="Modern Web Geliştirme Kursu";
let tarih= "2023";
//charAt() == parametre 
//concat()
//indexof()
//lastindexof()
//toUpperCase()
//toLowerCase()
//trim()= sağdan ve soldan spaceleri çekmek için kullandığımız bir metodtur
//slice()
//substring()
//replace()
//split()
//valueOf()
//startsWith()
//endsWith()

/*
let karakter = kurs.charAt(3);//e yazdırır
console.log(karakter);
*/

/*
let sonuc=kurs.concat(" ",tarih);//bir veya daha çok strigni birleştirebilirsin
console.log(sonuc);
*/

/*
let index= kurs.indexOf("d");
console.log(index);
*/

// let index =kurs.lastIndexOf("K");
// console.log(index);

// let sonuc= kurs.toUpperCase();
// console.log(sonuc);
// sonuc= kurs.toLowerCase();
// console.log(sonuc);


/* mesela kursu "Modern Web Geliştirme Kursu" yerine "  Modern Web Geliştirme Kursu  " şeklinde
aratırsa trim metodunu olmasaydı bulamayabilirdi biz bunun önüne geçmeye çalışıyoruz */
// console.log(kurs.trim());


// console.log(kurs);
// console.log(kurs.slice(7,10));

// substring-slice aynı şeyler

// console.log(kurs);
// console.log(kurs.replace("Modern","güncel"));

// console.log(kurs);
// let dizi=kurs.split(" ");     dizi oluşturup kelimeleri boşluklardan ayırıp elemanı yaptık
// console.log(dizi);

// console.log(kurs);
// console.log(kurs.startsWith("M"));          eğer M ile başlıyorsa true verir