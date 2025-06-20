import { GetRestaurantResponse } from "@/actions/restaurants/getRestaurantById";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import EmailIcon from "@mui/icons-material/Email";
import EventIcon from "@mui/icons-material/Event";
import PhoneIcon from "@mui/icons-material/Phone";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import RoomIcon from "@mui/icons-material/Room";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import { Box, Button, Grid2, Stack, Typography } from '@mui/material';

type RestaurantInfoProps = {
  restaurant: GetRestaurantResponse;
};
const RestaurantInfo = ({ restaurant }: RestaurantInfoProps) => {
  return (
    <Stack spacing={2} sx={{ flex: 1 }}>
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="body2" color="text.secondary">
        Hours
      </Typography>
      <Typography variant="body2" color="primary">
        Open now | Closes at 9:30 PM
      </Typography>
    </Box>

    {/* Description */}
    <Box mt={2}>
      <Typography variant="subtitle1" fontWeight="bold">
        Description
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Award-winning Italian restaurant specializing in authentic pasta
        and wood-fired pizzas
      </Typography>
    </Box>

    {/* Services */}
    <Box mt={2}>
      <Typography variant="subtitle1" fontWeight="bold">
        Services
      </Typography>
      <Grid2 container spacing={1} mt={1}>
        <Grid2 size={6}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<DeliveryDiningIcon />}
            size="small"
          >
            Delivery
          </Button>
        </Grid2>
        <Grid2 size={6}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<TakeoutDiningIcon />}
            size="small"
          >
            Take away
          </Button>
        </Grid2>
        <Grid2 size={6}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<RestaurantIcon />}
            size="small"
          >
            Dine-In
          </Button>
        </Grid2>
        <Grid2 size={6}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<EventIcon />}
            size="small"
          >
            Private Events
          </Button>
        </Grid2>
      </Grid2>
    </Box>

    {/* Contact Info */}
    <Box mt={2}>
      <Typography variant="subtitle1" fontWeight="bold">
        Restaurant Contact
      </Typography>
      <Box display="flex" alignItems="center" mt={1}>
        <RoomIcon fontSize="small" color="action" />
        <Typography ml={1} variant="body2" color="text.secondary">
          Tunis, Nabeul, Maaoura, 8013
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" mt={1}>
        <EmailIcon fontSize="small" color="action" />
        <Typography ml={1} variant="body2" color="text.secondary">
          Munch@gmail.com
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" mt={1}>
        <PhoneIcon fontSize="small" color="action" />
        <Typography ml={1} variant="body2" color="text.secondary">
          Mon-Fri (+216)12 122 122
        </Typography>
      </Box>
    </Box>
  </Stack>

  )
}

export default RestaurantInfo
