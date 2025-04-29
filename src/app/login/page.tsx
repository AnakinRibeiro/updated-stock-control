import Image from "next/image";
import LoginForm from "@/components/composite/loginForm";
import localFont from "next/font/local";

const coreSans = localFont({
  src: "../../../public/fonts/CoreSansM65Bold.otf",
  display: "swap",
});

const din = localFont({
  src: "../../../public/fonts/DINCondensed-Light.ttf",
  display: "swap",
});

export default function LoginPage() {
  return (
    <div className="w-full h-screen flex items-center p-[10px] gap-[10px]">
      <div className="w-[40%] h-full flex items-center justify-center">
        <div className="w-[350px] flex flex-col">
          <Image
            src="oncrets-logo-black.svg"
            alt="Logo_Oncrets"
            width={160}
            height={60}
          />

          <div className="flex flex-col mt-[70px] gap-[20px] text-slate-800">
            <h1 className={`${coreSans.className} text-[36px]`}>
              Welcome Back
            </h1>
            <span className={`${din.className} text-[20px]`}>
              New to Oncrets?{" "}
              <strong className="text-[color:#006db6]">
                Create an account
              </strong>
              .
            </span>
          </div>

          <LoginForm />
        </div>
      </div>

      <div className="w-[60%] h-full relative rounded-xl">
        <Image
          src="/loginWpp.png"
          alt="Banner"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "12px",
          }}
          priority
        />
      </div>
    </div>
  );
}
