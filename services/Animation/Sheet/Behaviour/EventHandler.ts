import {FingerEvent, MovedEvent, TouchedEvent, ReleasedEvent} from '~/services/Animation/Sheet/Behaviour/Events'
import GestureDetector from '~/services/Animation/Sheet/Behaviour/GestureDetector'


export default class EventHandler
{
    private events: FingerEvent[] = [];

    private fingerOffset: number = 0;


    public moved(fingerPosition: number): MovedEvent {
        let event = { 
            fingerPosition,
            timestamp: Date.now(),
            sheetPosition: this.computeSheetPosition(fingerPosition),
        };

        this.events.unshift(event);
        return event;
    }

    public touched(fingerPosition: number, sheetPosition: number): TouchedEvent {
        this.fingerOffset = fingerPosition - sheetPosition;

        let event = { 
            fingerPosition,
            timestamp: Date.now(),
            sheetPosition: this.computeSheetPosition(fingerPosition),
        };

        this.events = [event];
        return event;
    }

    public released(fingerPosition: number): ReleasedEvent {
        return {
            fingerPosition,
            timestamp: Date.now(),
            gesture: this.computeGesture(),
            sheetPosition: this.computeSheetPosition(fingerPosition),
        };
    }

    private computeSheetPosition(fingerPosition: number): number
    {
        return fingerPosition - this.fingerOffset
    }

    private computeGesture()
    {
        return new GestureDetector().proceed(this.events);
    }
}