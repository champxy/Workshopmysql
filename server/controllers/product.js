const prisma = require('../prisma/prisma');


exports.create = async (req, res) => {
    try {
        const {name , price} = req.body;
        const product = await prisma.product.create({
            data: {
                name,
                price
            }
        });
        res.send(product);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}

exports.list = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.send(products);
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}

exports.read = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await prisma.product.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        res.send(product);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}

exports.update = async (req, res) => {
    try {
       const { id } = req.params;
       const { name, price } = req.body;
       const product = await prisma.product.update({
              where: {
                id: parseInt(id)
              },
              data: {
                name,
                price
              }
         });
         if(!product) {
             res.status(404).send('Product not found');
         }else {
             res.send(product);
         }

    } catch (err) {
        console.log(err);
    }
}

exports.remove = async (req, res) => {
    try {
       const { id } = req.params;
         const product = await prisma.product.delete({
              where: {
                id: parseInt(id)
              }
         });
            if(!product) {
                res.status(404).send('Product not found');
            }
            res.send('product deleted id : ' + id + 'name : ' + product.name);
    } catch (err) {
        console.log(err);
    }
}
