/* Read my folder Collection Photo*/
const ARRAYIMAGE = [
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

/* Check value  array lengt*/
console.log(ARRAYIMAGE.length);

/*-----------------------------------------Declaration variable---------------------------------------*/
const myPath = "./Galerie-Photo/";
let galerie = document.getElementsByClassName("galerie_photo"); // minimal image
let getImgbyID = document.getElementById("galerie_photo");

let boxDialog = document.getElementById("dialog_wrapper");
let btnClose = document.getElementById("btn_close");

const counter = document.getElementById("counter");
const btnPrev = document.getElementById("btn_prev");

const btnNext = document.getElementById("btn_next");
const logoFotogram = document.getElementById("logo")

const titelFotogram = document.getElementById("logo_titel")


/*-----------------------------------------Main_Task-------------------------------------*/


function init() {
    readContentPhoto();
    openDialog();
    showImage();
    closeDialog();
    OutputDialogClose();


}

/*-----------------------------------------Main_Task-------------------------------------*/


function readContentPhoto() {

    for (let i = 0; i < ARRAYIMAGE.length; i++) {

        document.getElementById("galerie_photo").innerHTML += `
            <img src="${myPath}${ARRAYIMAGE[i]}" 
            alt="${ARRAYIMAGE[i]}" >
            `;
    }
}


// Add Eventlistener to every image
getImgbyID.addEventListener('click', openDialog);

//  created our template function  
let currentIndex = 0;
function openDialog(event) {
    const clickedImage = event.target;
    const scr = clickedImage.src;
    const alt = clickedImage.alt;
    const clickedIndex = ARRAYIMAGE.indexOf(alt);
    currentIndex = clickedIndex;
    showImage(clickedIndex);
    boxDialog.showModal();
}


// Display the image with number “index” in the dialogue box
function showImage(index) {
    document.getElementById("big_img").src = `${myPath}${ARRAYIMAGE[index]}`;
    document.getElementById("big_img").alt = `${ARRAYIMAGE[index].split(".")[0]}`;
    document.getElementById("name_img").textContent = `${ARRAYIMAGE[index]}`;
    document.getElementById("counter").textContent = (index + 1) + "/" + ARRAYIMAGE.length;

}

// Implement the ‘Next’ and ‘Previous’ features

const previewBtn = document.getElementById("btn_prev");
const nextBtn = document.getElementById("btn_next");


previewBtn.addEventListener("click", goBackward);
// PreviewStep
function goBackward() {

    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = ARRAYIMAGE.length - 1;
    }
    showImage(currentIndex);
}


nextBtn.addEventListener("click", goForward);
// Next step
function goForward() {

    currentIndex = currentIndex + 1;
    if (currentIndex >= ARRAYIMAGE.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);

}


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

/*-----------------------------------------End  Main task---------------------------------------*/
