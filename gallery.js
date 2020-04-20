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
function toTop(btn){
    //find image of the button pressed 
    var img = btn.parentElement.parentElement.childNodes[1];

    //find all images
    var imgs = document.getElementsByClassName("galleryimage");
    for (i = 0; i < imgs.length; i++) {
        //finding the mathcing image
        if (img.src == imgs.item(i).src){
            //store image to switch to
            var _top = imgs.item(0).src;

            //replace image to switch to with our image
            imgs.item(0).src = img.src;

            //replace current image with stored image
            img.src = _top;
        }
    }

}

function before(btn){
    //find image of the button pressed 
    var img = btn.parentElement.parentElement.childNodes[1];

    //find all images
    var imgs = document.getElementsByClassName("galleryimage");
    for (i = 0; i < imgs.length; i++) {
        //finding the mathcing image
        if (img.src == imgs.item(i).src){
            if(i > 0){
                //store image to switch to
                var _bef = imgs.item(i-1).src;

                //replace image to switch to with our image
                imgs.item(i-1).src = img.src;

                //replace current image with stored image
                img.src = _bef;
            }

        }
    }

}

function after(btn){
    //find image of the button pressed 
    var img = btn.parentElement.parentElement.childNodes[1];

    //find all images
    var imgs = document.getElementsByClassName("galleryimage");
    for (i = 0; i < imgs.length; i++) {
        //finding the mathcing image
        if (img.src == imgs.item(i).src){
            if(i < imgs.length - 1){
                //store image to switch to
                var _aft = imgs.item(i+1).src;

                //replace image to switch to with our image
                imgs.item(i+1).src = img.src;

                //replace current image with stored image
                img.src = _aft;
            }

        }
    }
}

function toBottom(btn){
    //find image of the button pressed 
    var img = btn.parentElement.parentElement.childNodes[1];

    //find all images
    var imgs = document.getElementsByClassName("galleryimage");
    for (i = 0; i < imgs.length; i++) {
        //finding the mathcing image
        if (img.src == imgs.item(i).src){
            //store image to switch to
            var _bot = imgs.item(imgs.length-1).src;

            //replace image to switch to with our image
            imgs.item(imgs.length-1).src = img.src;

            //replace current image with stored image
            img.src = _bot;
        }
    }
}