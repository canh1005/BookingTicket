import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const Nav = styled(NavLink)`
    color: gray;
    font-size: 22px;
    &:hover{
        color: #FFFF;
    }
`
export const DashboardStyle = styled.div`
    background: black;
`
export const QuanLyTemplate = styled.div`
    height: 100%;
    background: #827f7f14;
`
export const Label = styled.label`
    font-weight: bold;
`
export const ButtonEdit = styled.button`
    margin: 2px;
    border-style:none;

    &:hover{
        background-color: #17a2b896;
        border-style:none;
    }
`
export const ButtonDelete = styled.button`
    margin: 2px;
    border-style:none;
    &:hover{
        background-color: #dc3545c2;
        border-style:none;s
    }
`