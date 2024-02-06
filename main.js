const menu = {
  _meal: '',
  _price: 0,

  set meal (mealToCheck) {
  if (typeof mealToCheck === 'String') {
    return this._meal = mealToCheck
  }
}
}


