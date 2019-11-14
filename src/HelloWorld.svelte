<script>
  // https://github.com/sveltejs/svelte/issues/3119
  import { createEventDispatcher } from "./createEventDispatcher";

  let el;
  const dispatch = createEventDispatcher(() => el);

  const sayHello = function() {
    dispatch("notify", `Hello ${name}!`);
  };

  export let name = "world";
  export { dispatch };
</script>

<svelte:options tag="hello-world" />

<div bind:this={el}>
  <h1>Hello {name}!</h1>
  <button on:click={sayHello}>Say Hello</button>
  <slot />
</div>
