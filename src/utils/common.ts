export const removeEmptyFields = (obj: any) =>
    Object.keys(obj).reduce((object, key) => {
        if (obj[key]) {
            object = { ...object, [key]: obj[key] };
        }
        return object;
    }, {});
