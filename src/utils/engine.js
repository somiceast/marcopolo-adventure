export function checkConditions(conditions, state) {
  if (!conditions) return true;
  return Object.entries(conditions).every(
    ([key, val]) => state[key] === val
  );
}

export function applyEffects(effects, state) {
  if (!effects) return state;
  const newState = { ...state };
  Object.entries(effects).forEach(([key, val]) => {
    if (typeof val === "boolean") newState[key] = val;
    else newState[key] = (newState[key] || 0) + val;
  });
  return newState;
}