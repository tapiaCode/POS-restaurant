export const USER_DATA =[ {
  id:"1",
  username:'andrea',
  customname:"Andrea Tapia Martinez",
  email:"admin@fake.com",
  image:'./kangre.png',
  password:'12345',
  role:'admin'

},
{
  id:"2",
  username:'jose',
  customname:"Jose Manuel Tapia",
  email:"juan@fake.com",
  image:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
  password:'12345',
  role:'vendor'

},
{
  id:"3",
  username:'yulemi',
  customname:"Yulemi Flores Robstentowsky",
  email:"ana@fake.com",
  image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  password:'12345',
  role:'vendor'

}
];
export const createNewUser= (newInfo)=>{
  newInfo.id = Math.floor(Math.random()*(1+200))
  newInfo.role ='customer';
  newInfo.customname=newInfo.username
  delete newInfo.passwordConfirm;
  USER_DATA.push(newInfo);
  return  newInfo;
};
export const editOneUser = (id ,newData)=>{
  const userIndex = USER_DATA.findIndex(user => user.id == id)
  const updatedUser = {
    ...USER_DATA[userIndex],
    ...newData,
  };

  USER_DATA[userIndex] = updatedUser;
  return updatedUser;
}