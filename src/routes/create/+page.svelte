<script>
	// @ts-nocheck

	let fldTestingLab = '';
	let fldReportNumber = '';
	let fldSpecies = '';
	let fldVariety = '';
	let fldReportDate = ''; // Format as YYYY-MM-DD
	let fldQRCode = '';
	let fldDealerName = '';
	let fldWeightCarats = '';
	let fldLengthmm = '';
	let fldWidthmm = '';
	let fldHeightmm = '';
	let fldColor = '';
	let fldClarity = '';
	let fldOrigin = '';
	let fldTreatment = '';
	let fldCut = '';
	let fldShape = '';
	let fldThermalTreatment = '';
	let fldPhoto = '';
	let fldVideo = '';
	let fldAdditionalComments = '';
	let photoFile;
	let videoFile;

	function populateDummyData() {
		fldTestingLab = 'Dummy Lab';
		fldReportNumber = '123456';
		fldSpecies = 'Corundum';
		fldVariety = 'Sapphire';
		fldReportDate = '2023-01-01';
		fldQRCode = 'dummy_qr_code.jpg';
		fldDealerName = 'Dummy Dealer';
		fldWeightCarats = '2.50';
		fldLengthmm = '5.00';
		fldWidthmm = '3.00';
		fldHeightmm = '2.50';
		fldColor = 'Blue';
		fldClarity = 'VS1';
		fldOrigin = 'Madagascar';
		fldTreatment = 'Heated';
		fldCut = 'Round';
		fldShape = 'Oval';
		fldThermalTreatment = 'Yes';
		fldPhoto = 'dummy_photo_url.jpg';
		fldVideo = 'dummy_video_url.mp4';
		fldAdditionalComments = 'Sample additional comments';
	}

	function onPhotoChange(event) {
		photoFile = event.target.files[0];
	}

	function onVideoChange(event) {
		videoFile = event.target.files[0];
	}
</script>

<form method="post" enctype="multipart/form-data" class="container">
	<input
		type="text"
		bind:value={fldTestingLab}
		name="fldTestingLab"
		placeholder="Testing Lab"
		required
	/>
	<input
		type="text"
		bind:value={fldReportNumber}
		name="fldReportNumber"
		placeholder="Report Number"
		required
	/>
	<input type="text" bind:value={fldSpecies} name="fldSpecies" placeholder="Species" required />
	<input type="text" bind:value={fldVariety} name="fldVariety" placeholder="Variety" required />
	<input type="date" bind:value={fldReportDate} name="fldReportDate" required />
	<input type="text" bind:value={fldQRCode} name="fldQRCode" placeholder="QR Code" required />

	<input
		type="text"
		bind:value={fldDealerName}
		name="fldDealerName"
		placeholder="Dealer Name"
		required
	/>
	<input
		type="number"
		bind:value={fldWeightCarats}
		name="fldWeightCarats"
		placeholder="Weight (Carats)"
		required
		step="0.01"
	/>
	<input
		type="number"
		bind:value={fldLengthmm}
		name="fldLengthmm"
		placeholder="Length (mm)"
		required
		step="0.01"
	/>
	<input
		type="number"
		bind:value={fldWidthmm}
		name="fldWidthmm"
		placeholder="Width (mm)"
		required
		step="0.01"
	/>
	<input
		type="number"
		bind:value={fldHeightmm}
		name="fldHeightmm"
		placeholder="Height (mm)"
		required
		step="0.01"
	/>

	<input type="text" bind:value={fldColor} name="fldColor" placeholder="Color" required />
	<input type="text" bind:value={fldClarity} name="fldClarity" placeholder="Clarity" required />
	<input type="text" bind:value={fldOrigin} name="fldOrigin" placeholder="Origin" required />
	<input
		type="text"
		bind:value={fldTreatment}
		name="fldTreatment"
		placeholder="Treatment"
		required
	/>
	<input type="text" bind:value={fldCut} name="fldCut" placeholder="Cut" required />
	<input type="text" bind:value={fldShape} name="fldShape" placeholder="Shape" required />
	<select bind:value={fldThermalTreatment} name="fldThermalTreatment">
		<option value="">Select Thermal Treatment</option>
		<option value="Yes">Yes</option>
		<option value="No">No</option>
	</select>
	<input type="hidden" bind:value={fldPhoto} name="fldPhoto" />
	<input type="hidden" bind:value={fldVideo} name="fldVideo" />
	<textarea
		bind:value={fldAdditionalComments}
		name="fldAdditionalComments"
		placeholder="Additional Comments"
		rows="10"
		cols="50"
	></textarea>
	<input type="file" id="photo-upload" name="fldPhoto" accept="image/*" on:change={onPhotoChange} />
	<input type="file" id="video-upload" name="fldVideo" accept="video/*" on:change={onVideoChange} />

	<button type="button" on:click={populateDummyData}>Populate Dummy Data</button>
	<button type="submit">Submit Gem Entry</button>
</form>
