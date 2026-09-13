// import LoginForm from '../../../components/auth/LoginForm/LoginForm.tsx';
//
// const LoginPage = () => {
//   return <LoginForm/>;
// };
//
// export default LoginPage;
import LoginForm from '../../../components/auth/LoginForm/LoginForm.tsx';
import { Box, Container, Typography, Paper } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const LoginPage = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#f8f9fa',
                p: 2
            }}
        >
            <Container maxWidth="lg">
                <Paper
                    elevation={6}
                    sx={{
                        display: 'flex',
                        borderRadius: 4,
                        overflow: 'hidden',
                        minHeight: '600px',
                        flexDirection: { xs: 'column', md: 'row' }
                    }}
                >
                    {/* Лева страна: Визуелен дел со слика и брендирање */}
                    <Box
                        sx={{
                            flex: 1,
                            bgcolor: 'primary.main',
                            color: 'white',
                            p: 6,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <FlightTakeoffIcon fontSize="large" />
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Travel Tours
                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Добредојдовте назад! 👋
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                Најавете се за да продолжите со истражување на дестинациите и управување со вашите резервации.
                            </Typography>
                        </Box>

                        <Typography variant="caption" sx={{ opacity: 0.8 }}>
                            © 2026 Travel Tours App. Сите права се задржани.
                        </Typography>
                    </Box>

                    {/* Десна страна: Формата за најава */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: 4,
                            bgcolor: 'background.default'
                        }}
                    >
                        <Box sx={{ width: '100%', maxWidth: '400px' }}>
                            <LoginForm />
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default LoginPage;