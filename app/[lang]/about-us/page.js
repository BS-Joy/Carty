import Image from "next/image";

const Page = () => {
  return (
    <div className="container py-16 flex flex-col items-center gap-10 px-8 xl:px-16">
      <div className="flex flex-col items-center">
        <h1 className="font-lato text-4xl text-center font-bold">About Us</h1>
        <p className="max-w-2xl text-center text-slate-500 dark:text-slate-400 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos mollitia
          nihil vitae voluptate, aut est expedita repellendus reprehenderit.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8">
        <Image
          src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="demo"
          width={400}
          height={300}
          className="rounded-lg"
        />
        <div className="">
          <p className="max-w-xl text-slate-500 dark:text-slate-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos totam nulla iste magni minima hic tenetur veniam
            mollitia, adipisci ratione, unde nostrum ea. Reprehenderit et totam,
            quaerat rem minus dolorum esse? Laboriosam ipsam est beatae,
            necessitatibus nihil magni repudiandae nisi?
          </p>
          <button
            className="mt-8 bg-primary border border-primary text-white px-6 py-2 font-medium 
                    rounded-md hover:shadow-night-button my-transition"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
