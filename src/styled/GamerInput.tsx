import styled from "styled-components";

const GamerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-size: 12px;
    margin-bottom: 5px;
  }

  input {
    height: 40px;
    border-radius: 4px;
    border: none;
    padding: 8px;
    background-color: #1e1f22;
    color: white;
    font-size: 14px;
  }

  a {
    font-size: 12px;
    margin-top: 5px;
    color: ${(props) => props.theme.colors.link};
    text-decoration: none;
    align-self: flex-end;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default GamerInput;
