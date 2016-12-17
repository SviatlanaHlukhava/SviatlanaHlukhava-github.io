import { NgZone } from '@angular/core'

export class Profiler {
    time: Date;
    zone: NgZone;

    constructor(zone: NgZone) {
        this.zone = zone;
    }
    profile() {
      this.zone.onUnstable.subscribe(() => {
          console.log("become unstable");
          this.time = new Date();
      });
      this.zone.onStable.subscribe(() => {
          if (this.time) {
              let time = new Date();
              let diff = time.getTime() - this.time.getTime();
              console.log("become stable, " + Math.floor(diff * 100) / 100 + ' ms');
            }
        });
    }
}