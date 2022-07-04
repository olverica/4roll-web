import Setting from 'App/Scroll/Settings/Value/Setting'


export default class Friction
{
    private modifier: Setting<number>;


    public constructor(value: Setting<number>)
    {
        this.modifier = value;
    }

    public mutate(momentum: number): number
    {
        return momentum * (1 - this.modifier.value());
    }
}