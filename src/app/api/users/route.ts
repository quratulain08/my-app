// src/app/api/users/route.ts
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';

// GET: Fetch all users from the database.
export async function GET() {
  try {
    await connectToDatabase();
    const users = await User.find({}).select('-password');
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

// POST: Add a new user to the database.
export async function POST(req: Request) {
  try {
    // Extract the user fields from the request body.
    const { name, email, password, role } = await req.json();

    // Connect to the MongoDB database.
    await connectToDatabase();

    // Check if a user with the given email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User with this email already exists' }, { status: 400 });
    }

    // Create a new instance of the User model with the provided fields.
    const newUser = new User({ name, email, password, role });

    // Save the new user to the database.
    await newUser.save();

    // Return a success message as a JSON response.
    return NextResponse.json({ message: 'User registered successfully!' });
  } catch (error) {
    // If an error occurs during the process, log it and return a 500 status with an error message.
    console.error('Error registering user:', error);
    return NextResponse.json({ error: 'Failed to register user' }, { status: 500 });
  }
}

// DELETE: Remove a user from the database by their ID.
export async function DELETE(req: Request) {
  try {
    // Extract the user ID from the request body.
    const { id } = await req.json();

    // Connect to the MongoDB database.
    await connectToDatabase();

    // Use the Mongoose `findByIdAndDelete()` method to delete the user with the given ID.
    await User.findByIdAndDelete(id);

    // Return a success message indicating the user has been deleted.
    return NextResponse.json({ message: 'User deleted successfully!' });
  } catch (error) {
    // If an error occurs during the deletion, log it and return a 500 status with an error message.
    console.error('Error deleting user:', error);
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}