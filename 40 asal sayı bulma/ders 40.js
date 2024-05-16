let sayi= Number(prompt("bir sayi giriniz:"));
let i;
let sonuc= true;
for(i=2;i<=Math.floor(sayi/2);i++)
{
    if(sayi%i==0)
    {
        sonuc=false;
        break;
    }

}

if(sonuc)
{
    alert("sayiniz asaldir("+sayi+")");
}
else{
    alert("sayiniz asal degildir("+sayi+")");
}