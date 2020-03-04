export const removeEmptyFields = <T>(obj: any) =>
    Object.keys(obj).reduce((object, key) => {
        if (obj[key]) {
            object = { ...object, [key]: obj[key] };
        }
        return object;
    }, {} as T);
