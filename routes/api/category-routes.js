const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
router.get('/', (req, res) => {
  // be sure to include its associated Products
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(categoryData => res.json(categoryData))
  .catch(err=>{
    console.log(err)
    res.status(500).json(err)
  })
});

// find one category by its `id` value
router.get("/:id", (req, res) => {
  // be sure to include its associated Products
  Category.findByPk(req.params.id,{
    include:[
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
    .then(dbCategory => {
      if(!dbCategory) {
        res.status(404).json({ message: 'No category found with that id!' });
        return;
      }
      res.json(dbCategory);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// create a new category
router.post("/", (req, res) => {
  Category.create(req.body)
    .then(newCategory => {
      res.json(newCategory);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// update a category by its `id` value
router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(updatedCategory => {
    if(!updatedCategory) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.json(updatedCategory);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

// delete a category by its `id` value
router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(delCategory => {
    if(!delCategory) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.json(delCategory);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

module.exports = router;
