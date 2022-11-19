# datetime-helpers

`datetime-helpers` provides functions to work with dates and time.

## Day of week helpers

### `getLocalizedDayOfWeek`

```typescript
import { getLocalizedDayOfWeek } from 'datetime-helpers';

getLocalizedDayOfWeek('en')
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
// returns a list of the 7 days of week

getLocalizedDaysOfWeek('en-UK', DayOfWeek.Sunday)
// returns a list of the 7 days of week, starting from Wednesday
```

## Install

You can get `datetime-helpers` via [npm](http://npmjs.com).

```
npm install datetime-helpers
```
