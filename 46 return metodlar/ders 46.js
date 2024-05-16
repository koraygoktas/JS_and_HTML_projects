//metodlarda return ile bir değer döndürebiliriz
//fonk içince fonka yönlendirebiliriz
let sayi=Number(prompt("bir sayi giriniz"));
let sonuc2=kup(sayi);
kare(sonuc2);



function kare(sonuc2)
{
    console.log(sonuc2*sonuc2)
}



function kup(deger)
{
    let sonuc= deger**3;
    return sonuc;
}
