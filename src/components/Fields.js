import { TextField, Box } from '@mui/material';
import Button from "../components/Button";

export default function Fields() {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ width: '100%', maxWidth: 600 }}
    >
      <TextField
        fullWidth
        label="Nome"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="E-mail"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Telefone"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Tipo de Evento"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Local do Evento"
        variant="outlined"
        margin="normal"
        required
      />
      <Button 
        label="Próximo" 
        sx={{ marginTop: '40px' }}      
        onClick={() => window.location.href = '/'} // Navega para a página inicial
      >
      </Button>      
    </Box>
  );
};
