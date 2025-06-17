import {
  LoginResponse,
  SessionInfo,
  TokenInfo,
} from "@/app/models/accounts/types";
// import NextAuth from "next-auth";
// import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  type Session = SessionInfo

  type User = LoginResponse
}

declare module "next-auth/jwt" {
  type JWT = TokenInfo
}