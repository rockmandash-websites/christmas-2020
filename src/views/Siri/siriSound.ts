import { Howl } from "howler";
import siriNoLie from "./siriNoLie.mp3";
import siriSad from "./siriSad.mp3";

export default {
  siriNoLieSound: new Howl({
    src: [siriNoLie],
  }),
  siriSadSound: new Howl({
    src: [siriSad],
  }),
};
