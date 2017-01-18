import { Injectable } from '@angular/core'
import { NgZone } from '@angular/core'
import { LoggerService } from './../services/Logger'

@Injectable()
export class Profiler {
    time: Date;
    zone: NgZone;

    constructor(private loggerService: LoggerService) {
    }
    setZone(zone: NgZone) {
        this.zone = zone;
    }
    profile() {
      this.zone.onUnstable.subscribe(() => {
          this.loggerService.log("become unstable");
          this.time = new Date();
      });
      this.zone.onStable.subscribe(() => {
          if (this.time) {
              let time = new Date();
              let diff = time.getTime() - this.time.getTime();
              this.loggerService.log("become stable, " + Math.floor(diff * 100) / 100 + ' ms');
            }
        });
    }
}