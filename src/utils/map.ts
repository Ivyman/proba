import { ICoordinate, IUnit, ECoordinateName } from "@typing/unit";

export const countCoordinateAverage = (
    coordinates: ICoordinate[],
    name: ECoordinateName,
) =>
    coordinates.reduce(
        (averageLongitude: number, currentCoordinates: ICoordinate) =>
            averageLongitude + currentCoordinates[name],
        0,
    ) / coordinates.length;

export const getCoordinates = (units: IUnit[]) =>
    units.reduce(
        (acc: ICoordinate[], current: IUnit) => [
            ...acc,
            {
                id: current.id,
                latitude: current.address.latitude,
                longitude: current.address.longitude,
            },
        ],
        [],
    );
