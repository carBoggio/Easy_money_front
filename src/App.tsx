// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { Navbar } from "./components/navbar/Navbar";
import { HomePage } from "@/pages/home";
/*import { RafflePage } from "@/pages/raffle";
import { AboutPage } from "@/pages/about";
import { BlogPage } from "@/pages/blog";
import { DocsPage } from "./pages/docs";
import { PricingPage } from "./pages/pricing";*/
import { Providers } from "./provider";
//import { ThemeProvider } from "./providers/ThemeProvider";

/*<Route path="/" element={<HomePage />} />
                <Route path="/raffle/:id" element={<RafflePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/pricing" element={<PricingPage />} />*/

const App = () => {
  return (
    //<ThemeProvider defaultTheme="system">
    <Router>
      <Providers>
        <div className="min-h-screen bg-background text-foreground">
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
        </div>
      </Providers>
    </Router>
    //</ThemeProvider>
  );
};

export default App;
