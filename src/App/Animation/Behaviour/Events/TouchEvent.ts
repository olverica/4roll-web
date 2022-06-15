import FingerEvent from 'App/Animation/Behaviour/Events/FingerEvent'


export default class TouchEvent implements FingerEvent
{
    readonly fingerAt: number;

    readonly timestamp: number;

    readonly movingSpeed: number;


    public constructor(fingerAt: number)
    {
        this.movingSpeed = 0;
        this.fingerAt = fingerAt;
        this.timestamp = Date.now();
    }
}