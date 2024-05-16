// let a= true;
// console.log(typeof a);
// a=String(a);
// console.log(typeof a);
// //ilk çıktı boolean olur sonraki çıktı ise string olur


class hasta{
    constructor(isim,yas,hastalik){
        this.isim=isim;
        this.yas=yas;
        this.hastalik=hastalik;
    }

    gosterim(){
        console.log(
            `İsim :${this.isim} 
             Yas :${this.yas}
             Hastalık :${this.hastalik})`
        )
    }
}
 const hasta1 = new hasta("koray",19,"kol kırığı");
 const hasta2 = new hasta("gülşah",20,"guatr");
 console.log(hasta1);
 console.log(hasta2);