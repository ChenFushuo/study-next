"use client";
import { useRouter } from "next/navigation";

function AboutPage() {
  const router = useRouter();

  return (
    <>
      <h1>Welcome to the About Page</h1>
      <button
        type="button"
        onClick={() => {
          router.push("/");
        }}>
        Home
      </button>
    </>
  );
}

export default AboutPage;
