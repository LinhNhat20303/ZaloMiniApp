import React,{useState} from 'react'
import { Avatar, List, ListItem, Page, Title, useStore, Icon, zmp } from 'zmp-framework/react'
import src from 'zmp-sdk'
import NavbarBack from '../components/navbar-back'
import api from "zmp-sdk";


const UserPage = () => {
  const user = useStore('user')
 function restore(){
  api.removeStorage({
    keys: ['storageProduct'],
    
  });
}

  return (
    <Page 
      name="user"
    >
     <NavbarBack />
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        {/* <Avatar story online src={user.avatar.startsWith('http') ? user.avatar : null}>{user.avatar}</Avatar> */}
        <Avatar story online src={user?.avatar.startsWith('http') ? user.avatar : null}>{user.avatar}</Avatar>
        <Title style={{ marginTop: 8 }}>{user?.full_name}</Title>
      </div>
      <List  sortable>
        <ListItem link='#' title='ID' description={user.user_id}>
          <Icon className='list-icon' slot='media' zmp='zi-qrline'></Icon>
          <Icon className='list-icon' zmp='zi-chevron-right'></Icon>
        </ListItem>
          <ListItem link='#' title='Họ và Tên' description={user?.full_name}>
          <Icon className='list-icon' slot='media' zmp='zi-user' />
          <Icon className='list-icon' zmp='zi-chevron-right'></Icon>
          </ListItem>
          <ListItem link='#' title='Nickname' description={user?.nick_name} >
            <Icon className='list-icon' slot='media' zmp='zi-add-user' />
            <Icon className='list-icon' zmp='zi-chevron-right'></Icon>
          </ListItem>
          
          <ListItem link='#' title='Ngày Sinh' description={user.date_of_birth} >
            <Icon className='list-icon' slot='media' zmp='zi-calendar' />
            <Icon className='list-icon' zmp='zi-chevron-right'></Icon>
          </ListItem>
          <ListItem
            link='#'
            title='Giới Tính'
            description={user.gender}
          >
            <Icon className='list-icon' slot='media' zmp='zi-quote' />
            <Icon className='list-icon' zmp='zi-chevron-right'></Icon>
          </ListItem>
          <ListItem
            title='Quốc Tịch'
            description={user.nationality}
          ><Icon className='list-icon' slot='media' zmp='zi-unlock-solid' />
          <Icon className='list-icon' zmp='zi-chevron-right'></Icon>
           </ListItem>
           <ListItem link="#" title='Số điện thoại' description={user.phone}>
           <Icon className='list-icon' slot='media' zmp='zi-call-solid' />
           <Icon className='list-icon' zmp='zi-chevron-right'></Icon>
           </ListItem>
           <ListItem link="#" title='Email' description={user.email}>
           <Icon className='list-icon' slot='media' zmp='zi-post' />
           <Icon className='list-icon' zmp='zi-chevron-right'></Icon>
           </ListItem>
           <ListItem link="#" title='Password' description="***********" >
           <Icon className='list-icon' slot='media' zmp='zi-setting' />
           <Icon className='list-icon' zmp='zi-chevron-right'></Icon>
           </ListItem>
           <ListItem onClick={()=>zmp.views.main.router.navigate("/product/ItemListCRUD")} link="#" title='Danh Sách Sản Phẩm' >
           <Icon className='list-icon' slot='media' zmp='zi-edit' />
           <Icon className='list-icon' zmp='zi-chevron-right' ></Icon>
           </ListItem>
           <ListItem onClick={()=>restore()} link="#" title='Restore' >
           <Icon className='list-icon' slot='media' zmp='zi-edit' />
           <Icon className='list-icon' zmp='zi-chevron-right' ></Icon>
           </ListItem>
        </List>
      
    </Page>
  )
}

export default UserPage;