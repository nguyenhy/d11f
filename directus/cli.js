#!/usr/bin/env node
import { updateCheck } from '@d11f/update-check';
import { version } from './version.js';

if (version) {
	await updateCheck(version);
}

import('@d11f/api/cli/run.js');
