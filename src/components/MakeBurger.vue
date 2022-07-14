<script setup lang="ts">
import { ref } from 'vue';
import BurgerBg from '../../public/burger_bg.svg';

type IBurgerIngredient = {
  name: string;
  image: {
    width: number;
    height: number;
    default: string;
    group?: string;
    offset: {
      top: number;
      bottom: number;
    }
  };
  kcal: number;
  oz: number;
  price: number;
}

type Props = {
  burgerIngredients: IBurgerIngredient[]
}

const props = defineProps<Props>();
const isMobile =  ref(false);
const bunBottomOffsetTop = isMobile ? 35 : 60;
const body = document.querySelector('body') as HTMLElement;


window.addEventListener('load', () => {
  if(body.clientWidth <= 500){
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
});
window.addEventListener('resize', () => {
  const bodyWidth = body?.clientWidth as number;
  if(bodyWidth <= 500){
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
});
</script>

<template>
  <div class="makeBurger">
    <BurgerBg class="burgerBg" />

    <div v-if="props.burgerIngredients.length" class="makingBurger">
      <div class="ingredients">
        <figure 
        class="ingredient" 
        v-for="(ingredient, index) in props.burgerIngredients" :style="`transform: translateY(${index === burgerIngredients.length - 1
        ?  (ingredient.image.offset.bottom + bunBottomOffsetTop)
        : (props.burgerIngredients.slice(index)
          .reduce((a, b) => a + b.image.offset.top + b.image.offset.bottom, 0) + bunBottomOffsetTop - ingredient.image.offset.top) *
          (isMobile ? (ingredient.image.height * 74 / 100) / ingredient.image.height : 1)
        }px); z-index: ${100 - index}`" 
        :data-ingredient="ingredient.name">
          <img :src="`/${ingredient.image.group ?
          ingredient.image.group
          : ingredient.image.default}`" :alt="ingredient.name"/>
        </figure>
      </div>

      <img src="/bun_bottom1.png" class="bunBottom" />
    </div>

    <div v-else class="defaultBurger">
      <img src="/burger.png" alt="burger" />
    </div>

  </div>
</template>

<style>
.makeBurger {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 325px;
  height: 312px;
  min-width: 289.35px;
  max-width: 602.35px;
  max-height: 595px;

}

.makeBurger .burgerBg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}

.makeBurger .makingBurger {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
}

.makeBurger .makingBurger .ingredients {
  max-width: 434px;
  width: 100%;
  height: 100%;
}

.makeBurger .makingBurger .ingredients .ingredient {
  display: flex;
  position: relative;
  width: 100%;
  height: fit-content;

}

.makeBurger .makingBurger .ingredients .ingredient>img {
  width: 100%;
}

.makeBurger .defaultBurger {
  width: 100%;
  height: 100%;
}

.makeBurger .defaultBurger>img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}


.makingBurger .bunBottom {
  max-width: 100%;
}


@media screen and (min-width: 500px) {
  .makeBurger {
    width: 100%;
    height: 450px;
  }
}

@media screen and (min-width: 1024px) {

  .makeBurger {
    width: 100%;
    height: 100%;
  }

  .makeBurger .makingBurger {
    padding: 0 5.5rem 0rem 0;
    align-items: flex-end;

  }

  .makeBurger .burgerBg {
    bottom: 24px;
    right: 36px;
  }
}
</style>