

export interface BoundariesConstructionConfig
{
    closePoint: number;
    bottomBreak: number; 
    topBreak: number;
}

export default class InteractionBoundaries 
{
    private affectionPoint: number;

    private closePoint: number;
    
    private bottomBreak: number;
    
    private topBreak: number;



    public constructor(config: BoundariesConstructionConfig)
    {
        this.closePoint = config.closePoint;
        this.bottomBreak = config.bottomBreak;
        this.topBreak = config.topBreak;
        this.affectionPoint = 0;
    }

    public changeAffectionPoint(point: number): void
    {
        this.affectionPoint = point;
    }
    
    public affectedTo(): number
    {
        return this.affectionPoint;
    }

    public closeAt(): number
    {
        return this.closePoint;
    }

    public breaksCloseAt(position: number): boolean
    {
        return position >= this.closePoint;
    }

    public breaksTopAt(position: number): boolean
    {
        return this.relative(position) <= - this.topBreak;
    }   

    public breaksBottomAt(position: number): boolean
    {
        console.log('BREAK', this.relative(position) >= this.bottomBreak);
        return this.relative(position) >= this.bottomBreak;
    }
    
    private relative(position: number): number
    {
        return position - this.affectionPoint;
    }
}