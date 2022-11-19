import { expect, test } from 'vitest';
import { getLocalizedDayOfWeek, getLocalizedDaysOfWeek } from '.';
import DayOfWeek from './DayOfWeek';

test('getLocalizedDaysOfWeek', () => {
  expect(getLocalizedDaysOfWeek('en', DayOfWeek.Wednesday)[0]).toEqual({
    isoNumber: 3,
    name: {
      narrow: 'W',
      short: 'Wed',
      long: 'Wednesday'
    }
  });

  expect(getLocalizedDaysOfWeek('en')[6]).toEqual({
    isoNumber: 7,
    name: {
      narrow: 'S',
      short: 'Sun',
      long: 'Sunday'
    }
  });

  expect(getLocalizedDaysOfWeek('fr')[0]).toEqual({
    isoNumber: 1,
    name: {
      narrow: 'L',
      short: 'lun.',
      long: 'lundi'
    }
  });

  expect(getLocalizedDaysOfWeek('en', DayOfWeek.Wednesday)[0]).toEqual({
    isoNumber: 3,
    name: {
      narrow: 'W',
      short: 'Wed',
      long: 'Wednesday'
    }
  });
});

test('getLocalizedDayOfWeek', () => {
  expect(getLocalizedDayOfWeek('en', DayOfWeek.Wednesday)).toEqual({
    isoNumber: 3,
    name: {
      narrow: 'W',
      short: 'Wed',
      long: 'Wednesday'
    }
  });
});
