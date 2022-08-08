import './App.css';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { DivExample } from './styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  margin-top: 4em;

  & button {
    border-radius: 5px;
  }
`

const Button1 = styled.button`
  background-color: rgb(75, 62, 255);
  padding: 1em 2em;
  color: whitesmoke;
`

const Button2 = styled(Button1)`
  box-shadow: 5px 5px 15px 5px #000000;
`

const Button3 = styled(Button2)`
  color: gold;
`

const Button4 = styled(Button1)`
  background-color: ${({danger}) => danger ? 'var(--dark-font)' : 'white'};
  
  ${(props) => props.danger && `
     box-shadow: 2px 2px 10px 2px #333;
    
     :hover {
      background-color: yellow;
      color: black;
     }
   `}

   padding: ${(props) => props.padding}em;
`

const LinkEdited = styled(Link)`
  background-color: blue;
  text-decoration: none;
  color: orange;
`

function App() {
  return (
    <div className="App">
      <Container>
        <button> Button </button>
        <LinkEdited to='/homepage'> Home </LinkEdited>
        <Button1> Button 1</Button1>
        <Button2> Button 2</Button2>
        <Button3> Button 3</Button3>
        <Button4 danger padding={5}> Delete </Button4>

        
        <DivExample>
                <div className='div-one'>
                    This is the first div
                    <div className='div-one-nested'>
                        This is the div nested inside the first one
                    </div>
                </div>
                <div className='div-two'>This is the second div</div>
                <div className='div-three'>This is the third div</div>
                <div className='other-example'>
                    <div className='div-four'>This is the fourth div</div>
                    <DivExample>This is the Nested DivExample</DivExample>
                </div>
          </DivExample>

      </Container>
    </div>
  );
}

export default App;
