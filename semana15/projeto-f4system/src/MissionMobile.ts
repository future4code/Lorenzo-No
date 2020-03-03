import { Mission } from "./Mission";
import { Teacher } from "./Teacher";
import { UserStudent } from "./UserStudent";

export class MobileClass extends Mission {
  constructor(
    public startDate: string,
    public endDate: string,
    public teachers: Teacher[],
    public students: UserStudent[],
    public classNumber: number
  ) { super(startDate, endDate, teachers, students) }
} 