import ReactiveBorders from 'App/Scroll/Overscroll/Collections/ReactiveBorders'
import ReactivePareser from 'App/Scroll/Settings/Parsers/ReactiveParser'
import ScrollAggregate from 'App/Scroll/Interaction/ScrollAggregate'
import SolidBorders from 'App/Scroll/Overscroll/Collections/SolidBorders'
import AxesRestrictor from 'App/Scroll/Behaviour/AxesRestrictor'
import ConfigParser from 'App/Scroll/Settings/Parsers/ConfigParser'
import SizeObserver from 'App/Scroll/Settings/SizeObserver'
import SolidParser from 'App/Scroll/Settings/Parsers/SolidParser'
import Resistance from 'App/Scroll/Overscroll/Bounce/Resistance'
import Boundaries from 'App/Scroll/Overscroll/Boundaries'
import ScrollDTO from 'App/Scroll/Interaction/ScrollDTO'
import Controls from 'App/Scroll/Behaviour/Controls'
import Friction from 'App/Scroll/Overscroll/Bounce/Friction'
import Viewport from 'App/Scroll/Models/Viewport'
import Damping from 'App/Scroll/Behaviour/Damping'
import Config from 'App/Scroll/Settings/Config'
import Scroll from 'App/Scroll/Models/Scroll'



export default class Factory
{
    private parser: ConfigParser;

    private config: Config;


    public make(config: Config, dto: ScrollDTO): ScrollAggregate
    {
        this.config = config;
        this.parser = config.reactive ? 
            new ReactivePareser(config): new SolidParser(config);

        let controls = this.createControls();
        let viewport = this.createViewport(controls);
        let boundaries = this.createBoundaries(controls);
        let interactor = this.createInteractor(controls, viewport, boundaries);
        let resizer = this.createResiezer(viewport, boundaries);

        return new ScrollAggregate(resizer, interactor, dto);
    }

    private createControls(): Controls
    {
        return new Controls(
            this.parser.releaseModifier(), 
            this.parser.spinModifier(),
            this.parser.maxVelocity());
    }

    private createResiezer(viewport: Viewport, boundaries: Boundaries): SizeObserver
    {
        return new SizeObserver(
            {model: viewport, el: this.config.viewport.el},
            {model: boundaries, el: this.config.boundaries.el}
        )
    }

    private createViewport(controls: Controls): Viewport
    {
        let damping = new Damping(this.parser.damping());
        return new Viewport(controls, damping)
    }

    private createInteractor(controls: Controls, viewport: Viewport, boundaries: Boundaries)
    {
        let axes = new AxesRestrictor(this.parser.horizontalAxis(), this.parser.verticallAxis()); 
        return new Scroll(controls, viewport,  boundaries, axes);
    }

    private createBoundaries(controls: Controls): Boundaries
    {
        let bounceInfo = {
            resistance: new Resistance(this.parser.resistance()),
            friction: new Friction(this.parser.friction()),
            controls
        };

        let borders = this.config.reactive ? 
            new ReactiveBorders(this.parser.bounce(), bounceInfo):
            new SolidBorders(this.parser.bounce(), bounceInfo);

        return new Boundaries(borders);
    }
}