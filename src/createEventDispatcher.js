export function createEventDispatcher(getElement) {
  return function(type, detail) {
    getElement().dispatchEvent(
      new CustomEvent(type, {
        detail,
        bubbles: true,
        composed: true
      })
    );
  };
}
