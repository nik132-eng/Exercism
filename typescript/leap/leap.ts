export function isLeap(num: number): Boolean {
  if(num%100==0) return num%400==0;
  return num%4==0;
}
