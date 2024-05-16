/*

// var = function scope oluyor,ram bellekte çok fazla hafıza kaplar

function koray()
{
    var selam="herkese selam";
    if(true)
    {
        var b=10;
        console.log(b);
    }
    console.log(selam);
    console.log(b);
}
//burada console.log(b) deseydik b değerini okutamazdık problem olurdu. sadece fonk içerisinde serbest
koray();
//yukarıdaki kodlamada herhangi bir sıkıntıyla karşılaşmayacaksın
//let ve const = block scope özelliğine sahiptir

function koray()
{
    var selam="herkese selam";
    if(true)
    {
        let b=10;
        console.log(b);
    }
    // burada console.log(b) deseydik problem olurdu
}



var a=4;
var a=7;
console.log(a);//dersek 7 yazdıracak ama bunu let ve const'ta yapamayız onlar bir kere atandı mı biter

let a=5;
let a=2;
console.log(a);//der isek çıktı alamayız çünkü a değişkeni zaten tanımlanmış. bu const için de aynı


//PEKİİİ CONST & LET FARKI?

let a=6;
a=1;
console.log(a);// dersek bir sıkıntı yaşamayız ama const'ta bunu yapamayız 




*/

const obje{
    username :"koray",
    password :"123"
}

//user={age:23}; const diye obje içini değiştiremeyiz let olsaydı değişebilirdi
obje.username="koray göktaş";//ama bunu yapabiliriz const olsa da
console.log(obje);