import type { JsonValue } from '@d11f/types';

export default function tryParseJson(str: string): JsonValue | undefined {
	try {
		return JSON.parse(str);
	} catch {
		return undefined;
	}
}
