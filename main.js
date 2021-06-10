// https://teachablemachine.withgoogle.com/models/ZHuZDEduL/ 
//Webcam for the machine to recognize
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})

camera=document.getElementById("camera")
Webcam.attach('#camera')
//starts function
function take_snapshot() {
    //code for taking snap shot
    Webcam.snap(function(data_uri){
        //getting the element result
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    })
}
console.log('ml5 version:',ml5.version)
//the real thing that decides what the item is
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZHuZDEduL/model.json',modelLoaded)

function modelLoaded(){
    console.log('ModelLoaded!')
}