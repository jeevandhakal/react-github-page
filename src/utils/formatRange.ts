/** Human-readable span for experience or project dates. */
export function formatRange(start: string, end: string | null) {
  return end ? `${start} — ${end}` : `${start} — Present`
}
