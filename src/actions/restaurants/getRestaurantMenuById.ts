"use server";
import endpoints from "@/constants/endpoints";
import { ActionResponse } from "@/types/api";
import secureFetch from "@/utils/fetch";
export type Plate = {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
};

export type GetRestaurantMenuResponse = {
  title: string;
  items: Plate[];
};
export const getRestaurantMenuById = async (id: string) => {
  const resData = [
    {
      title: "Burger",
      items: [
        {
          id: "1",
          name: "Chicken Burger",
          price: 6.0,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        },
        {
          id: "2",
          name: "Beef Burger",
          price: 10.0,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        },
        {
          id: "3",
          name: "Chicken Burger",
          price: 6.0,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        },
        {
          id: "4",
          name: "Beef Burger",
          price: 10.0,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        },
        {
          id: "5",
          name: "Chicken Burger",
          price: 6.0,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        },
        {
          id: "6",
          name: "Beef Burger",
          price: 10.0,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        },
      ],
    },
    {
      title: "Noodles",
      items: [
        {
          id: "7",
          name: "Ramen Noodles",
          price: 15.0,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        },
        {
          id: "8",
          name: "Pho Noodles",
          price: 20.0,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        },
        {
          id: "9",
          name: "Chicken Burger",
          price: 6.0,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        },
        {
          id: "10",
          name: "Beef Burger",
          price: 10.0,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        },
      ],
    },
    {
      title: "Spaghettis",
      items: [
        {
          id: "11",
          name: "Spaghetti Penne",
          price: 12.0,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        },
        {
          id: "12",
          name: "Spaghetti Farfalle",
          price: 25.0,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        },
      ],
    },
    {
      title: "5maj",
      items: [
        {
          id: "13",
          name: "Fresh Fruit Donuts",
          price: 5.0,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        },
        {
          id: "14",
          name: "Rotini",
          price: 18.0,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        },
      ],
    },
  ];
  return { ok: true, data: resData ?? [] } as ActionResponse<
    GetRestaurantMenuResponse[]
  >;
};
