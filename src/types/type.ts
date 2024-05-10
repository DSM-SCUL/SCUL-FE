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
  placeName: string | undefined;
}

/*cultures*/
export type CultureDetailType = {
  id: string;
  location: string;
  placeName: string;
  ticketPrice: string;
  isBookMarked: boolean;
  imageUrl: string;
  cultureName: string;
  wantedPeople: string;
  content: string;
  phoneNumber: string;
  isApplicationAble: boolean;
  applicationStartDate: string;
  applicationEndDate: string;
  serviceStartDate: string;
  serviceEndDate: string;
  serviceStartTime: string;
  serviceEndTime: string;
  cultureLink: string;
  xcoordinate: number;
  ycoordinate: number;
};

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

type a = "x" | "유아" | "장애인" | "노약자";

export type TagProps = {
  handleTagClick: (tag: a) => void;
};
