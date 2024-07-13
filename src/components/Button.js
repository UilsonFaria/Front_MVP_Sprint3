import Button from '@mui/material/Button'; // Importa o componente Button do Material-UI
import { styled } from '@mui/material/styles'; // Importa o styled para customização

// Estiliza o botão
const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FBE308', // Cor do botão
  color: '#000', // Cor do texto
  width: '190px', // Largura
  height: '50px', // Altura
  borderRadius: '25px', // Bordas arredondadas
  '&:hover': {
    backgroundColor: '#f6d644', // Cor ao passar o mouse
  },
}));

export default function MaterialButton({ label, onClick, ...props }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
      <CustomButton onClick={onClick} {...props}>
        {label}
      </CustomButton>
    </div>  
  );
};