function changeImage(event) {
    //getting the source of the thumbnail
    var thumbnailSrc = event.target.src;
    var largeSrc = thumbnailSrc.replace('-small', '-large');
    document.querySelector('#gallery figure img').src = largeSrc;
    // Changing the figcaption 
    document.querySelector('#gallery figure figcaption').textContent = event.target.alt;
}