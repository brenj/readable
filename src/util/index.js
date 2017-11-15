export default function getObjAsArray(obj) {
  return Object.keys(obj).map(id => obj[id]);
}
