let vize= Number(prompt("vize puaninizi giriniz:"));
let final= Number(prompt("final puaninizi giriniz:"));
let ortalama= vize*0.4+final*0.6;
if(ortalama>=60)
{
    alert("TEBRİKLER! dersi gectiniz.ortalamaniz:"+ortalama);
}
else{
    alert("bir sonraki donem daha siki calisiniz lutfen.ortalamaniz:"+ortalama);
}
