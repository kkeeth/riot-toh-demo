import { HEROES } from "@/components/global/heroes/mock-heroes";
import observable from '@riotjs/observable';

import messageService from "@/services/message.service";

const heroService = {
  async getHeroes() {
    try {
      // 実際は以下のように実装するが，今回はモックで実装
      // const response = await fetch('https://api.+xample.com/heroes');
      // const heroes = await response.json();
      const heroes = HEROES;
      messageService.add('HeroService: fetched heroes');
      this.trigger('heroesUpdated', heroes)
    } catch (error) {
      console.error('Failed to fetch heroes:', error);
    }
  }
};

observable(heroService);

export default heroService;