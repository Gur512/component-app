import Header from "./component/Header";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import Gallery from "./component/Gallery";

function App() {
  let title = "Code & Canvas";
  const heading = "Welcome to Code & Canvas";
  const subtitle = "Where logic meets creativity.";
  const firstbtn = "Get Started";
  const secondbtn = "View Projects";
  const brand = "© 2025 Code&Canvas. All rights Reserved.";
  const galleryTitle = "Visual Devlog";

  const navLinks = [
    {index: 0, name: 'About', url: 'https://www.componenets.com/about'},
    {index: 1, name: 'Projects', url: 'https://www.componenets.com/Project'},
    {index: 2, name: 'Contact', url: 'https://www.componenets.com/Contact'},
    {index: 3, name: 'Blog', url: 'https://www.componenets.com/Blog'}
  ];

  const footerLinks = [
    { index: 0, name: 'Privacy Policy', url: '#' },
    { index: 1, name: 'Terms of Service', url: '#' },
    { index: 2, name: 'GitHub', url: 'https://github.com/Gur512' }
  ];

  const galleryImages = [
    "https://img.freepik.com/free-vector/flat-hand-drawn-web-developers-illustration_23-2148842972.jpg",
    "https://img.freepik.com/premium-vector/vector-illustration-about-computer-programming-concept-software-game-development_675567-9011.jpg",
    "https://img.freepik.com/free-vector/custom-style-script-website-optimization-coding-software-development-female-programmer-cartoon-character-working-adding-javascript-css-code-vector-isolated-concept-metaphor-illustration_335657-2789.jpg",
    "https://img.freepik.com/free-vector/programmer-decorative-illustration-flat-design_23-2148244398.jpg"
  ];

  return (
    <>
      <Header title= {title} navLinks= {navLinks} />
      <main>
        <Banner heading={heading} subtitle={subtitle} firstbtn={firstbtn} secondbtn={secondbtn} />
      </main>
      <Gallery galleryTitle={galleryTitle} images={galleryImages} />
      <Footer brand={brand} links={footerLinks} />
   </>
  );
}

export default App;
