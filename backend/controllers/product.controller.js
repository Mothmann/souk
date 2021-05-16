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

    console.log(req.body);
    categoriesToBeSent = categories.map(ID => {
       return {
        categoryID: ID
      }
    });
    console.log(categoriesToBeSent);
    const result = await prisma.product.create({
      data: {
        ID,
        name,
        description,
        PicturePath,
        UnitsinStock,
        price,
        categories: {create: categoriesToBeSent}
      },
    })
    console.log(result);
    res.json(result);
  }
async function updateProduct(req, res){
  const { name, description, UnitsinStock,PicturePath, price, categories } = req.body
    const { id } = req.params;
    categoriesToBeSent = categories.map(ID => {
      return {
       categoryID: ID
     }
   });
    const product = await prisma.product.update({
      where: { ID: Number(id) },
      data: {
        name,
        description,
        PicturePath,
        UnitsinStock,
        price,
      categories: {deleteMany: {}, create: categoriesToBeSent}
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