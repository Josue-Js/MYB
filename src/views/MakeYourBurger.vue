<script  setup lang="ts">
import { ref } from 'vue';

import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import MakeBurger from '../components/MakeBurger.vue';
import IngredientsListItem from '../components/IngredientsListItem.vue';
import IngredientInfo from '../components/IngredientInfo.vue';
import CheckoutPopup from '../components/CheckoutPopup.vue';

import ClockIcon from '../../public/clock.svg';
import OzIcon from '../../public/oz.svg';
import kcalIcon from '../../public/kcal.svg';

import BurgerIngredients from "../../burgerIngredients.json"



const burgerIngredients = BurgerIngredients.ingredients;

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


const CheckoutPopupIsVisible = ref(false);
const IngredientInfoModalIsVisible = ref(false);
const ingredientInfoSelected = ref<IBurgerIngredient>(burgerIngredients[0]);
const burgerIngredientsSelected = ref<IBurgerIngredient[]>([]);



function toggleModal() {
  CheckoutPopupIsVisible.value = !CheckoutPopupIsVisible.value
}

function requestOpenIngredientInfoModal(ingredient: IBurgerIngredient) {
  ingredientInfoSelected.value = ingredient;
  IngredientInfoModalIsVisible.value = true;
}
function requestCloseIngredientInfoModal() {
  IngredientInfoModalIsVisible.value = false;
}


function addIngredientOnBurger(ingredient: IBurgerIngredient) {
  burgerIngredientsSelected.value.splice(0, 0, ingredient);
}

function removeIngredientOnBurger(ingredient: IBurgerIngredient) {

  const indexOfItemToBeRemoved = burgerIngredientsSelected.value.findIndex(item => item.name === ingredient.name);

  burgerIngredientsSelected.value =
    burgerIngredientsSelected.value.filter((item, index) => {
      if (index !== indexOfItemToBeRemoved) {
        return item
      }
    }) as Array<IBurgerIngredient>
}
</script>

<template>
  <div id="pageMakeYourBurger">
    <NavBar />
    <main class="content">

      <h1 class="title">
        Make your Burger
      </h1>

      <MakeBurger :burgerIngredients="burgerIngredientsSelected" />

      <div class="summary">
        <h2>Summary</h2>
      </div>

      <div class="infoBar">
        <div class="time">
          <ClockIcon />
          <span>7 min</span>
        </div>
        <div class="oz">
          <OzIcon />
          <span>60 oz</span>
        </div>
        <div class="kcal">
          <kcalIcon />
          <span>249 kcal</span>
        </div>
      </div>

      <button type="button" class="alert">
        <p>+ Tomate ketchup</p>
        <span>0.2 oz</span>
      </button>

      <div class="burgerIngredients">
        <div v-for="ingredient in burgerIngredients">
          <IngredientsListItem :burger-ingredient="ingredient"
            :requestOpenIngredientInfoModal="requestOpenIngredientInfoModal"
            :addIngredientOnBurger="addIngredientOnBurger" :removeIngredientOnBurger="removeIngredientOnBurger"
            :burgerIngredientsSelected="burgerIngredientsSelected" />
        </div>
      </div>

      <div class="checkout">
        <p class="price">
          ${{
              burgerIngredientsSelected.length
                ? burgerIngredientsSelected.reduce((a, b) => a + b.price, 0).toFixed(2)
                : 12.31
          }}
        </p>
        <button type="button" class="buttonCheckout" @click="toggleModal">
          checkout
        </button>
      </div>
    </main>
    <Footer />
  </div>
  <IngredientInfo :visible="IngredientInfoModalIsVisible" :ingredient="ingredientInfoSelected"
    :requestCloseIngredientInfoModal="requestCloseIngredientInfoModal" />
  <CheckoutPopup :visible="CheckoutPopupIsVisible" :onRequestClose="toggleModal" />
</template>
 

<style lang="css">
#pageMakeYourBurger {
  min-height: 100vh;
}

#pageMakeYourBurger .content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem 1.5rem;
}



#pageMakeYourBurger .content .title {
  display: none;
  max-width: 302px;
  font-size: 4.5rem;
  font-weight: 700;
  text-transform: capitalize;
}


#pageMakeYourBurger .content .summary {
  display: none;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-titan-white);
  overflow-x: hidden;
}

#pageMakeYourBurger .content .summary>h1 {
  font-size: 2.25rem;
  font-weight: 600;
}


#pageMakeYourBurger .content .infoBar {
  max-width: 405px;
  width: 100%;
  margin: 0.75rem 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#pageMakeYourBurger .content .infoBar>div {
  display: flex;
  align-items: center;
}

#pageMakeYourBurger .content .infoBar>div>span {
  font-weight: 600;
  font-size: 0.875rem;
  margin-left: 8px;
}


#pageMakeYourBurger .content .alert {
  display: flex;
  align-items: center;
  padding: 1rem 4.1875rem;
  border: none;
  margin: 0 auto;
  border-radius: 20px;
  background-color: var(--color-red200);
}

#pageMakeYourBurger .content .alert p {
  font-size: 1rem;
  color: var(--color-danger);
}

#pageMakeYourBurger .content .alert span {
  padding: 0.375rem 0.4375rem;
  white-space: nowrap;
  border-radius: 19px;
  margin-left: 0.5rem;
  color: var(--color-white);
  background-color: var(--color-danger);
}


#pageMakeYourBurger .content .burgerIngredients {
  display: flex;
  width: 100%;
  gap: 2rem;
  margin: 0.75rem 0;
  overflow-x: scroll;
  user-select: none;
}

#pageMakeYourBurger .content .burgerIngredients::-webkit-scrollbar {
  display: none;
}


#pageMakeYourBurger .content .checkout {
  display: flex;
  align-items: center;
  flex-direction: column;
}

#pageMakeYourBurger .content .checkout .price {
  flex: 1;
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-primary);
}

#pageMakeYourBurger .content .checkout .buttonCheckout {
  border: none;
  padding: 1rem 7.9375rem;
  border-radius: 99px;
  font-weight: 600;
  color: var(--color-white);
  background: var(--color-primary);
  cursor: pointer;
  transition: filter 400ms;
}

#pageMakeYourBurger .content .checkout .buttonCheckout:hover {
  filter: brightness(0.9);
}


@media screen and (min-width: 1024px) {

  #pageMakeYourBurger .content {
    height: calc(100vh - 24px - 48px);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 0.5fr 239px 1fr 1fr;
    grid-template-areas:
      "title burger burger none"
      "title burger burger group"
      "title burger burger alert"
      "burgerIngredients burgerIngredients burgerIngredients burgerIngredients";
  }

  #pageMakeYourBurger .content .title {
    display: initial;
    grid-area: title;
  }

  #pageMakeYourBurger .content .makeBurger {
    grid-area: burger;
    justify-self: end;
  }

  #pageMakeYourBurger .content .summary {
    display: initial;
    grid-area: group;
    align-self: flex-start;
  }

  #pageMakeYourBurger .content .checkout {
    grid-area: group;
    flex-direction: row;
    justify-content: space-between;
  }

  #pageMakeYourBurger .content .infoBar {
    grid-area: group;
    margin: 0;
    align-self: flex-end;
    padding: 1rem;
    border-radius: 2rem;
    background: var(--color-titan-white);
  }

  #pageMakeYourBurger .content .alert {
    grid-area: alert;
    width: 100%;
    padding: 0;
    align-self: end;
    background: transparent;
  }

  #pageMakeYourBurger .content .burgerIngredients {
    width: fit-content;
    grid-area: burgerIngredients;
    align-self: flex-end;
    justify-self: center;
    margin: 0;
  }

  #pageMakeYourBurger .content .checkout .buttonCheckout {
    padding: 1rem 3.6875rem;
  }
}
</style>