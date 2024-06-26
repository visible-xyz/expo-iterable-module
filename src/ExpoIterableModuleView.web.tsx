import * as React from 'react';

import { ExpoIterableModuleViewProps } from './ExpoIterableModule.types';

export default function ExpoIterableModuleView(props: ExpoIterableModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
