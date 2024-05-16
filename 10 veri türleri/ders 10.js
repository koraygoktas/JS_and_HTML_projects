/*
1-string
2-number
3-boolean
4-null
5-undefined 
6-object
7-function
*/

let isim ="koray göktaş 2 nisanda doğdu";
console.log(isim);
console.log(typeof isim);
let sayi1=5;//tamsayı olmasa da number olarak geçer
console.log(sayi1);
console.log(typeof sayi1);
//sayı tırnak içerisinde yazılırsa string, tırnaksız yazılırsa number olur aşağıdaki örneğe bak

let a="2";
let b="3";
console.log(a+b);//23 sonucunu verir 

let stringdeğişken= "yaşınız :";
let c=12;
console.log(stringdeğişken+c);dersen= yaşınız :12 çıktısını alırsın



console.log(5>2);//çıktısı true olurdu
console.log(5!=5);//çıktısı false olurdu


let a=null;
console.log(a);//null çıktısı çıkar






let a;
console.log(typeof a);// undefined çıkar
console.log(a);//undefined çıkar




let insan={
    isim="koray",
    soyad="göktaş",
    yaş="19"
}

console.log(insan);//direkt içindekiler çıkar çıktıda 
console.log(typeof insan);// object yazar



let dizi=[1,2,3,4,5];
console.log(typeof dizi);//object yazar


let fonk= function(){
    console.log("merhabalar");
}

fonk();//merhaba yazar
console.log(typeof fonk);//function çıktısını alırsın