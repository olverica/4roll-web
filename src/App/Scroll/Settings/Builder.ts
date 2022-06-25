import UpdatableResistance from 'App/Scroll/Testing/UpdatableResistance'
import ScrollInteraction from 'App/Scroll/Interaction/ScrollInteraction'
import UpdatableDamping from 'App/Scroll/Testing/UpdatableDamping'
import ScrollAggregate from 'App/Scroll/Interaction/ScrollAggregate'
import BouncingBorder from 'App/Scroll/Overscroll/BouncingBorder'
import AxesRestrictor from 'App/Scroll/Behaviour/AxesRestrictor'
import StaticBorder from 'App/Scroll/Overscroll/StaticBorder'
import SizeObserver from 'App/Scroll/Settings/SizeObserver'
import Boundaries from 'App/Scroll/Overscroll/Boundaries'
import Resistance from 'App/Scroll/Overscroll/Resistance'
import ScrollDTO from 'App/Scroll/Interaction/ScrollDTO'
import Controls from 'App/Scroll/Behaviour/Controls'
import Viewport from 'App/Scroll/Model/Viewport'
import Damping from 'App/Scroll/Behaviour/Damping'
import Config from 'App/Scroll/Settings/Config'


export default class Builder
{
    private config: Config;


    public make(config: Config, dto: ScrollDTO): ScrollAggregate
    {
        ////
        ////
        ////
        ////
        ////    SCROLL MODEL INSTEAD OF VIEWPORT WITH BOUNDARIES
        ////                        ps - mb in interacions
        ////
        ////
        ////

        this.config = config;

        let controls = this.createControls();
        let viewport = this.createViewport(controls);
        let boundaries = this.createBoundaries(controls);
        let interaction = this.createInteractions(controls, viewport);
        let resizer = this.createResiezer(viewport, boundaries);

        return new ScrollAggregate(resizer, interaction, viewport, boundaries, dto);
    }

    private createControls(): Controls
    {
        return new Controls();
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
        let damping = this.config.testing ? 
            new UpdatableDamping(this.config) :
            new Damping(this.config.viewport.damping);

        return new Viewport(controls, damping)
    }

    private createBoundaries(controls: Controls): Boundaries
    {
        let resistance = this.config.testing ?
            new UpdatableResistance(this.config) :
            new Resistance(this.config.boundaries.resistance);

        let bounce = this.config.boundaries.bounce;

        let boundaries = {
            bottom: bounce.match(/bottom/) ? new BouncingBorder(controls, resistance) : new StaticBorder(),
            right: bounce.match(/right/) ? new BouncingBorder(controls, resistance) : new StaticBorder(),
            left: bounce.match(/left/) ? new BouncingBorder(controls, resistance) : new StaticBorder(),
            top:  bounce.match(/top/) ? new BouncingBorder(controls, resistance) : new StaticBorder(),
        }

        return new Boundaries(boundaries);
    }

    private createInteractions(controls: Controls, viewport: Viewport)
    {
        let vertical = false, 
            horizontal = false;

        switch (this.config.axis) 
        {
            case 'both': 
                vertical = true;
                horizontal = true;
                break;

            case 'vertical': 
                vertical = true; 
                break;

            case 'horizontal': 
                horizontal = true; 
                break;
        }

        let axes = new AxesRestrictor(horizontal, vertical); 
        return new ScrollInteraction(controls, viewport, axes);
    }
}