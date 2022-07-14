<script setup lang="ts">
import { ref } from 'vue';

import CallMeBack from './CallMeBack.vue';


const menuIsOpen = ref(false);

function toggleMenu() {
  menuIsOpen.value = !menuIsOpen.value;
}

function closeMenu() {
  menuIsOpen.value = false
}
</script>

<template>
  <nav class="navBar">

    <img src="/logo.png" alt="logo" class="logo" />

    <div class="navMenu" :class="{ active: menuIsOpen }">
      <p class="phoneNumber">8 800 437-87-22</p>
      <ul class="navLinkWrapper">
        <li class="navLink" @click="closeMenu">
          <router-link to="/">
            discover
          </router-link>
        </li>
        <li class="navLink" @click="closeMenu">
          <router-link to="/makeYourBurger">
            make your burger
          </router-link>
        </li>
      </ul>

      <div class="customer">
        <img src="/avatar.svg" />
        <span class="name">Anthony Thomas</span>
      </div>
    </div>


    <CallMeBack />

    <div class="wrapper">
      <button class="buttonMenu" @click="toggleMenu">
        <img v-if="!menuIsOpen" src="/menu.svg" alt="icon menu" />
        <img v-else src="/close.svg" alt="icon close menu" />
      </button>

      <p class="phoneNumber">8 800 437-87-22</p>

      <img src="/avatar.svg" class="avatar" />
    </div>

  </nav>
</template>
 


<style lang="css">
.navBar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem 1.5rem;

}

.navBar .logo {
  width: 48px;
  height: 48px;
}

.navBar .buttonMenu {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: var(--color-titan-white);
  cursor: pointer;
}

.navBar .navMenu {
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  height: calc(100vh - 104px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 3rem;
  opacity: 0;
  transition: opacity 600ms;
  visibility: hidden;
  background-color: var(--color-white);
  z-index: 100;
}

.navBar .navMenu.active {
  opacity: 1;
  visibility: visible;
}

.navBar .phoneNumber {
  font-weight: 500;
}

.navBar .navMenu .navLinkWrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.6875rem;
}

.navBar .navMenu .navLinkWrapper .navLink a {
  padding-bottom: 0.75rem;
  color: var(--color-black);
  text-transform: capitalize;
}

.navBar .navMenu .navLinkWrapper .navLink a.router-link-active {
  font-weight: 500;
  border-bottom: 2px solid var(--color-primary);
}

.navBar .navMenu .customer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.navBar .navMenu .customer .avatar {
  width: 58px;
  height: 58px;
}

.navBar .wrapper {
  display: flex;
  align-items: center;
}

.navBar .wrapper .phoneNumber,
.avatar {
  display: none;
  cursor: pointer;
}


@media screen and (min-width: 980px) {

  .navBar .logo {
    margin-right: 5rem;
  }

  .navBar .navMenu {
    position: initial;
    height: auto;
    flex: 1;
    opacity: 1;
    visibility: visible;
    padding-bottom: 0;
  }

  .navBar .navMenu .navLinkWrapper {
    width: 100%;
    justify-content: flex-start;
    flex-direction: row;
  }

  .navBar .navMenu .customer {
    display: none;
  }

  .navBar .navMenu .phoneNumber {
    display: none;
  }

  .navBar .wrapper .buttonMenu {
    display: none;
  }

  .navBar .wrapper .avatar {
    width: 58px;
    height: 58px;
  }

  .navBar .wrapper .phoneNumber,
  .avatar {
    display: initial;
  }

  .navBar .wrapper .phoneNumber {
    margin: 0 3.75rem;
  }
}
</style>
