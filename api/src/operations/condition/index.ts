import { defineOperationApi } from '@d11f/extensions';
import type { Filter } from '@d11f/types';
import { parseFilter, validatePayload } from '@d11f/utils';
import { FailedValidationError, joiValidationErrorItemToErrorExtensions } from '@d11f/validation';

type Options = {
	filter: Filter;
};

export default defineOperationApi<Options>({
	id: 'condition',

	handler: ({ filter }, { data, accountability }) => {
		const parsedFilter = parseFilter(filter, accountability, undefined, true);

		if (!parsedFilter) {
			return null;
		}

		const errors = validatePayload(parsedFilter, data, { requireAll: true });

		if (errors.length > 0) {
			const validationErrors = errors
				.map((error) =>
					error.details.map((details) => new FailedValidationError(joiValidationErrorItemToErrorExtensions(details))),
				)
				.flat();

			throw validationErrors;
		} else {
			return null;
		}
	},
});
