export async function POST(req: Request) {
  console.log("register", req.body);

  return Response.json({
    status: "success",
    message: "the user is registered",
  });
}
