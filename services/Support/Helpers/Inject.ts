import {DefineComponent} from 'vue'


export default function inject<Service>(from: DefineComponent, dependency: string, prefix: string = '$'): Service {
    let injectedName = prefix + dependency;

    if (!!!Object.getOwnPropertyDescriptor(from, injectedName))
        throw Error('Dependency not injecteds');

    return from[injectedName];
}