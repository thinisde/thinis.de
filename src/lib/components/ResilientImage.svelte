<script lang="ts">
	type Props = {
		src?: string;
		alt: string;
		class?: string;
		loading?: 'eager' | 'lazy';
		decoding?: 'async' | 'auto' | 'sync';
		fallbackLabel?: string;
	};

	let {
		src = '',
		alt,
		class: className = '',
		loading = 'lazy',
		decoding = 'async',
		fallbackLabel = 'Image unavailable'
	}: Props = $props();

	let failed = $state(false);
</script>

{#if src && !failed}
	<img {src} {alt} {loading} {decoding} class={className} onerror={() => (failed = true)} />
{:else}
	<div class={`image-fallback ${className}`} role="img" aria-label={alt || fallbackLabel}>
		<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.7"
				d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
			/>
		</svg>
		<span class="image-fallback__label">{fallbackLabel}</span>
	</div>
{/if}
