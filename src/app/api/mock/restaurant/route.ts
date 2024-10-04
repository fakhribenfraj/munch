import { getRandomInt } from "@/utils/number";

export async function GET(req: Request) {
  const names = [
    "Dar el jeld",
    "bou el hech",
    "el ali",
    "pastacosi",
    "di nappoli",
  ];
  const images = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/24/4a/36/au-coeur-de-la-medina.jpg?w=600&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/a2/f8/56/un-bel-endroit.jpg?w=600&h=400&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/f4/6d/ea/el-ali-resto-cafe-culturel.jpg?w=600&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/03/11/f1/22/el-ali.jpg?w=600&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/bb/97/af/la-salle-ouverte-de-restaurant.jpg?w=600&h=400&s=1",
  ];

  const restArray = new Array(25).fill(1);
  return Response.json(
    restArray.map(() => ({
      name: names[getRandomInt(5)],
      images: images.slice(getRandomInt(5), 5),
      description:
        "Beautiful setting. We ordered Tunesian sparkling wine to start. Some other flat wine arrived, which took a long time to replace.",
    }))
  );
}
