<template>
  <div>
    <div v-if="$route.name === 'Home'">
      <p>
        按鍵盤右鍵就是下一個訊息
      </p>
      <p>
        數字鍵 1 可以全部重來
      </p>
      <p>
        總共只有 8 個訊息
      </p>

      <router-link to="/line" target="_blank"
        >在新視窗打開跟 Jason Line 的對話</router-link
      >

      <p>
        按鍵盤右鍵就是下一個訊息
      </p>
      <p>
        數字鍵 1 可以全部重來
      </p>
      <p>
        總共只有 2 個訊息
      </p>

      <router-link to="/siri" target="_blank"
        >在新視窗打開跟 Siri 的對話</router-link
      >

      <p>
        按鍵盤右鍵就是下一個訊息
      </p>
      <p>
        數字鍵 1 可以全部重來
      </p>
      <p>
        總共只有 1 個訊息
      </p>

      <router-link to="/siri-i-dont-know" target="_blank"
        >在新視窗打開跟 Siri I don't know 的對話</router-link
      >

      <p>
        按鍵盤右鍵就是下一個訊息
      </p>
      <p>
        數字鍵 1 可以全部重來
      </p>

      <router-link to="/countdown" target="_blank"
        >在新視窗打開 Countdown</router-link
      >
    </div>

    <router-view v-else />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { injectGlobal } from "@emotion/css";

injectGlobal`
  body {
    margin: 0;
    overflow: hidden;
  }
`;

export default Vue.extend({});
</script>
