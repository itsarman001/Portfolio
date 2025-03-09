import { Header, Footer, Hero, BaseContainer, BaseButton } from "../components";

export const MainLayout = () => {
  return (
    <main className="bg-background text-foreground mx-auto px-4 w-full lg:w-2/3 xl:w-1/2 pt-6 sm:pt-12">
      <Header />
      <section>
        <Hero />
        <BaseContainer />
        <BaseButton flat />
      </section>
      <Footer />
    </main>
  );
};
