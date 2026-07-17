import { createDirectus, rest, serverPing, staticToken } from '@d11f/sdk';
import { port } from '@utils/constants.js';
import { expect, test } from 'vitest';

const api = createDirectus(`http://localhost:${port}`).with(rest()).with(staticToken('admin'));

test('ping', async () => {
	const result = await api.request(serverPing());

	expect(result).toBe('pong');
});
