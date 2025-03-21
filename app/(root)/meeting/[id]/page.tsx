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

  // ✅ Hook called at the top level with fallback for `id`
  const { call, isCallLoading } = useGetCallById(id || "");
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  // Conditional logic for UI rendering
  if (!id) {
    return <Loader />;
  }

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
