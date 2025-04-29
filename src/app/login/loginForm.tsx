"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Button } from "../../components/ui/button";
import { InputText } from "@/components/ui/inputText";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

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
      />
      <InputText
        model="primary"
        label="Password"
        value={password}
        width="large"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" color="primary" title="Sign in" size="large" />
    </form>
  );
}
