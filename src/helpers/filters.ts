export const createCityFields = (obj: any) =>
  obj.reduce(
    (acc: any, next: any) => ({
      ...acc,
      [next.key]: false,
    }),
    {} as { [key: string]: boolean },
  );
