// Generated by https://quicktype.io

export interface IGetAllCharacters {
    info:    Info;
    results: ICharacter[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  string;
}

export interface ICharacter {
    id:       number | string;
    name:     string;
    status:   StatusCharacter;
    species:  SpeciesCharacter;
    type:     string;
    gender:   GenderCharacter;
    origin:   LocationCharacter;
    location: LocationCharacter;
    image:    string;
    episode:  string[];
    url:      string;
    created:  string;
}

export enum GenderCharacter {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface LocationCharacter {
    name: string;
    url:  string;
}

export enum SpeciesCharacter {
    Alien = "Alien",
    Human = "Human",
}

export enum StatusCharacter {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}


// Generated by https://quicktype.io

export interface IGetCharacterByID {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  string;
}

export interface Location {
    name: string;
    url:  string;
}

// Generated by https://quicktype.io

export interface IGetCharacterByQueryName {
    info:    Info;
    results: ICharacter[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  string;
}

export interface ICharacter {
    id:       number | string;
    name:     string;
    Status:   Status;
    Species:  Species;
    Type:     Type;
    Gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  string;
}

export enum Gender {
    Male = "Male",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Species {
    Alien = "Alien",
    Cronenberg = "Cronenberg",
    Human = "Human",
    Humanoid = "Humanoid",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}

export enum Type {
    Empty = "",
    FishPerson = "Fish-Person",
    HumanWithAntennae = "Human with antennae",
    Robot = "Robot",
}

