import Head from "next/head";
import MainLogo from "@/components/shared/MainLogo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Name</title>
      </Head>
      <div className="h-screen w-screen flex items-center justify-center">
        <MainLogo />
      </div>
    </>
  );
}
