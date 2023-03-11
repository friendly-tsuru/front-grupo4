import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaUserAlt, 
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../sidebaritem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Buscar paciente" />
        <SidebarItem Icon={FaChartBar} Text="Editar Perfil" />
        <SidebarItem Icon={FaUserAlt} Text="Deletar" />
        <SidebarItem Icon={FaEnvelope} Text="Sair" />
      </Content>
    </Container>
  )
}

export default Sidebar