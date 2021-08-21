// promo
const PROMO_CODE = 'stevekaku';
const promoCodeDiscountInPercent = 20;
let isPromoCodeApplied = false;

// base prices
let basePrice = 1299;
let memoryCost = 0;
let storageCost = 0;
let deliveryCharge = 0;
let total = 1299;

// calculate and update total price
function updatePrice() {
  total = basePrice + memoryCost + storageCost + deliveryCharge;

  // get elements
  const basePriceElement = document.getElementById('base-price');
  const memoryCostElement = document.getElementById('extra-memory-cost');
  const storageCostElement = document.getElementById('extra-storage-cost');
  const deliveryChargeElement = document.getElementById('delivery-charge');
  const totalPriceElement = document.getElementById('total');

  // update inner text
  basePriceElement.innerText = basePrice;
  memoryCostElement.innerText = memoryCost;
  storageCostElement.innerText = storageCost;
  deliveryChargeElement.innerText = deliveryCharge;
  totalPriceElement.innerText = total;

  // update grand total when update prices
  let discount = 0;
  if (isPromoCodeApplied) {
    discount = getDiscount(total, promoCodeDiscountInPercent);
  }
  updateGrandTotal(total, discount);
}

// calculate and update grand total
function updateGrandTotal(total, discount) {
  const grandTotal = total - discount;

  // update inner html
  const grandTotalElement = document.getElementById('grand-total');
  grandTotalElement.innerText = grandTotal;
}

// apply promo code
function applyPromoCode(typedInput) {
  // if promo code matched
  if (typedInput == PROMO_CODE) {
    const discount = getDiscount(total, promoCodeDiscountInPercent);
    updateGrandTotal(total, discount);
    isPromoCodeApplied = true;
    return;
  }
  // if promo code doesn't match
  alert('Wrong Promo Code');
}

// calculate and return discount price
function getDiscount(total, discountInPercent) {
  const discount = (total / 100) * discountInPercent;
  return discount;
}

// event listeners
// memory cost
document.getElementById('memory-8gb').addEventListener('click', function () {
  memoryCost = 0;
  updatePrice();
});
document.getElementById('memory-16gb').addEventListener('click', function () {
  memoryCost = 180;
  updatePrice();
});

// storage cost
document.getElementById('storage-256gb').addEventListener('click', function () {
  storageCost = 0;
  updatePrice();
});
document.getElementById('storage-512gb').addEventListener('click', function () {
  storageCost = 100;
  updatePrice();
});
document.getElementById('storage-1tb').addEventListener('click', function () {
  storageCost = 180;
  updatePrice();
});

// shipping cost
document.getElementById('free-delivery').addEventListener('click', function () {
  deliveryCharge = 0;
  updatePrice();
});
document.getElementById('fast-delivery').addEventListener('click', function () {
  deliveryCharge = 20;
  updatePrice();
});

// apply promo code button event
document
  .getElementById('apply-promo-btn')
  .addEventListener('click', function () {
    // get users typed text
    const promoCodeInput = document.getElementById('promo-code-input');
    const typedInput = promoCodeInput.value;

    // promo code input can't be blank
    if (typedInput == '') {
      alert('Input is empty!!');
      return;
    }

    // apply promo code
    applyPromoCode(typedInput);

    // clear input
    promoCodeInput.value = '';
  });
