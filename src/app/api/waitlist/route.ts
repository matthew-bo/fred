import { NextRequest, NextResponse } from 'next/server';
import { collection, addDoc, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../../lib/firebase';
import { WaitlistFormData, ApiResponse } from '../../../../types/waitlist';

// Validation regex for email
const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

export async function POST(request: NextRequest) {
  try {
    const body: WaitlistFormData = await request.json();
    const { name, email, description } = body;

    // Validation
    if (!name || name.trim().length === 0) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: 'Name is required' },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: 'Name must be 100 characters or less' },
        { status: 400 }
      );
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: 'Please enter a valid email' },
        { status: 400 }
      );
    }

    if (description && description.length > 500) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: 'Description must be 500 characters or less' },
        { status: 400 }
      );
    }

    // Check for duplicate email
    const waitlistRef = collection(db, 'waitlist');
    const emailQuery = query(waitlistRef, where('email', '==', email.toLowerCase()));
    const existingDocs = await getDocs(emailQuery);

    if (!existingDocs.empty) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: '⚠️ This email is already signed up.' },
        { status: 409 }
      );
    }

    // Add to Firestore
    const docData = {
      name: name.trim(),
      email: email.toLowerCase(),
      description: description?.trim() || '',
      timestamp: serverTimestamp(),
    };

    const docRef = await addDoc(waitlistRef, docData);

    return NextResponse.json<ApiResponse>(
      { 
        success: true, 
        message: '✅ You\'re on the waitlist! We\'ll be in touch soon.',
        data: { id: docRef.id }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return NextResponse.json<ApiResponse>(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint for admin to view signups
export async function GET() {
  try {
    const waitlistRef = collection(db, 'waitlist');
    const snapshot = await getDocs(waitlistRef);
    
    const entries = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return NextResponse.json<ApiResponse>(
      { success: true, message: 'Waitlist entries retrieved', data: entries },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    return NextResponse.json<ApiResponse>(
      { success: false, message: 'Failed to fetch waitlist entries' },
      { status: 500 }
    );
  }
}
