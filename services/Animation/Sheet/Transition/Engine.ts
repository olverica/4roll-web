
export interface Updatable
{
    update: (deltaTime: number) => void
}

export default class Engine
{
    private accumulatedTime: number;
    
    private paused: boolean;

    private updatable: Updatable;
    
    private timeStep: number;

    private tickEndedAt = 0;
    

    public constructor(fps: number, updatable: Updatable) {
        this.updatable = updatable;
        this.timeStep = 1000 / fps;

        this.accumulatedTime = 0;
        this.paused = false;
    }

    public stop()
    {
        this.paused = true;
    }

    public fire()
    {
        this.paused = false;
        this.tickEndedAt = performance.now();
        this.requestFrame(this.loop.bind(this));
    }

    private loop(): void
    {
        if (this.paused)
            return;
        
        let deltaTime = performance.now() - this.tickEndedAt;
        this.accumulatedTime += deltaTime;

        while (this.accumulatedTime >= this.timeStep)
        {
            this.accumulatedTime -= this.timeStep;
            this.updatable.update(this.timeStep);
        }
        
        this.tickEndedAt = performance.now();
        this.requestFrame(this.loop.bind(this));
    }

    private requestFrame(callback: () => void): void
    {
        window.requestAnimationFrame(callback);
    }
}   