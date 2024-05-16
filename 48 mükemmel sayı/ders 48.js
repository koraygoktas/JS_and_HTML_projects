let sayi=Number(prompt("bir sayi giriniz:"));
kontrol(sayi);
function kontrol(sayi)
{
    let toplam=0;
    for(let i=1;i<sayi;i++)
    {
        if(sayi%i==0)
        {
            toplam+=i;
        }
    }
    if(sayi==toplam)
    {
        alert(sayi+" mukemmel sayidir");
    }
}