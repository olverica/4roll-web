
export default interface Config
{
    testing: boolean,

    axis: 'vertical'|'horizontal'|'both',

    viewport: {
        el: HTMLElement
        damping: number
    }

    boundaries: {
        el: HTMLElement
        bounce: string
        resistance: number
    }
}