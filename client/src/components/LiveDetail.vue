<!-- <iframe width="853" height="480" src="https://www.youtube.com/embed/F_w4mwISoWU" title="Before Sui-chan comes to kill you" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="853" height="480" src="https://www.youtube.com/embed/NVkP9Wj9eYI" title="idk but AWOOO~【Mumei Fauna Kronii Gura】" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
<script>
export default {
  name: "LiveDetail",
  props: ["live"],
};
</script>
<template>
  <div v-if="live">
    <div class="container">
      <div class="row">
        <div class="col-md-6 align-self-center">
          <h1>{{ live.title }}</h1>
          <h2>{{ live.status }}</h2>
        </div>
      </div>
    </div>
  </div>
  <div v-if="!live">
    <h1>No Live Streaming</h1>
  </div>
</template>
