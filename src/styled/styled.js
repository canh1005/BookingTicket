import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const Nav = styled(NavLink)`
    color: #8391a2;
`
export const DashboardStyle = styled.div`
    background: #2f3b46;
    width: 100%;
    height: 100%;
    padding-top: .5rem;
    overflow-x: hidden;
    overflow-y: auto;
    transition: 0.5s;

`

export const QuanLyTemplate = styled.div`
    height: 100%;
    background: #827f7f14;
    ${DashboardStyle}:hover & {
        background: #fff;
    }
    
`
export const Label = styled.label`
    font-weight: bold;
`
export const ButtonEdit = styled.button`
    margin: 2px;
    border-style:none;
    color: white;

    &:hover{
        background-color: #17a2b896;
        border-style:none;
    }
`
export const ButtonDelete = styled.button`
    margin: 2px;
    border-style:none;
    color: white;
    &:hover{
        background-color: #dc3545c2;
        border-style:none;s
    }
`
export const TD = styled.td`
    word-wrap: break-word;
`
export const Table = styled.table`
    table-layout:fixed;

`