import { Mission } from "./Mission";
import { Teacher } from "./Teacher";
import { UserStudent } from "./UserStudent";

export class MissionFSW extends Mission {
  constructor(
    public startDate: string,
    public endDate: string,
    public teachers: Teacher[],
    public students: UserStudent[],
    public patron: string
  ) { super(startDate, endDate, teachers, students) }
}