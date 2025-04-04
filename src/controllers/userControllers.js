const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

const getUserById = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) return res.status(404).send('Usuário não encontrado');
  res.json(user);
};

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

const updateUser = async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body);
  if (!user) return res.status(404).send('Usuário não encontrado');
  res.json(user);
};

const deleteUser = async (req, res) => {
  const success = await userService.deleteUser(req.params.id);
  if (!success) return res.status(404).send('Usuário não encontrado');
  res.status(200).json({ message: 'Usuário deletado com sucesso' });
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
