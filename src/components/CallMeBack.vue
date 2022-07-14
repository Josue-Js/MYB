<template>
  <button class="callMeBack">
    <span>
      <img src="/phone.svg" alt="icons phone"/>
    </span>
    <p>Call Me back</p>
  </button>
</template>

<style>
.callMeBack {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 142px;
  height: 32px;
  border-radius: 99px;
  border: 0;
  background-color: var(--color-red-200);
}

.callMeBack > span {
  margin-right: 4px;
}

.callMeBack > p {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-danger);
  cursor: pointer;
}
</style>