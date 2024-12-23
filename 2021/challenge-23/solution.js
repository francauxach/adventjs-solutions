export function canReconfigure(from, to) {
  if (from.length !== to.length) {
    return false;
  }

  const checkerStore = {
    from: {},
    to: {}
  };

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i];
    const toLetter = to[i];

    if (
      (fromLetter in checkerStore.from && checkerStore.from[fromLetter] !== toLetter) ||
      (toLetter in checkerStore.to && checkerStore.to[toLetter] !== fromLetter)
    ) {
      return false;
    }

    checkerStore.from[fromLetter] = toLetter;
    checkerStore.to[toLetter] = fromLetter;
  }

  return true;
}
