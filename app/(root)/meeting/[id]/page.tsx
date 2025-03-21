"use client";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import { Loader } from "lucide-react";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/hook/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function Meeting() {
  // Instead of destructuring `params`, use the `useParams` hook:
  const { id } = useParams();
  const { isLoaded, user } = useUser();
  if (!id) {
    return <Loader />;
  }
  const { call, isCallLoading } = useGetCallById(id);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  // Only render <Loader /> until both Clerk user data & call data are loaded
  // Wait for both the Clerk user to load AND the call to finish loading
  if (!isLoaded || isCallLoading) {
    return <Loader />;
  }

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
}
