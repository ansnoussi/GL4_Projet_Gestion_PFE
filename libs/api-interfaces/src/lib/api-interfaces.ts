export interface Message {
  message: string;
}

export interface Administrateur {
  login: string;
  password: string;
}

export interface Enseignant {
  id: string;
  email: string;
  login: string;
  password: string;
}

export interface Etudiant {
  id: string;
  email: string;
  login: string;
  password: string;
}

export interface Entreprise {
  id: string;
  nom: string;
  contact: string;
}

export interface PDF {
  id: string;
  fileName: string;
  lien: string;
}

export interface PFE {
  id: string;
  titre: string;
  rapport: PDF;
  encadrant: Enseignant;
  entreprise: Entreprise;
  etudiant: Etudiant;
  motsCles: string[];
  president: Enseignant;
}

export interface Soutenance {
  id: string;
  date: Date;
  salle: string;
  pfe: PFE;
}

export interface Session {
  id: string;
  anneeUniversitaire: string;
  president: Enseignant;
  soutenances: Soutenance[]
}