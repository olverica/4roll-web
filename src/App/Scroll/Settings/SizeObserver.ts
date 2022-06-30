import Boundaries from 'App/Scroll/Overscroll/Boundaries'
import Viewport from 'App/Scroll/Models/Viewport'


export interface ViewportDescriptor
{
    el: HTMLElement;
    model: Viewport;
}

export interface BoundariesDescriptor
{
    el: HTMLElement;
    model: Boundaries;
}


export default class SizeObserver
{
    private boundaries: BoundariesDescriptor;
    
    private viewport: ViewportDescriptor;
    
    private obsever: ResizeObserver;

    
    public constructor(viewport:ViewportDescriptor, boundaries: BoundariesDescriptor)
    {
        this.viewport = viewport;
        this.boundaries = boundaries;

        this.obsever = new ResizeObserver(this.resize.bind(this));
        this.obsever.observe(this.boundaries.el);
        this.obsever.observe(this.viewport.el);
        
        this.resize();
    }

    private resize(): void
    {
        let viewprot = {
            height: this.viewport.el.offsetHeight,
            width: this.viewport.el.offsetWidth,
        };

        let boundaries = {
            height: this.boundaries.el.offsetHeight,
            width: this.boundaries.el.offsetWidth,
        };

        this.viewport.model.resize(viewprot);
        this.boundaries.model.resize(boundaries, this.viewport.model);
    }

    public detach(): void
    {
        this.obsever.disconnect();
    }
}