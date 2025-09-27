# AI Accountability Trainer - Waitlist Website Setup

## Quick Start

1. **Firebase Setup**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Firestore Database
   - Get your configuration credentials

2. **Environment Variables**
   - Create a `.env.local` file in the project root
   - Add your Firebase configuration:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

3. **Install Dependencies & Run**
   ```bash
   npm install
   npm run dev
   ```

## Firestore Database Structure

The app automatically creates a `waitlist` collection with documents containing:
- `id`: Auto-generated document ID
- `name`: User's name (string, max 100 chars)
- `email`: User's email (string, unique)
- `description`: Optional description (string, max 500 chars)
- `timestamp`: Server timestamp when submitted

## Features Implemented

✅ **Complete Landing Page**
- Hero section with signup form
- Value proposition (4 feature blocks)
- How it works (4-step process)
- Launch info section
- Footer with contact info

✅ **Waitlist Form**
- Name, email, description fields
- Client-side and server-side validation
- Duplicate email prevention
- Success/error feedback

✅ **API Endpoints**
- `POST /api/waitlist` - Add new signup
- `GET /api/waitlist` - Admin view (optional)

✅ **Responsive Design**
- Mobile-first approach
- Works on all screen sizes

## Next Steps

1. Configure Firebase project and add environment variables
2. Test the form functionality
3. Deploy to Vercel
4. Add analytics (optional)

## Admin Access

To view signups, you can:
1. Use Firebase Console dashboard
2. Access `GET /api/waitlist` endpoint (add authentication as needed)
3. Export data directly from Firestore

## Deployment

The app is ready to deploy to Vercel:
1. Connect your GitHub repository
2. Add environment variables in Vercel dashboard
3. Deploy

## Tech Stack

- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Firebase Firestore
- **Hosting**: Vercel (recommended)
