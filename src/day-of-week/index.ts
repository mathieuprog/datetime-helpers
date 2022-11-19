import DayOfWeek from './DayOfWeek';

interface LocalizedDayOfWeek {
  isoNumber: number;
  name: {
    narrow: string;
    short: string;
    long: string;
  }
};

const enumValueDateMap: Record<number, Date> = {
  [DayOfWeek.Monday]: new Date(Date.UTC(2000, 0, 3)),
  [DayOfWeek.Tuesday]: new Date(Date.UTC(2000, 0, 4)),
  [DayOfWeek.Wednesday]: new Date(Date.UTC(2000, 0, 5)),
  [DayOfWeek.Thursday]: new Date(Date.UTC(2000, 0, 6)),
  [DayOfWeek.Friday]: new Date(Date.UTC(2000, 0, 7)),
  [DayOfWeek.Saturday]: new Date(Date.UTC(2000, 0, 8)),
  [DayOfWeek.Sunday]: new Date(Date.UTC(2000, 0, 9))
};

const isoNumberEnumValueMap: Record<number, DayOfWeek> = {
  1: DayOfWeek.Monday,
  2: DayOfWeek.Tuesday,
  3: DayOfWeek.Wednesday,
  4: DayOfWeek.Thursday,
  5: DayOfWeek.Friday,
  6: DayOfWeek.Saturday,
  7: DayOfWeek.Sunday
};

export function getLocalizedDaysOfWeek(languageTag: string, first: DayOfWeek | number = DayOfWeek.Monday): LocalizedDayOfWeek[] {
  const date = enumValueDateMap[first];

  return [...Array(7)].map(() => {
    const isoNumber = date.getUTCDay() || 7;

    const result = {
      isoNumber,
      name: {
        narrow: new Intl.DateTimeFormat(languageTag, { weekday: 'narrow' }).format(date),
        short: new Intl.DateTimeFormat(languageTag, { weekday: 'short' }).format(date),
        long: new Intl.DateTimeFormat(languageTag, { weekday: 'long' }).format(date)
      }
    };

    date.setDate(date.getDate() + 1);

    return result;
  });
}

export function getLocalizedDayOfWeek(languageTag: string, dayOfWeek: DayOfWeek | number): LocalizedDayOfWeek {
  const date = enumValueDateMap[dayOfWeek];

  const isoNumber = date.getUTCDay() || 7;

  return {
    isoNumber,
    name: {
      narrow: new Intl.DateTimeFormat(languageTag, { weekday: 'narrow' }).format(date),
      short: new Intl.DateTimeFormat(languageTag, { weekday: 'short' }).format(date),
      long: new Intl.DateTimeFormat(languageTag, { weekday: 'long' }).format(date)
    }
  };
}
