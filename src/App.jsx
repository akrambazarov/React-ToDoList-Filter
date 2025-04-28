import { useState } from "react";
import './App.css'
import Button from "./assets/components/Button";
import Light from "./assets/icons/Light";
import Dark from "./assets/icons/dark";
import Plus from "./assets/icons/plus";
import Card from "./assets/components/card";
import Edit from "./assets/icons/edit";
import Trash from "./assets/icons/trash";
import Close from "./assets/icons/close";
import Location from "./assets/icons/location";
import Phone from "./assets/icons/phone";
import Time from "./assets/icons/time";
import User from "./assets/icons/user";
import Sort from "./assets/icons/sort";
import Search from "./assets/icons/search";

export default function ToDoList() {
  const [user, setUser] = useState([
    {
      id: '1',
      name: 'Jacob Jones',
      email: 'jackson.graham@example.com',
      city: 'Dushanbe',
      status: 'INACTIVE',
      phone: '88888 0090',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '2',
      name: 'Jenny Wilson',
      email: 'jessica.hanson@example.com',
      city: 'Kulob',
      status: 'INACTIVE',
      phone: '88888 0090',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '3',
      name: 'Guy Hawkins',
      email: 'bill.sanders@example.com',
      city: 'Dushanbe',
      status: 'INACTIVE',
      phone: '88888 0090',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '4',
      name: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      city: 'Bokhtar',
      status: 'ACTIVE',
      phone: '88888 0090',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '5',
      name: 'Esther Howard',
      email: 'felicia.reid@example.com',
      city: 'Dushanbe',
      status: 'ACTIVE',
      phone: '88888 0090',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '6',
      name: 'Kristin Watson',
      email: 'kenzi.lawson@example.com',
      city: 'Khujand',
      status: 'ACTIVE',
      phone: '88888 0090',
      avatar: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '7',
      name: 'Dianne Russell',
      email: 'deanna.curtis@example.com',
      city: 'Dushanbe',
      status: 'INACTIVE',
      phone: '88888 0090',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '8',
      name: 'Ronald Richards',
      email: 'tim.jennings@example.com',
      city: 'Hisor',
      status: 'ACTIVE',
      phone: '88888 0090',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ]);

  // useState modal
  const [viewProfile, setViewProfilel] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [idx, setIdx] = useState(null);
  
  // theme
  const [themeDark, setThemeDark] = useState(false);
  

  const [selectedUser, setSelectedUser] = useState(null);
  
  // useState add users
  const [addName, setAddName] = useState('');
  const [addAvatar, setAddAvatar] = useState('');
  const [addEmail, setAddEmail] = useState('');
  const [addStatus, setAddStatus] = useState('');
  const [addCity, setAddCity] = useState('');
  const [addPhone, setAddPhone] = useState('');
  
  // useState editUsers
  const [editName, setEditName] = useState('');
  const [editAvatar, setEditAvatar] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editStatus, setEditStatus] = useState('');
  const [editCity, setEditCity] = useState('');
  const [editPhone, setEditPhone] = useState('');

  // filter
  const [searchUsers, setSearchUsers] = useState('');
  const [selectStatus, setSelectStatus] = useState('ALL');
  const [selectCity, setSelectCity] = useState('ALL');
  function getFilteredUsers(){
  let result = [...user];

  //Filter Status
  if(selectCity !== 'ALL'){
    result = result.filter(user => user.city === selectCity);
  }
  //filter City
  if(selectStatus !== 'ALL'){
    result = result.filter(user => user.status === selectStatus);
  }
  //filter Search
  if(searchUsers){

    result = result.filter(user =>
      user.name.toUpperCase().includes(searchUsers.toUpperCase()) ||
      user.email.toUpperCase().includes(searchUsers.toUpperCase()) ||
      user.city.toUpperCase().includes(searchUsers.toUpperCase()
    )
    )
  }
  return result

  }

  // filtered users
  const filteredUsers = getFilteredUsers();

function controlMenu(user){
  setViewProfilel(true);
  setSelectedUser(user);
}
// Delete user
function deleteUser(id){
  setUser(user.filter((e)=>e.id !== id));
  setViewProfilel(false);
}
// Add User
function addUser(){
  let newData = {
    id: new Date().getTime(),
    name: addName,
    email: addEmail,
    city: addCity,
    status: addStatus,
    phone: addPhone,
    avatar:addAvatar
  }
  setUser([...user,newData]);
  setAddModal(false);
}
// Edit Users
function editUser(id){
  let editedUser = user.find((task)=>{return task.id === id});
  setIdx(editedUser.id);
  setEditName(editedUser.name);
  setEditAvatar(editedUser.avatar);
  setEditEmail(editedUser.email);
  setEditCity(editedUser.city);
  setEditStatus(editedUser.status);
  setEditPhone(editedUser.phone);

  setViewProfilel(false);
  setEditUserModal(true);
}
//Save Edited data User
function saveEditedUser(id){
  setUser(user.map((task)=>{
    if(task.id === id){
      task.name = editName;
      task.avatar = editAvatar;
      task.city = editCity;
      task.email = editEmail;
      task.phone = editPhone;
      task.status = editStatus;
    }
    return task;
  }))
  setEditUserModal(false);
}
// Render Html JS
  return (
<div 
    className={`contentBlock container mx-auto px-4 py-8 h-[100%] max-w-full 
    ${themeDark === true ? ' bg-[#202020] text-white' : ''} `}
    >
      {/* Header */}
      <header  className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-semibold">User List</h1>
        <div className="flex items-center gap-4">
        <Button
        onClick={()=>{setAddModal(!addModal)}} 
        text="NEW" 
        icon={<Plus/>} 
        className="bg-blue-500 shadow-2xl font-semibold text-white"/>
          <div className="flex rounded-lg p-0.5">
            <label
            onChange={()=>setThemeDark(false)} 
            className="flex-1 cursor-pointer">
              <input 
                type="radio" 
                name="theme" 
                value="light" 
                className="peer hidden" 
                defaultChecked 
              />
              <div className={`flex rounded-md items-center justify-center gap-1 px-4 py-2 font-semibold border-1 rounded-tr-none rounded-br-none border-[#bdbebf] border-r-1
                  
                   ${themeDark === true ? 'border-gray-600 bg-[#212122] text-gray-300' : 'bg-gray-100 text-[#666666]'}`}>
                <Light/>
                <span>LIGHT</span>
              </div>
            </label>

            <label
            onChange={()=>setThemeDark(true)}  
            className="flex-1 cursor-pointer">
              <input 
                type="radio" 
                name="theme" 
                value="dark" 
                className="peer hidden" 
              />
              <div className={`flex rounded-md items-center justify-center gap-1 px-4 py-2 font-semibold border-1 rounded-tl-none rounded-bl-none border-[#bdbebf] border-l-0
                   text-[#666666]
                  ${themeDark === true ? 'border-gray-600 bg-[#151515] text-white' : ''}`}>
                <Dark/>
                <span>DARK</span>
              </div>
            </label>
          </div>


        </div>
      </header>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Status Filter */}
        <div className="flex flex-col gap-1.5">
          <label className={`text-sm ${themeDark ? 'text-gray-300' : ''}`}>Status</label>
          <div className="relative">
            <select
            value={selectStatus}
            onChange={(e)=>setSelectStatus(e.target.value)} 
            className={`w-full px-4 py-2 border rounded appearance-none ${themeDark ? 'bg-[#292929] border-gray-600 text-gray-300' : 'bg-white border-gray-300'}`}>
              <option value="ALL">All status</option>
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
            </select>
            <img src="https://api.iconify.design/lucide/chevron-down.svg" alt="▼" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none opacity-50" />
          </div>
        </div>

        {/* City Filter */}
        <div className="flex flex-col gap-1.5">
          <label className={`text-sm ${themeDark ? 'text-gray-300' : ''}`}>City</label>
          <div className="relative">
            <select
            value={selectCity}
            onChange={(e)=>setSelectCity(e.target.value)} 
            className={`w-full px-4 py-2 border rounded appearance-none ${themeDark ? 'bg-[#292929] border-gray-600 text-gray-300' : 'bg-white border-gray-300'}`}>
              <option>All cities</option>
              <option>Dushanbe</option>
              <option>Kulob</option>
              <option>Bokhtar</option>
              <option>Khujand</option>
              <option>Hisor</option>
            </select>
            <img src="https://api.iconify.design/lucide/chevron-down.svg" alt="▼" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none opacity-50" />
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-col gap-1.5">
          <label className={`text-sm ${themeDark ? 'text-gray-300' : ''}`}>Search</label>
          <div className="relative">
            <input 
              type="text" 
              value={searchUsers}
              onChange={(e)=>setSearchUsers(e.target.value)}
              placeholder="Name, email, etc..." 
              className={`w-full px-4 py-2 border rounded ${themeDark ? 'bg-[#292929] border-gray-600 text-gray-300 placeholder-gray-500' : 'bg-white border-gray-300'}`} 
            />
           <Search/>
          </div>
        </div>
      </div>

      {/* User List */}
      <div className={`bg-white rounded-lg  shadow-sm border  
        ${themeDark === true ? 'bg-[#202020] border-[#292929]' : ' border-gray-200'}`}>
        {/* Table Header */}
        <div className={`flex justify-between md:grid grid-cols-12 gap-4 py-3 px-4 text-sm font-medium ${themeDark ? 'bg-[#292929] text-gray-300 border-[#292929]' : 'bg-gray-100 text-gray-600'}`}>
          <div className="col-span-4 flex items-center gap-2 cursor-pointer ">
             <User/>
             <span className="max-md:hidden">Name</span>
           <Sort/>
           </div>
          <div className="col-span-2 flex items-center gap-2 cursor-pointer ">
            <Location/>
            <span className="max-md:hidden">City</span>
            <Sort/>
            </div>
          <div className="col-span-2 flex items-center gap-2 cursor-pointer">
            <Time/>
            <span className="max-md:hidden">Status</span>
            <Sort/>
          </div>
          <div className="col-span-3 flex items-center gap-2 cursor-pointer ">
           <Phone/>
            <span className="max-md:hidden">Phone</span>
            <Sort/>
          </div>
          <div className="col-span-1"></div>
        </div>

        {/* User Items */}
        <div className={`divide-y  ${themeDark === true ? ' bg-[#202020]':'divide-gray-200'}`}>
          {/* User 1 */}
          {filteredUsers.map((users)=>(
             <Card 
             key={users.id} 
             name={users.name} 
             email={users.email} 
             status={users.status}
             phone={users.phone}
             img={users.avatar}
             city={users.city}
             id={users.id}
             themeCard={themeDark}
             onClick={()=> controlMenu(users)}
             onDelete={()=>deleteUser(users.id)}
             onEdit={()=>editUser(users.id)}
              />
          ))}
        </div>
      </div>
      {/* View Profile */}
        {viewProfile === true ?(
                <div className={` fixed right-0 top-0 w-[350px] min-h-screen ${themeDark === true ? 'bg-[#292929]' : 'bg-gray-100'}`}>
                 <div className={`w-full max-w-md h-screen shadow-lg ${themeDark === true ? 'bg-[#292929]' : 'bg-white'}`}>
                {/* Header with close button */}
                <div className={`flex items-center justify-between p-4 border-b  ${themeDark ? 'border-gray-600' :'border-gray-100'}`}>
                <Button
                onClick={()=>{ setViewProfilel(false)}} 
                icon={<Close/>} 
              className={`p-2  rounded-lg transition-colors ${themeDark === true ? "hover:bg-[#202020]" :'hover:bg-gray-100'}`}/>
                  <h1 className={`text-lg font-medium  ${themeDark ? 'text-white':'text-gray-900'}`}>User info</h1>
                  <div className="w-9" /> {/* Spacer for alignment */}
                </div>
          
                {/* User Profile */}
                <div className="px-4 py-6 flex flex-col items-center">
                  <img
                    src={selectedUser.avatar}
          
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <h2 className={`text-xl font-semibold mb-1 ${themeDark ? 'text-white':'text-gray-900'}`}>
                    {selectedUser.name}
                  </h2>
                  <p className="text-gray-500">{selectedUser.email}</p>
                </div>
          
                {/* User Details */}
                <div className="px-4 pb-6 space-y-4">
                  {/* City */}
                  <div className={`flex items-center gap-3  ${themeDark ? 'text-white':'text-gray-900'}`}>
                    <div className="w-5 h-5 flex-shrink-0">
                      <Location/>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="">City</span>
                      <span className="font-medium">{selectedUser.city}</span>
                    </div>
                  </div>
          
                  {/* Status */}
                  <div className={`flex items-center gap-3  ${themeDark ? 'text-white':'text-gray-900'}`}>
                    <div className="w-5 h-5 flex-shrink-0">
                      <Time/>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="">Status</span>
                      <span className="px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-600">
                      {selectedUser.status}
                      </span>
                    </div>
                  </div>
          
                  {/* Phone */}
                  <div className={`flex items-center gap-3  ${themeDark ? 'text-white':'text-gray-900'}`}>
                    <div className="w-5 h-5 flex-shrink-0">
                      <Phone/>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="">Phone</span>
                      <span className="font-medium">{selectedUser.phone}</span>
                    </div>
                  </div>
                </div>
          
                {/* Action Buttons */}
                <div className="p-4 flex gap-3 border-t border-gray-100">
                    <Button 
                    onClick={()=>editUser(selectedUser.id)}
                    text="Edit" 
                    icon={<Edit/>} 
                    className="bg-blue-500 font-semibold text-white"/>
                    <Button
                    onClick={()=>deleteUser(selectedUser.id)} 
                    text="Delete" 
                    icon={<Trash/>} 
                    className={` border-1  font-semibold hover:border-white transition-all duration-300 hover:bg-red-400 hover:text-white ${themeDark ?'text-[#fff] border-[#ff9696]' :'text-red-500 border-red-500'}`}/>
                </div>
              </div>
                </div>
        ):null}
        {/* Add Modal */}
        {addModal === true ?(
           <div className="fixed inset-0 bg-[#14258736] bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`rounded-lg h-[90vh] shadow-xl w-full max-w-md ${themeDark ? 'bg-[#292929] text-white' : 'bg-white'}`}>
             <div className="p-6">
               <h2 className="text-xl font-semibold  mb-6">Add new</h2>
               
               <form >
                 {/* Image Upload */}
                 <div className="mb-4">
                   <label className="block text-sm font-medium  mb-1">Avatar</label>
                   <input
                     type="text"
                     name="name"
                     
                     onChange={(e)=>{setAddAvatar(e.target.value)}}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     required
                   />
                 </div>
     
                 {/* Name */}
                 <div className="mb-4">
                   <label className="block text-sm font-medium  mb-1">Name</label>
                   <input
                     type="text"
                     name="name"
                     value={addName}
                     onChange={(e)=> {setAddName(e.target.value)}}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     required
                   />
                 </div>
     
                 {/* Email */}
                 <div className="mb-4">
                   <label className="block text-sm font-medium  mb-1">E-mail</label>
                   <input
                     type="email"
                     name="email"
                     value={addEmail}
                     onChange={(e)=>{setAddEmail(e.target.value)}}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     required
                   />
                 </div>
     
                 {/* State */}
                 <div className="flex gap-4">
                 <div className="mb-4">
                   <label className="block text-sm font-medium mb-1">State</label>
                   <select
                     name="state"
                     value={addStatus}
                     onChange={(e)=>{setAddStatus(e.target.value)}}
                     className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      themeDark 
                        ? 'bg-[#333333] border-gray-600 text-gray-300' 
                        : 'bg-white border-gray-300'
                    }`}required
                   >
                     <option value="">Choose state</option>
                     <option value="ACTIVE">Active</option>
                     <option value="INACTIVE">Inactive</option>
                   </select>
                 </div>
     
                 {/* City */}
                 <div className="mb-4">
                   <label className="block text-sm font-medium  mb-1">City</label>
                   <select
                     name="city"
                     value={addCity}
                     onChange={(e)=>setAddCity(e.target.value)}
                     className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      themeDark 
                        ? 'bg-[#333333] border-gray-600 text-gray-300' 
                        : 'bg-white border-gray-300'
                    }`}required
                   >
                     <option value="">All cities</option>
                     <option value="Dushanbe">Dushanbe</option>
                     <option value="Kulob">Kulob</option>
                     <option value="Bokhtar">Bokhtar</option>
                     <option value="Khujand">Khujand</option>
                     <option value="Hisor">Hisor</option>
                   </select>
                 </div>
                 </div>
                 {/* Phone */}
                 <div className="mb-6">
                   <label className="block text-sm font-medium  mb-1">Phone</label>
                   <input
                     type="tel"
                     name="phone"
                     value={addPhone}
                     onChange={(e)=>setAddPhone(e.target.value)}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     required
                   />
                 </div>
     
                 {/* Buttons */}
                 <div className="flex justify-end space-x-3">
                   <Button
                   onClick={()=>{setAddModal(false)}}
                   text="Cancel"
                   className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                   />
                   <Button
                   onClick={()=>addUser()}
                   text="Save"
                   className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                   />
                   
                 </div>
               </form>
             </div>
           </div>
         </div>
        ):null}
        {/* Edit Users */}
        {editUserModal === true ?(
           <div className="fixed inset-0 bg-[#14258736] bg-opacity-50 flex items-center justify-center p-4 z-50">
           <div className={`rounded-lg shadow-xl h-[90vh] w-full max-w-md ${themeDark ? 'bg-[#292929] text-white' : 'bg-white'}`}>
              <div className="p-6">
               <h2 className="text-xl font-semibold  mb-6">Edit user</h2>
               
               <form >
                 {/* Image Upload */}
                 <div className="mb-4">
                   <label className="block text-sm font-medium  mb-1">Avatar</label>
                   <input
                     type="text"
                     name="name"
                     value={editAvatar}
                     onChange={(e)=>{setEditAvatar(e.target.value)}}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     required
                   />
                 </div>
     
                 {/* Name */}
                 <div className="mb-4">
                   <label className="block text-sm font-medium  mb-1">Name</label>
                   <input
                     type="text"
                     name="name"
                     value={editName}
                     onChange={(e)=> {setEditName(e.target.value)}}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     required
                   />
                 </div>
     
                 {/* Email */}
                 <div className="mb-4">
                   <label className="block text-sm font-medium  mb-1">E-mail</label>
                   <input
                     type="email"
                     name="email"
                     value={editEmail}
                     onChange={(e)=>{setEditEmail(e.target.value)}}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     required
                   />
                 </div>
     
                 {/* State */}
                 <div className="flex gap-4">
                 <div className="mb-4">
                   <label className="block text-sm font-medium  mb-1">State</label>
                   <select
                     name="state"
                     value={editStatus}
                     onChange={(e)=>{setEditStatus(e.target.value)}}
                     className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      themeDark 
                        ? 'bg-[#333333] border-gray-600 text-gray-300' 
                        : 'bg-white border-gray-300'
                    }`}required
                   >
                     <option value="">Choose state</option>
                     <option value="ACTIVE">Active</option>
                     <option value="INACTIVE">Inactive</option>
                   </select>
                 </div>
     
                 {/* City */}
                 <div className="mb-4">
                   <label className="block text-sm font-medium mb-1">City</label>
                   <select
                     name="city"
                     value={editCity}
                     onChange={(e)=>setEditCity(e.target.value)}
                     className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      themeDark 
                        ? 'bg-[#333333] border-gray-600 text-gray-300' 
                        : 'bg-white border-gray-300'
                    }`}required
                   >
                     <option value="">All cities</option>
                     <option value="Dushanbe">Dushanbe</option>
                     <option value="Kulob">Kulob</option>
                     <option value="Bokhtar">Bokhtar</option>
                     <option value="Khujand">Khujand</option>
                     <option value="Hisor">Hisor</option>
                   </select>
                 </div>
                 </div>
                 {/* Phone */}
                 <div className="mb-6">
                   <label className="block text-sm font-medium  mb-1">Phone</label>
                   <input
                     type="tel"
                     name="phone"
                     value={editPhone}
                     onChange={(e)=>setEditPhone(e.target.value)}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     required
                   />
                 </div>
     
                 {/* Buttons */}
                 <div className="flex justify-end space-x-3">
                   <Button
                   onClick={()=>{setEditUserModal(false)}}
                   text="Cancel"
                   className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                   />
                   <Button
                  onClick={()=>saveEditedUser(idx)}
                   text="Save"
                   className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                   />
                   
                 </div>
               </form>
             </div>
           </div>
         </div>
        ):null}
    </div>
  );
}
