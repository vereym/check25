<script>

    import { Button } from "$lib/components/ui/button";

    let time = 5;

    let countdown;

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
      countdown = setInterval(update, 1000);
    }

    function update() {
      if (time > 0) {
        time -= 1;
      } else {
        clearInterval(countdown);
        alert("time's up!")
      }
    }

</script>
<Button on:click={()=>startCountdown()}>Start</Button>
{convertTime(time)}
<Button on:click={()=>clearInterval(countdown)}>Stop</Button>
