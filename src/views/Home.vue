<script  setup lang="ts">

import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

import { useRouter } from 'vue-router';

const router = useRouter();


function handleClick() {
  router.push('/makeYourBurger');
}

</script>

<template>
  <div id="pageHome">
    <NavBar />
    <main class="content">
      <h1 class="title">
        Make your burger
      </h1>
      <p class="description">
        Parallax screen. Burger ingredients and emojis moving depending on the position of the mouse pointer.
      </p>
      <div class="burger">
        <picture>
          <source media="(min-width:768px)" srcset="/burger_large.png">
          <source media="(max-width:768px)" srcset="/burger_small.png">
          <img src="/burger_small.png" alt="burger" />
        </picture>

        <button type="button" class="buttonMakeBurger" @click="handleClick">
          <span>Make burger</span>
        </button>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style>
#pageHome {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}

#pageHome .content {
  padding: 1.5rem 1.5rem 0;
}

#pageHome .content .title {
  font-size: 3rem;
  font-weight: 600;
  line-height: 57px;
  text-transform: capitalize;
}

#pageHome .content .description {
  font-size: 1.25rem;
  margin: 1rem 0;
  max-width: 615px;
}

#pageHome .content .burger {
  min-width: 280px;
  position: relative;
  margin: 0 auto;
}


#pageHome .content .burger>picture>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#pageHome .content .buttonMakeBurger {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -5%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--color-primary);
  border: none;
  cursor: pointer;
}

#pageHome .content .buttonMakeBurger>span {
  font-size: 1rem;
  font-weight: 800;
  color: var(--color-white);
  max-width: 98px;
}


@media screen and (min-width: 768px) {

  #pageHome .content {
    display: flex;
    flex: 1;
    gap: 4rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  #pageHome .content .title {
    max-width: 245px;
    font-size: 4.5rem;
    line-height: 80px;
    font-weight: 700;
  }

  #pageHome .content .description {
    display: none;
  }

  #pageHome .content .burger {
    margin: 0 0;
  }

  #pageHome .content .burger>picture>img {
    display: flex;
    max-width: 973px;
    max-height: 720px;
  }

  #pageHome .content .burger>picture>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  #pageHome .content .buttonMakeBurger {
    width: 180px;
    height: 180px;
    left: -5%;
    top: 60%;
    transform: translate(-0%, -0%);
    transition: transform 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  #pageHome .content .buttonMakeBurger:hover {
    transform: scale(1.1);
  }

  #pageHome .content .buttonMakeBurger>span {
    font-size: 1.5rem;
  }
}
</style>