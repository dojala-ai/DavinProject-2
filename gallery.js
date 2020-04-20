function changeSize(img) {
    //Check to see if it needs to be reset
    if (img.width == 960) {
        img.width = 480
    //Increase size   
    } else if (img.width > 480) {
        img.width += 120;
    }
    else {
        //getting all of the images onto the document
        var imgs = document.getElementsByClassName("galleryimage");
        //changing all image sizes to default
        for (i = 0; i < imgs.length; i++) {
            imgs.item(i).width = 480;
        }
        //increasing image size
        img.width += 120;
    }

}