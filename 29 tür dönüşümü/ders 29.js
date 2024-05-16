/*
let a=5;
let b="3";
console.log(typeof b);
b=Number(b);
console.log(typeof b);
*/

//-----------------------------
//istersek Number diyerek değiştiririz istersek de parseInt ile number veri tipine dönüştürürüz
/*
let b="12";
let a=23;
b=parseInt(b);
console.log(a+b);
*/


/*
let a="12.5";
a=parseFloat(a);
console.log(a);
//parseFloat ve parseInt stringi numbera dönüştürüyor ama float olanı ondalıklı kısmı da yazar okuttuğunda
a=parseInt(a);
console.log(a);
*/

let a=true;//bunun veri tipi booleandır
a=(a).toString();// veya String(a) deyip de çevirebilirsin
console.log(typeof a);
console.log(a);

//ÖNEMLİ: sayı olmayan bir şeyi mesela "b" yi numbera çeviremezsiniz
//eğer çevirmeye çalışıp konsolda yazdırırsan NaN çıktısını alırsın=not a number
//diziler object veri tipine sahiptir bunları da string veri tipine çevirebilirsiniz
//ama dizileri tutup da numbera çeviremezsin. İÇİNDEKİLER SAYI OLDA DAİ