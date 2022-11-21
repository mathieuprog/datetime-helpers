# datetime-helpers

`datetime-helpers` provides functions to work with dates and time.

## Day of week helpers

### `getLocalizedDayOfWeek`

```typescript
import { getLocalizedDayOfWeek } from 'datetime-helpers';

getLocalizedDayOfWeek('en', DayOfWeek.Wednesday)
// returns the iso number and localized day of week name
// for English language

/*
{
  isoNumber: 3,
  name: {
    narrow: 'W',
    short: 'Wed',
    long: 'Wednesday'
  }
}
*/
```

### `getLocalizedDaysOfWeek`

```typescript
import { DayOfWeek, getLocalizedDaysOfWeek } from 'datetime-helpers';

getLocalizedDaysOfWeek('en-UK')
// returns a list of the 7 days of week, starting from Monday

getLocalizedDaysOfWeek('en-UK', DayOfWeek.Sunday)
// returns a list of the 7 days of week, starting from Sunday
```

## Month helpers

### `getMonthGrid`

```typescript
import { DayOfWeek, getMonthGrid } from 'datetime-helpers';

getMonthGrid(Temporal.PlainYearMonth.from({ year: 2022, month: 10 }))
// returns the month grid for October 2022, with weeks starting on Monday
// the grid is a 2-dimensional array (6 rows x 7 days of week)

getMonthGrid(Temporal.PlainYearMonth.from({ year: 2022, month: 10 }), DayOfWeek.Sunday)
// returns the month grid for October 2022, with weeks starting on Sunday
```

## Install

You can get `datetime-helpers` via [npm](http://npmjs.com).

```
npm install datetime-helpers
```
