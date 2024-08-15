<script>
  // Target date and time: August 16, 2024, at 20:00:00
  const targetDate = new Date('2024-08-15T19:10:00');

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

  let prevDays = days;
  let prevHours = hours;
  let prevMinutes = minutes;
  let prevSeconds = seconds;

  let daysAnimation = "";
  let hoursAnimation = "";
  let minutesAnimation = "";
  let secondsAnimation = "";

  $: {
    if (days !== prevDays) {
      daysAnimation = "falling";
      setTimeout(() => daysAnimation = "", 500);
      prevDays = days;
    }
    if (hours !== prevHours) {
      hoursAnimation = "falling";
      setTimeout(() => hoursAnimation = "", 500);
      prevHours = hours;
    }
    if (minutes !== prevMinutes) {
      minutesAnimation = "falling";
      setTimeout(() => minutesAnimation = "", 500);
      prevMinutes = minutes;
    }
    if (seconds !== prevSeconds) {
      secondsAnimation = "falling";
      setTimeout(() => secondsAnimation = "", 500);
      prevSeconds = seconds;
    }
  }

  // Function to trigger WAV file download
  function downloadWavFile() {
    const fileUrl = 'https://drive.google.com/uc?export=download&id=1ghYZohqGUez4dbFsYJ4cXPrrkcdH9AL-';
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Binx_Birthday_Song_Release.wav'; // The name of the file when downloaded
    a.click();
  }

  // Function to trigger MP3 file download
  function downloadMp3File() {
    const fileUrl = 'https://drive.google.com/uc?export=download&id=13uRtqCBPMGK-UrtvtRWwkF761E_VIZCi';
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Binx_Birthday_Song_Release.mp3'; // The name of the file when downloaded
    a.click();
  }

  // Boolean to check if the countdown is over
  $: countdownFinished = remainingTime <= 0;
</script>

<svelte:head>
  <title>Countdown to Binx Birthday - Song Release</title>
  <meta name="description" content="Countdown timer to Binx Birthday - Song Release" />
</svelte:head>

<section>
  <h1>Countdown timer to Binx Birthday - Song Release</h1>
  <div class="timer" style:display={countdownFinished ? 'none' : 'flex'}>
    <div class="time-unit">
      <span class={daysAnimation}>{days}d</span>
    </div>
    <div class="time-unit">
      <span class={hoursAnimation}>{formatTime(hours)}:</span>
    </div>
    <div class="time-unit">
      <span class={minutesAnimation}>{formatTime(minutes)}:</span>
    </div>
    <div class="time-unit">
      <span class={secondsAnimation}>{formatTime(seconds)}</span>
    </div>
  </div>

  {#if countdownFinished}
    <h2 class="enjoy-message">ENJOY MADAFAKA</h2>
    <button class="download-button" on:click={downloadWavFile}>Download WAV File</button>
    <button class="download-button" on:click={downloadMp3File}>Download MP3 File</button>
  {/if}
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

  .download-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1em;
    color: #ffffff;
    background-color: #ff6600;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-right: 10px;
  }

  .download-button:hover {
    background-color: #ff3300;
  }

  .enjoy-message {
    font-size: 2em;
    margin-bottom: 20px;
    color: #ff6600;
    text-align: center;
  }
</style>
