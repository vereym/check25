<script>
  import { Button } from "$lib/components/ui/button";
  import Tasks from "$lib/components/tasks.svelte";
  import TimerCard from "$lib/components/timerCard.svelte";
  import * as Resizable from "$lib/components/ui/resizable";
</script>

<header class="flex space-x-5 pb-2">
  <img src="check25Logo.svg" class="max-w-12" />
  <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    Check25
  </h1>
</header>

<Resizable.PaneGroup
  direction="horizontal"
  class="min-h-[30rem] max-w-[50rem] rounded-lg border"
>
  <Resizable.Pane>
    <Tasks />
  </Resizable.Pane>
  <Resizable.Handle withHandle />
  <Resizable.Pane class="grid grid-cols-1 place-content-center gap-4 m-3">
    <TimerCard />
    <a
      href="https://api.notion.com/v1/oauth/authorize?client_id=98410b92-65b5-4aef-87c0-5ffbee587edd&response_type=code&owner=user&redirect_uri=https%3A%2F%2Fcheck24hackathon.z6.web.core.windows.net%2F"
      ><Button>Connect Notion</Button></a
    >
  </Resizable.Pane>
</Resizable.PaneGroup>
