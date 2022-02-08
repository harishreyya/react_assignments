import styled from "styled-components";

export const Button = styled.button`
background: ${({theme})=> (theme === "light"? "grey":"teal")}
border:none;
color:${({theme})=> (theme === "light"? "teal":"grey")}
font-size:30px;
padding:10px;
border-raidus:20px;

&:hover{
    color:black;
    background:teal;
}
`;


