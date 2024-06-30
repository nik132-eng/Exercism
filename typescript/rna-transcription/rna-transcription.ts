// G -> C
// C -> G
// T -> A
// A -> U
export function toRna(str: string): string {
  const mapping: { [key: string]: string } = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };

  let rna = '';
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if(char!=='G' && char!=='C' && char!='T' && char!='A') throw new Error('Invalid input DNA.');
    rna += mapping[char] || '';
  }

  return rna;
}
