// import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
// import InfoIcon from '@mui/icons-material/Info';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useNavigate } from 'react-router';
// import { useState } from 'react';
// import useAuth from '../../../../hooks/useAuth.ts';
// import type { DisplayTourResponse } from '../../../../api/types/tour.ts';
// import AddOrEditTourDialog from '../AddOrEditTourDialog/AddOrEditTourDialog.tsx';
// import DeleteTourDialog from '../DeleteTourDialog/DeleteTourDialog.tsx';
//
// interface TourCardProps {
//   tour: DisplayTourResponse;
// }
//
// const TourCard = ({ tour }: TourCardProps) => {
//   const { user } = useAuth();
//   const isAdministrator = user?.roles.includes('ROLE_ADMINISTRATOR') ?? false;
//
//   const navigate = useNavigate();
//
//   const [editTourDialogOpen, setEditTourDialogOpen] = useState<boolean>(false);
//   const [deleteTourDialogOpen, setDeleteTourDialogOpen] = useState<boolean>(false);
//
//   return (
//     <>
//       <Card sx={{ maxWidth: 300, height: '100%', display: 'flex', flexDirection: 'column' }} className='card'
//             data-id={tour.id}>
//         <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
//           <Typography variant='h5' className='tour-title'>{tour.title}</Typography>
//           <Typography
//             variant='subtitle1'
//             className='tour-description'
//             sx={{ flexGrow: 1 }}
//           >
//             {tour.description}
//           </Typography>
//           <Typography variant='h6' className='tour-price' sx={{ textAlign: 'right' }}>${tour.price}</Typography>
//           <Typography variant='body2' className='tour-capacity'
//                       sx={{ textAlign: 'left' }}>Capacity: {tour.capacity}</Typography>
//         </CardContent>
//         <CardActions sx={{ justifyContent: 'space-between' }}>
//           <Button
//             startIcon={<InfoIcon/>}
//             onClick={() => navigate(`/tours/${tour.id}`)}
//             className='info-item'
//           >
//             Info
//           </Button>
//           {isAdministrator && (
//             <Box>
//               <Button
//                 startIcon={<EditIcon/>}
//                 color='warning'
//                 onClick={() => setEditTourDialogOpen(true)}
//                 className='edit-item'
//               >
//                 Edit
//               </Button>
//               <Button
//                 startIcon={<DeleteIcon/>}
//                 color='error'
//                 onClick={() => setDeleteTourDialogOpen(true)}
//                 className='delete-item'
//               >
//                 Delete
//               </Button>
//             </Box>
//           )}
//         </CardActions>
//       </Card>
//       <AddOrEditTourDialog
//         tour={tour}
//         open={editTourDialogOpen}
//         onClose={() => setEditTourDialogOpen(false)}
//       />
//       <DeleteTourDialog
//         tour={tour}
//         open={deleteTourDialogOpen}
//         onClose={() => setDeleteTourDialogOpen(false)}
//       />
//     </>
//   );
// };
//
// export default TourCard;
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography, Chip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import useAuth from '../../../../hooks/useAuth.ts';
import type { DisplayTourResponse } from '../../../../api/types/tour.ts';
import AddOrEditTourDialog from '../AddOrEditTourDialog/AddOrEditTourDialog.tsx';
import DeleteTourDialog from '../DeleteTourDialog/DeleteTourDialog.tsx';

interface TourCardProps {
    tour: DisplayTourResponse & { image?: string };
}

// Функција која враќа точна слика според името на турата
const getCityImage = (title: string, customImage?: string) => {
    if (customImage) return customImage;

    const t = title.toLowerCase();
    if (t.includes('paris')) return 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80';
    if (t.includes('rome')) return 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80';
    if (t.includes('barcelona')) return 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=600&q=80';
    if (t.includes('tokyo')) return 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80';
    if (t.includes('santorini')) return 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80';
    if (t.includes('iceland')) return 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=600&q=80';
    if (t.includes('egypt') || t.includes('pyramids')) return 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80';
    if (t.includes('new york')) return 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80';
    if (t.includes('bali')) return 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80';
    if (t.includes('cape town')) return 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80';

    // Дефолтна туристичка слика доколку нема совпаѓање
    return 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80';
};

const TourCard = ({ tour }: TourCardProps) => {
    const { user } = useAuth();
    const isAdministrator = user?.roles.includes('ROLE_ADMINISTRATOR') ?? false;

    const navigate = useNavigate();

    const [editTourDialogOpen, setEditTourDialogOpen] = useState<boolean>(false);
    const [deleteTourDialogOpen, setDeleteTourDialogOpen] = useState<boolean>(false);

    const tourImage = getCityImage(tour.title, tour.image);

    return (
        <>
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: 3,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: 8
                    }
                }}
                className='card'
                data-id={tour.id}
            >
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        component='img'
                        height='190'
                        image={tourImage}
                        alt={tour.title}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 12,
                            right: 12,
                            bgcolor: 'secondary.main',
                            color: 'white',
                            px: 2,
                            py: 0.6,
                            borderRadius: '20px',
                            fontWeight: 'bold',
                            boxShadow: 2,
                        }}
                    >
                        ${tour.price}
                    </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                    <Typography variant='h6' className='tour-title' sx={{ fontWeight: 'bold', mb: 1 }}>
                        {tour.title}
                    </Typography>

                    <Typography
                        variant='body2'
                        color='text.secondary'
                        className='tour-description'
                        sx={{
                            flexGrow: 1,
                            mb: 2,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}
                    >
                        {tour.description}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto', pt: 2, borderTop: '1px solid #f0f0f0' }}>
                        <Chip
                            icon={<PeopleIcon sx={{ fontSize: '18px !important' }} />}
                            label={`Капацитет: ${tour.capacity}`}
                            size='small'
                            variant='outlined'
                            sx={{ borderRadius: '8px' }}
                            className='tour-capacity'
                        />
                    </Box>
                </CardContent>

                <CardActions sx={{ px: 3, pb: 3, pt: 0, justifyContent: 'space-between', gap: 1 }}>
                    <Button
                        variant='contained'
                        size='small'
                        startIcon={<InfoIcon />}
                        onClick={() => navigate(`/tours/${tour.id}`)}
                        className='info-item'
                        sx={{ borderRadius: '8px', textTransform: 'none', flexGrow: 1 }}
                    >
                        Детали
                    </Button>

                    {isAdministrator && (
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Button
                                variant='outlined'
                                size='small'
                                startIcon={<EditIcon />}
                                color='warning'
                                onClick={() => setEditTourDialogOpen(true)}
                                className='edit-item'
                                sx={{ borderRadius: '8px', minWidth: '40px' }}
                            />
                            <Button
                                variant='outlined'
                                size='small'
                                startIcon={<DeleteIcon />}
                                color='error'
                                onClick={() => setDeleteTourDialogOpen(true)}
                                className='delete-item'
                                sx={{ borderRadius: '8px', minWidth: '40px' }}
                            />
                        </Box>
                    )}
                </CardActions>
            </Card>

            <AddOrEditTourDialog
                tour={tour}
                open={editTourDialogOpen}
                onClose={() => setEditTourDialogOpen(false)}
            />
            <DeleteTourDialog
                tour={tour}
                open={deleteTourDialogOpen}
                onClose={() => setDeleteTourDialogOpen(false)}
            />
        </>
    );
};

export default TourCard;