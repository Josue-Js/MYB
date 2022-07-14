<template>
  <footer class="footer">
    <div class="left">
      <p>2022. Make Your Burger</p>
      <span class="privacyPolicy">Privacy Policy</span>
      <span class="line" />
      <span class="termsConditions">Terms & Conditions</span>
    </div>
    <div class="right">
      <img src="/visa.svg" alt="logo Visa" title="Visa" />
      <img src="/mastercard.svg" alt="logo Mastercard" title="Mastercard" />
      <img src="/google_play.svg" alt="logo Google play" title="Google play" />
      <img src="/apple_store.svg" alt="logo Apple store" title="Apple store" />
      <img src="/paypal.svg" alt="logo Paypal" title="Paypal" />
      <img src="/bitcoin.svg" alt="logo Bitcoin" title="Bitcoin" />
      <img src="/etherium.svg" alt="logo Etherium" title="Etherium" />
    </div>
  </footer>
</template>


<style>
.footer {
  display: none;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem;
}

.footer .left {
  display: flex;
  align-items: center;
}

.footer .left>p {
  font-size: 0.75rem;
  font-weight: 400;
  margin-right: 8px;
  color: var(--color-muted);
}

.footer .left .line {
  margin: 0 4px;
  width: 2px;
  height: 16px;
  background-color: var(--color-muted);
}

.footer .left .privacyPolicy,
.termsConditions {
  font-size: 0.75rem;
  color: var(--color-primary);
  cursor: pointer;
}


.footer .right {
  display: flex;
  gap: 8px;
}

.footer .right>img {
  object-fit: cover;
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .footer {
    display: flex;
  }
}
</style>