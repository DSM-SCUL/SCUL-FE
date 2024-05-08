/*users*/
export type LoginType = {
  accountId: string;
  password: string;
};

export type SignupType = {
  name: string;
  accountId: string;
  password: string;
};

export type NameType = {
  name: string;
};

/*cultures*/
export type CultureListType = {
  id: string;
  location: string;
  placeName: string;
  ticketPrice: string;
  isBookMarked: boolean;
  imageUrl: string;
  cultureName: string;
  wantedPeople: string;
  isApplicationAble: boolean;
};

export type ListProps = {
  lists: CultureListType[];
};
