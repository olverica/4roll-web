import {DefineComponent} from 'vue';


export type ModalComponent = DefineComponent

export interface ModalContainer
{
    notifications: object[];
    sheet?: {component: ModalComponent, descriptor: SheetDescription};
}

export interface SheetDescription
{

}


export default class ModalService
{   
    private container: ModalContainer;


    public constructor()
    {
        this.container = {notifications: [], sheet: null};
    }

    public getContainer(): ModalContainer
    {
        return this.container;
    } 

    public notification()
    {
        //
    }

    public showSheet(component: ModalComponent, descriptor: SheetDescription)
    {
        this.container.sheet = { component, descriptor };
    }

    public hideSheet(): void
    {
        this.container.sheet = null;
    }
}