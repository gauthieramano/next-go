import type { Metadata } from "next";
import Signup from "@/components/Auth/Signup";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Signup Page | ${siteName}`,
  description: "This is Signup page description",
};

export default function SignupPage() {
  return (
    <>
      <Signup />
    </>
  );
}
