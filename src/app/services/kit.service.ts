import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KitService {

  constructor() { }

  // We should access to a real database, but for now, we are going to work with the following arrays

  getUsages(): string[] {
    return [
      'Saliva',
      'Blood',
      'Droppings'
    ];
  }

  getSizes(): string[] {
    return [
      'Small',
      'Medium',
      'Large'
    ];
  }

}
