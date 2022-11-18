import { expect, test } from 'vitest';
import { getDaysOfWeek } from '.';
import DayOfWeek from './DayOfWeek';

test('getDaysOfWeek', () => {
  expect(getDaysOfWeek('en', DayOfWeek.Wednesday)[0]).toEqual({
    isoNumber: 3,
    enumValue: DayOfWeek.Wednesday,
    name: {
      narrow: 'W',
      short: 'Wed',
      long: 'Wednesday'
    }
  });

  expect(getDaysOfWeek('en')[6]).toEqual({
    isoNumber: 7,
    enumValue: DayOfWeek.Sunday,
    name: {
      narrow: 'S',
      short: 'Sun',
      long: 'Sunday'
    }
  });

  expect(getDaysOfWeek('fr')[0]).toEqual({
    isoNumber: 1,
    enumValue: DayOfWeek.Monday,
    name: {
      narrow: 'L',
      short: 'lun.',
      long: 'lundi'
    }
  });
});
