import connectDB from "@/lib/mongodb";
import User from "@/models/User";

// GET single user
export async function GET(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const user = await User.findById(id);

    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

    return Response.json(user);
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}

// UPDATE user
export async function PUT(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    const { name, email, phone } = await request.json();

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, phone },
      { new: true, runValidators: true },
    );

    if (!updatedUser) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

    return Response.json(updatedUser);
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}

// DELETE user
export async function DELETE(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

    return Response.json({ message: "User deleted successfully" });
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}
