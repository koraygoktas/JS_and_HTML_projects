// değişken türleri=var-let-const

/*
    -------SCOPE KAVRAMI--------

    -->global scope
    -->function scope
    -->block scope

*/

/*

const: Sabit bir değer atamak için kullanılır,
yani değişken değeri bir kez atanır ve daha sonra değiştirilemez.
let: Block kapsamında tanımlanmış değişkenler için kullanılır,
yani bir fonksiyonun içinde tanımlanan değişkenler, sadece fonksiyonun içinde erişilebilir olur.
var: Global ve fonksiyon kapsamındaki değişkenler için kullanılır, 
yani bir değişkenin tanımlandığı her yerden erişilebilir. Ancak, var ile tanımlanan bir değişkenin
kapsamı blok dışındaki tüm kodda geçerlidir.
*/

var a=5;//c dilindeki extern gibi düşün

if(true)
{
    //mesela parantezler dışında değil de if'in içinde tanımlayıp method1 fonkunun içinde çağırsaydık
    //çıktı alırdım ama if'in içinde let olacak şekilde tanımlayıp fonk içinde çağırsaydık okumazdı
    //ama esasında "var" değişken türü parantezler dışında kullanılmalıdır
    console.log(a);
}

function method1()
{
    console.log(a);
}
method1();

console.clear();

function method2()
{
    var b=2;
}
console.log(b);//burayı yazdıramazsın ,hata verir çünkü fonksiyon kapsamında belirtilen değişkenler parantez 
//dışında çağrılamazlar
method2();

console.clear();


function koray()
{
var sayi1=2;//function scope
    if(true)
    {
        var sayi2=5;//block scope
    }
}
