<script>
	// @ts-nocheck

	export let gem;
</script>

<article class="gemstone">
	<h2>Gemstone Details (ID: {gem.pkgemid})</h2>
	<p><strong>Testing Lab:</strong> {gem.fldtestinglab}</p>
	<p><strong>Report Number:</strong> {gem.fldreportnumber}</p>
	<p><strong>Species:</strong> {gem.fldspecies}</p>
	<p><strong>Variety:</strong> {gem.fldvariety}</p>
	<p><strong>Report Date:</strong> {gem.fldreportdate}</p>
	<p><strong>QR Code:</strong> {gem.fldqrcode}</p>
	<p><strong>Dealer Name:</strong> {gem.flddealername}</p>
	<p><strong>Weight (Carats):</strong> {gem.fldweightcarats}</p>
	<p><strong>Dimensions (mm):</strong> {gem.fldlengthmm} x {gem.fldwidthmm} x {gem.fldheightmm}</p>
	<p><strong>Color:</strong> {gem.fldcolor}</p>
	<p><strong>Clarity:</strong> {gem.fldclarity}</p>
	<p><strong>Origin:</strong> {gem.fldorigin}</p>
	<p><strong>Treatment:</strong> {gem.fldtreatment}</p>
	<p><strong>Cut:</strong> {gem.fldcut}</p>
	<p><strong>Shape:</strong> {gem.fldshape}</p>
	<p><strong>Thermal Treatment:</strong> {gem.fldthermaltreatment ? 'Yes' : 'No'}</p>
	{#if gem.fldphoto}
		<p><strong>Photo:</strong> <a href={gem.fldphoto} target="_blank">View Photo</a></p>
	{/if}
	{#if gem.fldvideo}
		<p><strong>Video:</strong> <a href={gem.fldvideo} target="_blank">View Video</a></p>
	{/if}
	{#if gem.fldadditionalcomments}
		<p><strong>Additional Comments:</strong> {gem.fldadditionalcomments}</p>
	{/if}
</article>
