import { defineStore } from "pinia";

export const useWorkoutStore = defineStore("workout", {
  state: () => ({
    audio: null,
    timeElapsed: 0,
    youtubeStartTime: 0,
    interval: null,
    state: 'paused',
    isWarningTime: false,
    isTime: false,
    youtubeUrl: 'https://youtu.be/rKDhP1R7wy0?si=cDHpAM-1qAOoPFmS',
    totalTime: 30,
    warmupTime: 1,
    cooldownTime: 1,
    isComplete: false,
    intervalTime: 60,
  }),
  getters: {
    audioUrl: (s) => {
      var val = s.youtubeUrl;
      val = val.replace('https://youtu.be', 'https://youtube.com/embed')
      if (s.state == 'started') {
        return val + '&autoplay=1' + '&start=' + s.youtubeStartTime;
      }
      return val + '&start=' + s.youtubeStartTime;
    },
    showWarmAndCooldownBars: (s) => {
      return !(s.totalTime < (s.warmupTime + s.cooldownTime))
    },
    timeElapsedString: (s) => {
      //create a computed string to represent the time elapsed
      const minutes = Math.floor(s.timeElapsed / 60);
      const seconds = s.timeElapsed % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    },
    totalIntervals: (s) => {
      return Math.floor((s.totalTime * 60.0) / s.intervalTime);
    },
    currentInterval: (s) => {
      return Math.floor(s.timeElapsed / s.intervalTime);
    },
    intervalsRemaining: (s) => {
      return s.totalIntervals - s.currentInterval;
    },
  },
  actions: {
    start() {
      this.audio = new Audio(require('@/assets/timer.mp3'));
      this.state = 'started';
      this.interval = setInterval(() => {
        this.timeElapsed++;
        this.handleWarningIndicator();
        //pause once complete
        if (this.timeElapsed / 60 >= this.totalTime) {
          clearInterval(this.interval);
          this.state = 'paused';
          this.isComplete = true;
        }
      }, 1000);
    },
    handleWarningIndicator() {
      //warn the user with audio and by changing the background color when the interval is up
      if ((this.timeElapsed + 4) % this.intervalTime == 0) {
        if (this.audio !== null) {
          this.audio.play();
        }

        this.isWarningTime = true;
        setTimeout(() => {
          this.isWarningTime = false;
          this.isTime = true;
          setTimeout(() => {
            this.isTime = false;
          }, 1000);
        }, 3000);
      }
    },
    pause() {
      this.state = 'paused';
      this.youtubeStartTime = this.timeElapsed;
      this.audio = null;
      clearInterval(this.interval);
    },

    restart() {
      this.reset();
      this.start();
    },

    reset() {
      this.timeElapsed = 0;
      this.youtubeStartTime = 0;
      this.audio = null;
      this.isComplete = false;
    }
  }
});