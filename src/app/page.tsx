import NavigationLinks from "@/components/NavigationLinks";

function Home() {
  const links = [
    { url: "/about", text: "About" },
    { url: "/info", text: "Info" },
  ];

  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <NavigationLinks links={links} />
    </main>
  );
}
export default Home;
