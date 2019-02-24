let channel1 = [];
let channel2 = [];
let channel3 = [];
let channel4 = [];
let bool = false;
let audio; 
let audio1;
let music;
let o = 0;
let muzyka =window.addEventListener('keydown',function(e) {
    audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(e);
    audio.currentTime = 0;
    audio.play();
    channel1[o] = e.keyCode;
        o+=1;
    music = document.getElementById("odt1").addEventListener("click",function(){
        for(let i = 0; i< channel1.length; i++) {
            audio1 = document.querySelector(`audio[data-key="${channel1[i]}"]`);
            audio1.currentTime = 0;
            audio1.play();
    }     
    })
})

////////// channels //////////////
record1.addEventListener(`click`, function() 
{
    // START RECORDING AUDIO
  navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();
    // SAVE AUDIO
    const audioChunks = [];

    mediaRecorder.addEventListener(`dataavailable`, (event) => {
        audioChunks.push(event.data);
  });
// CONVERT

  mediaRecorder.addEventListener(`stop`, () => {

    const audioBlob = new Blob(audioChunks);
    //CREATE URL
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);

    // PLAYING AUDIO PRESSING 1
    play1.addEventListener(`click` , function() {
    audio.play();
    
    });
});

//STOP RECORDING AUDIO 1
 stop1.addEventListener(`click`, () =>{
    mediaRecorder.stop();
 })

});

});
record2.addEventListener(`click`, function()
{
    //START RECORDING AUDIO
  navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();
    //SAVE AUDIO
    const audioChunks = [];

    mediaRecorder.addEventListener(`dataavailable`, (event) => {
        audioChunks.push(event.data);
  });
//CONVERT
  mediaRecorder.addEventListener(`stop`, () => {
    const audioBlob = new Blob(audioChunks);
    //CREATE URL
    const audioUrl = URL.createObjectURL(audioBlob);
    //PLAY AUDIO ON PRESS 2
    const audio = new Audio(audioUrl);
    play2.addEventListener(`click` , function() {
        audio.play();
        });
});

//STOP RECORDING ON PRESS BUTTON 2
 stop2.addEventListener(`click`, () =>{
    mediaRecorder.stop();
 })
   

});

});
record3.addEventListener(`click`, function()
{
    //START RECORDING
  navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();

    //SAVE AUDIO
    const audioChunks = [];
    mediaRecorder.addEventListener(`dataavailable`, (event) => {
        audioChunks.push(event.data);
  });
//CONVERT
  mediaRecorder.addEventListener(`stop`, () => {
    const audioBlob = new Blob(audioChunks);
    //CREATEAUDIO
    const audioUrl = URL.createObjectURL(audioBlob);

    //PLAY AUDIO ON BUTTON 3
    const audio = new Audio(audioUrl);
    play3.addEventListener(`click` , function() {
        audio.play();
        });
});

//STOP RECORDING AUDIO ON BUTTON 3
 stop3.addEventListener(`click`, () =>{
    mediaRecorder.stop();
 })
   
});

});
record4.addEventListener(`click`, function()
{
    //RECORDING AUDIO
  navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();


    //SAVE AUDIO
    const audioChunks = [];

    mediaRecorder.addEventListener(`dataavailable`, (event) => {
        audioChunks.push(event.data);
  });
// CONVERT
  mediaRecorder.addEventListener(`stop`, () => {
    const audioBlob = new Blob(audioChunks);
    //CREATE URL 
    const audioUrl = URL.createObjectURL(audioBlob);

    //PLAY ON BUTTON 4
    const audio = new Audio(audioUrl);
    play4.addEventListener(`click` , function() {
        audio.play();
        });
});
//STOP RECORDING ON BUTTON 4
 stop4.addEventListener(`click`, () =>{
    mediaRecorder.stop();
 })

});

});





