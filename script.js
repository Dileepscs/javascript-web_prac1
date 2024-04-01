var box_arr = Array.from(document.getElementsByClassName("box"));
box_arr.forEach((i)=>{
    i.addEventListener("onclick",play);
    i.addEventListener("onkeydown",play);
})
const audioPlay = (() => {
    let context = null;
    return async url => {
      if (context) context.close();
      context = new AudioContext();
      const source = context.createBufferSource();
      source.buffer = await fetch(url)
        .then(res => res.arrayBuffer())
        .then(arrayBuffer => context.decodeAudioData(arrayBuffer));
      source.connect(context.destination);
      source.start();
    };
  });
function play(event){
    switch(event.target.innerHTML){
        case "1":
            audioPlay("audio\Andhame Athivai Vasthe _ Lyrics _ Telugu _ Sultan(MP3_320K).mp3");
            break;
        case "2":
            audioPlay("url1");
            break;

        case "3":
            audioPlay("url1");
            break;

        case "4":
            audioPlay("url1");
            break;
    }
}