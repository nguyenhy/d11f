import { defineOperationApi } from '@d11f/extensions';
import { optionToObject } from '@d11f/utils';

type Options = {
	json: string | Record<string, any>;
};

export default defineOperationApi<Options>({
	id: 'transform',

	handler: ({ json }) => {
		return optionToObject(json);
	},
});
