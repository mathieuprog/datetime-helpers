import { expect, test } from 'vitest';
import { Temporal } from '@js-temporal/polyfill';
import { getMonthGrid } from '.';
import DayOfWeek from '../day-of-week/DayOfWeek';

test('getMonthGrid', () => {
  let yearMonth: Temporal.PlainYearMonth;
  let grid;

  yearMonth = Temporal.PlainYearMonth.from({ year: 2022, month: 10 });
  grid = getMonthGrid(yearMonth);

  expect(grid.length).toBe(6);
  expect(grid[0].length).toBe(7);

  expect(Temporal.PlainDate.compare(grid[0][0].date, Temporal.PlainDate.from('2022-09-26'))).toBe(0);
  expect(grid[0][0].dateIsoString).toBe('2022-09-26');
  expect(grid[0][0].chronology).toBe('before');

  yearMonth = Temporal.PlainYearMonth.from({ year: 2022, month: 10 });
  grid = getMonthGrid(yearMonth, DayOfWeek.Sunday);

  expect(Temporal.PlainDate.compare(grid[0][0].date, Temporal.PlainDate.from('2022-09-25'))).toBe(0);
  expect(grid[0][0].dateIsoString).toBe('2022-09-25');
  expect(grid[0][0].chronology).toBe('before');

  yearMonth = Temporal.PlainYearMonth.from({ year: 2022, month: 10 });
  grid = getMonthGrid(yearMonth, DayOfWeek.Saturday);

  expect(Temporal.PlainDate.compare(grid[0][0].date, Temporal.PlainDate.from('2022-10-01'))).toBe(0);
  expect(grid[0][0].dateIsoString).toBe('2022-10-01');
  expect(grid[0][0].chronology).toBe('during');
});
