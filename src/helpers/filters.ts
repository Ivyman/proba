export const reduceUncheckedCities = (obj: any) =>
  Object.keys(obj).filter(key => obj[key]);

export const createCityField = (obj: any) =>
  obj.reduce(
    (acc: any, next: any) => ({
      ...acc,
      [next.key]: false,
    }),
    {} as { [key: string]: boolean },
  );
