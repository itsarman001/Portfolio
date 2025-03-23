import { Layout } from "./layouts/Layout";
import { ThemeProvider } from "@/components/theme-provider";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout />;
    </ThemeProvider>
  );
}

export default App;
