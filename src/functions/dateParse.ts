export const dateParse = (sperator: string = '-') => (date:string):Date => {
  const res: number[] = date.split(sperator).map(item => (+item))
  return new Date(res[0], res[1] - 1, res[2])
}