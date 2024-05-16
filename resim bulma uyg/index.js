const formwrapper= document.querySelector("#form-wrapper");
const form= document.querySelector("#form");
const searchinput= document.querySelector("#searchinput");
const buttonwrapper= document.querySelector("#button-wrapper");
const searchbutton= document.querySelector("#searchbutton");
const clearbutton = document.querySelector("#clearbutton");
const imagewrapper= document.querySelector(".image-wrapper");

runeventlisteners();

function runeventlisteners(){
    form.addEventListener("submit",search);
}

function search(e){
    const value=searchinput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method: "GET",
        headers:{
            Authorization: "Client-ID XvZtBafefHeCWdOhnYbbLdxv4b0R3F3lXR2DGo3dwh4"
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data.results)
    })
    .catch((err)=>console.log(err));
    e.preventDefault();
}

