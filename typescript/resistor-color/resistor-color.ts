export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"]

export const colorCode = (color: string): number => {
  if (!COLORS.includes(color)) {
    throw new Error(`Invalid color: ${color}`);
  }
  return COLORS.indexOf(color);
}