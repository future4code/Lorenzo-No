import { MissionFSW } from "./MissionFSW";
import { Teacher, Specialties } from "./Teacher";
import { UserStudent } from "./UserStudent";

const sagan = new MissionFSW('01/01/1990', '30/06/1990', [], [], 'Sagan')
const prior = new UserStudent("Felipe Prior", 'sereclamar@prior', '01/01/2000', sagan)
const bocaRosa = new Teacher("Bianca Andrade", 'contato@boca.rosa', '01/01/1990', [Specialties.oop, Specialties.back])

console.log(prior)
console.log(bocaRosa)