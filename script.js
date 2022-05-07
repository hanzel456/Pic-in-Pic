const video = document.getElementById("video");
const btn = document.getElementById("button");

//prompt user to select media stream, pass to video element and play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = mediaStream;
    video.onloadeddata = () => {
      video.play();
    };
  } catch (err) {
    console.log("media stream err: ", err);
  }
}

btn.addEventListener("click", async () => {
  btn.disabled = true;
  await video.requestPictureInPicture();
  btn.disabled = false;
});

selectMediaStream();
