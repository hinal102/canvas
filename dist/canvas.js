var CVS = document.getElementById('imageCanvas'),
    ctx = CVS.getContext('2d');

ctx1 = document.getElementById('imgCanvas1').getContext('2d');
ctx2 = document.getElementById('imgCanvas2').getContext('2d');
ctx3 = document.getElementById('imgCanvas3').getContext('2d');
//ctx4 = document.getElementById('imgCanvas4').getContext('2d');


var imageLoader = document.getElementById('inputImage');
imageLoader.addEventListener('change', handleImage, false);

var imageLoader1 = document.getElementById('inputImageFlag');
imageLoader1.addEventListener('change', handleImage1, false);

var imageLoader2 = document.getElementById('inputImageBadge');
imageLoader2.addEventListener('change', handleImage2, false);


// var cropimage = document.getElementById('cropimage');
// cropimage.addEventListener('click', cropimage);
$('#cropimage').on('click', function(e) {
    cropimage(e);
})

let imageObj = new Image();
let imageObjClub = new Image();
let imageObjmain = new Image();

CVS.width = 500;
CVS.height = 600;

function cropimage(e) {
}

function handleImage2(e) {
    var reader = new FileReader();
    reader.onload = function(event) {
        var img2 = new Image();
        img2.onload = function() {
            ctx3.drawImage(document.getElementById('imageCanvas'), 0, 0, 570, 600);
        }
        img2.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}


function handleImage1(e) {
    var reader = new FileReader();
    reader.onload = function(event) {
        var img1 = new Image();
        img1.onload = function() {
            ctx2.drawImage(document.getElementById('imageCanvas'), 0, 0, 570, 600);
        }
        img1.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}

function handleImage(e) {

    var reader = new FileReader();
    reader.onload = function(event) {
        var img = new Image();
        img.onload = function() {
            ctx1.drawImage(document.getElementById('imageCanvas'), 0, 0, 570, 600);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}


function sendToCanvas(ob) {
    var img = new Image();

    img.onload = function() {
        ctx.drawImage(img, 0, 0, 450, 600);

        // ctx1.drawImage(document.getElementById('imageCanvas'), 0, 0, 350, 145);

        ctx.font = ob.fontWeight + ' ' + ob.fontSize + ' ' + ob.fontFamily;
        ctx.textAlign = 'center';
        ctx.fillStyle = ob.color;
        ctx.fillText(ob.text1, CVS.width / 2.2, CVS.height / 1.6);
        ctx.fillText(ob.text2, CVS.width / 4, CVS.height / 4.1);
        ctx.fillText(ob.text3, CVS.width / 4, CVS.height / 3.4);
        ctx.fillText(ob.text4, CVS.width / 4.1, CVS.height / 1.4);
        ctx.fillText(ob.text5, CVS.width / 2.8, CVS.height / 1.4);
        ctx.fillText(ob.text6, CVS.width / 4.1, CVS.height / 1.3);
        ctx.fillText(ob.text7, CVS.width / 2.8, CVS.height / 1.3);
        ctx.fillText(ob.text8, CVS.width / 4.1, CVS.height / 1.2);
        ctx.fillText(ob.text9, CVS.width / 2.8, CVS.height / 1.2);
        ctx.fillText(ob.text10, CVS.width / 1.9, CVS.height / 1.4);
        ctx.fillText(ob.text11, CVS.width / 1.6, CVS.height / 1.4);
        ctx.fillText(ob.text12, CVS.width / 1.9, CVS.height / 1.3);
        ctx.fillText(ob.text13, CVS.width / 1.6, CVS.height / 1.3);
        ctx.fillText(ob.text14, CVS.width / 1.9, CVS.height / 1.2);
        ctx.fillText(ob.text15, CVS.width / 1.6, CVS.height / 1.2);

    };
    img.src = ob.image;
}
///////////////////////////

// DO IT! /////////////////

var cvsObj = {
    image: "./TOTY.png",
    text1: "YOUR NAME",
    text2: "99",
    text3: "CAM",
    text4: "99",
    text5: "PAC",
    text6: "99",
    text7: "SHO",
    text8: "99",
    text9: "PAS",
    text10: "99",
    text11: "DRI",
    text12: "99",
    text13: "DEF",
    text14: "99",
    text15: "PHY",

    fontFamily: "Proxima Nova ExCn Ltl",
    fontWeight: "300",
    fontSize: "28px",
    color: "#e6b800"
};
sendToCanvas(cvsObj);



$('#name').on("input", function() {
    cvsObj.text1 = this.value;
    sendToCanvas(cvsObj);
});

$('#rating').on("input", function() {
    cvsObj.text2 = this.value;
    sendToCanvas(cvsObj);
});
$('#position').on("input", function() {
    cvsObj.text3 = this.value;
    sendToCanvas(cvsObj);
});
$('#pace').on("input", function() {
    cvsObj.text4 = this.value;
    sendToCanvas(cvsObj);
});
$('#pacetext').on("input", function() {
    cvsObj.text5 = this.value;
    sendToCanvas(cvsObj);
});
$('#shoot').on("input", function() {
    cvsObj.text6 = this.value;
    sendToCanvas(cvsObj);
});
$('#shoottext').on("input", function() {
    cvsObj.text7 = this.value;
    sendToCanvas(cvsObj);
});
$('#pass').on("input", function() {
    cvsObj.text8 = this.value;
    sendToCanvas(cvsObj);
});
$('#passtext').on("input", function() {
    cvsObj.text9 = this.value;
    sendToCanvas(cvsObj);
});
$('#dribbl').on("input", function() {
    cvsObj.text10 = this.value;
    sendToCanvas(cvsObj);
});
$('#dribbltext').on("input", function() {
    cvsObj.text11 = this.value;
    sendToCanvas(cvsObj);
});
$('#defend').on("input", function() {
    cvsObj.text12 = this.value;
    sendToCanvas(cvsObj);
});
$('#defendtext').on("input", function() {
    cvsObj.text13 = this.value;
    sendToCanvas(cvsObj);
});
$('#physical').on("input", function() {
    cvsObj.text14 = this.value;
    sendToCanvas(cvsObj);
});
$('#physicaltext').on("input", function() {
    cvsObj.text15 = this.value;
    sendToCanvas(cvsObj);
});
$('#dropdown').on("change", function() {
    imageObj.src = this.options[this.selectedIndex].dataset.img;
    imageObj.onload = function() {
        ctx.drawImage(imageObj, 90, 191, 70, 45);
    };
});
$('#dropdownclub').on("change", function() {
    imageObj.src = this.options[this.selectedIndex].dataset.img;
    imageObj.onload = function() {
        ctx.drawImage(imageObj, 90, 245, 70, 50);
    };
});




// /* drawImage once the Image object has loaded a url */
// img.onload = () => {
//     ctx.drawImage(
//         img, //Image object to copy pixel data from
//         0, //x position, distance from left edge
//         0, //y position, distance from top edge
//         450, //display width
//         600 //display height
//     );
// }
// img.src = './TOTY.png';


// document.getElementById('name').addEventListener('keyup', function() {
//     ctx.clearRect(0, 0, 10, 10);
//     text_title = this.value;
//     ctx.fillText(text_title, 170, 366);
//     ctx.font = "small-caps 50px 'Proxima Nova ExCn Lt'";
//     ctx.fillStyle = "#e6b800";
// });