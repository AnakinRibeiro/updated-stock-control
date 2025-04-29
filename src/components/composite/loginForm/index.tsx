"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "../../ui/button";
import { InputText } from "@/components/ui/inputText";
import { Checkbox } from "@/components/ui/checkbox";
import { Rubik } from "next/font/google";

import { LoaderCircle } from "lucide-react";

const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
});

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (result?.ok) {
      router.push("/");
    } else {
      setError("Credenciais inválidas");
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col mt-[50px] gap-[35px]">
      <InputText
        model="primary"
        label="Email"
        value={email}
        width="large"
        onChange={(e) => setEmail(e.target.value)}
        required
        type="text"
        error={error}
      />
      <InputText
        model="primary"
        label="Password"
        value={password}
        width="large"
        onChange={(e) => setPassword(e.target.value)}
        required
        type="password"
        error={error}
      />

      <div className="flex justify-between items-center">
        <Checkbox
          checked={false}
          label="Remember Password"
          onInputChange={() => undefined}
        />

        <Link
          href="/"
          className={`${rubik.className} text-sm text-[color:#006db6]`}
        >
          Forgot Password
        </Link>
      </div>
      <Button
        type="submit"
        color="primary"
        title={!loading ? "Sign in" : ""}
        icon={loading && <LoaderCircle size={20} className="animate-spin" />}
        size="large"
      />
    </form>
  );
}
