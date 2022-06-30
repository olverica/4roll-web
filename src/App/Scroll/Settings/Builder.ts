import ScrollAggregate from 'App/Scroll/Interaction/ScrollAggregate'
import BouncingBorder from 'App/Scroll/Overscroll/BouncingBorder'
import AxesRestrictor from 'App/Scroll/Behaviour/AxesRestrictor'
import StaticBorder from 'App/Scroll/Overscroll/StaticBorder'
import SizeObserver from 'App/Scroll/Settings/SizeObserver'
import Boundaries from 'App/Scroll/Overscroll/Boundaries'
import Resistance from 'App/Scroll/Overscroll/Resistance'
import ScrollDTO from 'App/Scroll/Interaction/ScrollDTO'
import Controls from 'App/Scroll/Behaviour/Controls'
import Viewport from 'App/Scroll/Models/Viewport'
import Damping from 'App/Scroll/Behaviour/Damping'
import Config from 'App/Scroll/Settings/Config'
import Scroll from 'App/Scroll/Models/Scroll'
import ReactiveSetting from 'App/Scroll/Settings/Value/ReactiveSetting'
import SavedSetting from 'App/Scroll/Settings/Value/SavedSetting'
import Setting from 'App/Scroll/Settings/Value/Setting'
import Friction from 'App/Scroll/Overscroll/Friction'


export default class Builder
{
    private config: Config;


    public make(config: Config, dto: ScrollDTO): ScrollAggregate
    {
        this.config = config;

        let controls = this.createControls();
        let viewport = this.createViewport(controls);
        let boundaries = this.createBoundaries(controls);
        let interaction = this.createInteractions(controls, viewport, boundaries);
        let resizer = this.createResiezer(viewport, boundaries);

        return new ScrollAggregate(resizer, interaction, dto);
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
        let setting = this.config.reactive ? 
            new ReactiveSetting(this.config, 'viewport.damping') :
            new SavedSetting(this.config.viewport.damping);
        
        let damping = new Damping(setting);

        return new Viewport(controls, damping)
    }

    private createBoundaries(controls: Controls): Boundaries
    {
        let resistanceSetting: Setting<number>;
        let frictionSetting: Setting<number>;

        if (this.config.reactive)
        {
            resistanceSetting = new ReactiveSetting(this.config, 'boundaries.resistance');
            frictionSetting = new ReactiveSetting(this.config, 'boundaries.friction');
        }
        else
        {
            resistanceSetting = new SavedSetting(this.config.boundaries.resistance);
            frictionSetting = new SavedSetting(this.config.boundaries.friction);
        }

        let friction = new Friction(frictionSetting)
        let resistance = new Resistance(resistanceSetting);
        let bounce = this.config.boundaries.bounce;

        let boundaries = {
            bottom: bounce.match(/bottom/) ? new BouncingBorder(controls, resistance, friction) : new StaticBorder(),
            right: bounce.match(/right/) ? new BouncingBorder(controls, resistance, friction) : new StaticBorder(),
            left: bounce.match(/left/) ? new BouncingBorder(controls, resistance, friction) : new StaticBorder(),
            top:  bounce.match(/top/) ? new BouncingBorder(controls, resistance, friction) : new StaticBorder(),
        }

        return new Boundaries(boundaries);
    }

    private createInteractions(controls: Controls, viewport: Viewport, boundaries: Boundaries)
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
        return new Scroll(controls, viewport,  boundaries, axes);
    }
}