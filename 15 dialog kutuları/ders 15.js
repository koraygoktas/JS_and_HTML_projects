//alert=kullanıcıya bir uyarı vermek için kullanılır
//confirm
//prompt=kullanıcıdan değer almaya yarıyor

//üçü de window objesinin içinde yer alır
// yani ister window.alert diye çağır ister alert diye(bu sadece windowun fonkları için geçerli bir kural)

/* alert("işleminize devam etmek için bekleyiniz");*/

//----------------------------------------------------------

/*let isim = prompt("lütfen isminizi giriniz:");
console.log(isim);*/
//girdikten sonra f12 deyip console gelince girdiğin ismin çıktısını göreceksin
//console.log demezsek sadece ismi hafızada tutar ama console dersek yazdırır
//--------------------------
// prompt ile tutulan her değer ister number olsun ister string olsun her zaman strigtir
/*let isim =prompt("lütfen isminizi giriniz:");
let yas =prompt("lütfen yaşınızı giriniz:");

console.log("yaşınız:"+yas);
console.log("isminiz:"+isim);
console.log(typeof isim);
console.log(typeof yas);*/


let sonuc= confirm("silmek isteidğinize emin misiniz?");
console.log(sonuc);//tamam dersen true çıkar iptal dersen false çıkar