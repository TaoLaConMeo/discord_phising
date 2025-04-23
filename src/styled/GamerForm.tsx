import styled from "styled-components";

const GamerForm = styled.form`
  background-color: #36393f;
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 400px;

  fieldset {
    padding: 0;
    border: none;
  }

  h3 {
    font-size: 24px;
    font-weight: 800;
    padding-bottom: 20px;
  }

  h4 {
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.muted};
    margin-bottom: 15px;
  }

  button {
    width: 100%;
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    color: #fff;
    height: 40px;
    background-color: ${(props) => props.theme.colors.blue};
    transition: background-color 0.2s;
    cursor: pointer;
    margin-top: 20px;
  }

  button:hover {
    background-color: #4f5cf0;
  }
`;

export default GamerForm;
