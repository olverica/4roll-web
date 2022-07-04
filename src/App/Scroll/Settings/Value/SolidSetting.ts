import Setting from 'App/Scroll/Settings/Value/Setting'


export default class SolidSetting<T = number> implements Setting<T>
{
    private saved: T;


    public constructor(value: T)
    {
        this.saved = value;
    }

    public value(): T
    {
        return this.saved;
    }
}