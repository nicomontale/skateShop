import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1rem;
background: transparent;
border: 0.5rem solid var(--lightBlue);
color:   "var(--lightYellow)";
border-color: "var(--lighYellow)";
bored-radius: 0.5rem;
padding: 0.1rem;
cursor: pointer;
margin: 0.1rem 0.1rem 0.1rem 0;
transition: all 0.5s ease-in-out;
&:hover{
   
    color:var(--mainBlue);

} &:focus {
    outline: none;
}


`;