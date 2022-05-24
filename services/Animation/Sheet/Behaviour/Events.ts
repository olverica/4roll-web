import {Gesture} from '~/services/Animation/Sheet/Behaviour/GestureDetector'


export interface FingerEvent
{
    timestamp: number;
    fingerPosition: number;
    sheetPosition: number;
}

export interface ReleasedEvent extends FingerEvent
{
    gesture: Gesture;
}

export interface MovedEvent extends FingerEvent {}

export interface TouchedEvent extends FingerEvent {}