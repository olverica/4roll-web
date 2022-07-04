import Setting from 'App/Scroll/Settings/Value/Setting'
import Resistance from 'App/Scroll/Overscroll/Bounce/Resistance'
import Friction from 'App/Scroll/Overscroll/Bounce/Friction'
import Controls from 'App/Scroll/Behaviour/Controls'
import Border from 'App/Scroll/Overscroll/Border'


export interface BounceSettings
{
    bottom: Setting<boolean>
    right: Setting<boolean>
    left: Setting<boolean>
    top: Setting<boolean>
}

export interface BounceInfo
{
    resistance: Resistance
    friction: Friction
    controls: Controls,
}

export default interface BorderCollection
{
    bottom(): Border;
    right(): Border;
    left(): Border;
    top(): Border;
}