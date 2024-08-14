<script>
	// Target date and time: August 16, 2024, at 20:00:00
	const targetDate = new Date('2024-08-16T20:00:00');

	// Calculate the remaining time in seconds
	function getRemainingTime() {
		const now = new Date();
		return Math.floor((targetDate - now) / 1000);
	}

	let remainingTime = getRemainingTime();

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
	$: days = Math.floor(remainingTime / (24 * 3600));
	$: hours = Math.floor((remainingTime % (24 * 3600)) / 3600);
	$: minutes = Math.floor((remainingTime % 3600) / 60);
	$: seconds = remainingTime % 60;
</script>

<svelte:head>
	<title>Countdown to Binx Birthday - Song release</title>
	<meta name="description" content="Countdown timer to August 16, 2024, at 8 PM" />
</svelte:head>

<section>
	<h1>Countdown to August 16, 2024</h1>
	<div class="timer">
		<span>{days}d {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</span>
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
		font-size: 3em;
		font-weight: bold;
		animation: pulse 1s infinite;
	}

	@keyframes pulse {
		0% { transform: scale(1); }
		50% { transform: scale(1.05); }
		100% { transform: scale(1); }
	}
</style>
