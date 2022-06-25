import FingerEvent from 'App/Animation/Behaviour/Events/FingerEvent'
import MovingSpeed from 'App/Animation/Behaviour/MovingSpeed'


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

        if (firstEvent.fingerAt < lastEvent.fingerAt)
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

        return new MovingSpeed({px: distance, ms: time});
    } 

    private createEmptyGesture()
    {
        return {
            type: GestureType.None,
            speed: new MovingSpeed({px: 0, ms: 0})
        }
    }

    private distance(firstEvent: FingerEvent, lastEvent: FingerEvent): number
    {
        return Math.abs(firstEvent.fingerAt.y - lastEvent.fingerAt.y);
    }
}