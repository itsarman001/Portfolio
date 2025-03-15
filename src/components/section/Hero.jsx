import { BaseButton } from "../index";

export const Hero = () => {
  return (
    <section>
      <p className="text-md pb-0.5 font-heading">Hi there 👋, I'm</p>
      <h2 className="text-xl font-semibold pb-0.5 font-special">Md Arman</h2>
      <p className="pb-0.5">24, He/Him</p>
      <p className="pb-3.5">
        I craft solutions that merge technical expertise with a user-centric
        approach, delivering high-quality results that transform experiences.
        Driven by a relentless pursuit of innovation,
      </p>
      {/* <section>
        <BaseButton secondary>Resume</BaseButton>
      </section> */}
    </section>
  );
};
