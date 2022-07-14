<script setup lang="ts">
import kcalIcon from '../../public/kcal.svg';
import clockIcon from '../../public/clock.svg';
import ozIcon from '../../public/oz.svg';


type IBurgerIngredient = {
  name: string;
  image: {
    default: string;
    group?: string;
  };
  kcal: number;
  oz: number;
  price: number;
}

type Props = {
  visible: boolean;
  ingredient: IBurgerIngredient;
  requestCloseIngredientInfoModal: () => void;
}


const props = defineProps<Props>();
</script>

<template>
  <div class="overlay" v-if="props.visible">

    <div @click="requestCloseIngredientInfoModal" class="areaClick"/>

    <div class="ingredientInfo">
      <span class="divider" />

      <div class="ingredient">
        <figure class="image">
          <img :src="`/${props.ingredient.image.default}`" alt="ingredient" />
        </figure>
        <span class="name">
          {{props.ingredient.name}}
        </span>
      </div>

      <div class="summary">
        <div class="info kcal">
          <kcalIcon />
          <span>{{props.ingredient.kcal}} kcal</span>
        </div>
        <div class="info time">
          <clockIcon />
          <span>2 min</span>
        </div>
        <div class="info oz">
          <ozIcon />
          <span>{{props.ingredient.oz}} oz</span>
        </div>
      </div>

      <button type="button" class="buttonAdd">
        add
      </button>
    </div>
  </div>
</template>

<style lang="css">
.overlay {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 1000;
}

.overlay  .areaClick {
  flex: 1;
}

.ingredientInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0 2rem;
  width: 100%;
  bottom: 0;
  border-radius: 40px 40px 0 0;
  background-color: var(--color-white);
}

.ingredientInfo .divider {
  width: 90px;
  height: 5px;
  border-radius: 99px;
  margin-bottom: 2.1875rem;
  background-color: var(--color-titan-white);
}

.ingredientInfo .ingredient {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
}

.ingredientInfo .ingredient  .image {
  width: 100%;
  padding: 0 1rem;
}
.ingredientInfo .ingredient  .image  img {
  width: 100%;
}

.ingredientInfo .ingredient .name {
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: capitalize;
}

.ingredientInfo .summary {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 1.625rem 0 2.0625rem;

}

.ingredientInfo .summary .info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ingredientInfo .summary .info > span {
  font-size: 0.875rem;
  font-weight: 600;
}

.ingredientInfo .buttonAdd {
  font-weight: 600;
  font-size: 1rem;
  color: var(--color-titan-white);
  text-align: center;
  padding: 1rem 9.25rem;
  background: var(--color-primary);
  border-radius: 99px;
  border: none;
  cursor: pointer;
}
</style>