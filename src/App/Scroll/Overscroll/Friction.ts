import Setting from 'App/Scroll/Settings/Value/Setting'


export default class Friction
{
    private frictionModifier: Setting<number>;


    public constructor(value: Setting<number>)
    {
        this.frictionModifier = value;
    }

    public computeFrom(momentum: number): number
    {
        return momentum ? 
            1 / (momentum * this.frictionModifier.value()) : 1;
    }
}