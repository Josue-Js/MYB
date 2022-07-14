<script setup lang="ts">
import { defineProps } from 'vue';

import AddFillIcon from '../../public/add-fill.svg';
import MinusIcon from '../../public/minus.svg';


type IBurgerIngredient = {
  name: string;
  image: {
    height: number;
    width: number;
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
  burgerIngredient: IBurgerIngredient;
  burgerIngredientsSelected: IBurgerIngredient[];
  requestOpenIngredientInfoModal: (ingredient: IBurgerIngredient) => void;
  addIngredientOnBurger: (ingredient: IBurgerIngredient) => void;
  removeIngredientOnBurger: (ingredient: IBurgerIngredient) => void;
}

const props = defineProps<Props>();
</script>

<template>
  <figure class="burgerIngredient">

    <picture class="image" @click="() => requestOpenIngredientInfoModal(props.burgerIngredient)">
      <img :src="`/${props.burgerIngredient.image.default}`" draggable="false"/>
    </picture>

    <span class="name">
      {{ props.burgerIngredient.name }}
    </span>

    <div class="update">
      <button type="button" class="remove" @click="() => props.removeIngredientOnBurger(props.burgerIngredient)">
        <MinusIcon />
      </button>
      <span class="quantity">
        {{
            props.burgerIngredientsSelected.filter(
              item => item.name === props.burgerIngredient.name
            ).length
        }}
      </span>
      <button type="button" class="add" @click="() => props.addIngredientOnBurger(props.burgerIngredient)">
        <AddFillIcon />
      </button>
    </div>
  </figure>
</template>

<style lang="css">

.burgerIngredient {
  width: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  padding: 1.5rem 1.125rem;
  border: 1px solid var(--color-black-squeeze);
  background-color: var(--color-white);
  border-radius: 2rem;
}

.burgerIngredient .image {
  width: 104px;
  height: 59px;
}

.burgerIngredient .image>img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.burgerIngredient .name {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-black);
  text-transform: capitalize;
}


.burgerIngredient>div {
  display: flex;
  align-items: center;
  gap: 1.125rem;
}

.burgerIngredient>div>button {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: var(--color-titan-white);
}

.burgerIngredient>div>.quantity {
  font-size: 1.25rem;
  font-weight: 600;
}
</style>