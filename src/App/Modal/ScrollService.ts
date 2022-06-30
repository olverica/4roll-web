
export default class ScrollLock
{
    private lockCount: number = 0;


    public lock(): void
    {
        this.lockCount++;
    }

    public unlock(): void
    {
        if (this.lockCount > 0)
            this.lockCount--;
    }

    public locked(): boolean
    {
        return this.lockCount !== 0;
    }
}