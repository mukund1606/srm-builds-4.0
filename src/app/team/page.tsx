function TeamPage() {
  return (
    <div className="flex min-h-[calc(100vh-4.1rem)] justify-center">
      <div className="flex w-[min(100%,_80rem)] flex-col gap-8 px-4 py-12 md:px-8 lg:px-12">
        <div className="flex flex-col gap-8">
          <h1 className="text-center text-4xl font-extrabold md:text-5xl">
            <span className="bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <div className="rounded-md text-center text-3xl font-bold opacity-60">
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
