//rakamlarının küplerinin toplamı sayinin kendisini veren sayilar armstrongtur

let sayi=prompt("bir sayi giriniz");
let i,toplam=0;
for(i=0;i<sayi.length;i++)
{
    let rakam= sayi.charAt(i);
    toplam+=rakam**3;
}
if(Number(sayi)==toplam)
{
    alert("sayiniz armstrong sayidir");
}

else{
    alert("sayiniz armstrong sayi degildir");
}