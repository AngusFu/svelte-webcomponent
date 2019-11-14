import { onMount } from "svelte";

export function createEventDispatcher(getEl) {
  let el = null;

  onMount(() => {
    el = getEl();
  });

  return function(type, detail) {
    el &&
      el.dispatchEvent(
        new CustomEvent(type, {
          detail,
          bubbles: true,
          composed: true
        })
      );
  };
}
