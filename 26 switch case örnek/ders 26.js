let metin="1-pazartesi\n2-sali\n3-carsamba\n4-persembe\n5-cuma\n6-cumartesi\n7-pazar\nbir deger giriniz";
let deger=prompt(metin);
switch(deger)
{
    case "1":
        console.log("birinici");
        break;
    case "2":
        console.log("ikinci");
        break;
    case "3":
        console.log("ucuncu");
        break;
    case "4":
        console.log("dorduncu");
        break;
    case "5":
        console.log("besinci");
        break;
    case "6":
        console.log("altinci");
        break;
    case "7":
        console.log("yeidnci");
        break;
    default :
        console.log("gecerli bir deger giriniz");
        break;
}