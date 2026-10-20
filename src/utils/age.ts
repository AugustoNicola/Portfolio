/** A calendar date, kept as plain numbers so time zones can't shift the day. */
export interface CalendarDate {
  year: number
  /** 1-12 */
  month: number
  day: number
}

/** Parse "YYYY-MM-DD" without going through Date, which would read it as UTC midnight. */
export function parseCalendarDate(iso: string): CalendarDate {
  const [year, month, day] = iso.split('-').map(Number)
  return { year, month, day }
}

/** Whole years between a birth date and `today`, in the viewer's local calendar. */
export function ageOn(today: Date, birth: CalendarDate): number {
  const years = today.getFullYear() - birth.year
  const month = today.getMonth() + 1
  const hadBirthday = month > birth.month || (month === birth.month && today.getDate() >= birth.day)
  return hadBirthday ? years : years - 1
}
