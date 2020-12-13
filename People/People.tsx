interface IPerson {
    name: string;
  }
  interface IVillain extends IPerson {
    plot: string;
    scheme(): string;
  }
  interface IHero extends IPerson {
    talent: string;
  }
  interface ISuperPerson extends IPerson {
    power: string;
    alias: string;
  }
  class Hero implements IHero {
    name: string;
    talent: string;
    constructor(name: string, talent: string) {
        this.name = name;
        this.talent = talent;
    }
  }
  class Villain implements IVillain {
    name: string;
    plot: string;
    constructor(name: string, plot: string) {
        this.name = name;
        this.plot = plot;
    }
    scheme(): string {
        return `I’m ${this.name} and I’m gonna ${this.plot}`;
    }
  }
  class Henchman<T extends IVillain> implements IVillain {
    name: string;
    plot: string;
    boss: T;
    constructor(name: string, boss: T) {
        this.name = name;
        this.plot = boss.plot;
        this.boss = boss;
    }
    scheme(): string {
        return `As my boss says, “${this.boss.scheme()}“`;
    }
  }
  class Vigilante implements IHero, IVillain {
    name: string;
    talent: string;
    plot: string;
    constructor(name: string, talent: string, plot: string) {
        this.name = name;
        this.talent = talent;
        this.plot = plot;
    }
    scheme(): string {
        return `I’m ${this.name} and I’ll use my ${this.talent} in my plot to ${this.plot}`;
    }
  }
  class SuperVillain extends Villain implements ISuperPerson {
    power: string;
    alias: string;
    plot: string;
    constructor(name: string, plot: string, alias: string, power: string) {
        super(name, plot);
        this.alias = alias;
        this.power = power;
    }
    scheme(): string {
        return `MUAHAHA, I shall ${this.plot}`;
    }
  }
  class SuperHero extends Hero implements ISuperPerson {
    alias: string;
    power: string;
    constructor(name: string, talent: string, alias: string, power: string) {
        super(name, talent);
        this.alias = alias;
        this.power = power;
    }
  }
  let cptU = new Hero('Captain Underpants', ‘Wedgie power’);
  let superman = new SuperHero(‘Superman’, ‘Hide by putting on glasses.’, ‘Random guy with glasses.’, ‘All of them.’);
  let heWhoMustNotBeNamed = new SuperVillain(‘HWMNBN’, ‘kill mudbloods’, ‘Tommy Boy’, ‘Green Sparks’);
  let someRatBoy = new Henchman(‘Silver Hand Lad’, heWhoMustNotBeNamed);
  let robinHood = new Vigilante(‘R. Hood’, ‘Giving to the poor.’, ‘Rob the rich.’);
  // let people: Array<IPerson> = [cptU, superman, heWhoMustNotBeNamed, someRatBoy];
  let people: IPerson[] = [cptU, superman, heWhoMustNotBeNamed, someRatBoy, robinHood];
  let villains: IVillain[] = [heWhoMustNotBeNamed, someRatBoy, robinHood];
  let heroes: IHero[] = [cptU, superman, robinHood];
  console.log(someRatBoy.scheme());
  // We can see intellisense can only access the .name property of our objects because they are currently treated as IPerson instances
  people.forEach(person => console.log(person.name));
