"use server";
import endpoints from "@/constants/endpoints";
import { ActionResponse } from "@/types/api";
import secureFetch from "@/utils/fetch";
export type Review = {
  id: number;
  name: string;
  avatar: string;
  score: number;
  text: string;
  date: string;
};
type Rating = {
  score: number;
  count: number;
};
export type GetRestaurantReviewsResponse = {
  ratings: { label: string; rating: Rating }[];
  rating: Rating;
  reviews: Review[];
};
export const getRestaurantReviewsById = async (id: string) => {
  const ratings = [
    { label: "Food", rating: { score: 4.5, count: 125 } },
    { label: "Service", rating: { score: 4, count: 325 } },
    { label: "Vibe", rating: { score: 5, count: 50 } },
  ];
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      avatar: "/avatar1.jpg",
      score: 5,
      text: "Delicious chicken burger! Loved the crispy chicken and the bun was perfectly toasted. Definitely a new favorite!",
      date: "2 days ago",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/avatar2.jpg",
      score: 4,
      text: "Loved the desserts! Will visit again. Delicious chicken burger! Loved the crispy chicken and the bun was perfectly toasted. Definitely a new favorite!",
      date: "1 week ago",
    },
    {
      id: 3,
      name: "John Doe",
      avatar: "/avatar1.jpg",
      score: 5,
      text: "Delicious chicken burger! Loved the crispy chicken and the bun was perfectly toasted. Definitely a new favorite!",
      date: "2 days ago",
    },
    {
      id: 4,
      name: "Jane Smith",
      avatar: "/avatar2.jpg",
      score: 4,
      text: "Loved the desserts! Will visit again. Delicious chicken burger! Loved the crispy chicken and the bun was perfectly toasted. Definitely a new favorite!",
      date: "1 week ago",
    },
    {
      id: 11,
      name: "John Doe",
      avatar: "/avatar1.jpg",
      score: 5,
      text: "Delicious chicken burger! Loved the crispy chicken and the bun was perfectly toasted. Definitely a new favorite!",
      date: "2 days ago",
    },
    {
      id: 12,
      name: "Jane Smith",
      avatar: "/avatar2.jpg",
      score: 4,
      text: "Loved the desserts! Will visit again. Delicious chicken burger! Loved the crispy chicken and the bun was perfectly toasted. Definitely a new favorite!",
      date: "1 week ago",
    },
    {
      id: 13,
      name: "John Doe",
      avatar: "/avatar1.jpg",
      score: 5,
      text: "Delicious chicken burger! Loved the crispy chicken and the bun was perfectly toasted. Definitely a new favorite!",
      date: "2 days ago",
    },
    {
      id: 14,
      name: "Jane Smith",
      avatar: "/avatar2.jpg",
      score: 4,
      text: "Loved the desserts! Will visit again. Delicious chicken burger! Loved the crispy chicken and the bun was perfectly toasted. Definitely a new favorite!",
      date: "1 week ago",
    },
  ];
  const resData = { ratings, rating: { score: 4.5, count: 125 }, reviews };
  return {
    ok: true,
    data: resData,
  } as ActionResponse<GetRestaurantReviewsResponse>;
};
