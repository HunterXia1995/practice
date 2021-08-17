
export default function count (preState = 0, action) {
  const { type, data } = action
  if (type === 1) {
    console.log(preState);
    return data + preState
  }
  return preState
}