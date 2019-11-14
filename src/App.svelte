<script>
  import "./HelloWorld.svelte";
  function callbackFunction(event) {
    console.log(`Notify fired! Detail: ${event.detail}`);
  }
</script>

<svelte:options tag="svelte-app" />

<hello-world on:notify={callbackFunction}>
  <p>This is some slotted content</p>
</hello-world>
