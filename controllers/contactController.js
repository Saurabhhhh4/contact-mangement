//get /api/contacts

const getContacts = (req, res) => {
  res.status(200).json({ message: `get contacts for ${req.params.id}` });
};

//post /api/contacts
const createContact = (req, res) => {
  res.status(200).json({ message: `create contacts` });
  //   console.log(`the request is :`, req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all fields are mandatory");
  }
};

//get /api/contacts
const getContact = (req, res) => {
  res.status(200).json({ message: `get contacts ${req.params.id}` });
};

//put /api/contacts
const updateContact = (req, res) => {
  res.status(200).json({ message: `update contacts ${req.params.id}` });
};

//delete /api/contacts
const deleteContact = (req, res) => {
  res.status(200).json({ message: `deleted contacts for ${req.params.id}` });
};

module.exports = {
  getContact,
  createContact,
  deleteContact,
  updateContact,
  getContacts,
};
