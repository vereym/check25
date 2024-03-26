<script>
  import Tasks from "$lib/components/tasks.svelte";
  import TimerCard from "$lib/components/timerCard.svelte";
  import * as Resizable from "$lib/components/ui/resizable";
</script>

<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
  check25
</h1>

<Resizable.PaneGroup
  direction="horizontal"
  class="min-h-[30rem] max-w-md rounded-lg border"
>
  <Resizable.Pane>
    <Tasks />
  </Resizable.Pane>
  <Resizable.Handle withHandle />
  <Resizable.Pane>
    <TimerCard />
  </Resizable.Pane>
</Resizable.PaneGroup>
