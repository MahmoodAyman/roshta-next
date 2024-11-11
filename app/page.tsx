import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* OTP Verifictation */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[469px]">
          <Image
            src="/assets/icons/Logo.png"
            height={1000}
            width={1000}
            alt="Roshta Logo"
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              &copy; Mahmoud Ayman 2024{" "}
            </p>
            <Link href="/?admin=true" className="text-blue-500 underline">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding.jpg"
        height={1000}
        width={1000}
        alt="onboarding in roshta"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
