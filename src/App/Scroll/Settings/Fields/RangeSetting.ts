import SettingValue from 'App/Scroll/Settings/Fields/SettingValue'
import RangeField from 'App/Fields/RangeField'
import Config from 'App/Scroll/Settings/Config'


export default class RangeSetting extends RangeField
{
    public constructor(config: Config, path: string, min: number, max: number, step: number)
    {
        let valueStorage = new SettingValue(config, path);

        super(valueStorage, min, max, step)
    }
}