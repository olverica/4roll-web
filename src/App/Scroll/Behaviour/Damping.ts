import Vector2D from 'App/Animation/Types/Vector2D'
import Setting from 'App/Scroll/Settings/Value/Setting'


export default class Damping
{
    private setting: Setting<number>;


    public constructor(setting: Setting<number>)
    {
        this.setting = setting;
    }

    public getValue(): Vector2D
    {
        let damping = 1 - this.setting.value();
        return {
            x: damping,
            y: damping
        }
    }
}