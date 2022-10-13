<script>
export default {
  name: "UpcomingDetail",
  props: ["upcoming"],
  created() {
    var tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
      player = new this.YT.Player("player", {
        height: "390",
        width: "640",
        videoId: `${this.upcoming.yt_video_key}`,
        playerVars: {
          playsinline: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == this.YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
      }
    }
    function stopVideo() {
      player.stopVideo();
    }
  },
};
</script>
<template>
  <div v-if="upcoming">
    <div class="container">
      <div class="row">
        <div id="player"></div>
        <div class="col-md-6 align-self-center">
          <h1>{{ upcoming.title }}</h1>
          <h2>{{ upcoming.status }}</h2>
        </div>
      </div>
    </div>
  </div>
  <div v-if="!upcoming">
    <h1>No Live Streaming</h1>
  </div>
</template>
