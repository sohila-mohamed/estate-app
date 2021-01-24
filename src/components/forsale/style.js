import styled from 'styled-components'
import {Img} from './home.png'

export const HomeDesc = styled.div `
  background-image: url('home.jpg');
  background-size: cover;
  margin: 150px 0;
`
export const DivInfo = styled.div `
  border-bottom: .1px solid #919191;
  margin-bottom: 20px;
`
export const Carousel = styled.div `

`
export const Card = styled.div `
 width: 50%;
 padding:20px;
`
export const Span = styled.span `
  position: absolute;
  top: -5px;
  left: 25px;
  padding: 8px 14px;
  color: #fff;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 500;
  z-index: 1;
  border-color: transparent;
  background: ${ props => props.item === 1 && 3 && 5 ? '#FDAE5C' : '#FDAE5C'};
  background: ${ props => props.item === 2 && 4 && 6 ? 'red' : ''};
`
export const MainTitle = styled.h3 `

`
export const Info = styled.p `
  font-size: 15px;
  display : inline;
  margin-right: 20px;
  margin-bottom:5px;
`
export const P = styled.p `
  color: #919191;
`
export const H2 = styled.h4 `
  color: #FF5748;
  display: inline;
`
export const BtnD = styled.button `
  background-color: transparent;
  color: #FDAE5C !important;
  display: inline;
  padding: 9px 30px;
  font-size: 15px;
  font-weight: 500;
  border: 0;
  border: 1px solid #FDAE5C;
  border-radius: 30px;
  text-align: center;
  transition: 0.5s;
  float: right;
  margin-right: 20px;

  &:hover {
    color: #fff !important;
    border: 1px solid transparent;
    background: #fdae5c;
    background: linear-gradient(to right, #fdae5c 0%, #fd8e5e 100%);
  }
`
