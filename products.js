module.exports = {
  all(req, res) {
    return res.send('I return all the products.')
  },

  product(req, res) {
    return res.send('I return a chosen product.')
  },

  create(req, res) {
    return res.send({
      name: 'my product',
      price: 23,
      currency: 'usd'
    })
  },

  put(req, res) {
    return res.send('I edit.')
  },

  delete(req, res) {
    return res.send('I delete.')
  }
}