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

/*cultures*/
export type NameType = {
  name: string;
};

/*reviews*/
export type ReviewWriteType = {
  content: string;
  imageUrls: string[];
}

/*cultures*/
export type CultureDetailType = {
  id: string;
  location: string;
  placeName: string;
  ticketPrice: string;
  isBookMarked: boolean;
  imageurl: string;
  cultureName: string;
  wantedPeople: string;
  content: string;
  phoneNumber: string;
  applicationStartDate: string;
  applicationEndDate: string;
  serviceStartDate: string;
  serviceEndDate: string;
  cultureLink: string;
  xCoordinate: string;
  yCoordinate: string;
}

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
