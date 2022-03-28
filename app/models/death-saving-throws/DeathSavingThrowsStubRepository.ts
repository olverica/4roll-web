import DeathSavingThrowsRepository from './DeathSavingThrowsRepository';
import {ClearCommnad} from './DeathSavingThrowsRepository';
import {FailCommand} from './DeathSavingThrowsRepository';
import {PassCommnad} from './DeathSavingThrowsRepository';


export default class DeathSavingThrowsStubRepository implements DeathSavingThrowsRepository
{
    public async pass(command: PassCommnad)
    {
        return {
            id: command.deathSavingThrows.id,
            passed: command.deathSavingThrows.passed + 1,
            failled: command.deathSavingThrows.failled,
        }
    }

    public async fail(command: FailCommand)
    {
        return {
            id: command.deathSavingThrows.id,
            passed: command.deathSavingThrows.passed,
            failled: command.deathSavingThrows.failled + 1,
        }
    }

    public async clear(command: ClearCommnad)
    {
        return {
            id: command.deathSavingThrows.id,
            passed: 0,
            failled: 0,
        }
    }
}