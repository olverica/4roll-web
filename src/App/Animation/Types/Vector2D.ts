
export default interface Vector2D
{
    x: number;
    y: number;
}

export interface LooseVector2D
{
    x?: number;
    y?: number;
}


export function getDimmensionValue(vector: LooseVector2D, dimmension: 'x'|'y'): number
{
    return typeof vector[dimmension] === 'number' ? 
        vector[dimmension] : 0;
}

export function mutate(base: Vector2D, mutator: LooseVector2D): Vector2D
{
    return {
        x: typeof mutator.x === 'number' ? mutator.x : base.x,
        y: typeof mutator.y === 'number' ? mutator.y : base.y,
    }
}

export function strict(loose: LooseVector2D): Vector2D
{
    return {
        x: getDimmensionValue(loose, 'x'),
        y: getDimmensionValue(loose, 'y'),
    }
}

export function difference(first: LooseVector2D, second: LooseVector2D): Vector2D
{
    return {
        x: getDimmensionValue(first, 'x') - getDimmensionValue(second, 'x'),
        y: getDimmensionValue(first, 'y') - getDimmensionValue(second, 'y')
    }
}

export function multiply(first: LooseVector2D, second: LooseVector2D): Vector2D
{
    return {
        x: getDimmensionValue(first, 'x') * getDimmensionValue(second, 'x'),
        y: getDimmensionValue(first, 'y') * getDimmensionValue(second, 'y')
    }
}

export function add(first: LooseVector2D, second: LooseVector2D): Vector2D
{
    return {
        x: getDimmensionValue(first, 'x') + getDimmensionValue(second, 'x'),
        y: getDimmensionValue(first, 'y') + getDimmensionValue(second, 'y')
    }
}