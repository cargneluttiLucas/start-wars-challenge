export class StartShips {
  public name: string;
  public model: string;
  public manufacturer: string;
  // tslint:disable-next-line: variable-name
  public cost_in_credits: string;
  public length: string;
  // tslint:disable-next-line: variable-name
  public max_atmosphering_speed: string;
  public crew: string;
  public passengers: string;
  // tslint:disable-next-line: variable-name
  public cargo_capacity: string;
  public consumables: string;
  // tslint:disable-next-line: variable-name
  public hyperdrive_rating: string;
  public MGLT: string;
  // tslint:disable-next-line: variable-name
  public starship_class: string;
  public pilots: string;
  public films: string;
  public created: string;
  public edited: string;
  public url: string;


  constructor(
    name?: string,
    model?: string,
    manufacturer?: string,
    costInCcredits?: string,
    length?: string,
    maxAtmospheringSpeed?: string,
    crew?: string,
    passengers?: string,
    cargoCapacity?: string,
    consumables?: string,
    hyperdriveRating?: string,
    MGLT?: string,
    starshipClass?: string,
    pilots?: string,
    films?: string,
    created?: string,
    edited?: string,
    url?: string
  ) {
    this.name = name;
    this.model = model;
    this.manufacturer = manufacturer;
    // tslint:disable-next-line: variable-name
    this.cost_in_credits = costInCcredits;
    this.length = length;
    // tslint:disable-next-line: variable-name
    this.max_atmosphering_speed = maxAtmospheringSpeed;
    this.crew = crew;
    this.passengers = passengers;
    // tslint:disable-next-line: variable-name
    this.cargo_capacity = cargoCapacity;
    this.consumables;
    // tslint:disable-next-line: variable-name
    this.hyperdrive_rating: string;
    this.MGLT: string;
    // tslint:disable-next-line: variable-name
    this.starship_class: string;
    this.pilots: string;
    this.films: string;
    this.created: string;
    this.edited: string;
    this.url: string;
}
}
