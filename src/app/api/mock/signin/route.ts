export async function POST(req: Request) {
  console.log("signin", req.body);

  return Response.json({
    email: "benfrajfakhreddine15@gmail.com",
    id: "1eeffdaghK2",
    name: "fakhreddine",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZmFraHJlZGRpbmUiLCJlbWFpbCI6ImJlbmZyYWpmYWtocmVkZGluZTE1QGdtYWlsLmNvbSJ9.Or-Ez9qCkAOrc45JEWMNjunLS18A3WfRnzXphWlHed0",
  });
}
