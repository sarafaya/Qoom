import CallList from "@/components/CallList";

const Previous = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white font-bold">
      <h1>Previous</h1>
      <CallList type="ended" />
    </section>
  );
};

export default Previous;
