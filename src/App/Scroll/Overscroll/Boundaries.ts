import ViewportDimenssion from 'App/Scroll/Models/ViewportDimenssion'
import ScrollDTO from 'App/Scroll/Interaction/ScrollDTO'
import Viewport from 'App/Scroll/Models/Viewport'
import Border, { LimitType } from 'App/Scroll/Overscroll/Border'
import Size from 'App/Animation/Types/Size'


export interface BordersContainer
{
    bottom: Border;
    right: Border; 
    left: Border;
    top: Border;
}


export default class Boundaries
{
    private size: Size = {
        height: 0, width: 0
    }

   private borders: BordersContainer;


   constructor(collection: BordersContainer) {
        this.borders = collection;
    }

    public restrict(viewport: Viewport)
    {
        let position = viewport.getPosition();

        if (this.borders.top.breaksAt(position.y))
            this.borders.top.restrict(new ViewportDimenssion('y', viewport));

        if (this.borders.bottom.breaksAt(position.y))
            this.borders.bottom.restrict(new ViewportDimenssion('y', viewport));

        if (this.borders.right.breaksAt(position.x))
            this.borders.right.restrict(new ViewportDimenssion('x', viewport));

        if (this.borders.left.breaksAt(position.x))
            this.borders.left.restrict(new ViewportDimenssion('x', viewport));
    }

    public update(): void
    {
        this.borders.bottom.update();
        this.borders.right.update();
        this.borders.left.update();
        this.borders.top.update();
    }   

    public render(dto: ScrollDTO): void
    {
        dto.borders.bottom = this.borders.bottom.overscrolled();;
        dto.borders.right = this.borders.right.overscrolled();
        dto.borders.left = this.borders.left.overscrolled();
        dto.borders.top = this.borders.top.overscrolled();
    }

    public resize(size: Size, viewport: Viewport): void
    {
        this.size = size;

        this.borders.bottom.limit(this.size.height - viewport.getSize().height, LimitType.Smaller);
        this.borders.right.limit(this.size.width - viewport.getSize().width, LimitType.Smaller);
        this.borders.left.limit(0, LimitType.Greather);
        this.borders.top.limit(0, LimitType.Greather);
    }
}