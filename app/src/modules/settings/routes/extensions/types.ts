import { ExtensionType as ExtensionTypeOriginal } from '@d11f/extensions';

export type ExtensionState = 'enabled' | 'disabled' | 'partial';

export type ExtensionType = ExtensionTypeOriginal | 'missing';
