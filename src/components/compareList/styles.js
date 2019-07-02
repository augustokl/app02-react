import styled from 'styled-components';
import '../../../node_modules/font-awesome/css/font-awesome.css';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 60px;
`;

export const Repository = styled.div`
  width: 320px;
  background: #fff;
  border-radius: 3px;
  margin: 10px;

  display: flex;
  flex-direction: column;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 70px;
    }
    a {
      text-decoration: none;
      font-size: 26px;
      strong {
        font-size: 26px;
        margin-top: 15px;
        color: black;
      }
    }
    small {
      margin-left: 10px;
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;
    li {
      font-weight: bold;
      font-size: 20px;
      padding: 12px 20px;

      i {
        margin-right: 10px;
      }

      small {
        margin-left: 5px;
        font-weight: normal;
        font-size: 13px;
        font-style: italic;
        color: #f09a6c;
      }

      &:nth-child(2n-1) {
        background: #d9d9d9;
      }
    }
  }
`;
