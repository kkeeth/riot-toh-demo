import { HEROES } from "@/components/global/heroes/mock-heroes";
import observable from "@riotjs/observable";

const heroService = {
  async getHeroes() {
    try {
      // 実際は以下のように実装するが，今回はモックで実装
      // const response = await fetch('https://api.example.com/heroes');
      // const heroes = await response.json();
      const heroes = HEROES;
      this.trigger('heroesUpdated', heroes)
    } catch (error) {
      console.error('Failed to fetch heroes:', error);
    }
  }
};

observable(heroService);

export default heroService;