import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoIterableModuleViewProps } from './ExpoIterableModule.types';

const NativeView: React.ComponentType<ExpoIterableModuleViewProps> =
  requireNativeViewManager('ExpoIterableModule');

export default function ExpoIterableModuleView(props: ExpoIterableModuleViewProps) {
  return <NativeView {...props} />;
}
