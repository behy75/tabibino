import { credentials } from "../constants/mock-users.constant";
import { UserDto } from "../models/dto/user.Dto";

export function findUserByCredentials(
  email?: string,
  password?: string
): UserDto | null {
  return (
    credentials.find((u) => u.email === email && u.password === password) ||
    null
  );
}
