import { defineOperationApi } from '@d11f/extensions';
import { optionToString } from '@d11f/utils';
import { useLogger } from '../../logger/index.js';

type Options = {
	message: unknown;
};

export default defineOperationApi<Options>({
	id: 'log',

	handler: ({ message }) => {
		const logger = useLogger();

		logger.info(optionToString(message));
	},
});
