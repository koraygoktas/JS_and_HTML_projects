// tooltip:mesela parseInt yazdık bize parseInt'in ne olduğunu yanda açıklayan bilgilendirme kutucuğu
//breakpoint yani debugger ise koyduğunuz satırdan itibaren tek tek kontrollü bir şekilde bakmamızı sağlıyor
let a=12;
let b=15;
debugger;
let c=a+b;
let d=c+a+b;
let sonuc=a+b+c+d;
//ama bunları source kısmından ilerletip çalıştıracağız
console.log(sonuc);//en son buraya gelince ve çalıştırınca da console kısmında yazacaktır sonuc