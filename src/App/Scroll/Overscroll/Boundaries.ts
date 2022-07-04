import ViewportDimenssion from 'App/Scroll/Models/ViewportDimenssion'
import BorderCollection from 'App/Scroll/Overscroll/Collections/BorderCollection'
import ScrollDTO from 'App/Scroll/Interaction/ScrollDTO'
import Viewport from 'App/Scroll/Models/Viewport'
import {LimitType} from 'App/Scroll/Overscroll/Border'
import Size from 'App/Animation/Types/Size'


export default class Boundaries
{
    private size: Size;

    private borders: BorderCollection;


    constructor(collection: BorderCollection)
    {
        this.borders = collection;
        this.size = {width: 0, height: 0}
    }

    public restrict(viewport: Viewport): void
    {
        let position = viewport.getPosition();

        if (this.borders.top().breaksAt(position.y))
            this.borders.top().restrict(new ViewportDimenssion('y', viewport));

        if (this.borders.bottom().breaksAt(position.y))
            this.borders.bottom().restrict(new ViewportDimenssion('y', viewport));

        if (this.borders.right().breaksAt(position.x))
            this.borders.right().restrict(new ViewportDimenssion('x', viewport));

        if (this.borders.left().breaksAt(position.x))
            this.borders.left().restrict(new ViewportDimenssion('x', viewport));
    }

    public update(deltaTime: number): void
    {
        this.borders.bottom().update(deltaTime);
        this.borders.right().update(deltaTime);
        this.borders.left().update(deltaTime);
        this.borders.top().update(deltaTime);
    }   

    public render(dto: ScrollDTO): void
    {
        dto.borders.bottom = this.borders.bottom().overscrolled();;
        dto.borders.right = this.borders.right().overscrolled();
        dto.borders.left = this.borders.left().overscrolled();
        dto.borders.top = this.borders.top().overscrolled();
    }

    public resize(size: Size, viewport: Viewport): void
    {
        this.size = size;

        console.log('resize');
        this.borders.bottom().limit(this.size.height - viewport.getSize().height, LimitType.Smaller);
        this.borders.right().limit(this.size.width - viewport.getSize().width, LimitType.Smaller);
        this.borders.left().limit(0, LimitType.Greather);
        this.borders.top().limit(0, LimitType.Greather);
    }
}