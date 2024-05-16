//document write ile çıktı verme

document.writeln("hello world <br>");
//üstte writeln yerine write kullanıp br yazmasaydık iki çıktı da yapışık olacaktı 
//writeln diyince iki çıktı arasına bir space koyuyor
document.writeln("koray göktaş");
document.write(55);

console.log("selam bebek");//inspect diyip console kısmına gelince görürüz
console.log(55.4);
console.log(true);
console.log({name:"koray",surname:"göktaş"});
console.clear();

let a=5;
let b=2;
console.log(a+b);
console.log("iki sayının toplamı:",a+b);

//alert (uyarı) popup ile çıktı verme işlemleri
console.log(window);
//yukarıdaki window objesi içerisinde bir sürü fonksiyonel grup vardı
console.log("sitenin sahiplik adresi:",document.location.host);
alert("merhaba");
alert("iki sayının toplamı:"+(a+b));