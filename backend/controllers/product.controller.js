const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function readProduct(req, res){
    const product = await prisma.product.findMany({
        include: { categories: true },
      })
      res.json(product)
}
async function createProduct(req, res){
    const { ID, name, description, UnitsinStock,PicturePath, price, categoryID } = req.body
    const result = await prisma.product.create({
      data: {
        ID,
        name,
        description,
        PicturePath,
        UnitsinStock,
        price,
        categories: {create:  [{categoryID}, {categoryID}] },
      },
    })
    console.log(result);
    res.json(result)
}
async function updateProduct(req, res){
    const { id } = req.params
    const product = await prisma.product.update({
      where: { ID: Number(id) },
      data: {name: req.body.name,
        description: req.body.description,
        PicturePath: req.body.PicturePath,
        UnitsinStock: req.body.UnitsinStock,
        price: req.body.price,
      categories: {deleteMany: {}, create: [{categoryID: req.body.categoryID}, {categoryID: req.body.categoryID}]}
    },
    })
    res.json(product)
}
async function deleteProduct(req, res){
    const { id } = req.params
    const deleteCategories = await prisma.product.update({
      where: { ID: Number(id) },
      data: {
      categories: {deleteMany: {}}
    },
    });
    res.json(deleteCategories);
    const deleteProduct = await prisma.product.delete({
      where: {
        ID: Number(id),
      },
    })
      res.json(deleteProduct);
}
module.exports = {
    createProduct: createProduct,
    readProduct: readProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
};