export interface TokenIF {
  _id: string;
  isAdmin: boolean;
  iat?: number;
}

export interface UserPayloadIF extends Request {
  user: TokenIF;
}
