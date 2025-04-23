import styled from "styled-components";
import Whitney from "../fonts/whitneybook.otf"
import WhitneyMedium from "../fonts/whitneymedium.otf"
import WhitneyBold from "../fonts/whitneysemibold.otf"
const Container = styled.div`
  display: flex;
  background-color: #36393f; // ✅ Apply màu nền tối ở đây
  color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 25px 20px;
  font-family: "Whitney", sans-serif;
  line-height: 20px;

  .vert-sep {
    margin: 0 16px;
  }

  a {
    color: ${(props) => props.theme.colors.link};
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: 830px) {
    min-width: 784px;
  }
    @font-face {
    font-family: "Whitney";
    font-weight: 800;
    src: url(${WhitneyBold}) format('opentype');
  }
  @font-face {
    font-family: "Whitney";
    font-weight: bold;
    src: url(${WhitneyMedium}) format('opentype');
  }

  @font-face {
    font-family: "Whitney";
    font-weight: 400;
    src: url(${Whitney}) format('opentype');
  }
 
  font-family: "Whitney" !important;
  line-height: 20px;
`;

export default Container;
