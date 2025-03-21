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
  const { id } = useParams();
  const { isLoaded } = useUser();

  // Prevent calling the hook if `id` is undefined
  if (!id) {
    return <Loader />;
  }

  const { call, isCallLoading } = useGetCallById(id);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  // Only render <Loader /> until both Clerk user data & call data are loaded
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
