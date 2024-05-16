// OOP GİRİŞ

let a;

class Insan{ // sınıf 
    /*
        1-Özellikler
        2-Yapıcı metot
        3-Function 
    */
    constructor(isim,soyisim,yas,maas){ // yapıcı metot
        this.ad = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas= maas;
    }
    bilgileriGoster(){
        console.log(
            ` İsim : ${this.ad} 
              Soyisim : ${this.soyisim}
              Yaş : ${this.yas}
              Maaş : ${this.maas}`
            )
    }


}
const insan1 = new Insan("koray","göktaş",23,10000);
const insan2 = new Insan("Betül","Çınar",24,7500);

console.log(insan1.ad)
console.log(insan2.ad)
// insan1.bilgileriGoster()
// insan2.bilgileriGoster()