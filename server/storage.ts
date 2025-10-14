// Storage interface for the recommendation system
// This app doesn't need user storage, so we keep it minimal

export interface IStorage {
  // No storage methods needed for this stateless recommendation app
}

export class MemStorage implements IStorage {
  constructor() {}
}

export const storage = new MemStorage();
