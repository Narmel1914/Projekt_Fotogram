/* Read my folder Collection Photo*/
const myArrayImage = [
    "alaska.jpg",
    "anime.jpg",
    "atmosphere.jpg",
    "blue-tit.jpg",
    "hurricane.jpg",
    "lake.jpg",
    "moorente.jpg",
    "sea.jpg",
    "snowbunting.jpg",
    "snowleopard.jpg",
    "travel.jpg",
    "winter.jpg",
]

console.log(myArrayImage.length);

/*-----------------------------------------Declaration variable---------------------------------------*/
const myPath = "./Galerie-Photo/";
let galerie = document.getElementsByClassName("galerie_photo"); // minimal image
let boxDialog = document.getElementById("dialog_wrapper");


let nameImg = document.getElementById("name_img");
let bigImg = document.getElementById("big_img");

let btnClose = document.getElementById("btn_close");


const logoFotogram = document.getElementById("logo")
const titelFotogram = document.getElementById("logo_titel")
let tableauAlt = [];
let indexCourant = 0;


/*-----------------------------------------Main_Task-------------------------------------*/


function init() {
    console.log("Fotogram")
    readContentPhoto();
    openDialog();
}

/*-----------------------------------------Main_Task-------------------------------------*/


function readContentPhoto() {
    for (let i = 0; i < myArrayImage.length; i++) {

        document.getElementById("galerie_photo").innerHTML += `
            <img src="${myPath}${myArrayImage[i]}" alt="" >
            `;
    }
}


// Add Eventlistener to every image
galerie.addEventListener('click', openDialog);
//  created our template function

function openDialog(path) {
    const alt = galerie.getAttribute("alt");
    for (let index = 0; index < myArrayImage.length; index++) {

        bigImg.setAttribute("src", path + myArrayImage[index]);
        bigImg.setAttribute("alt", myArrayImage[index]);
        nameImg.textContent = myArrayImage[index];
    }
    boxDialog.showModal();
    //console.log(":", nameImg);

}
openDialog(myPathpath);

btnClose.addEventListener('click', closeDialog);

function closeDialog() {
    boxDialog.close();
}
// Opend Dialog content

// Output Dialog  area Closed
boxDialog.addEventListener('click', OutputDialogClose);
function OutputDialogClose(event) {
    if (event.target === boxDialog) {
        boxDialog.close()
    }

}

/*-----------------------------------------Footer---------------------------------------*/
