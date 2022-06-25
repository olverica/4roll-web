import AxesRestrictor from 'App/Scroll/Behaviour/AxesRestrictor'
import ReleaseEvent from 'App/Animation/Behaviour/Events/ReleaseEvent'
import MoveEvent from 'App/Animation/Behaviour/Events/MoveEvent'
import Controls from 'App/Scroll/Behaviour/Controls'
import Viewport from 'App/Scroll/Model/Viewport'


export default class ScrollInteraction
{
    private controls: Controls;

    private viewport: Viewport;

    private axes: AxesRestrictor;


    public constructor(controls: Controls, viewport: Viewport, axes: AxesRestrictor)
    {
        this.controls = controls;
        this.viewport = viewport;
        this.axes = axes;
    }

    public onTouchStart(): void
    {
        this.controls.forward();

        let restricted = this.axes.restrict({x: 0, y: 0});
        this.viewport.changeMomentum(restricted);
    }

    public onTouchMove(event: MoveEvent): void
    {
        let restricted = this.axes.restrict(event.positionDelta);
        this.viewport.addMomentum(restricted);
    }

    public onTouchRelease(event: ReleaseEvent): void
    {
        let restricted = this.axes.restrict({
            x: event.velocity.x * -500, 
            y: event.velocity.y * -500
        });

        this.controls.drop();
        this.viewport.changeMomentum(restricted);
    }
}