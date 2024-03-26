<script>
  import Timer from "$lib/components/timer.svelte";
  // import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
</script>

<Card.Root>
  <Card.Header>
    <Card.Title>Timer</Card.Title>
  </Card.Header>
  <Card.Content class="grid place-content-center">
    <Timer />
  </Card.Content>
</Card.Root>
