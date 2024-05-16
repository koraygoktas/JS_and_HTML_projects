//break döngüleri tamamen kırmaya yarayan emirdir
//continue ise okunduğunda döngü içinde kendisinden sonra gelen hiçbir kodu 1 kereliğine çalıştırma demek
//yani döngüyü 1 kerelik kırıyor
//ondan sonra gelen kodları çalıştırmıyor

let sayi=0;
while(sayi<=10)
{
    sayi++;
    if(sayi>10)
    {
        break;
    }
    if(sayi==7)
    {
        continue;
    }
    console.log(sayi);
 //bu program 1 den 10 a kadar 7 hariç yazdıran progrmadır   
}