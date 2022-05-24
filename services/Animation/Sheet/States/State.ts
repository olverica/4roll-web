import {MovedEvent, TouchedEvent, ReleasedEvent} from '~/services/Animation/Sheet/Behaviour/Events';
import InteractionBoundaries from '~/services/Animation/Sheet/Info/InteractionBoundaries';
import InteractionBehaviour from '~/services/Animation/Sheet/Info/InteractionBehaviour';
import InteractionInfo from '~/services/Animation/Sheet/Info/InteractionInfo';



export default interface SheetState
{
    onTouchMove(event: MovedEvent): void;
    onTouchStart(event: TouchedEvent): void;
    onTouchRelease(event: ReleasedEvent): void
}


export abstract class StateBase implements SheetState
{
    protected sheet: InteractionInfo;


    public constructor(info: InteractionInfo)
    {
        this.sheet = info;
        this.onStateAttached();
    }

    public onTouchMove(event: MovedEvent): void
    {
        //
    }

    public onTouchStart(event: TouchedEvent): void
    {
        //
    }

    public onTouchRelease(event: ReleasedEvent): void
    {
        //
    }

    public onStateAttached(): void
    {
        //
    }

    protected behavior(): InteractionBehaviour
    {
        return this.sheet.getBehaviour();
    }

    protected boundaries(): InteractionBoundaries
    {
        return this.sheet.getBoundaries();
    }
}