import http from "./http.client";
import type { User } from "@/models/User";

export class AuthService {
  async register(userName: string, password: string): Promise<User> {
    const res = await http.post("/auth/register", {
      userName: userName,
      password: password,
    });
    return res.data;
  }
}
