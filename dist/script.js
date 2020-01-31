window.onload = function() {
    'use strict';

    var Cropper = window.Cropper;
    var URL = window.URL || window.webkitURL;
    var container = document.querySelector('.img-container');

    //var image = container.getElementsByTagName('img').item(0);
    var image = document.getElementById('image');
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');

    var download = document.getElementById('download');
    var actions = document.getElementById('actions');
    // var dataX = document.getElementById('dataX');
    // var dataY = document.getElementById('dataY');
    // var dataHeight = document.getElementById('dataHeight');
    // var dataWidth = document.getElementById('dataWidth');
    // var dataRotate = document.getElementById('dataRotate');
    // var dataScaleX = document.getElementById('dataScaleX');
    // var dataScaleY = document.getElementById('dataScaleY');
    var options = {
        aspectRatio: 321 / 180,
        preview: '.img-inner-preview',
        ready: function(e) {
            console.log(e.type);
        },
        cropstart: function(e) {
            console.log(e.type, e.detail.action);
        },
        cropmove: function(e) {
            console.log(e.type, e.detail.action);
        },
        cropend: function(e) {
            console.log(e.type, e.detail.action);
        },
        crop: function(e) {
            var data = e.detail;

            console.log(e.type);
            // dataX.value = Math.round(data.x);
            // dataY.value = Math.round(data.y);
            // dataHeight.value = Math.round(data.height);
            // dataWidth.value = Math.round(data.width);
            // dataRotate.value = typeof data.rotate !== 'undefined' ? data.rotate : '';
            // dataScaleX.value = typeof data.scaleX !== 'undefined' ? data.scaleX : '';
            // dataScaleY.value = typeof data.scaleY !== 'undefined' ? data.scaleY : '';
        },
        zoom: function(e) {
            console.log(e.type, e.detail.ratio);
        }
    };
    var cropper = new Cropper(image, options);
    var originalImageURL = image.src;
    var uploadedImageType = 'image/jpeg';
    var uploadedImageURL;

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Buttons
    // if (!document.createElement('canvas').getContext) {
    //     $('button[data-method="getCroppedCanvas"]').prop('disabled', true);
    // }

    // if (typeof document.createElement('cropper').style.transition === 'undefined') {
    //     $('button[data-method="rotate"]').prop('disabled', true);
    //     $('button[data-method="scale"]').prop('disabled', true);
    // }

    //   // Download
    //   if (typeof download.download === 'undefined') {
    //       download.className += ' disabled';
    //   }

    // Options
    actions.querySelector('.docs-toggles').onchange = function(event) {
        var e = event || window.event;
        var target = e.target || e.srcElement;
        var cropBoxData;
        var canvasData;
        var isCheckbox;
        var isRadio;

        if (!cropper) {
            return;
        }

        // if (target.tagName.toLowerCase() === 'label') {
        //     target = target.querySelector('input');
        // }

        // isCheckbox = target.type === 'checkbox';
        // isRadio = target.type === 'radio';

        if (isCheckbox || isRadio) {
            if (isCheckbox) {
                options[target.name] = target.checked;
                cropBoxData = cropper.getCropBoxData();
                canvasData = cropper.getCanvasData();

                options.ready = function() {
                    console.log('ready');
                    cropper.setCropBoxData(cropBoxData).setCanvasData(canvasData);
                };
            } else {
                options[target.name] = target.value;
                options.ready = function() {
                    console.log('ready');
                };
            }

            // Restart
            cropper.destroy();
            cropper = new Cropper(image, options);
        }
    };

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

                // case 'getCroppedCanvas':
                //     try {
                //         data.option = JSON.parse(data.option);
                //     } catch (e) {
                //         console.log(e.message);
                //     }

                //     if (uploadedImageType === 'image/jpeg') {
                //         if (!data.option) {
                //             data.option = {};
                //         }

                //         data.option.fillColor = '#fff';
                //     }

                //     break;
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
                        console.log(result);
                        var c=document.createElement("img");
                        c.src = result.toDataURL("image/png");
                         $('.img-crop').append('<img id="imgmain" src='+c.src+'>');
                        //   if (!download.disabled) {
                        //       download.href = result.toDataURL(uploadedImageType);
                        //   }
                    }

                    break;

                case 'destroy':
                    cropper = null;

                    //   if (uploadedImageURL) {
                    //       URL.revokeObjectURL(uploadedImageURL);
                    //       uploadedImageURL = '';
                    //       image.src = originalImageURL;
                    //   }
                    if (uploadedImageURL) {
                        URL.revokeObjectURL(uploadedImageURL);
                        uploadedImageURL = '';
                        image1.src = originalImageURL;
                    }
                    if (uploadedImageURL) {
                        URL.revokeObjectURL(uploadedImageURL);
                        uploadedImageURL = '';
                        image2.src = originalImageURL;
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
                        // Bootstrap's Modal
                        $('#getCroppedCanvasModal1').modal().find('.img-crop').html(result);

                        //   if (!download.disabled) {
                        //       download.href = result.toDataURL(uploadedImageType);
                        //   }
                    }

                    break;

                case 'destroy':
                    cropper = null;

                    if (uploadedImageURL) {
                        URL.revokeObjectURL(uploadedImageURL);
                        uploadedImageURL = '';
                        image.src = originalImageURL;
                    }
                    if (uploadedImageURL) {
                        URL.revokeObjectURL(uploadedImageURL);
                        uploadedImageURL = '';
                        image1.src = originalImageURL;
                    }
                    if (uploadedImageURL) {
                        URL.revokeObjectURL(uploadedImageURL);
                        uploadedImageURL = '';
                        image2.src = originalImageURL;
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
                        // Bootstrap's Modal
                        $('#getCroppedCanvasModal2').modal().find('.img-crop').html(result);

                        // if (!download.disabled) {
                        //     download.href = result.toDataURL(uploadedImageType);
                        // }
                    }

                    break;

                // case 'destroy':
                //     cropper = null;

                //     if (uploadedImageURL) {
                //         URL.revokeObjectURL(uploadedImageURL);
                //         uploadedImageURL = '';
                //         image.src = originalImageURL;
                //     }
                //     if (uploadedImageURL) {
                //         URL.revokeObjectURL(uploadedImageURL);
                //         uploadedImageURL = '';
                //         image1.src = originalImageURL;
                //     }
                //     if (uploadedImageURL) {
                //         URL.revokeObjectURL(uploadedImageURL);
                //         uploadedImageURL = '';
                //         image2.src = originalImageURL;
                //     }

                //     break;
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
                    window.alert('Please choose an image file.');
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


if (window.parent && window.parent.parent) {
    window.parent.parent.postMessage(["resultsFrame", {
        height: document.body.getBoundingClientRect().height,
        slug: "kvzz0LzL"
    }], "*")
}

// always overwrite window.name, in case users try to set it manually
window.name = "result"

