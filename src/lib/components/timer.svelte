<script>

    import { Button } from "$lib/components/ui/button";

    const workingTime = 25;
    const breakTime = 5;

    let state = 'Working';

    let time = workingTime * 60;

    let countdown;

    let isStarted = false;

    function convertTime(x) {
      let minutes = Math.floor(x/60);
      let seconds = x % 60;
      if (seconds < 10) {
        return "" + minutes + " : 0" + seconds
      } else {
        return "" + minutes + " : " + seconds
      }
    }

    function startCountdown() {
        if (!isStarted) {
            isStarted = true;
            countdown = setInterval(updateTimer, 1000);
        }
    }

    function stopCountdown() {
        if (isStarted) {
            isStarted = false;
            clearInterval(countdown);
        }
    }

    function updateTimer() {
      if (time > 0) {
        time -= 1;
      } else {
        switch (state) {
            case 'Working':
                alert("Time for a break!");
                time = breakTime * 60 + 1;
                state = 'ShortBreak';
                break;
            case 'ShortBreak':
                alert("Back to work!");
                time = workingTime * 60 + 1;
                state = 'Working';
        }
      }
    }

</script>
<Button on:click={()=>startCountdown()}>Start</Button>
{convertTime(time)}
<Button on:click={()=>stopCountdown()}>Stop</Button>
