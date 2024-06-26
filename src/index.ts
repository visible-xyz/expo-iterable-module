import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoIterableModule.web.ts
// and on native platforms to ExpoIterableModule.ts
import ExpoIterableModule from './ExpoIterableModule';
import ExpoIterableModuleView from './ExpoIterableModuleView';
import { ChangeEventPayload, ExpoIterableModuleViewProps } from './ExpoIterableModule.types';

// Get the native constant value.
export const PI = ExpoIterableModule.PI;

export function hello(): string {
  return ExpoIterableModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoIterableModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoIterableModule ?? NativeModulesProxy.ExpoIterableModule);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoIterableModuleView, ExpoIterableModuleViewProps, ChangeEventPayload };
