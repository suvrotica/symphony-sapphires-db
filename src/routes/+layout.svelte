<script lang="ts">
	import '@picocss/pico';
</script>

<article>
	<header>
		<nav>
			<ul>
				<li><a href="/"><strong>Symphony Sapphires</strong></a></li>
			</ul>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/create">Create</a></li>
				<li><a href="/read">Read</a></li>
			</ul>
		</nav>
	</header>
	<main class="container"><slot /></main>
	<footer>Symphony Saphhires</footer>
</article>
