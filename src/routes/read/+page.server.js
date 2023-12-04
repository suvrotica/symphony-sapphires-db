import { createPool } from '@vercel/postgres';
import { POSTGRES_URL } from '$env/static/private';

export async function load({}) {
	const pool = createPool({
		connectionString: POSTGRES_URL
	});

	const { rows } = await pool.sql`
    SELECT * FROM tblGem ORDER BY pkGemID ASC;
  `;

	return { gemStones: rows };
}
