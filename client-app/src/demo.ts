export interface Duck {
  name: string;
  numLegs: number;
  makeSound: (sound: string) => void;
}

const duck1: Duck = {
  name: "Duck1",
  numLegs: 2,
  makeSound: (sound) => console.log(sound),
};

const duck2: Duck = {
  name: "Duck2",
  numLegs: 2,
  makeSound: (sound) => console.log(sound),
};

export const ducks = [duck1, duck2];
