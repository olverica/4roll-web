import ScrollBehaviour from 'App/Animation/Scroll/ScrollBehaviour'
import ActionHandler from 'App/Animation/Transition/ActionHandler'
import ScrollState from 'App/Animation/Scroll/States/ScrollState'
import Viewport from 'App/Animation/Scroll/Viewport'


import TempAction from '../Actions/TempAction'
import Action from '../../Transition/Action'


export default class InteractionContext
{
    private behaviour: ScrollBehaviour;
    
    private actions: ActionHandler;
    
    private viewport: Viewport;
    
    private state: ScrollState;
    


    public constructor(viewport: Viewport, actions: ActionHandler)
    {
        this.behaviour = new ScrollBehaviour();
        this.viewport = viewport;
        this.actions = actions;
    }

    public getBehavior(): ScrollBehaviour
    {
        return this.behaviour;
    }

    public getViewport(): Viewport
    {
        return this.viewport;
    } 

    public addAction(action: Action)
    {
        this.actions.setAction(action);
    }

    public changeState(state: ScrollState): void
    {
        this.state = state;
    }

    public getState(): ScrollState
    {
        if (this.state === null)
            throw new Error('State isn`t initialized');

        return this.state;
    }
}