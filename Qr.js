const qrText= document.getElementById('qr-text');
const sizes= document.getElementById('sizes');
const generateBtn=document.getElementById('generateBtn')
const downloadBtn= document.getElementById('downloadBtn')

const qrContainer= document.querySelector('.qr-body')

let size= sizes.value;

generateBtn.addEventListener('click',(e)=>{
e.preventDefault();
isemptyInput();


});

sizes.addEventListener('change',(e)=>{
size= e.target.value;
isemptyInput();

});

downloadBtn.addEventListener('click',()=>{
let img = document.querySelector('.qr-body img');
if(img !==null){
    let imgAtrr = img.getAttribute('src');
downloadBtn.setAttribute("href",imgAtrr)
}
else{
 downloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
}
});

function isemptyInput(){
if(qrText.value.length>0){
generateQRCode();
}
else{
alert('Enter the Text or URL to generate the QR code');
}
}


function generateQRCode(){
    qrContainer.innerHTML='';
new QRCode(qrContainer,{
text:qrText.value,
height:size,
width:size,
colorLight:"#fff",
colorDark:"#000"
})
}