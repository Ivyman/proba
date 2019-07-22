const statuses = ["IDLE", "FETCHING", "SUCCESS", "ERROR"] as const;

export type ApiStatus = typeof statuses[number];

const apiStatuses: { [key in ApiStatus]?: key } = statuses.reduce(
  (enumObject, status) => ({
    ...enumObject,
    [status]: status,
  }),
  {},
);

export default apiStatuses;
