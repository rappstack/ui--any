export const nl = `\n`
export function lines_(...line_a1:(string|string[])[]) {
  return line_a1.join(nl)
}
