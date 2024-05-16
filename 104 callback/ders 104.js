function fonk1(gericagır){
    setTimeout(() => {
        let name= "koray";
        gericagır(name)
    }, 1000);
}
function fonk2(name){
    setTimeout(() => {
        let surname= "göktaş";
        console.log(name,surname);
    }, 1000);
}
fonk1(fonk2)

//bu şekilde asenkron olan bir işlemi senkron bir şekle çevirdik