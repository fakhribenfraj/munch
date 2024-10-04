export async function POST(req: Request) {

  return Response.json({
    status: "success",
    message: "the user is registered",
  });
}
