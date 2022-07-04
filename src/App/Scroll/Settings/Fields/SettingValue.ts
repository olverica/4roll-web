import Config from 'App/Scroll/Settings/Config'
import ValueStorage from 'App/Fields/Values/ValueStorage'


export default class SettingValue implements ValueStorage<number>
{
    private config: Config;
    
    private path: string[];


    public constructor(config: Config, path: string)
    {
        this.path = path.split('.');
        this.config = config;
    }

    public get(): number
    {
        return this.find(this.path);
    }

    public set(value: number)
    {
        let target = this.find(this.path.slice(0, -1))
        let prop = this.path[this.path.length - 1]; 

        target[prop] = value;
    }

    private find(path: string[]): any
    {
        let cursor: any = this.config;
        for (let part of path)
        {
            if (!!!cursor.hasOwnProperty(part))
                throw Error('Incorrect path');

            cursor = cursor[part];
        }

        return cursor;
    }
}