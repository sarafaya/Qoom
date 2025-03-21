import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );
  return (
    <section className="flex size-full flex-col gap-6 text-white font-bold">
      <div className="h-[200px] w-full rounded-[15px] bg-hero bg-cover bg-center">
        <div className="flex h-full flex-col justify-between max-md:px-4 max-md:py-6 lg:p-8">
          <h2 className="glassmorphism max-w-[220px] rounded py-1 text-center text-sm font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-extrabold lg:text-5xl">{time}</h1>
            <p className="text-base font-medium text-sky-1 lg:text-4xl">
              {date}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
