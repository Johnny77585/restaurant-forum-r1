const { Category } = require('../models')
const categoryController = {
  getCategories: (req, res, next) => {
    return Category.findAll({
      raw: true
    })
      .then(categories => res.render('admin/categories', { categories }))
  },
  postCategories: (req, res, next) => {
    const { name } = req.body
    if (!name) {
      throw new Error('Category name is required!')
    }
    Category.findOne({ where: { name } })
      .then(category => {
        if (category) {
          throw new Error('Category name already exists!')
        }
        return Category.create({ name })
      })
      .then(() => {
        res.redirect('/admin/categories')
      })
      .catch(err => next(err))
  }
}
module.exports = categoryController
