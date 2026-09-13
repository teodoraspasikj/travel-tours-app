// import './ToursPage.css';
// import { Box, Button, CircularProgress, ToggleButton, ToggleButtonGroup } from '@mui/material';
// import useAuth from '../../../../hooks/useAuth.ts';
// import useTours from '../../../../hooks/useTours.ts';
// import TourGrid from '../../../components/tour/TourGrid/TourGrid.tsx';
// import AddOrEditTourDialog from '../../../components/tour/AddOrEditTourDialog/AddOrEditTourDialog.tsx';
// import { useState } from 'react';
// import * as React from 'react';
//
// const ToursPage = () => {
//   const { user } = useAuth();
//   const isAdministrator = user?.roles.includes('ROLE_ADMINISTRATOR') ?? false;
//
//   const { tours, loading, availabilityFilter, setAvailabilityFilter } = useTours();
//
//   const [addTourDialogOpen, setAddTourDialogOpen] = useState<boolean>(false);
//
//   const handleAvailabilityFilterChange = (_event: React.MouseEvent<HTMLElement>, value: string | null) => {
//     setAvailabilityFilter(value ?? 'all');
//   };
//
//   return (
//     <Box className='tours-box'>
//       {loading && (
//         <Box className='progress-box'>
//           <CircularProgress/>
//         </Box>
//       )}
//       {!loading &&
//        <>
//          {isAdministrator && (
//            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
//              <Button
//                variant='contained'
//                color='primary'
//                onClick={() => setAddTourDialogOpen(true)}
//                className='add-item'
//              >
//                Add Tour
//              </Button>
//            </Box>
//          )}
//          <ToggleButtonGroup
//            exclusive
//            value={availabilityFilter}
//            onChange={handleAvailabilityFilterChange}
//            sx={{mb: 2}}
//          >
//            <ToggleButton className='all-tours' value='all' size='small'>
//              All
//            </ToggleButton>
//            <ToggleButton className='available-tours' value='available' size='small'>
//              Available
//            </ToggleButton>
//            <ToggleButton className='unavailable-tours' value='unavailable' size='small'>
//              Unavailable
//            </ToggleButton>
//          </ToggleButtonGroup>
//          <TourGrid tours={tours}/>
//          <AddOrEditTourDialog
//            open={addTourDialogOpen}
//            onClose={() => setAddTourDialogOpen(false)}
//          />
//        </>}
//     </Box>
//   );
// };
//
// export default ToursPage;
import './ToursPage.css';
import { Box, Button, CircularProgress, ToggleButton, ToggleButtonGroup, Typography, Container } from '@mui/material';
import useAuth from '../../../../hooks/useAuth.ts';
import useTours from '../../../../hooks/useTours.ts';
import TourGrid from '../../../components/tour/TourGrid/TourGrid.tsx';
import AddOrEditTourDialog from '../../../components/tour/AddOrEditTourDialog/AddOrEditTourDialog.tsx';
import { useState } from 'react';
import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FilterListIcon from '@mui/icons-material/FilterList';

const ToursPage = () => {
    const { user } = useAuth();
    const isAdministrator = user?.roles.includes('ROLE_ADMINISTRATOR') ?? false;

    const { tours, loading, availabilityFilter, setAvailabilityFilter } = useTours();
    const [addTourDialogOpen, setAddTourDialogOpen] = useState<boolean>(false);

    const handleAvailabilityFilterChange = (_event: React.MouseEvent<HTMLElement>, value: string | null) => {
        if (value !== null) {
            setAvailabilityFilter(value);
        }
    };

    return (
        <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', pb: 8 }}>
            {/* Мал привлечен банер на врвот */}
            <Box
                sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    py: 5,
                    px: 3,
                    mb: 4,
                    borderRadius: { xs: 0, md: '0 0 20px 20px' },
                    backgroundImage: 'linear-gradient(135deg, #1976d2 0%, #115293 100%)',
                    boxShadow: 2
                }}
            >
                <Container maxWidth="xl">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
                                <TravelExploreIcon fontSize="large" /> Истражете ги сите Тури
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.9, mt: 1 }}>
                                Пронајдете ја вашата следна дестинација, филтрирајте според достапност и резервирајте лесно.
                            </Typography>
                        </Box>

                        {isAdministrator && (
                            <Button
                                variant='contained'
                                color='secondary'
                                startIcon={<AddIcon />}
                                onClick={() => setAddTourDialogOpen(true)}
                                sx={{ px: 3, py: 1.2, borderRadius: '30px', fontWeight: 'bold', boxShadow: 3 }}
                            >
                                Додај нова тура
                            </Button>
                        )}
                    </Box>
                </Container>
            </Box>

            {/* Главна содржина и филтри */}
            <Container maxWidth="xl">
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <>
                        {/* Филтри и лента за пребарување */}
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4, flexWrap: 'wrap', gap: 2, bgcolor: 'white', p: 2, borderRadius: 3, boxShadow: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <FilterListIcon color="action" />
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    Филтрирај по статус:
                                </Typography>
                            </Box>

                            <ToggleButtonGroup
                                exclusive
                                value={availabilityFilter}
                                onChange={handleAvailabilityFilterChange}
                                size='small'
                                sx={{ '& .MuiToggleButton-root': { px: 3, borderRadius: '20px !important', mx: 0.5, fontWeight: 'bold' } }}
                            >
                                <ToggleButton value='all'>Сите</ToggleButton>
                                <ToggleButton value='available'>Достапни</ToggleButton>
                                <ToggleButton value='unavailable'>Недостапни</ToggleButton>
                            </ToggleButtonGroup>
                        </Box>

                        {/* Грид со тури */}
                        <TourGrid tours={tours} />

                        {/* Дијалог за додавање/измена */}
                        <AddOrEditTourDialog
                            open={addTourDialogOpen}
                            onClose={() => setAddTourDialogOpen(false)}
                        />
                    </>
                )}
            </Container>
        </Box>
    );
};

export default ToursPage;