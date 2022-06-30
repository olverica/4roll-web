

export interface ConsoleMessage
{
    timestamp: Date,
    data: Array<any>
}


export default class ConsoleService
{
    public messages: ConsoleMessage[] = [];


    public constructor(messages: Array<any> = [])
    {
        this.messages = messages;
        this.overrideConsole();
    }

    public getMessages(): ConsoleMessage[]
    {
        return this.messages;
    }

    private overrideConsole(): void
    {
        let originalLog = console.log;

        console.warn = () => {};
        console.log = (...data: any[]) => {
            this.appendMessage(...data);
            originalLog(...data);
        }
    }

    private appendMessage(...data: any[]): void
    {
        this.messages.push({
            data, timestamp: new Date(),
        });
    }
}