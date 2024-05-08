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

/*reviews*/
export type ReviewWriteType = {
  content: string;
  imageUrls: string[];
}