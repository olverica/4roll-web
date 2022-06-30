import Setting from 'App/Scroll/Settings/Value/Setting'
import Config from 'App/Scroll/Settings/Config';


export default class ReactiveSetting<T = number> implements Setting<T>
{
    private splitted: string[];

    private config: Config;


    public constructor(conifg: Config, path: string)
    {
        this.splitted = path.split('.');
        this.config = conifg;
    }

    public value(): T
    {
        let cursor: any = this.config;
        for (let part of this.splitted)
        {
            if (!!!cursor.hasOwnProperty(part))
                throw Error('Incorrect path');

            cursor = cursor[part];
        }

        return cursor;
    }
}