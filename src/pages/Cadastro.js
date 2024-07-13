import { styled } from '@mui/material/styles';
import Fields from '../components/Fields'; // Importa o componente Fields
import backgroundImage from '../assets/Festa11.webp';

const StyledContainer = styled('div')({
  display: 'flex',
  height: '100vh', // Ocupa a altura total da tela
  backgroundColor: '#fff', // Fundo branco
});

const ImageSection = styled('div')({
  flex: 1,
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const FormSection = styled('div')({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
});

export default function Cadastro() {
  return (
    <StyledContainer>
      <ImageSection />
      <FormSection>
        <Fields />
      </FormSection>
    </StyledContainer>
  );
};
