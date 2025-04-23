import styled from "styled-components";

const QRStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  max-width: 400px;
  text-align: center;

  .qrMask {
    border-radius: 8px;
    background: #fff;
    padding: 8px;
    margin-bottom: 20px;
  }

  h3 {
    font-weight: 700;
    font-size: 24px;
    margin: 0;
  }

  h4 {
    font-size: 14px;
    font-weight: 400;
    margin: 10px 0 0;
    max-width: 240px;
    color: ${(props) => props.theme.colors.muted};
  }

  .boldDescription {
    font-weight: 700;
  }

  img {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 830px) {
    display: none;
  }
`;

export default QRStyles;
