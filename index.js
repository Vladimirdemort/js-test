function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
const totalPrice = orderedQuantity * pricePerDroid + deliveryFee
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

  // Change code above this line
  return message;
}
makeOrderMessage(2, 100, 50)
console.log(makeOrderMessage)