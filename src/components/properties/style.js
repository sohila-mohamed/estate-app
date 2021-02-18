import styled from 'styled-components'

export const Propert = styled.div `
  margin: 6em auto 10em;

`
export const Photo = styled.div `
  overflow: hidden;
`
export const MainTitle = styled.div `
  margin: 30px;
  text-align:center;
`
export const Img = styled.img `
  width: 100%;
  border-top-left-radius:  5% ;
  border-top-right-radius: 5%;

  &:hover{
    :focus {
      transform: scale(1);
    }
  }
`
export const Card = styled.div `
  margin: 20px auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
  border-radius: 5%;
  border-color: white;
  overflow: hidden;
  transition: .3s;
`
export const Type = styled.span `
  position: absolute;
  top: 25px;
  left: 25px;
  padding: 8px 14px;
  color: #fff;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 500;
  z-index: 1;
  border-color: transparent;
  background: ${ props => props.color === 1 && 3 && 5 ? '#FDAE5C' : 'red'};
  background: ${ props => props.color === 2 && 4 && 6 ? 'red' : '#FDAE5C'};
`
export const Icon = styled.button `
  color: ${props => props.item === props.isKlicked ? "orange" : "#919191"};
  font-size: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 1px 6px;
  border-radius: 30px;
  background-color: white;
  cursor: pointer;
  outline:none;
`
export const Price = styled.span `
  display: inline-block;
  background: #00D363;
  border-radius: 30px;
  padding: 7px 18px;
  color: #fff;
  font-weight: 500;
  font-size: 13px;
  margin: 15px 0;
  border-color: transparent;
`
export const Btn = styled.div `
  border-bottom: .1px solid #919191;
  margin-bottom: 10px
`
export const P = styled.p `
  font-size: 13px;
  font-weight: 400;
  color: #919191;
`
export const Info = styled.p `
  font-size: 15px;
  display : inline;
  margin-right: 20px;
`
export const More = styled.button `
  background-color: transparent;
  color: #FDAE5C !important;
  display: inline;
  padding: 15px 30px;
  font-size: 15px;
  font-weight: 500;
  border: 0;
  border: 1px solid #FDAE5C;
  border-radius: 30px;
  text-align: center;
  transition: 0.5s;
  float: right;
  margin:20px 42%;


  &:hover {
    color: #fff !important;
    border: 1px solid transparent;
    background: #fdae5c;
    background: linear-gradient(to right, #fdae5c 0%, #fd8e5e 100%);
  }
`
