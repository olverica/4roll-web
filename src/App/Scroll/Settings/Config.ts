
export default interface Config
{
    reactive: boolean,

    graph?: {
        timeskip: number
    },

    axis: {
        horizontal: boolean
        vertical: boolean
    }

    viewport: {
        el: HTMLElement
        damping: number
    }

    boundaries: {
        el: HTMLElement
        friction: number
        resistance: number

        bounce: {
            bottom: boolean
            right: boolean
            left: boolean
            top: boolean
        }
    },

    controls: {
        releaseModifier: number
        spinModifier: number
        maxVelocity: number
    }
}