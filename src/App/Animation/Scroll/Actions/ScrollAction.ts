
import Action from '../../Transition/Action';
import Viewport from '../Viewport';


export default class ScrollingAction implements Action
{
    private viewport: Viewport; 


    public constructor(viewport: Viewport)
    {
        this.viewport = viewport;
    } 

    public ended(): boolean {
        return false;
    }

    public stop()  {
        
    }

    public update(timeDelta: number): void
    {
        this.viewport.update(timeDelta);
    }
}