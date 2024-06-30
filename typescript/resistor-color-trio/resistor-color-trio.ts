export function decodedResistorValue(colors: string[]): string {
  const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
  const PREFIXES = [
    { value: 1, prefix: '' },
    { value: 1e3, prefix: 'kilo' },
    { value: 1e6, prefix: 'mega' },
    { value: 1e9, prefix: 'giga' },
    { value: 1e12, prefix: 'tera' },
    { value: 1e15, prefix: 'peta' },
    { value: 1e18, prefix: 'exa' },
    { value: 1e21, prefix: 'zetta' },
    { value: 1e24, prefix: 'yotta' },
    { value: 1e27, prefix: 'ronna' },
    { value: 1e30, prefix: 'quetta' },
  ];
  
  const firstDigit = COLORS.indexOf(colors[0]);
  const secondDigit = COLORS.indexOf(colors[1]);
  const multiplier = COLORS.indexOf(colors[2]);

  if (firstDigit === -1 || secondDigit === -1 || multiplier === -1) {
    throw new Error('Invalid color code.');
  }

  const value = (firstDigit * 10 + secondDigit) * Math.pow(10, multiplier);

  let prefixIndex = 0;
  let adjustedValue = value;

  for (let i = PREFIXES.length - 1; i >= 0; i--) {
    if (adjustedValue >= PREFIXES[i].value) {
      adjustedValue = adjustedValue / PREFIXES[i].value;
      prefixIndex = i;
      break;
    }
  }

  return `${adjustedValue} ${PREFIXES[prefixIndex].prefix}ohms`;
}
