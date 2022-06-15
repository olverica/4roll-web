import FingerEvent from 'App/Animation/Behaviour/Events/FingerEvent'


export default class MoveEvent implements FingerEvent
{
    readonly fingerAt: number;

    readonly timestamp: number;

    readonly movingSpeed: number;


    public constructor(fingerAt: number, events: FingerEvent[])
    {
        this.fingerAt = fingerAt;
        this.timestamp = Date.now();
        this.movingSpeed = this.computeSpeed(events);
    }

    private computeSpeed(events: FingerEvent[]): number
    {
        let previous = events[0];

        return (this.fingerAt - previous.fingerAt) / 
            (this.timestamp - previous.timestamp);
    }
}