import CallList from "@/components/CallList";

const Recordings = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white font-bold">
      <h1>Recordings</h1>
      <CallList type="recordings" />
    </section>
  );
};

export default Recordings;
