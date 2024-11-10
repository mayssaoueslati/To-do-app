const users = [
    { id: 1, name: 'Alice', role: 'Standard', companyId: 1 },
    { id: 2, name: 'Bob', role: 'CompanyAdmin', companyId: 1 },
    { id: 3, name: 'Charlie', role: 'SuperUser' }
  ];
  
  const findUserById = (id) => users.find(user => user.id === parseInt(id));
  
  module.exports = {
    users,
    findUserById
  };
  