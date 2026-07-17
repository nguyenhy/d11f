import type { AbstractServiceOptions } from '@d11f/types';
import { ItemsService } from './items.js';

export class PanelsService extends ItemsService {
	constructor(options: AbstractServiceOptions) {
		super('directus_panels', options);
	}
}
