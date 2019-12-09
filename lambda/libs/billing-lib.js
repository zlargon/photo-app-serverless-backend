//less than 10 notes, $4/note
//11-100, $2/note
//>100, $1/note
//change this to smaller amount for images
export function calculateCost(storage) {
  const rate = storage <= 10
    ? 4
    : storage <= 100
      ? 2
      : 1;

  return rate * storage * 100;
}