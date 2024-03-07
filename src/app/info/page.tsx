"use client";
import { useRouter } from "next/navigation";

function InfoPage() {
  const router = useRouter();

  return (
    <>
      <h1>Welcome to the Info Page</h1>
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

export default InfoPage;
