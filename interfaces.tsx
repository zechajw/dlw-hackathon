export type Data = {
  date: string;
  value: {
    [key: string]: number;
  };
};

export type DataStore = {
  [key: string]: string | number;
};

export type FullData = {
  name1: string;
  name2: string;
  store: DataStore[];
};
