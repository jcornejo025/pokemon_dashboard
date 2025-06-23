'use client';
import { useSession } from 'next-auth/react';

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">
        {session ? `Welcome, ${session.user.email}` : 'Welcome to your Dashboard'}
      </h1>
      <p className="text-gray-600">This is your dashboard landing page.</p>
    </div>
  );
}
