let bouger = () => {
    let images = document.querySelectorAll("img");
    let imgSrcIntial= [];

    for (let index = 0; index < images.length; index++) {
        imgSrcIntial.push(images[index].src);
    }

    images[0].src = imgSrcIntial[2];
    images[1].src = imgSrcIntial[0];
    images[2].src = imgSrcIntial[3];
    images[3].src = imgSrcIntial[1];
}

