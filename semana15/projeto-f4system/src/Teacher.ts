import { User } from "./User";

export enum Specialties {
  html = 'HTML',
  css = 'CSS',
  js = 'JavaScript',
  react = 'React',
  redux = 'Redux',
  back = 'Backend',
  oop = 'Programação Orientada a Objetos'
}

export class Teacher implements User {
  constructor(public name: string,
    public email: string,
    public birthday: string,
    public specialty: Specialties[]
  ) { }
}