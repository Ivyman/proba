import { ICoordinate, IStudio, ECoordinateName } from "@src/types/studio";

export const countCoordinateAverage = (
    coordinates: ICoordinate[],
    name: ECoordinateName,
) =>
    coordinates.reduce(
        (averageLongitude: number, currentCoordinates: ICoordinate) =>
            averageLongitude + currentCoordinates[name],
        0,
    ) / coordinates.length;

export const getCoordinates = (studios: IStudio[]) =>
    studios.reduce(
        (acc: ICoordinate[], current: IStudio) => [
            ...acc,
            {
                id: current.id,
                latitude: current.address.latitude,
                longitude: current.address.longitude,
            },
        ],
        [],
    );
