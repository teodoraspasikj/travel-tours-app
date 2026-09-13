// import { Box, Container, Typography } from '@mui/material';
//
// const HomePage = () => {
//   return (
//     <Box sx={{ m: 0, p: 0 }} className='welcome-section'>
//       <Container maxWidth='xl' sx={{ mt: 3, py: 3 }}>
//         <Typography variant='h4' gutterBottom>
//           Welcome to Travel Tours App! 👋
//         </Typography>
//         <Typography variant='body1' sx={{ mb: 4 }}>
//           This is the home page.
//         </Typography>
//       </Container>
//     </Box>
//
//   );
// };
//
// export default HomePage;

import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia, Paper } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import SecurityIcon from '@mui/icons-material/Security';
import StarRateIcon from '@mui/icons-material/StarRate';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const HomePage = () => {
    const featuredTours = [
        {
            title: 'Охридско Езеро',
            desc: 'Уживајте во прекрасните плажи и културното наследство.',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
        },
        {
            title: 'Алпски Авантури',
            desc: 'Истражете ги врвовите и планинарските патеки.',
            image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80'
        },
        {
            title: 'Медитерански Бисер',
            desc: 'Сончеви плажи и незаборавни морски зајдисонца.',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
        }
    ];

    const benefits = [
        { icon: <SecurityIcon color="primary" sx={{ fontSize: 40 }} />, title: 'Сигурни резервации', desc: 'Гарантирана безбедност при секое плаќање и резервација.' },
        { icon: <StarRateIcon color="primary" sx={{ fontSize: 40 }} />, title: 'Најдобри дестинации', desc: 'Рачно избрани и проверени локации за врвно искуство.' },
        { icon: <SupportAgentIcon color="primary" sx={{ fontSize: 40 }} />, title: 'Поддршка 24/7', desc: 'Нашиот тимот е секогаш тука да ви помогне во секое време.' }
    ];

    return (
        <Box sx={{ m: 0, p: 0, bgcolor: '#f8f9fa', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Hero Секција */}
            <Box
                sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    py: 8,
                    px: 2,
                    textAlign: 'center',
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: { xs: 0, md: '0 0 24px 24px' },
                    mb: 6
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Откријте го светот со Travel Tours 👋
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                        Вашата следна незаборавна авантура започнува тука. Резервирајте тури, истражувајте нови дестинации и создадете спомени.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                        startIcon={<ExploreIcon />}
                        sx={{ px: 4, py: 1.5, fontSize: '1rem', borderRadius: '30px' }}
                    >
                        Истражи ги турите
                    </Button>
                </Container>
            </Box>

            {/* Главна содржина - Популарни дестинации */}
            <Container maxWidth="xl" sx={{ mb: 8, flex: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                    Популарни дестинации
                </Typography>

                <Grid container spacing={4}>
                    {featuredTours.map((tour, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3, boxShadow: 3, transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={tour.image}
                                    alt={tour.title}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                                        {tour.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {tour.desc}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Зошто да не одберете нас */}
                <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 8, mb: 3 }}>
                    Зошто да патувате со нас?
                </Typography>
                <Grid container spacing={4}>
                    {benefits.map((item, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 4, md: 4 }}>
                            <Paper elevation={2} sx={{ p: 4, textAlign: 'center', height: '100%', borderRadius: 3 }}>
                                <Box sx={{ mb: 2 }}>{item.icon}</Box>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.desc}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Footer Секција */}
            <Box sx={{ bgcolor: '#1976d2', color: 'white', py: 4, textAlign: 'center', mt: 'auto' }}>
                <Container maxWidth="xl">
                    <Typography variant="body1">
                        © 2026 Travel Tours App. Сите права се задржани.
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default HomePage;