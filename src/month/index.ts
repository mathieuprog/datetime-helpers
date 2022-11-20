import { Temporal } from '@js-temporal/polyfill';
import DayOfWeek from '../day-of-week/DayOfWeek';

type Chronology = 'before' | 'during' | 'after';

interface MontGridDay {
  date: Temporal.PlainDate;
  chronology: Chronology;
}
type MonthGridWeek = MontGridDay[];
type MonthGrid = MonthGridWeek[];

export function getMonthGrid(yearMonth: Temporal.PlainYearMonth, firstDayOfWeek: DayOfWeek | number = DayOfWeek.Monday): MonthGrid {
  let date = getGridStartDate(yearMonth, firstDayOfWeek);

  const grid: MonthGrid = [];
  for (let i = 0; i < 6; ++i) {
    const week: MonthGridWeek = [];
    for (let j = 0; j < 7; ++j) {
      week.push({
        date,
        chronology:
          (Temporal.PlainYearMonth.compare(date.toPlainYearMonth(), yearMonth) === 0
            ? 'during'
            : (Temporal.PlainYearMonth.compare(date.toPlainYearMonth(), yearMonth) === 1
                ? 'after'
                : 'before'))
      });
      date = date.add({ days: 1 });
    }

    grid.push(week);
  }

  return grid;
}

function getGridStartDate(yearMonth: Temporal.PlainYearMonth, firstDayOfWeek: DayOfWeek | number) {
  const firstDateInMonth = yearMonth.toPlainDate({ day: 1 });

  const daysToSubtract = (firstDateInMonth.dayOfWeek + 7 - firstDayOfWeek) % 7;

  return firstDateInMonth.subtract({ days: daysToSubtract });
}
