// popup
let popupCloseButton=document.querySelector('#popupClose')
popupCloseButton.addEventListener('click',()=>{
    document.querySelector('#popup').style.display='none';
})

// backtop
const backtop = document.querySelector(".backtop");

backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})





