import { getRestaurantById } from "@/actions/restaurants/getRestaurantById";
import Carousel from "@/components/custom/Carousel";
import RestaurantNavTabs from "@/components/custom/restaurant/RestaurantNavTabs";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import EmailIcon from "@mui/icons-material/Email";
import EventIcon from "@mui/icons-material/Event";
import PhoneIcon from "@mui/icons-material/Phone";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import RoomIcon from "@mui/icons-material/Room";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import { Box, Button, Grid, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: restaurant } = await getRestaurantById(id);
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      rows: 2,
      cols: 4,
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
      rows: 2,
      cols: 4,
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
      rows: 2,
      cols: 4,
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      rows: 2,
      cols: 4,
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      rows: 2,
      cols: 4,
    },

    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
      rows: 2,
      cols: 4,
    },
  ];
  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  return (
    <Stack spacing={2} sx={{ pb: 4 }}>
      <RestaurantNavTabs id={id} active="overview" />
      <Grid2 container spacing={4}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Carousel
            slidesToShow={1}
            centerMode
            autoplay
            autoplaySpeed={1000}
            infinite
          >
            {itemData.map((item) => (
              <Box
                key={item.title}
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 4,
                }}
              >
                <Image
                  width={400}
                  height={200}
                  src={`${item.img}?w=${400}&h=${200}&fit=crop&auto=format`}
                  alt={item.title}
                />
              </Box>
            ))}
          </Carousel>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }}>
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
        </Grid2>
      </Grid2>
    </Stack>
  );
}
