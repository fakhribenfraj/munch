export async function GET(req: Request) {
  console.log("profile");

  return Response.json({
    email: "benfrajfakhreddine15@gmail.com",
    id: "1eeffdaghK2",
    name: "fakhreddine",
    birthdate: "15/06/1997",
    country: "tunisia",
  });
}
