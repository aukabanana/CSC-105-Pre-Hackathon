export interface JwtPayload {
    id: string
    username: string
    password: string
}

declare global {
    namespace Express {
      interface Request {
        admin?: JwtPayload;
      }
    }
  }