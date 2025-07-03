import { UserDto } from "../models/dto/user.Dto";

export const credentials: UserDto[] = [
  {
    id: '1',
    name: 'Admin',
    email: 'admin@tabibino.com',
    password: 'admin',
    role: 'admin',
  },
  {
    id: '2',
    name: 'Doctor',
    email: 'doctor@tabibino.com',
    password: 'doctor',
    role: 'doctor',
  },
  {
    id: '3',
    name: 'Patient',
    email: 'patient@tabibino.com',
    password: 'patient',
    role: 'patient',
  },
] as const;

