import styled from "styled-components";

export const Flex = styled.div`
display:flex;
justify-content: space-between;
align-items:center;

& div{
    color:blue;
}

& >:hover{
    color:red;
}
`;