const db = require('../database/models');
const Produto = db.Produto;

const produtoController = {
    list: (req, res) => {
        Produto.findAll()
            .then(produtos => {
                res.status(200).json(produtos)
            })
            .catch(err => {
                res.status(500).json(err); // 500 = Internal Error
            })
    },

    // POR ID

    findById: (req, res) => {
        Produto.findByPk(req.params.id)
        .then(produto => {
            if (!produto){
                res.status(404).json(produto) // 404 = Not Found
            }else{
                res.status(200).json(produto)
            }

        })
        .catch(err => {
            res.status(404).json(err)
        })
    },

    //CRIAR

    create: async (req, res) => {
        const produto = req.body
        console.log(produto);
        try {
          await Produto.create(produto)
          res.status(201).json({ msg: 'Produto criado com sucesso!' })
        } catch (err) {
          res.status(400).json(err) // 400 = Bad Request
        }
    },

    // NOVOS PRODUTOS

    update: async (req, res) => {
      const id = req.params.id
      const produto = req.body
      try {
        await Produto.update(produto, { where: { id } })
        res.status(201).json({ msg: 'Produto alterado com sucesso!' })
      } catch (err) {
        res.status(304).json({ error: [...err] }) // 304 = Not Modified
      }
    },

    partialUpdate: async (req, res) => {
        const id = req.params.id
        const produto = req.body
        try {
            let produtoRecuperado = Produto.findByPk(id);

            if (!produtoRecuperado){
                res.status(404).json({ msg: 'Não encontrado' }) // 404 = Not Found
            }else{
                if (produto.name && produto.name != produtoRecuperado.name){
                    produtoRecuperado.name = produto.name;
                }

                if (produto.image && produto.image != produtoRecuperado.image){
                    produtoRecuperado.image = produto.image;
                }
                if (produto.price && produto.price != produtoRecuperado.price){
                    produtoRecuperado.price = produto.price;
                }

                if (produto.discount && produto.discount != produtoRecuperado.discount){
                    produtoRecuperado.discount = produto.discount;
                }

                if (produto.category && produto.category != produtoRecuperado.category){
                    produtoRecuperado.category = produto.category;
                }

                if (produto.description && produto.description != produtoRecuperado.description){
                    produtoRecuperado.description = produto.description;
                }
            }
            await Produto.update(produtoRecuperado, { where: { id } })
            res.status(201).json({ msg: 'Produto alterado com sucesso!' })

        } catch (err) {
          res.status(304).json({ error: [...err] }) // 304 = Not Modified
        }
    },

    delete: async (req, res) => {
      const id = req.params.id
      try {
        await Produto.destroy({ where: { id } })
        res.status(200).json({ msg: 'Produto excluído com sucesso!' })
      } catch (err) {
        res.status(400).json({ error: [...err] })
      }
    }
}

module.exports = produtoController;
