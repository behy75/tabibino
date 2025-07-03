import { credentials, User } from "../constants/mock-users.constant";

export function findUserByCredentials(
  email?: string,
  password?: string
): User | null {
  return credentials.find(
    (u) => u.email === email && u.password === password
  ) || null;
}
