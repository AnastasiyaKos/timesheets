import { styled } from '@mui/material/styles';
import {Stack} from "@mui/material";


const Header = styled(Stack)({
  fontSize: '15px',
  textAlign: 'center',
  padding: '20px',
  color: '#fff',
  background: '#557266',
});

const Wrapper = styled(Stack)({
  width: '270px',
  background: 'white',
});

export {
  Wrapper,
  Header
}