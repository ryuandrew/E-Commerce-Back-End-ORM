const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', (req, res) => {
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(tagData => res.json(tagData))
  .catch(err=>{
    console.log(err)
    res.status(500).json(err)
  })
});

// find a single tag by its `id`
router.get("/:id", (req, res) => {
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id,{
    include:[
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
    .then(dbTags => {
      res.json(dbTags);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// create a new tag
router.post("/", (req, res) => {
  Tag.create(req.body)
    .then(newTag => {
      res.json(newTag);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// update a tag's name by its `id` value
router.put("/:id", (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(updatedTag => {
    res.json(updatedTag);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

// delete on tag by its `id` value
router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(delTag => {
    res.json(delTag);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});


module.exports = router;