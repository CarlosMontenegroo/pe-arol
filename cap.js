function pickImage() {
    var options = ["236.jpg", "escudo.png", "estadio.jpg", "632422.jpg", "282.jpg", "DVA.jpg"];

    var randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
    var img = document.querySelector("#header_img");

    img.setAttribute("src", randomImg);

    
    var altText = randomImg.split('/').pop().split('.')[0];
    img.setAttribute("alt", altText);


    img.setAttribute("tabfocus", "true");

    console.log("pickImage event triggered");

    
    var allImages = document.querySelectorAll("img");
    for (var i = 0; i < allImages.length; i++) {
        allImages[i].setAttribute("tabindex", "0");
    }
}

window.onload = function() {
    pickImage();
};
