export function Enum(vals) {
  let result = {};
  vals.forEach(val => {
    result[val] = val;
  });
  return result;
}
