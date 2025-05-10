export const selectFilter = state => {
    return typeof state.filters === 'string' ? state.filters : '';
  };