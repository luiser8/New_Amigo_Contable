import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../../utils/theme';
import { authContext } from '../../auth/useContext';
import { TypesContext } from '../../types/Types.context';
import Page from '../../components/layouts/Page';
import { IUserLogin } from '../../interfaces/IUserAuth';

const Login = () => {
    const { login } = useContext(authContext) as TypesContext;
    const [errorRegister, setErrorRegister] = useState({
      isError: false,
      msj: "",
    });
    const [user, setUser] = useState<IUserLogin>({
      userName: "",
      password: "",
    });

    const handleLogin = async (event: React.FormEvent) => {
      event.preventDefault();
      setErrorRegister({ ...errorRegister, isError: false, msj: "" });
      //const { data, error } = await postAuthLoginService(user);
      //if (data?.error === "" && error === "") {
        login({
          userId: 1,
          email: "usuario@correo.com",
          userName: "usuario",
          password: "gfgfgf",
          token: "hgf",
          role: "Contable",
        });
      /*} else {
        setErrorRegister({
          ...errorRegister,
          isError: true,
          msj: data.error || error,
        });*/
      }

    return (
        <ThemeProvider theme={Theme().theme}>
            <Page title="Inicio de sesión">
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(contable.png)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 22,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Typography component="h1" variant="h5">
                                Iniciar sesión
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
                                <TextField
                                    value={user.userName}
                                    onChange={(ev) => setUser({ ...user, userName: ev.target.value })}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Usuario"
                                    name="username"
                                    autoFocus
                                    error={false}
                                />
                                <TextField
                                    value={user.password}
                                    onChange={(ev) => setUser({ ...user, password: ev.target.value })}
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Contraseña"
                                    type="password"
                                    id="password"
                                    error={false}
                                />
                                {/* <FormControlLabel
                                    control={<Checkbox value="remember" />}
                                    label="Recuérdeme"
                                /> */}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 1.5, mb: 3, bgcolor: 'primary.customdark' }}
                                    disabled={user.userName !== '' && user.password !== '' ? false : true}
                                >
                                    Iniciar sesión
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2" sx={{ color: 'primary.customdark' }}>
                                            Olvidó su contraseña?
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Page>
        </ThemeProvider>
    );
}

export default Login;