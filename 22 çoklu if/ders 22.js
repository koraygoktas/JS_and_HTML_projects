let tckn=prompt("tc noyu giriniz:");
let isim=prompt("isminizi giriniz:");

kontrolEt(isim,tckn);//bu kod sayesinde kontrolEt metodu çalışıyor 
function kontrolEt(isim,tckn)
{
    if(isim!="")
    {
        if(tckn.length==11)
        {
            console.log("isim ve tckn hatasiz bir sekilde girildi");
        }
        else{
            console.log("lutfen tckn 11 haneden olusacak sekilde giriniz");
        }
    }
    else
    {
        console.log("isim alanini bos birakmayiniz");
    }
}

//---------------------------------------------

kontrolEt2(isim,tckn);
function kontrolEt2(isim,tckn)
{
    if(isim=="")
    {
        console.log("isim alanini bos birkmayiniz");
        return;// return diyerek diger if e geçmeyi önledik
    }
    if(tckn.length!=11)
    {
        console.log("tckn 11 haneden olusacak sekilde giriniz");
        return;
    }
    console.log("isim ve tckn problemsiz girildi");
}