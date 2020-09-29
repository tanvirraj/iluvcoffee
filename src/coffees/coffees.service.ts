import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeesService {
  private coffees = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 2,
      name: 'Mocha Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find(item => item.id === +id);
    return coffee;
  }

  create(coffee) {
    this.coffees.push(coffee);
  }
}
