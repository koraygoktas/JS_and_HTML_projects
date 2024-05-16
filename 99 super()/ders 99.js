class person{
    constructor(firstname,surname,age){
        this.ad=firstname;
        this.soyad=surname;
        this.yas=age;
    }
    write(){
        console.log(`ad:${this.ad}soy ad:${this.soyad}\nyaş:${this.yas}`)
    }
}

class student extends person{
    constructor(firstname,surname,age){
        super(firstname,surname,age);
    }
    write(){
        super.write();
    }
}

const student1= new student("koray\n","göktaş",19);
student1.write();