import AxesRestrictor from 'App/Scroll/Behaviour/AxesRestrictor'
import ReleaseEvent from 'App/Animation/Behaviour/Events/Touch/ReleaseEvent'
import Boundaries from 'App/Scroll/Overscroll/Boundaries'
import MoveEvent from 'App/Animation/Behaviour/Events/Touch/MoveEvent'
import ScrollDTO from 'App/Scroll/Interaction/ScrollDTO'
import Controls from 'App/Scroll/Behaviour/Controls'
import Viewport from 'App/Scroll/Models/Viewport'


export default class Scroll
{
    private boundaries: Boundaries;
    
    private viewport: Viewport;
    
    private controls: Controls;
    
    private axes: AxesRestrictor;


    public constructor(controls: Controls, viewport: Viewport, boundaries: Boundaries, axes: AxesRestrictor)
    {
        this.boundaries = boundaries;
        this.viewport = viewport;
        this.controls = controls;
        this.axes = axes;
    }

    public touch(): void
    {
        this.controls.forward();

        let restricted = this.axes.restrict({x: 0, y: 0});
        this.viewport.changeMomentum(restricted);
    }

    public touchMove(event: MoveEvent): void
    {
        let restricted = this.axes.restrict(event.positionDelta);
        this.viewport.addMomentum(restricted);
    }

    public touchRelease(event: ReleaseEvent): void
    {
        let momentum = this.controls.momentumFromRelease(event.velocity);
        let restricted = this.axes.restrict(momentum);

        this.controls.drop();
        this.viewport.changeMomentum(restricted);
    }

    public wheelSpin(event: WheelEvent): void
    {
        let delta = {x: event.deltaX, y: event.deltaY};
        let momentum = this.controls.momentumFromSpin(delta);

        this.viewport.addMomentum(momentum);
    }

    public update(deltaTime: number): void
    {
        this.viewport.update();
        this.boundaries.restrict(this.viewport);
        this.boundaries.update();
    }

    public render(dto: ScrollDTO)
    {
        this.viewport.render(dto);
        this.boundaries.render(dto);
    }
}