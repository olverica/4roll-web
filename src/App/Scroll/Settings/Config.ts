
export default interface Config
{
    reactive: boolean,

    axis: 'vertical'|'horizontal'|'both',

    viewport: {
        el: HTMLElement
        damping: number
    }

    boundaries: {
        el: HTMLElement
        bounce: string
        friction: number
        resistance: number
    }
}