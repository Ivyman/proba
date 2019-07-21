const types = [
  "STUDIO_LIST_SET",
  "STUDIO_LIST_ADD",
  "STUDIO_POPULATED_STATUS_SET",
  "STUDIO_RESET",
] as const;

export type StudioActionTypes = typeof types[number];

const actionTypes: { [key in StudioActionTypes]?: key } = types.reduce(
  (enumObject, actionType) => ({ ...enumObject, [actionType]: actionType }),
  {},
);

export default actionTypes;
