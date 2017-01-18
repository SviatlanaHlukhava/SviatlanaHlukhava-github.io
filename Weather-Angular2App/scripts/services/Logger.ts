import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs'


@Injectable()
export class LoggerService {

    public errorLog(error: string): void {
        console.error(error);
    }
    public log(message: string): void {
        console.log(message);
    }

}