const prefix = '@ignite-delivery:';

const storage = {
  setItem: (key: string, value: any) =>
    localStorage.setItem(`${prefix}${key}`, value),
  getItem: (key: string) => localStorage.getItem(`${prefix}${key}`),
};

export default storage;
