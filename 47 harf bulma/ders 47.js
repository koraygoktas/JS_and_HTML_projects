let metin = prompt("bir cumle giriniz:");

let harf= prompt("harfi giriniz:");
//sen direkt hangi harfin kaç tane olduğunu bulmak istiyorsan direkt alttaki gibi yapabilriisn
//bul("a");     fonk içinde return değil de console.log(toplam) deyip kaç tane olduğunu öğrenirsin
let sonuc =bul(harf);
 alert("harf sayisi:"+sonuc);


 function bul(harf)
 {
    let toplam=0
    for(let i=0; i<metin.length ;i++)
    {
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase())//toLowerCase varsa buyukleri kucuge cevirdi
        {
            toplam++;
        }
    }
    return toplam;

 }