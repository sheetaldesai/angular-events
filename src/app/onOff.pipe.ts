import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'onOff'})
export class onOffPipe implements PipeTransform {
    transform(value: boolean) : string {
        if (value === true) {
            return "ON";
        } else {
            return "OFF";
        }
    }
}


