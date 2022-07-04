import Setting from 'App/Scroll/Settings/Value/Setting'

export interface BounceSettings
{
    bottom: Setting<boolean>,
    right: Setting<boolean>,
    left: Setting<boolean>,
    top: Setting<boolean>,
}

export default interface ConfigParser
{
    bounce(): BounceSettings

    damping(): Setting<number>

    friction(): Setting<number>
    resistance(): Setting<number>

    horizontalAxis(): Setting<boolean>
    verticallAxis(): Setting<boolean>

    maxVelocity(): Setting<number>
    spinModifier(): Setting<number>
    releaseModifier(): Setting<number>
}