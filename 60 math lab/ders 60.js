let a=3.55;
console.log(Math.floor(a));
console.log(Math.ceil(a));
console.log(Math.round(a));//en yakın integer değere yuvarlar
console.log(Math.max(1,5,2,9));// en büyük değeri döner
console.log(Math.min(1,5,2,9));// en küçük değeri döner 
console.log(Math.abs(a));//mutlak değer olarak dışarı çıkartır
console.log(Math.sqrt(a));//sayının karekökünü döner
console.log(Math.pow(a,4));//üssünü alır
console.log(Math.PI);//pi sayısını gösterir
console.log(Math.random());//0 ile 1 arasında  random bir sayı üretir (1 dahil değil)
//bunu 100 ile çarparsan 0 ile 100 arasında üretmiş olursun (100 dahil değil)
//eğer 20 ile 30 arasında bir sayı üretmek istiyorsan aşağıdaki gibi yapmalısın
let sayi=Math.floor(Math.random()*10+20);
console.log(sayi);
