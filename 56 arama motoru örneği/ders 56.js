let urun1={
    isim: "porsche taycan",
    kategori: "vasita",
    fiyat: "3,000,000"
}

let urun2={
    isim: "audi rs7",
    kategori: "vasita",
    fiyat: "4,000,000"
}

let urun3={
    isim: "porsche cayenne",
    kategori: "vasita",
    fiyat: "2,500,000"
}

let urun4={
    isim: "audi a7",
    kategori: "vasita",
    fiyat: "4,500,000"//string olarak yazmayınca noktalama işaretlerinde sorun yaşıyorum   
}

let urunler=[urun1,urun2,urun3,urun4];
let filtreliUrunler=[];
let kullaniciUrunIsmi=prompt("bir arama yapiniz:");
let kullaniciFiyati=prompt("butcenizi giriniz:");

filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);

function filtreliUrunleriDoldur(eldekiUrunler){
    eldekiUrunler.forEach(function (urun)
    {
        if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0) && urun.fiyat.includes(kullaniciFiyati))
        {
            filtreliUrunler.push(urun);
        }
    })

}

function filtreliUrunleriYazdir(secilmisUrunler)
{
    secilmisUrunler.forEach(function(urun)
    {
        console.log("-------------------");
        console.log("|"+urun.isim+"|"+urun.fiyat+"|"+urun.kategori+"|");
        console.log("-------------------");
    })
}