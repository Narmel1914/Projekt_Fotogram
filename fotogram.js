/* Read my folder Collection Photo*/
/*const myArrayImage = [
    "ahmet.jpg",
    "alaska.jpg",
    "anime.jpg",
    "astronomy.jpg",
    "atmosphere.jpg",
    "autumn.jpg",
    "blue-tit.jpg",
    "carla_manneh.jpg",
    "hurricane.jpg",
    "lake.jpg",
    "landscape.jpg",
    "moorente.jpg",
    "sea.jpg",
    "bunting.jpg",
    "cubs.jpg",
    "studiofriluma.jpg",
    "sunset.jpg",
    "waterfall.jpg",
    "travel.jpg.jpg",
];
*/

const myArrayImage = [
    "alaska.jpg",
    "anime.jpg",
    "atmosphere.png",
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


//let contentImage = document.getElementsByTagName("img")
//let contentCaptionPhoto = document.getElementById("caption_photo");
const galerie = document.getElementById("galerie_photo");
const myPath = "./Galerie-Photo/";

const logo_fotogram = document.getElementById("logo")
const titel_fotogram = document.getElementById("logo_titel")

function setHeader() {
    logo_fotogram.style.width = "40px";
    logo_fotogram.style.height = "38px"
}

readContentPhoto(myPath);

function readContentPhoto(path) {


    for (let i = 0; i <= myArrayImage.length - 1; i++) {
        //console.log("path =", path);
        //console.log("fichier =", myArrayImage[i]);
        //console.log("src final =", path + myArrayImage[i]);
        const myImg = document.createElement("img");
        myImg.setAttribute("width", "150");
        myImg.setAttribute("height", "150");
        myImg.setAttribute("style", "border-radius: 10px;");
        myImg.setAttribute("src", path + myArrayImage[i]);  //`${path}${myArrayImage[i]}`
        myImg.setAttribute("alt", "Photo" + (i + 1));
        //console.log("image$", myImg);
        galerie.appendChild(myImg);
    }

    galerie.style.display = "flex";
    galerie.style.flexWrap = "wrap";
    galerie.style.gap = "20px";
    galerie.style.margin = "50px"

}

const footer = document.getElementsById("content_footer");
function setFooter() {
    footer.style.display = "flex";
    footer.style.flexDirection = "column";

}