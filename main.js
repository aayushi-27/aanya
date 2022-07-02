

Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 100
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeImage()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="image" src="'+data_uri+'"/>'
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zqWrmd_Gl/model.json',modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded");
}

function Check()
{
    img = document.getElementById("image");
    classifier.classify(img,gotResult);
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    utterThis.rate=1;
    synth.speak(utterThis);
}

function gotResult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("emotion_name1").innerHTML=results[0].label;

        if(results[0].label == "best")
        {
            speak_data = "The meaning of this emoji is best.";
            document.getElementById("emoji1").innerHTML="&#128077;";
            
        }

        if(results[0].label == "amazing")
        {
            speak_data = "The meaning of this emoji is amazing.";
            document.getElementById("emoji1").innerHTML="&#128076;";
            
        }

        if(results[0].label == "victory")
        {
            speak_data = "The meaning of this emoji is victory.";
            document.getElementById("emoji1").innerHTML="&#9996;";
        }

        if(results[0].label == "good luck")
        {
            speak_data = "The meaning of this emoji is good luck.";
            document.getElementById("emoji1").innerHTML="&#128075;";
            
        }

        if(results[0].label == "dislike")
        {
            speak_data = "The meaning of this emoji is dislike.";
            document.getElementById("emoji1").innerHTML="&#128078;";
            
        }
    }
}