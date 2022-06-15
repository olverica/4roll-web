import { Updatable } from 'App/Animation/Engine/AnimationEngine'


export default class UpdatableContainer implements Updatable
{
    private list: Updatable[] = [];


    public length(): number
    {
        return this.list.length;
    }

    public add(updatable: Updatable): void
    {
        this.list.push(updatable);
    }

    public update(deltaTime: number): void
    {
        for (let item of this.list)
            item.update(deltaTime);
    }

    public remove(updatable: Updatable): void
    {
        let index = this.list.indexOf(updatable);
        if (index === -1)
            throw Error('Removing unattached updatable');

        this.list.splice(index, 1);
    }
}