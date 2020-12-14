<template>
  <div :class="styles.container">
    <video :class="styles.video" id="player" playsinline>
      <source :src="videoURL" type="video/mp4" />
    </video>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { css } from "@emotion/css";
import Mousetrap from "mousetrap";
import countdown from "./countdown.mp4";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

const keyframes = [1.423, 23.768];

function animate(func: Function) {
  let rafid = 0;
  const tick = function() {
    rafid = requestAnimationFrame(tick);
    func();
  };
  tick();
  return {
    stop: () => {
      cancelAnimationFrame(rafid);
    },
    resume: () => {
      tick();
    },
  };
}

export default Vue.extend({
  data() {
    return {
      videoURL: "",
      player: (null as unknown) as Plyr,
      currentMessageIndex: 0,
    };
  },
  computed: {
    styles() {
      return {
        container: css`
          width: 100vw;
          height: 100vh;
          background-color: black;

          & > .plyr {
            width: 100vw;
            height: 100vh;

            & > .plyr__controls {
              display: none;
            }
            & > .plyr__control {
              display: none !important;
            }
            & > .plyr__video-wrapper {
              width: 100vw;
              height: 100vh;
            }
          }
        `,
      };
    },
  },
  beforeDestroy() {
    this.player.destroy();
    URL.revokeObjectURL(this.videoURL);

    Mousetrap.unbind("right");
    Mousetrap.unbind("1");
  },
  async mounted() {
    const response = await fetch(countdown);
    const blob = await response.blob();
    this.videoURL = URL.createObjectURL(blob);

    this.player = new Plyr("#player", {
      ratio: "406 / 720",
      muted: true,
      clickToPlay: false,
      keyboard: { focused: false, global: false },
    });

    const timer = animate(() => {
      if (this.player.currentTime >= keyframes[this.currentMessageIndex - 1]) {
        timer.stop();
        this.player.pause();
      }
    });

    Mousetrap.bind("right", () => {
      if (!this.player.playing && this.currentMessageIndex < 2) {
        this.currentMessageIndex += 1;
        timer.resume();
        this.player.play();
      }
    });

    Mousetrap.bind("1", () => {
      // Restart
      timer.stop();
      this.currentMessageIndex = 0;
      this.player.stop();
    });
  },
});
</script>
