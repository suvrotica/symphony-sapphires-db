<script>
	// @ts-nocheck
	export let data;
	import Gem from '$lib/components/gem.svelte';

	function groupGemsByOrigin(gems) {
		const grouped = {};
		gems.forEach((gem) => {
			console.log(gem.fldorigin);
			const origin = gem.fldorigin || 'Other';

			if (!grouped[origin]) {
				grouped[origin] = [];
			}
			grouped[origin].push(gem);
		});
		return grouped;
	}

	const groupedGems = groupGemsByOrigin(data.gemStones);
	console.log(groupedGems);
</script>

{#if Object.keys(groupedGems).length > 0}
	{#each Object.keys(groupedGems) as origin}
		<details>
			<summary>{origin}</summary>
			{#each groupedGems[origin] as gem}
				<Gem {gem} />
			{/each}
		</details>
	{/each}
{:else}
	<h2>No gemstones available</h2>
{/if}
