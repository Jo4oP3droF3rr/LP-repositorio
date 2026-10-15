"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // Origem da campanha (utm_*) vai junto com o lead
    const utm = Object.fromEntries(
      [...new URLSearchParams(window.location.search)].filter(([k]) => k.startsWith("utm_")),
    );
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...utm, page: window.location.pathname }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p role="status" className="mt-10 max-w-lg rounded-md border border-white/20 bg-white/10 p-5 text-white">
        Pronto! Enviamos o próximo passo para o seu e-mail.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 max-w-lg">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="hero-email" className="sr-only">
          Seu e-mail
        </label>
        <input
          id="hero-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Seu melhor e-mail"
          className="h-14 w-full rounded-md border border-white/20 bg-white/10 px-4 text-white placeholder:text-white/50 focus:border-accent-400 focus:outline-none sm:flex-1"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="h-14 rounded-md bg-accent-400 px-7 font-semibold text-navy-950 transition hover:brightness-95 disabled:opacity-60"
        >
          {status === "sending" ? "Enviando..." : "Abrir conta grátis"}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="mt-3 text-sm text-red-300">
          Não foi possível enviar agora. Tente de novo em instantes.
        </p>
      )}
      <p className="mt-3 text-xs text-white/50">
        Sem custo de abertura. Ao continuar, você concorda com a{" "}
        <a href="#" className="underline underline-offset-2 hover:text-white">
          Política de Privacidade
        </a>
        .
      </p>
    </form>
  );
}
