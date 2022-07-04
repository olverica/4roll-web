import ViewportDimenssion from 'App/Scroll/Models/ViewportDimenssion'


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
    getLimit(): {point: number, type: LimitType};
    breaksAt(point: number): boolean;
    
    update(deltaTime: number): void
    overscrolled(): number;
}