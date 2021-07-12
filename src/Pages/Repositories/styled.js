import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
`

export const ItemList = styled.ul`
    list-style-type: none;
`

export const Item = styled.li`
    background-color: #333;
    margin: 0.5rem auto;
    font-size: 2rem;
    padding: 0 0.3rem;
`
export const Container = styled.div`
    width: 100vw;
    max-width: 1070px;
    margin: 0 auto;
    padding: 1rem;
`

export const LinkTag = styled(Link)`
    background-color: #333;
    display: block;
    margin: 2rem auto;
    font-size: 2rem;
    padding: 0.3rem 0.5rem;
    text-decoration: none;    
    color: #ddd;
    width: 5rem;
    text-align: center;
`