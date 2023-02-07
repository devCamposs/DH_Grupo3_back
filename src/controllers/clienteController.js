const path = require("path");
const db = require(path.join(__dirname, "../database/models/index"));
const bcrypt = require("bcrypt");
const Usuario = db.Usuario;

const clienteController = {
  //CREATE josé
  create: async (req, res) => {
    let user = {
      nome: req.body.name,
      email: req.body.email,
      password: req.body.password,
      newsletter: req.body.newsLetter,
    };
    try {
      await Usuario.create(user); //criando o usuario
      res.status(200).json({ msg: "Usuário criado com sucesso!" });
    } catch (err) {
      res.status(404).json(err);
    }
  },

//   login: async (req, res) => {
//     let user = {
//       email: req.body.email,
//       password: req.body.password,
//     };
//     try {
//       await Usuario.findOne({
//         where: {
//           email: user.email,
//           password: user.password,
//         },
//       });
//       res.status(200).json({ msg: "Login com sucesso!" });
//     } catch (err) {
//       res.status(404).json(err);
//     }
//   },

  //GET josé
  findAll: (req, res) => {
    Usuario.findAll() //buscando o usuario
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  //GET ID josé
  findById: async (req, res) => {
    let userId = req.params.id;
    Usuario.findByPk(userId) //buscando o usuario
      .then((user) => {
        if (!user) {
          res.status(404).json(user);
        } else {
          res.status(200).json(user);
        }
      })
      .catch((err) => {
        res.status(404).json(err); //NOT FOUND
      });
  },

  //PUT josé
  update: async (req, res) => {
    const id = req.params.id;
    const user = req.body;

    try {
      await Usuario.update(user, { where: { id: id } }); //atualizando o usuario
      res.status(201).json({ msg: "Usuário alterado com sucesso!" });
    } catch (err) {
      res.status(304).json({ error: [...err] });
    }
  },

  //DELETE josé
  destroy: async (req, res) => {
    const id = req.params.id;

    try {
      await Usuario.destroy({ where: { id: id } }); //excluindo o usuario
      res.status(200).json({ msg: "Usuário excluído com sucesso!" });
    } catch (err) {
      res.status(400).json({ error: [...err] });
    }
  },

  // login: (req, res) => {
  //     let { name, password } = req.body
  //     let resultado;

  //     Usuario.findAll({ where: { name: name, password: password } })
  //         .then((cliente) => {

  //             if (cliente === Usuario.name && cliente === Usuario.password) {
  //                 resultado = cliente.json()// " no primeiro vc pega o cliente.json...
  //             }
  //         })
  //         .then((resultadofinal) => {

  //             if (!resultadofinal, resultado.name) {
  //                 return res.status(200).json(resultado + { msg: 'Usuario logado com sucesso!' })//...e da um return no segundo then ta certo. "
  //             }
  //         })
  //         .catch(err => {
  //             res.status(500).json(err, { msg: 'Usuario não cadastrado, crie uma conta!' })
  //         })
  // }

  login: async (req, res) => {
    try {
      let { email, password } = req.body;
      let cliente = await Usuario.findOne({ where: { email: email, password: password } });
      console.log();
      if (!cliente) {
        return res.status(404).json({ msg: "Usuário não encontrado" });
      }

      const match = cliente.password != password ? false : true;
      // console.log(match)
      // console.log(cliente.password)
      if (!match) {
        return res.status(401).json({ msg: "Senha inválida" });
      }

      return res
        .status(200)
        .json({ ...cliente.toJSON(), msg: "Usuário logado com sucesso!" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Erro interno do servidor" });
    }
  },
};

module.exports = clienteController;
