import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;
export const Form = styled.form`
  margin-top: 30px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 5px;
    border: ${props => (props.error ? '2px solid #F00' : 0)};
  }

  button {
    height: 55px;
    width: 60px;
    padding: 0 20px;
    margin-left: 15px;
    background: #ee6352;
    border: 0;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

    &:hover {
      background: #8f3c32;
    }
  }
`;
