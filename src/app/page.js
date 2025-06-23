"use client"; // Required for hooks in App Router

import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      <h1 className="text-2xl font-bold mb-4">
        {session ? `Welcome, ${session.user.email}` : "Please Sign In"}
      </h1>

      {session ? (
        <>
          <img src={session.user.image} alt="Profile" className="w-20 h-20 rounded-full mb-4" />
          <button
            onClick={() => signOut()}
            className="px-6 py-2 bg-red-500 text-white rounded-lg"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => signIn("google")}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg mb-2"
          >
            Sign in with Google
          </button>
          <button
            onClick={() => signIn("email")}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg"
          >
            Sign in with Email
          </button>
        </>
      )}
    </div>
  );
}
