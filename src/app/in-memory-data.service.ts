import { InMemoryDbService } from 'angular-in-memory-web-api';
 
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pets = [
      { id: 11, name: 'ルーナ' },
      { id: 12, name: 'エリザ' },
      { id: 13, name: 'マメ' },
      { id: 14, name: 'ムサシ' },
      { id: 15, name: 'ティサラ' },
      { id: 16, name: 'ボン' },
      { id: 17, name: 'サティー' },
      { id: 18, name: 'アルゴ' },
      { id: 19, name: 'ママニャー' },
      { id: 20, name: 'レイン' }
    ];
    return {pets};
  }
}