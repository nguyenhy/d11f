import type { ClientFilterOperator } from '@d11f/types';
import { getFilterOperatorsForType } from '@d11f/utils';
import type { GeneratedFilter } from '..';
import type { FilterEmptyValidator, FilterValidator } from '../../query/filter';

export const type = 'alias';
export const filterOperatorList = getFilterOperatorsForType(type);

export const generateFilterForDataType = (filter: ClientFilterOperator, _possibleValues: any): GeneratedFilter[] => {
	if (!filterOperatorList.includes(filter)) {
		throw new Error(`Invalid filter operator for ${type}: ${filter}`);
	}

	switch (filter) {
		default:
			throw new Error(`Unimplemented filter operator for ${type}: ${filter}`);
	}
};

export const getValidatorFunction = (filter: ClientFilterOperator): FilterValidator => {
	if (!filterOperatorList.includes(filter)) {
		throw new Error(`Invalid filter operator for ${type}: ${filter}`);
	}

	switch (filter) {
		default:
			throw new Error(`Unimplemented filter operator for ${type}: ${filter}`);
	}
};

export const getEmptyAllowedFunction = (filter: ClientFilterOperator): FilterEmptyValidator => {
	if (!filterOperatorList.includes(filter)) {
		throw new Error(`Invalid filter operator for ${type}: ${filter}`);
	}

	switch (filter) {
		default:
			throw new Error(`Unimplemented filter operator for ${type}: ${filter}`);
	}
};
