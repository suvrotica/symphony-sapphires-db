<script>
	export let data;
	import Gem from '$lib/components/gem.svelte';
</script>

{#each data?.gemStones as gem}
	<span>
		<article>
			<h6>{gem.fldtestinglab}-{gem.fldreportnumber}</h6>
			<p>{gem.fldorigin}-{gem.fldcolor}-{gem.fldspecies}-{gem.fldvariety}</p>

			<p>
				{gem.fldweightcarats} carats {gem.fldlengthmm} x {gem.fldwidthmm} x {gem.fldheightmm} mm
			</p>

			{gem.fldtreatment},
			{gem.fldcut},
			{gem.fldshape}
			{#if gem.fldphoto}
				, Photo: <a href={gem.fldphoto} target="_blank">View</a>
			{/if}
			{#if gem.fldvideo}
				, Video: <a href={gem.fldvideo} target="_blank">View</a>
			{/if}
			{#if gem.fldadditionalcomments}
				, Comments: {gem.fldadditionalcomments}
			{/if}
		</article>
	</span>
{/each}

<style>
</style>
