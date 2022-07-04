import BorderCollection, {BounceInfo, BounceSettings} from 'App/Scroll/Overscroll/Collections/BorderCollection'
import BouncingBorder from 'App/Scroll/Overscroll/Bounce/BouncingBorder'
import StaticBorder from 'App/Scroll/Overscroll/Static/StaticBorder'
import Setting from 'App/Scroll/Settings/Value/Setting'
import Border from 'App/Scroll/Overscroll/Border'


export interface BorderDescriptor
{
    setting: Setting<boolean>
    bouncing: boolean
    el: Border
}

export interface Borders
{
    bottom: BorderDescriptor
    right: BorderDescriptor
    left: BorderDescriptor
    top: BorderDescriptor
}

export default class ReactiveBorders implements BorderCollection
{
    private bounce: BounceInfo;

    private borders: Borders;


    public constructor(bounceSettings: BounceSettings, bounceInfo: BounceInfo)
    {
        this.bounce = bounceInfo;

        this.borders = {
            bottom: {el: new StaticBorder(), bouncing: false, setting: bounceSettings.bottom},
            right: {el: new StaticBorder(), bouncing: false, setting: bounceSettings.right},
            left: {el: new StaticBorder(), bouncing: false, setting: bounceSettings.left},
            top: {el: new StaticBorder(), bouncing: false, setting: bounceSettings.top}
        }

        console.log(this.borders);
    }

    public bottom(): Border
    {
        if (this.changed(this.borders.bottom))
            this.reinitialize(this.borders.bottom)

        return this.borders.bottom.el;
    }

    public right(): Border
    {
        if (this.changed(this.borders.right))
            this.reinitialize(this.borders.right)

        return this.borders.right.el;
    }

    public left(): Border
    {
        if (this.changed(this.borders.left))
            this.reinitialize(this.borders.left)

        return this.borders.left.el;
    }

    public top(): Border
    {
        if (this.changed(this.borders.top))
            this.reinitialize(this.borders.top)

        return this.borders.top.el;
    }

    private reinitialize(descriptor: BorderDescriptor): void
    {
        console.log(descriptor);
        let {friction, controls, resistance} = this.bounce;

        let previousLimit = descriptor.el.getLimit();


        descriptor.bouncing = descriptor.setting.value();
        descriptor.el = descriptor.bouncing ? 
            new BouncingBorder(controls, resistance, friction) : 
            new StaticBorder();

        descriptor.el.limit(previousLimit.point, previousLimit.type);
    }

    private changed(descriptor: BorderDescriptor): boolean
    {
        return descriptor.bouncing !== descriptor.setting.value();
    }
} 