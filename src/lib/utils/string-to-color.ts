export default function stringToHslColor(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash) % 360;
  const s = 50 + (Math.abs(hash) % 50);
  const l = 40 + (Math.abs(hash) % 40);
  return `hsl(${h}, ${s}%, ${l}%)`;
}
