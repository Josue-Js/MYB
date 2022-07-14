<script setup lang="ts">
import { defineProps } from 'vue';

import UserIcon from '../../public/User.svg';
import MapIcon from '../../public/Map.svg';
import DeviceIcon from '../../public/Device.svg';
import FocusLineIcon from '../../public/focus-line.svg';
import CloseIcon from '../../public/close.svg';


type Props = {
  visible: boolean;
  onRequestClose: () => void;
}


const props = defineProps<Props>();

</script>

<template>
    <div class="modal" :class="{open: props.visible}">
      <div class="card">
        <header>
          <div class="title">
            <FocusLineIcon />
            <h1>Checkout</h1>
          </div>

          <CloseIcon @click="props.onRequestClose"/>
        </header>
        <content class="fieldGroup">
          <div class="field">
            <span class="icons">
              <UserIcon />
            </span>
            <div>
              <label for="yourName">Your Name</label>
              <input type="text" id="yourName" value="Jerome Porter" />
            </div>
          </div>

          <div class="field">
            <span class="icons">
              <DeviceIcon />
            </span>
            <div>
              <label for="phoneNumber">Phone Number</label>
              <input type="text" id="phoneNumber" value="(433) 577-1343" />
            </div>
          </div>
          <div class="field">
            <span class="icons">
              <MapIcon />
            </span>
            <div>
              <label for="shippingAddress">Shipping Address</label>
              <input type="text" id="shippingAddress" value="1038 Cinder Berry Turnabout" />
            </div>
          </div>
          <div class="field">
            <div>
              <label for="yourName">Time to Delivery</label>
              <select>
                <option>3:00 PM</option>
                <option>6:00 PM</option>
              </select>
            </div>
          </div>

        </content>
        <footer>
          <button type="button" class="cancel" @click="props.onRequestClose">
            cancel
          </button>
          <button type="button" class="checkout" @click="props.onRequestClose">
            checkout
          </button>
        </footer>
      </div>
    </div>
</template>

<style>
.modal {
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  padding: 0 1rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(10px);
  z-index: 100;
  background: var(--color-primary-ghost);
}

.modal.open {
  display: flex;
}

.modal .card {
  border-radius: 16px;
  background: var(--color-white);
}


.modal .card header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem 0.8125rem;
  border-bottom: 1px solid var(--color-titan-white);
}

.modal .card header .title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.modal .card header .title>h1 {
  font-size: 1.25rem;
  font-weight: 600;
}



.modal .card .fieldGroup {
  max-width: 608px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
}

.modal .card .fieldGroup .field {
  max-width: 280px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 8px;
  border: 1px solid var(--color-titan-white);
  border-radius: 16px;
}

.modal .card .fieldGroup .field .icon {
  display: flex;
}

.modal .card .fieldGroup .field>div {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.modal .card .fieldGroup .field>div>label {
  font-size: 0.75rem;
  color: var(--color-muted);

}

.modal .card .fieldGroup .field>div>input, select{
  flex: 1;
  font-weight: 600;
  font-size: 0.875rem;
  outline: none;
  border: none;
}

.modal .card .fieldGroup .field>div>select {
  border: none;
  outline: none;

}


.modal .card footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  padding: 1rem;
  border-top: 1px solid var(--color-titan-white);
}

.modal .card footer>button {
  width: 120px;
  height: 52px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  border: none;
  border-radius: 99px;
  cursor: pointer;
}

.modal .card footer>button.cancel {
  background: var(--color-titan-white);
  color: var(--color-primary);
}

.modal .card footer>button.checkout {
  background: var(--color-primary);
  color: var(--color-titan-white);
}
</style>