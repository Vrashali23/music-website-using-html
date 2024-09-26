const songs = {
    bollywood: [
        { name: "Akhiyaan", src:"Akhiyaan.mp3", imageSrc:"ankhiyan.png" },
        { name: "Barbaadiyan", src: "Barbaadiyan.mp3", imageSrc:"barbadiyaan.jpg" },
        { name: "Chaleya", src: "Chaleya.mp3", imageSrc:"chaleya.png" },
        { name: "Deva Deva", src: "Deva Deva.mp3", imageSrc:"deva deva.jpg" },
        { name: "Dj Brazil", src: "Dj Brazil.mp3", imageSrc:"djbrazil.jpg" },
        { name: "Kesariya", src: "Kesariya .mp3", imageSrc:"keasraiya.jpg" },
        { name: "Mahi", src: "Mahi.mp3", imageSrc:"mahi.png" },
        { name: "O Sajna", src: "O Sajna.mp3", imageSrc:"o sajna.jpg" },
        { name: "Tu Tu Hai Wahi", src: "Tu Tu Hai Wahi.mp3", imageSrc:"tutuhaiwahi.jpg" },
        { name: "Tumse Milke Dil Ka", src: "Tumse Milke Dil Ka.mp3", imageSrc:"tumse milke dil ka.jpg" },
      ],

    hollywood: [
      { name: "Daddy Yankee - Gasolina", src: "Daddy Yankee - Gasolina.mp3", imageSrc: "gasolina.jpg" },
      { name: "Ed Sheeran - Perfect", src: "Ed Sheeran - Perfect.mp3", imageSrc: "perfect.jpg" },
      { name: "Eminem", src: "Eminem - Mockingbird (Lyrics).mp3", imageSrc: "mokingbird.jpg" },
      { name: "Imagine Dragons - Believer", src: "Imagine Dragons - Believer.mp3", imageSrc: "beleiver.jpg" },
      { name: "Jay Sean - Ride It", src: "Jay Sean - Ride It.mp3", imageSrc: "ride it.jpg" },
      { name: "Maroon 5 - Memories", src: "Maroon 5 - Memories.mp3", imageSrc: "memories.jpg" },
      { name: "Pink Sweat$ - At My Worst", src: "Pink Sweat$ - At My Worst.mp3", imageSrc: "at my worst.jpg" },
      { name: "Señorita", src: "Shawn Mendes, Camila Cabello - Señorita.mp3", imageSrc: "senorita.jpg" },
      { name: "Sia - Unstoppable", src: "Sia - Unstoppable.mp3", imageSrc: "unstoppable.jpg" },
      { name: "Taylor Swift", src: "Taylor Swift - Lover.mp3", imageSrc: "lover.jpg" },
    ],

    tollywood: [
      { name: "Bangaraju", src: "Bangaraju.mp3", imageSrc: "Bangarraju.jpg" },
      { name: "Buttabommba", src: "Buttabommba.mp3", imageSrc: "buttabomma.jpg" },
      { name: "Inkem Inkem", src: "Inkem Inkem.mp3", imageSrc: "inkem.jpg" },
      { name: "Kannuna kalyanam", src: "Kannuna kalyanam.mp3", imageSrc: "kannuna.jpg" },
      { name: "Naatu Naatu", src: "Naatu Naatu.mp3", imageSrc: "Naatu_Naatu.jpg" },
      { name: "Neeli Neeli Akasam", src: "Neeli Neeli Akasam.mp3", imageSrc: "neelinelli.jpg" },
      { name: "Srivalli", src: "Srivalli.mp3", imageSrc: "shrivali.jpg" },
      { name: "Telussa Telussa", src: "Telussa Telussa.mp3", imageSrc: "telussa.jpg" },
      { name: "Yenti Yenti", src: "Yenti Yenti.mp3", imageSrc: "yenti.jpg" },
      { name: "Yevrani Adganu", src: "Yevrani Adganu.mp3", imageSrc: "yevrani agdganu.jpg" },
    ],
};


  function changeCategory(category) {
    const songList = document.getElementById("songList");
    songList.innerHTML = "";
  
    songs[category].forEach((song, index) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.className = "song-button";
      
      const serialNumber = document.createElement("span");
      serialNumber.textContent = (index + 1) + ".";
      serialNumber.className = "serial-number";
      button.appendChild(serialNumber);
      
      const songImage = document.createElement("img");
      songImage.src = song.imageSrc;
      songImage.alt = song.name;
      songImage.className = "song-image";
      button.appendChild(songImage);
      
      const songName = document.createElement("span");
      songName.textContent = song.name;
      songName.className = "song-name";
      button.appendChild(songName);
      
      const playIcon = document.createElement("i");
      playIcon.className = "fas fa-play";
      button.appendChild(playIcon);
      
      button.addEventListener("click", () => playSong(song.src, song.name, song.imageSrc));

      li.appendChild(button);
      songList.appendChild(li);
    });
  }
  
  window.onload = function() {
    changeCategory("bollywood"); // Set "Bollywood" as the default category
  }

  function playSong(src, songName, songImageSrc) {
    const audioPlayer = document.getElementById("audioPlayer");
    const currentSongNameElement = document.getElementById("currentSongName");
    const musicPlayerImg = document.querySelector(".music-player-img");
    
    audioPlayer.src = src;
    audioPlayer.play();
    currentSongNameElement.textContent = "Now Playing: " + songName;
    musicPlayerImg.src = songImageSrc;
    musicPlayerImg.alt = songName;
}



  const menuBtn = document.querySelector(".menu-icon span");
  const searchBtn = document.querySelector(".search-icon");
  const cancelBtn = document.querySelector(".cancel-icon");
  const items = document.querySelector(".nav-items");
  const form = document.querySelector("form");
  menuBtn.onclick = () => {
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  };
  cancelBtn.onclick = () => {
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    cancelBtn.style.color = "#ff3d00";
  };
  searchBtn.onclick = () => {
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  };