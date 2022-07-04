import BorderCollection, {BounceSettings, BounceInfo} from 'App/Scroll/Overscroll/Collections/BorderCollection'
import BouncingBorder from 'App/Scroll/Overscroll/Bounce/BouncingBorder'
import StaticBorder from 'App/Scroll/Overscroll/Static/StaticBorder'
import Setting from 'App/Scroll/Settings/Value/Setting'
import Border from 'App/Scroll/Overscroll/Border'


export interface Borders
{
    bottom: Border
    right: Border
    left: Border
    top: Border
}

export default class SolidBorders implements BorderCollection
{
    private borders: Borders;


    public constructor(bouncing: BounceSettings, info: BounceInfo)
    {
        this.borders = {
            bottom: this.initialize(bouncing.bottom, info),
            right: this.initialize(bouncing.right, info),
            left: this.initialize(bouncing.left, info),
            top: this.initialize(bouncing.top, info)
        }
    }

    public bottom(): Border
    {
        return this.borders.bottom;
    }

    public right(): Border
    {
        return this.borders.right;
    }

    public left(): Border
    {
        return this.borders.left;
    }

    public top(): Border
    {
       return this.borders.top;
    }

    private initialize(bouncing: Setting<boolean>, info: BounceInfo): Border
    {
        let {controls, friction, resistance} = info;

        return bouncing.value() ? 
            new BouncingBorder(controls, resistance, friction) : 
            new StaticBorder();
    }
} 