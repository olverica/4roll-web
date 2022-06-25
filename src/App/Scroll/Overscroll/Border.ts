import ViewportDimenssion from 'App/Scroll/Model/ViewportDimenssion'
        

// LIMITTING ALL THATN IS GREATHER
export enum LimitType
{
    Smaller = 1,
    Greather = -1
}

export default interface Boundary
{
    restrict(viewport: ViewportDimenssion): void;
    limit(point: number, type: LimitType): void;
    breaksAt(point: number): boolean;
    overscrolled(): number;
    update(): void
}