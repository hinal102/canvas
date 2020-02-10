
CVS = document.getElementById('imageCanvas'),
ctx = CVS.getContext('2d');
var ctx_backup;
var text_input_1 = "";


$('#inputImage').change(function(e){
    window.cardsplug.mainHandleImage(e);
});
$('#inputImageFlag').change(function(e){
    window.cardsplug.flagHandleImage(e);
});
$('#inputImageBadge').change(function(e){
    window.cardsplug.badgeHandleImage(e);
});
 function img_base() {

    return false;
    img = new Image();
    img.src = './TOTY.png';
    img.onload = function(){
       ctx.drawImage(img, 0, 0, 450, 600);
       ctx.textAlign = 'center';
    
    ctx_backup = window.cardsplug.cloneCanvas(ctx.canvas);
    $("#trial2").attr('src',ctx_backup.toDataURL());
       
    var cvsObj = {
       // image: "./TOTY.png",
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

    ob = cvsObj;


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
    }
 }

// $('#cropimage').on('click', function(e) {
//     cropimage(e);
// })

// let imageObj = new Image();
// let imageObjClub = new Image();
// let imageObjmain = new Image();

// CVS.width = 500;
// CVS.height = 600;

// function cropimage(e) {
// }

// function sendToCanvas(ob) {

//         ctx.drawImage(ctx_backup,0,0);
//         ctx.font = ob.fontWeight + ' ' + ob.fontSize + ' ' + ob.fontFamily;
//         ctx.textAlign = 'center';
//         ctx.fillStyle = ob.color;
//         ctx.fillText(ob.text1, CVS.width / 2.2, CVS.height / 1.6);
//         ctx.fillText(ob.text2, CVS.width / 4, CVS.height / 4.1);
//         ctx.fillText(ob.text3, CVS.width / 4, CVS.height / 3.4);
//         ctx.fillText(ob.text4, CVS.width / 4.1, CVS.height / 1.4);
//         ctx.fillText(ob.text5, CVS.width / 2.8, CVS.height / 1.4);
//         ctx.fillText(ob.text6, CVS.width / 4.1, CVS.height / 1.3);
//         ctx.fillText(ob.text7, CVS.width / 2.8, CVS.height / 1.3);
//         ctx.fillText(ob.text8, CVS.width / 4.1, CVS.height / 1.2);
//         ctx.fillText(ob.text9, CVS.width / 2.8, CVS.height / 1.2);
//         ctx.fillText(ob.text10, CVS.width / 1.9, CVS.height / 1.4);
//         ctx.fillText(ob.text11, CVS.width / 1.6, CVS.height / 1.4);
//         ctx.fillText(ob.text12, CVS.width / 1.9, CVS.height / 1.3);
//         ctx.fillText(ob.text13, CVS.width / 1.6, CVS.height / 1.3);
//         ctx.fillText(ob.text14, CVS.width / 1.9, CVS.height / 1.2);
//         ctx.fillText(ob.text15, CVS.width / 1.6, CVS.height / 1.2);

//         if(typeof window.productConfiguration.custom_image01 != 'undefined' && window.productConfiguration.custom_image01 != ""){
//             var uploadedImage = window.productConfiguration.custom_image01;
//             ctx.drawImage(uploadedImage, 168, 100, 226, 226 * uploadedImage.height / uploadedImage.width);
//         }
//         if(typeof  window.productConfiguration.custom_image_flag != 'undefined' &&  window.productConfiguration.custom_image_flag!= ""){
//             var uploadedImage =  window.productConfiguration.custom_image_flag;
//             ctx.drawImage(uploadedImage, 80, 189, 80, 89 * uploadedImage.height / uploadedImage.width);

//         }
//         if(typeof  window.productConfiguration.custom_image_badge != 'undefined' &&  window.productConfiguration.custom_image_badge!= ""){
//             var uploadedImage =  window.productConfiguration.custom_image_badge;
//             ctx.drawImage(uploadedImage, 80, 223, 80, 89 * uploadedImage.height / uploadedImage.width);


//         }
//     };

var cvsObj = {
    // image: "./TOTY.png",
    // text1: "YOUR NAME",
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

function create_canvas(inputOBJ){
    window.productConfiguration = inputOBJ;
}
