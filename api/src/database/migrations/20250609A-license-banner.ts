import { useEnv } from '@d11f/env';
import { toBoolean } from '@d11f/utils';
import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	const env = useEnv();

	const acceptedTerms: boolean = toBoolean(env['ACCEPT_TERMS']);

	await knex.schema.alterTable('directus_settings', (table) => {
		table.boolean('accepted_terms').defaultTo(acceptedTerms);
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.alterTable('directus_settings', (table) => {
		table.dropColumn('accepted_terms');
	});
}
