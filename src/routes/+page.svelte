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

	let previousValues = {
		days,
		hours,
		minutes,
		seconds
	};

	$: previousValues = { days, hours, minutes, seconds };
</script>

<svelte:head>
	<title>Countdown to Binx Birthday - Song Release</title>
	<meta name="description" content="Countdown timer to Binx Birthday - Song Release (late) :D " />
</svelte:head>

<section>
	<h1>Countdown timer to Binx Birthday - Song Release (late) :D</h1>
	<div class="timer">
		<div class="time-unit">
			<span class:falling={days !== previousValues.days}>{days}d</span>
		</div>
		<div class="time-unit">
			<span class:falling={hours !== previousValues.hours}>{formatTime(hours)}:</span>
		</div>
		<div class="time-unit">
			<span class:falling={minutes !== previousValues.minutes}>{formatTime(minutes)}:</span>
		</div>
		<div class="time-unit">
			<span class:falling={seconds !== previousValues.seconds}>{formatTime(seconds)}</span>
		</div>
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
		text-align: center;
	}

	.timer {
		display: flex;
		font-size: 4em;
		font-weight: bold;
	}

	.time-unit {
		position: relative;
		overflow: hidden;
		width: 3ch;
		text-align: center;
	}

	.time-unit span {
		display: block;
		transition: transform 0.5s ease-out, opacity 0.5s ease-out;
	}

	.time-unit span.falling {
		transform: translateY(-100%);
		opacity: 0;
	}

	.time-unit span:not(.falling) {
		transform: translateY(0);
		opacity: 1;
	}
</style>
