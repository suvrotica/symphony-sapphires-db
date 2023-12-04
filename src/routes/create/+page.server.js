// @ts-nocheck
// src/routes/gem/+server.page.js
import { createPool } from '@vercel/postgres';
import { POSTGRES_URL } from '$env/static/private';

async function createGemEntry(
	fldTestingLab,
	fldReportNumber,
	fldSpecies,
	fldVariety,
	fldReportDate,
	fldQRCode,
	fldDealerName,
	fldWeightCarats,
	fldLengthmm,
	fldWidthmm,
	fldHeightmm,
	fldColor,
	fldClarity,
	fldOrigin,
	fldTreatment,
	fldCut,
	fldShape,
	fldThermalTreatment,
	fldPhoto,
	fldVideo,
	fldAdditionalComments
) {
	const pool = createPool({ connectionString: POSTGRES_URL });

	// Create the table if it doesn't exist
	await pool.sql`
        CREATE TABLE IF NOT EXISTS tblGem (
            pkGemID SERIAL PRIMARY KEY,
			fldTestingLab VARCHAR(255) NOT NULL,
			fldReportNumber VARCHAR(255) NOT NULL,
			fldSpecies VARCHAR(255) NOT NULL,
			fldVariety VARCHAR(255) NOT NULL,
			fldReportDate DATE NOT NULL,
			fldQRCode TEXT NOT NULL,
            fldDealerName VARCHAR(255) NOT NULL,
            fldWeightCarats DECIMAL(10, 2) NOT NULL,
            fldLengthmm DECIMAL(10, 2) NOT NULL,
            fldWidthmm DECIMAL(10, 2) NOT NULL,
            fldHeightmm DECIMAL(10, 2) NOT NULL,
            fldColor VARCHAR(255) NOT NULL,
            fldClarity VARCHAR(255) NOT NULL,
            fldOrigin VARCHAR(255) NOT NULL,
            fldTreatment VARCHAR(255) NOT NULL,
            fldCut VARCHAR(255) NOT NULL,
            fldShape VARCHAR(255) NOT NULL,
            fldThermalTreatment BOOLEAN NOT NULL,
            fldPhoto TEXT,
            fldVideo TEXT,
            fldAdditionalComments TEXT
        );
    `;

	// Insert new gem entry from the form data
	const rowInserted = await pool.sql`
	INSERT INTO tblGem (
        fldTestingLab,
        fldReportNumber,
        fldSpecies,
        fldVariety,
        fldReportDate,
        fldQRCode,
        fldDealerName,
        fldWeightCarats,
        fldLengthmm,
        fldWidthmm,
        fldHeightmm,
        fldColor,
        fldClarity,
        fldOrigin,
        fldTreatment,
        fldCut,
        fldShape,
        fldThermalTreatment,
        fldPhoto,
        fldVideo,
        fldAdditionalComments
    ) VALUES (
        ${fldTestingLab},
        ${fldReportNumber},
        ${fldSpecies},
        ${fldVariety},
        ${fldReportDate},
        ${fldQRCode},
        ${fldDealerName},
        ${fldWeightCarats},
        ${fldLengthmm},
        ${fldWidthmm},
        ${fldHeightmm},
        ${fldColor},
        ${fldClarity},
        ${fldOrigin},
        ${fldTreatment},
        ${fldCut},
        ${fldShape},
        ${fldThermalTreatment},
        ${fldPhoto},
        ${fldVideo},
        ${fldAdditionalComments}
    );

    `;

	return rowInserted;
}

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();

		// Extract values from the form data
		// Extract values from the form data
		const fldTestingLab = form.get('fldTestingLab');
		const fldReportNumber = form.get('fldReportNumber');
		const fldSpecies = form.get('fldSpecies');
		const fldVariety = form.get('fldVariety');
		const fldReportDate = form.get('fldReportDate');
		const fldQRCode = form.get('fldQRCode');
		const fldDealerName = form.get('fldDealerName');
		const fldWeightCarats = form.get('fldWeightCarats');
		const fldLengthmm = form.get('fldLengthmm');
		const fldWidthmm = form.get('fldWidthmm');
		const fldHeightmm = form.get('fldHeightmm');
		const fldColor = form.get('fldColor');
		const fldClarity = form.get('fldClarity');
		const fldOrigin = form.get('fldOrigin');
		const fldTreatment = form.get('fldTreatment');
		const fldCut = form.get('fldCut');
		const fldShape = form.get('fldShape');
		const fldThermalTreatment = form.get('fldThermalTreatment') === 'Yes';
		const fldPhoto = form.get('fldPhoto');
		const fldVideo = form.get('fldVideo');
		const fldAdditionalComments = form.get('fldAdditionalComments');

		try {
			// Call the function to create a new gem entry
			await createGemEntry(
				fldTestingLab,
				fldReportNumber,
				fldSpecies,
				fldVariety,
				fldReportDate,
				fldQRCode,
				fldDealerName,
				fldWeightCarats,
				fldLengthmm,
				fldWidthmm,
				fldHeightmm,
				fldColor,
				fldClarity,
				fldOrigin,
				fldTreatment,
				fldCut,
				fldShape,
				fldThermalTreatment,
				fldPhoto,
				fldVideo,
				fldAdditionalComments
			);
			console.log('Gem entry was created successfully');
			return { message: 'Gem entry was created successfully' };
		} catch (err) {
			console.log('Error in creating gem entry: ', err.message);
			return { error: err.message };
		}
	}
};
