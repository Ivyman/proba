import { ICoordinate, ECoordinateName } from "@src/types/studio";

export const removeEmptyFields = (obj: any) =>
  Object.keys(obj).reduce((object, key) => {
    if (obj[key]) {
      object = { ...object, [key]: obj[key] };
    }
    return object;
  }, {});

export const countCoordinateAverage = (
  coordinates: ICoordinate[],
  name: ECoordinateName,
) =>
  coordinates.reduce(
    (averageLongitude: number, currentCoordinates: ICoordinate) =>
      averageLongitude + currentCoordinates[name],
    0,
  ) / coordinates.length;
