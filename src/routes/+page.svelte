<script>
	// Set initial time in seconds (48 hours = 48 * 60 * 60 seconds)
	let remainingTime = 48 * 60 * 60;

	// Timer logic to decrease time every second
	setInterval(() => {
		if (remainingTime > 0) {
			remainingTime--;
		}
	}, 1000);

	function formatTime(value) {
		return value < 10 ? `0${value}` : value;
	}

	// Compute hours, minutes, and seconds from remainingTime
	$: hours = Math.floor(remainingTime / 3600);
	$: minutes = Math.floor((remainingTime % 3600) / 60);
	$: seconds = remainingTime % 60;
</script>

<svelte:head>
	<title>48-Hour Countdown Timer</title>
	<meta name="description" content="A countdown timer starting from 48 hours" />
</svelte:head>

<section>
	<h1>48-Hour Countdown Timer</h1>
	<div class="timer">
		<span>{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</span>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background: radial-gradient(circle, rgba(36,36,36,1) 0%, rgba(0,0,0,1) 100%);
		color: #ffffff;
		font-family: 'Arial', sans-serif;
	}

	h1 {
		font-size: 2em;
		margin-bottom: 20px;
	}

	.timer {
		font-size: 4em;
		font-weight: bold;
		animation: pulse 1s infinite;
	}

	@keyframes pulse {
		0% { transform: scale(1); }
		50% { transform: scale(1.05); }
		100% { transform: scale(1); }
	}
</style>
