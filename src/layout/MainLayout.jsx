import { Header, Footer, Hero, BaseContainer, BaseButton } from "../components";

export const MainLayout = () => {
  return (
    <main>
      <Header />
      <Hero />
      <BaseContainer />
      <BaseButton flat />
      <Footer />
    </main>
  );
};
