function embedVideo() {
    // Get the input URL
    const urlInput = document.getElementById("video-url").value;
  
    // Validate if it's a YouTube URL
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = youtubeRegex.exec(urlInput);
  
    if (match && match[1]) {
      const videoId = match[1]; // Extract the video ID
      const embedUrl = `https://www.youtube.com/embed/${videoId}?controls=1`; // URL with controls enabled
  
      // Embed the video in the video-container
      const videoContainer = document.getElementById("video-container");
      videoContainer.innerHTML = `
        <iframe 
          width="800" 
          height="450" 
          src="${embedUrl}" 
          frameborder="0"
          allowfullscreen>
        </iframe>`;
    } else {
      alert('Please enter a valid YouTube URL');
    }
  }
//   <iframe width="560" height="315" src="https://www.youtube.com/embed/Q_VG2hbCcks?si=YC2-_kZCOVIjbkUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>