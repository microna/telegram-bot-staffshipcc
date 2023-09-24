function changeProductText(product) {
  return `Номер посилки:\n${product.trackNumber}\nОбщаяя сумма:\n${product.totalAmount}\n\nИнформация\n${product.info}\n\n${product.updatedAt}`;
}

module.exports = { changeProductText };
