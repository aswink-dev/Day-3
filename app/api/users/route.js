//get
export async function GET() {
  const users = [
    { id: 1, name: "john", email: "john@gmail.com" },
    { id: 1, name: "rahul", email: "rahul@gmail.com" },
  ];
  return Response.json(users);
}

//post
export async function POST(req) {
  const body = await req.json();

  console.log("New user:", body);

  return Response.json({
    message: "User added successfully",
    data: body,
  });
}
