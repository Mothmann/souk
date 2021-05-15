const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function readCategory(req, res){
    const category = await prisma.category.findMany()
    res.json(category);
}
async function createCategory(req, res){
    const { ID, name, description } = req.body
    const result = await prisma.category.create({
      data: {
        ID,
        name,
        description,
      },
    })
    console.log(result);
    res.json(result);
}
async function updateCategory(req, res){
    const { id } = req.params
    const category = await prisma.category.update({
      where: { ID: Number(id) },
      data:{ name: req.body.name,
       description: req.body.description,}
          })
    res.json(category);
}
async function deleteCategory(req, res){
    const { id } = req.params
    const category = await prisma.category.delete({
      where: {
        ID: Number(id),
      },
    })
    res.json(category);
}
module.exports = {
    createCategory: createCategory,
    readCategory: readCategory,
    updateCategory: updateCategory,
    deleteCategory: deleteCategory,
};