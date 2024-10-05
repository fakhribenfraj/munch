export async function POST(req: Request) {
  const params: { username: string } = await req.json();
  return Response.json({
    email: params.username,
    id: "1eeffdaghK2",
    name: "fakhreddine",
    role: params.username.endsWith(".tn") ? "admin" : "user",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZmFraHJlZGRpbmUiLCJlbWFpbCI6ImJlbmZyYWpmYWtocmVkZGluZTE1QGdtYWlsLmNvbSJ9.Or-Ez9qCkAOrc45JEWMNjunLS18A3WfRnzXphWlHed0",
  });
}
