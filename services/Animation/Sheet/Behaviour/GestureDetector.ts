import {FingerEvent} from '~/services/Animation/Sheet/Behaviour/Events'
import MovingSpeed from '~/services/Animation/Sheet/Behaviour/MovingSpeed'


export enum GestureType
{
    SwipeUp, SwipeDown, None
}

export interface Gesture
{
    type: GestureType,
    speed: MovingSpeed
}


export default class GestureDetector
{
    private swipeTimeLimit: number = 200;

    private swipeMinDistance: number = 150;


    public proceed(events: FingerEvent[]): Gesture
    {
        if (events.length < 2)
            return this.createEmptyGesture();

        let {lastEvent, firstEvent} = 
            this.findFarrestPoints(this.cutByTime(events));
        
        return {
            type: this.computeDiraction(firstEvent, lastEvent),
            speed: this.computeSpeed(firstEvent, lastEvent)
        }
    }

    private cutByTime(events: FingerEvent[]): FingerEvent[]
    {
        let cutted = [];
        for (let event of events)
        {  
            if (events[0].timestamp - event.timestamp > this.swipeTimeLimit)
                break;

            cutted.push(event);
        }

        return cutted;
    }

    private computeDiraction(firstEvent: FingerEvent, lastEvent: FingerEvent): GestureType
    {

        if (this.distance(firstEvent, lastEvent) < this.swipeMinDistance)
            return GestureType.None;

        if (firstEvent.fingerPosition < lastEvent.fingerPosition)
            return GestureType.SwipeDown;

        return GestureType.SwipeUp;
    }

    private findFarrestPoints(events: FingerEvent[]): {lastEvent: FingerEvent, firstEvent: FingerEvent}
    {
        let lastEvent = events[0];
        let farrestEvent = lastEvent;

        for (let currentEvent of events)
        {
            let currentDistance = this.distance(currentEvent, lastEvent);
            let biggesteDistance = this.distance(farrestEvent, lastEvent);

            if (currentDistance >= biggesteDistance)
                farrestEvent = currentEvent;
        }

        return {
            lastEvent: lastEvent,
            firstEvent: farrestEvent
        };
    }

    private computeSpeed(firstEvent: FingerEvent, lastEvent: FingerEvent)
    {
        let distance = this.distance(firstEvent, lastEvent)
        let time = lastEvent.timestamp - firstEvent.timestamp;

        return new MovingSpeed(distance, time);
    } 

    private createEmptyGesture()
    {
        return {
            type: GestureType.None,
            speed: new MovingSpeed(0, 0)
        }
    }

    private distance(firstEvent: FingerEvent, lastEvent: FingerEvent): number
    {
        return Math.abs(firstEvent.fingerPosition - lastEvent.fingerPosition);
    }
}