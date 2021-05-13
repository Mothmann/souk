const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function readProduct(req, res){
    const product = await prisma.product.findMany({
        include: { categories: true },
      })
      res.json(product)
}
async function createProduct(req, res){
    const { ID, name, description, UnitsinStock,PicturePath, price, categories } = req.body
    const result = await prisma.product.create({
      data: {
        ID: 3,
        name: 'erfertfe',
        description: 'rtertfertfe',
        PicturePath: 'tgetetg',
        UnitsinStock: 500,
        price: 100,
        categories: {create:  [{ categoryID: 1}, {categoryID: 2}]  },
      },
    })
    console.log(result);
    res.json(result)
}
async function updateProduct(req, res){
    const { id } = req.params
    const product = await prisma.product.update({
      where: { ID: Number(id) },
      data: {name: 'idk',
      categories: {deleteMany: {}, create: [{categoryID: 3}, {categoryID: 4}]}
    },
    })
    res.json(product)
}
async function deleteProduct(){
    const { id } = req.params
    const deleteCategories = prisma.categoriesOnProducts.deleteMany({
      where: {
        productID: Number(id),
      },
    })
    
    const deleteProduct = prisma.product.delete({
      where: {
        ID: Number(3),
      },
    })
    res.json(deleteCategories, deleteProduct)
}
module.exports = {
    createProduct: createProduct,
    readProduct: readProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
};