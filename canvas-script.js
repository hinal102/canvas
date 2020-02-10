//Declaration for the product configuration goes here
window.productConfiguration = {};
window.productConfiguration.your_image = '';
window.productConfiguration.your_name = '';
window.productConfiguration.rating = '';
window.productConfiguration.position = '';

//This will hold either uploaded / cropped flag OR the flag image directly selected.
window.productConfiguration.your_flag = {};
window.productConfiguration.your_flag.isCustomImageUploaded = false;
//This will hold either uploaded / cropped badge OR the badge image directly selected.
window.productConfiguration.your_badge = {};
window.productConfiguration.your_badge.isCustomImageUploaded = false;

window.productConfiguration.pac_text = '';
window.productConfiguration.pac_value = '';

window.productConfiguration.pas_text = '';
window.productConfiguration.pas_value = '';

window.productConfiguration.def_text = '';
window.productConfiguration.def_value = '';

window.productConfiguration.sho_text = '';
window.productConfiguration.sho_value = '';

window.productConfiguration.dri_text = '';
window.productConfiguration.dri_value = '';

window.productConfiguration.phy_text = '';
window.productConfiguration.phy_value = '';

/* DEFINING THE FUNCTIONS TO BE USED INTERNALLY ONLY FOR CARDSPLUG */
window.cardsplug = {};
// console.log(window.cardsplug);
//DECLARE THE POSITION FOR FLAG ON CANVAS
// window.cardsplug.flag_image._x = '';
// window.cardsplug.flag_image._y = '';
// window.cardsplug.flag_image._width = '';
// window.cardsplug.flag_image._height = '';
// //DECLARE THE POSITION FOR BADGE ON CANVAS
// window.cardsplug.badge_image._x = '';
// window.cardsplug.badge_image._y = '';
// window.cardsplug.badge_image._width = '';
// window.cardsplug.badge_image._height = '';

window.cardsplug.originalContext = '';
window.cardsplug.backupCanvas = '';
window.cardsplug.mainImgContentStore = '';
window.cardsplug.flagImgContentStore = '';
window.cardsplug.badgeImgContentStore = '';

// window.cardsplug.ImgContextStore = '';

window.cardsplug.resetToInitialValues = function(){

    //TODO:PUT DUMMY VALUES
    window.productConfiguration.your_image = '';
    window.productConfiguration.your_name = 'Your Name';
    window.productConfiguration.rating = '99';
    window.productConfiguration.position = 'CAM';
    window.productConfiguration.your_flag = {};
    window.productConfiguration.your_flag.isCustomImageUploaded = false;
    window.productConfiguration.your_badge = {};
    window.productConfiguration.your_badge.isCustomImageUploaded = false;
    window.productConfiguration.pac_text = '99';
    window.productConfiguration.pac_value = 'PAC';
    window.productConfiguration.pas_text = '99';
    window.productConfiguration.pas_value = 'PAS';
    window.productConfiguration.def_text = '99';
    window.productConfiguration.def_value = 'DEF';
    window.productConfiguration.sho_text = '99';
    window.productConfiguration.sho_value = 'SHO';
    window.productConfiguration.dri_text = '99';
    window.productConfiguration.dri_value = 'DRI';
    window.productConfiguration.phy_text = '99';
    window.productConfiguration.phy_value = 'PHY';
}

window.cardsplug.cloneCanvas = function (oldCanvas) {
    //create a new canvas
    var newCanvas = document.createElement('canvas');
    var context = newCanvas.getContext('2d');
    //set dimensions
    newCanvas.width = oldCanvas.width;
    newCanvas.height = oldCanvas.height;
    //apply the old canvas to the new one
    context.drawImage(oldCanvas, 0, 0);
    //return the new canvas
    return newCanvas;
}
/* canvas Image Handlers */
window.cardsplug.mainHandleImage =function(e){
    var reader = new FileReader();
    reader.onload = function(event) {
        var mainImg = new Image();
        mainImg.onload = function() {
            window.cardsplug.mainImgContentStore.drawImage($('#imageCanvas')[0], 0, 0, 570, 600);
        }
        mainImg.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}
window.cardsplug.flagHandleImage = function(e){
    var reader = new FileReader();
    reader.onload = function(event) {
        var flagImg = new Image();
        flagImg.onload = function() {
            window.cardsplug.flagImgContentStore.drawImage($('#imageCanvas')[0], 0, 0, 570, 600);
        }
        flagImg.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}
window.cardsplug.badgeHandleImage = function(e){
    var reader = new FileReader();
    reader.onload = function(event) {
        var badgeImg = new Image();
        badgeImg.onload = function() {
            window.cardsplug.badgeImgContentStore.drawImage($('#imageCanvas')[0], 0, 0, 570, 600);
        }
        badgeImg.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}
 window.cardsplug.originalContext.width = 500;
  window.cardsplug.originalContext.height = 600;
  window.cardsplug.sendToCanvas = function() {
    var width  = window.cardsplug.mainImgContentStore.width;
    var height = window.cardsplug.mainImgContentStore.height;
    var ctxContext = window.cardsplug.originalContext;
    ctxContext.drawImage(window.cardsplug.backupCanvas,0,0);
    ctxContext.fontSize = "28px",
    ctxContext.fillStyle = "#e6b800",
    // window.cardsplug.originalContext.font = ob.fontWeight + ' ' + ob.fontSize + ' ' + ob.fontFamily;
    // window.cardsplug.originalContext.fillStyle = ob.color;
   
    ctxContext.fillText(window.productConfiguration.your_name, width / 2.2, height / 1.6);
    ctxContext.fillText(window.productConfiguration.rating, width / 4, height / 4.1);
    ctxContext.fillText(window.productConfiguration.position, width / 4, height / 3.4);
    ctxContext.fillText(window.productConfiguration.pac_text, width / 4.1, height / 1.4);
    ctxContext.fillText(window.productConfiguration.pac_value, width / 2.8, height / 1.4);
    ctxContext.fillText(window.productConfiguration.sho_text, width / 4.1, height / 1.3);
    ctxContext.fillText(window.productConfiguration.sho_value, width / 2.8, height / 1.3);
    ctxContext.fillText(window.productConfiguration.pas_text, width / 4.1, height / 1.2);
    ctxContext.fillText(window.productConfiguration.pas_value, width / 2.8, height / 1.2);
    ctxContext.fillText(window.productConfiguration.dri_text, width / 1.9, height / 1.4);
    ctxContext.fillText(window.productConfiguration.dri_value, width / 1.6, height / 1.4);
    ctxContext.fillText(window.productConfiguration.def_text, width / 1.9, height / 1.3);
    ctxContext.fillText(window.productConfiguration.def_value, width / 1.6, height / 1.3);
    ctxContext.fillText(window.productConfiguration.phy_text, width / 1.9, height / 1.2);
    ctxContext.fillText(window.productConfiguration.phy_value, width / 1.6, height / 1.2);
   
    if(typeof window.productConfiguration.custom_image01 != 'undefined' && window.productConfiguration.custom_image01 != ""){
        var uploadedImage = window.productConfiguration.custom_image01;
        window.cardsplug.originalContext.drawImage(uploadedImage, 168, 100, 226, 226 * uploadedImage.height / uploadedImage.width);
    }
    if(typeof  window.productConfiguration.custom_image_flag != 'undefined' &&  window.productConfiguration.custom_image_flag!= ""){
        var uploadedImage =  window.productConfiguration.custom_image_flag;
        window.cardsplug.originalContext.drawImage(uploadedImage, 80, 189, 80, 89 * uploadedImage.height / uploadedImage.width);
    }
    if(typeof  window.productConfiguration.custom_image_badge != 'undefined' &&  window.productConfiguration.custom_image_badge!= ""){
        var uploadedImage =  window.productConfiguration.custom_image_badge;
        window.cardsplug.originalContext.drawImage(uploadedmIage, 80, 223, 80, 89 * uploadedImage.height / uploadedImage.width);
    }
};


window.cardsplug.finishImageReimpose = function(image_data) {
    window.cardsplug.originalContext.drawImage(image_data, 0, 0, 450, 600);
    window.cardsplug.originalContext.textAlign = 'center';
    window.cardsplug.backupCanvas = window.cardsplug.cloneCanvas(window.cardsplug.originalContext.canvas);
    // $("#trial2").attr('src',window.cardsplug.backupCanvas.toDataURL());
 }


$(document).ready(function(e){
    //ACTIONS THAT UPDATE THE CANVAS CONFIGURATION OPTIONS
    $(document).on('keyup',"[data-canvas-element]",function(e){
        //e = event
        var current_element = e.target;

        //Making this a jQuery element
        var data_id = $(current_element).attr('data-canvas-id');
        //TRIM IS USED TO CLEAR ANY BLANK SPACES ON LEFT / RIGHT SIDE
        var data_value = $(current_element).val().trim();
        window.productConfiguration[data_id] = data_value;
        console.log(window.productConfiguration);
        
        setTimeout(function(){
            window.cardsplug.sendToCanvas();
        }, 1000);
    });

   
    //PREPARE CANVAS & CANVAS COPY
    var mainImageHolder = $("#imageCanvas");
    window.cardsplug.originalContext = mainImageHolder[0].getContext('2d');
    console.log(window.cardsplug.originalContext);
    var image_reimpose = new Image();
    image_reimpose.src = $("[data-canvas-image-original]").attr('src');
    image_reimpose.onload = function(data) {
        window.cardsplug.finishImageReimpose(image_reimpose);

        // setTimeout(function(){
        //     window.cardsplug.originalContext.fontSize = "28px",
        //     window.cardsplug.originalContext.fillStyle = "#e6b800",
        //     window.cardsplug.originalContext.fillText(window.productConfiguration.your_name = 'hhh', 150, 150);
        // }, 300);
    }
      var mainImgContext= $('#mainimgCanvas');
      window.cardsplug.mainImgContentStore= mainImgContext[0].getContext('2d');
      var  flagImgContext = $('#flagimgCanvas');
      window.cardsplug.flagImgContentStore= flagImgContext[0].getContext('2d');
      var badgeImgContext = $('#badgeimgCanvas');
      window.cardsplug.badgeImgContentStore= badgeImgContext[0].getContext('2d');

    //SETTING UP INITIAL VALUES ON LOAD
    window.cardsplug.resetToInitialValues();

    //DRAWING FUNCTION
    setTimeout(function(){ window.cardsplug.sendToCanvas(); }, 300);
    
});
/* cropper js */


window.onload = function() {
    window.cardsplug.cropperImgEvent();
}
window.cardsplug.cropperImgEvent = function(){
    var Cropper = window.Cropper;
    var URL = window.URL || window.webkitURL;
    var container = $('.img-container');
    var image = $('#image')[0];
    var image1 = $('#image1')[0];
    var image2 = $('#image2')[0];
    var actions = $('#actions')[0];

    var options = {
        aspectRatio: 321 / 180,
        preview: '.img-inner-preview',
    };
    var cropper = new Cropper(image, options);
    var originalImageURL = image.src;
    var uploadedImageType = 'image/jpeg';
    var uploadedImageURL;

    // Methods
    actions.querySelector('.docs-buttons').onclick = function(event) {
        var e = event || window.event;
        var target = e.target || e.srcElement;
        var cropped;

        var result;
        var input;
        var data;

        if (!cropper) {
            return;
        }

        while (target !== this) {
            if (target.getAttribute('data-method')) {
                break;
            }

            target = target.parentNode;
        }

        if (target === this || target.disabled || target.className.indexOf('disabled') > -1) {
            return;
        }

        data = {
            method: target.getAttribute('data-method'),
            target: target.getAttribute('data-target'),
            option: target.getAttribute('data-option') || undefined,
            secondOption: target.getAttribute('data-second-option') || undefined
        };

        cropped = cropper.cropped;

        if (data.method) {
            if (typeof data.target !== 'undefined') {
                input = document.querySelector(data.target);

                if (!target.hasAttribute('data-option') && data.target && input) {
                    try {
                        data.option = JSON.parse(input.value);
                    } catch (e) {
                        console.log(e.message);
                    }
                }
            }

            switch (data.method) {
                case 'rotate':
                    if (cropped) {
                        cropper.clear();
                    }
                    break;
            }

            result = cropper[data.method](data.option, data.secondOption);

            switch (data.method) {
                case 'rotate':
                    if (cropped) {
                        cropper.crop();
                    }
                    break;

                case 'scaleX':
                case 'scaleY':
                    target.setAttribute('data-option', -data.option);
                    break;

                case 'getCroppedCanvas':
                    if (result) {
                        // Bootstrap's Modal
                        // $('#getCroppedCanvasModal').find('.img-crop').html(result);
                        var c = document.createElement("img");
                        c.src = result.toDataURL("image/png");
                        $('.img-crop').append('<img id="imgmain" src=' + c.src + '>').ready(function() {
                            var uploadedImage = $('#mainimg').find('img')[0];
                            window.productConfiguration.custom_image01 = uploadedImage;
                            window.cardsplug.originalContext .drawImage(uploadedImage, 168, 100, 226, 226 * uploadedImage.height / uploadedImage.width);
                        });
                    }

                    break;
            }

            if (typeof result === 'object' && result !== cropper && input) {
                try {
                    input.value = JSON.stringify(result);
                } catch (e) {
                    console.log(e.message);
                }
            }
        }
    };
    actions.querySelector('.docs-buttons1').onclick = function(event) {
        var e = event || window.event;
        var target = e.target || e.srcElement;
        var cropped;
        var result;
        var input;
        var data;

        if (!cropper) {
            return;
        }

        while (target !== this) {
            if (target.getAttribute('data-method')) {
                break;
            }

            target = target.parentNode;
        }

        if (target === this || target.disabled || target.className.indexOf('disabled') > -1) {
            return;
        }

        data = {
            method: target.getAttribute('data-method'),
            target: target.getAttribute('data-target'),
            option: target.getAttribute('data-option') || undefined,
            secondOption: target.getAttribute('data-second-option') || undefined
        };

        cropped = cropper.cropped;

        if (data.method) {
            if (typeof data.target !== 'undefined') {
                input = document.querySelector(data.target);

                if (!target.hasAttribute('data-option') && data.target && input) {
                    try {
                        data.option = JSON.parse(input.value);
                    } catch (e) {
                        console.log(e.message);
                    }
                }
            }

            switch (data.method) {
                case 'rotate':
                    if (cropped) {
                        cropper.clear();
                    }

                    break;

                case 'getCroppedCanvas':
                    try {
                        data.option = JSON.parse(data.option);
                    } catch (e) {
                        console.log(e.message);
                    }

                    if (uploadedImageType === 'image/jpeg') {
                        if (!data.option) {
                            data.option = {};
                        }

                        data.option.fillColor = '#fff';
                    }

                    break;
            }

            result = cropper[data.method](data.option, data.secondOption);

            switch (data.method) {
                case 'rotate':
                    if (cropped) {
                        cropper.crop();
                    }

                    break;

                case 'scaleX':
                case 'scaleY':
                    target.setAttribute('data-option', -data.option);
                    break;

                    case 'getCroppedCanvas':
                    if (result) {
                        var c = document.createElement("img");
                        c.src = result.toDataURL("image/png");
                        $('.img-crop1').append('<img id="imgmain" src=' + c.src + '>').ready(function() {
                            var uploadedImage = $('#mainimg1').find('img')[0];
                            window.productConfiguration.custom_image_flag = uploadedImage;

                            window.cardsplug.originalContext .drawImage(uploadedImage, 80, 189, 80, 89 * uploadedImage.height / uploadedImage.width);
                        });
                    }

                    break;
            }

            if (typeof result === 'object' && result !== cropper && input) {
                try {
                    input.value = JSON.stringify(result);
                } catch (e) {
                    console.log(e.message);
                }
            }
        }
    };
    actions.querySelector('.docs-buttons2').onclick = function(event) {
        var e = event || window.event;
        var target = e.target || e.srcElement;
        var cropped;
        var result;
        var input;
        var data;

        if (!cropper) {
            return;
        }

        while (target !== this) {
            if (target.getAttribute('data-method')) {
                break;
            }

            target = target.parentNode;
        }

        if (target === this || target.disabled || target.className.indexOf('disabled') > -1) {
            return;
        }

        data = {
            method: target.getAttribute('data-method'),
            target: target.getAttribute('data-target'),
            option: target.getAttribute('data-option') || undefined,
            secondOption: target.getAttribute('data-second-option') || undefined
        };

        cropped = cropper.cropped;

        if (data.method) {
            if (typeof data.target !== 'undefined') {
                input = document.querySelector(data.target);

                if (!target.hasAttribute('data-option') && data.target && input) {
                    try {
                        data.option = JSON.parse(input.value);
                    } catch (e) {
                        console.log(e.message);
                    }
                }
            }

            switch (data.method) {
                case 'rotate':
                    if (cropped) {
                        cropper.clear();
                    }

                    break;

                case 'getCroppedCanvas':
                    try {
                        data.option = JSON.parse(data.option);
                    } catch (e) {
                        console.log(e.message);
                    }

                    if (uploadedImageType === 'image/jpeg') {
                        if (!data.option) {
                            data.option = {};
                        }

                        data.option.fillColor = '#fff';
                    }

                    break;
            }

            result = cropper[data.method](data.option, data.secondOption);

            switch (data.method) {
                case 'rotate':
                    if (cropped) {
                        cropper.crop();
                    }

                    break;

                case 'scaleX':
                case 'scaleY':
                    target.setAttribute('data-option', -data.option);
                    break;

                case 'getCroppedCanvas':
                    if (result) {
                        var c = document.createElement("img");
                        c.src = result.toDataURL("image/png");
                        $('.img-crop2').append('<img id="imgmain" src=' + c.src + '>').ready(function() {
                            var uploadedImage = $('#mainimg2').find('img')[0];
                            window.productConfiguration.custom_image_badge = uploadedImage;

                            window.cardsplug.originalContext .drawImage(uploadedImage, 80, 223, 80, 89 * uploadedImage.height / uploadedImage.width);
                        });
                    }

                    break;
            }

            if (typeof result === 'object' && result !== cropper && input) {
                try {
                    input.value = JSON.stringify(result);
                } catch (e) {
                    console.log(e.message);
                }
            }
        }
    };

    document.body.onkeydown = function(event) {
        var e = event || window.event;

        if (!cropper || this.scrollTop > 300) {
            return;
        }

        switch (e.keyCode) {
            case 37:
                e.preventDefault();
                cropper.move(-1, 0);
                break;

            case 38:
                e.preventDefault();
                cropper.move(0, -1);
                break;

            case 39:
                e.preventDefault();
                cropper.move(1, 0);
                break;

            case 40:
                e.preventDefault();
                cropper.move(0, 1);
                break;
        }
    };

    // Import image
    var inputImage = document.getElementById('inputImage');

    if (URL) {
        inputImage.onchange = function() {
            var files = this.files;
            var file;

            if (cropper && files && files.length) {
                file = files[0];

                if (/^image\/\w+/.test(file.type)) {
                    uploadedImageType = file.type;

                    // if (uploadedImageURL) {
                    //     URL.revokeObjectURL(uploadedImageURL);
                    // }

                    image.src = uploadedImageURL = URL.createObjectURL(file);
                    cropper.destroy();
                    cropper = new Cropper(image, options);
                    inputImage.value = null;
                } else {
                    window.alert('Please  an image file.');
                }
            }
        };
    } else {
        inputImage.disabled = true;
        inputImage.parentNode.className += ' disabled';
    }

    var inputImageFlag = document.getElementById('inputImageFlag');

    if (URL) {
        inputImageFlag.onchange = function() {
            var files = this.files;
            var file;

            if (cropper && files && files.length) {
                file = files[0];

                if (/^image\/\w+/.test(file.type)) {
                    uploadedImageType = file.type;

                    if (uploadedImageURL) {
                        URL.revokeObjectURL(uploadedImageURL);
                    }
                    image1.src = uploadedImageURL = URL.createObjectURL(file);
                    cropper.destroy();
                    cropper = new Cropper(image1, options);
                    inputImageFlag.value = null;
                } else {
                    window.alert('Please choose an image file.');
                }
            }
        };
    } else {
        inputImageFlag.disabled = true;
        inputImageFlag.parentNode.className += ' disabled';
    }

    var inputImageBadge = document.getElementById('inputImageBadge');

    if (URL) {
        inputImageBadge.onchange = function() {
            var files = this.files;
            var file;

            if (cropper && files && files.length) {
                file = files[0];

                if (/^image\/\w+/.test(file.type)) {
                    uploadedImageType = file.type;

                    if (uploadedImageURL) {
                        URL.revokeObjectURL(uploadedImageURL);
                    }

                    image2.src = uploadedImageURL = URL.createObjectURL(file);
                    cropper.destroy();
                    cropper = new Cropper(image2, options);
                    inputImageBadge.value = null;
                } else {
                    window.alert('Please choose an image file.');
                }
            }
        };
    } else {
        inputImageBadge.disabled = true;
        inputImageBadge.parentNode.className += ' disabled';
    }


};


// if (window.parent && window.parent.parent) {
//     window.parent.parent.postMessage(["resultsFrame", {
//         height: document.body.getBoundingClientRect().height,
//         slug: "kvzz0LzL"
//     }], "*")
// }

// // always overwrite window.name, in case users try to set it manually
// window.name = "result"
