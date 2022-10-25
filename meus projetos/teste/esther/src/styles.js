import styled from 'styled-components'
import { AiOutlineStar, AiOutlineArrowLeft, AiOutlineSearch, AiOutlineWifi } from "react-icons/ai";

export const Container = styled.div`
display: flex;
text-align: center;
flex-direction: column;
width: 100vw;
height: 100vh;
`
export const Upside = styled.header`
width: 100%;
padding-bottom: 20px;
background: #006557;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
padding-top: 10px;
align-items: flex-end;
display: flex;
justify-content: center;
`
export const Container1 = styled.div`
display: flex;
`
export const AllImages = styled.div`
    padding-left: 29px;
    padding-top: 61px;
`

export const Container2 = styled.div`
width: 76%;
margin-right: 50px;
h5 {
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #5D5D5D;
    margin-top: 11px;
    margin-right: 13px;
    margin-bottom: 10px;
}
h4 {
    margin-right: 65px;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    color: #5D5D5D;
}
p {
    margin-right: 30px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #5D5D5D;
}
h2 {
    margin-right: 89px;
    margin-bottom: 11px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #223330;
    margin-top: 33px;
}
`
export const Container3 = styled.div`
display: flex;
justify-content: space-between;
margin-left: 17px;
width: 108%;
p {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #009120;
}
`

export const Button = styled.button`
background: #07689F;
border: 1px solid #07689F;
font-weight: 600;
font-size: 16px;
line-height: 139.4%;
text-align: center;
color: #FFFFFF;
padding: 20px;
`

export const Divsion = styled.div`
width: 76%;
margin: 20px;
h2 {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #334240;
    padding-right: 90px;
    margin-top: 47px;
}
p {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #009120;
    margin-top: 11px;
    padding-top: 6px;
}
h4 {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    color: #5D5D5D;
    margin-right: 60px;
}
h5 {
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #5D5D5D;
    margin-bottom: 10px;
    margin-right: 179px;
    margin-top: 5px;
}
`
export const Divsion1 = styled.div`
    display: flex;
    justify-content: space-between;
`

export const IconsColor = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-left: 16px;
    h6 {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #5D5D5D;
    margin-top: 0px;
    }
`
export const Star = styled(AiOutlineStar)`
color: #FFBA3E;
`
export const Arrow = styled(AiOutlineArrowLeft)`
margin-right: 100px;
`
export const Search = styled(AiOutlineSearch)`
margin-left: 85px;
`

export const Wifi = styled(AiOutlineWifi)`
    padding-left: 4px;
    padding-right: 4px;
`

export const IconsPosition = styled.div`
    display: flex;
    justify-content: flex-end;
    background: #006557;
    color: white;
    padding-right: 5px;
    padding-top: 5px;
`