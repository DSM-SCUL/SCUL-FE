
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
export type CultureDetailType = {
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