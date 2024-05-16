//PARAMETRELİ METODLAR

/*
kup(3);

function kup(sayi)
{
    console.log(sayi**3);
}

*/

let yas= Number(prompt("yasinizi giriniz:"));

kontrol(yas);

function kontrol(sayi)
{
    if(sayi>=18)
    {
        console.log("ehliyet alabilirsiniz");
    }
    else
    {
        let sure=18-sayi;
        console.log("ehliyet alabilmek icin "+sure+" sene beklemelisiniz");
    }
}
// bir şeyin metod olup olmadığını () olup olmadığıdan anlayabilirizi