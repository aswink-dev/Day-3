import connectDB from "../../../lib/mongodb";
import User from "../../../models/User";

// GET all users
export async function GET() {
  try {
    await connectDB();

    const users = await User.find();

    return Response.json(users, {
      status: 200,
    });
  } catch (error) {
    return Response.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

// POST new user
export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const newUser = await User.create({
      name: body.name,
      email: body.email,
    });

    return Response.json(
      {
        message: "User added successfully",
        data: newUser,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return Response.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}