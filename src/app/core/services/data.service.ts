import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  cardData = [
    {
      title: 'Card A: Montains and Lake',
      imageUrl:
        'https://stackblitz.com/files/nevadaway-ng-learning/github/Nevada-Way/ng-learning/20230529-udm-sg-show-cards/src/assets/1.png',
      websiteUrl: '@the-lakeside-1',
      textContent: 'So relaxing landscape. A nice plpace to camp outside.',
    },
    {
      title: 'Card B: Bicycles',
      imageUrl:
        'https://stackblitz.com/files/nevadaway-ng-learning/github/Nevada-Way/ng-learning/20230529-udm-sg-show-cards/src/assets/b.png',
      websiteUrl: '@the bicycle-demo-b',
      textContent: 'This is a bicycle that is suited for competitions.',
    },
    {
      title: 'Card C: Bloom Tree',
      imageUrl:
        'https://stackblitz.com/files/nevadaway-ng-learning/github/Nevada-Way/ng-learning/20230529-udm-sg-show-cards/src/assets/3.png',
      websiteUrl: '@pink-blossom-tree-c',
      textContent:
        'When the time comes the trees blossom in a soft pink flowery display.',
    },
  ];

  getAllCards(){
    return this.cardData;
  }
  // Card name
  // - image url
  // - website link url
  // - Text content describing card
}
