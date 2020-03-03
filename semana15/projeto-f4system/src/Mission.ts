import { UserStudent } from "./UserStudent";
import { Teacher } from "./Teacher";

export abstract class Mission {
  constructor(
    public startDate: string,
    public endDate: string,
    public teachers: Teacher[],
    public students: UserStudent[]
  ) { }
}