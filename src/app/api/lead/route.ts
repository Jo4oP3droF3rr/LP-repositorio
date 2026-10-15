// Recebe os leads do formulário do hero.
// TODO: enviar para o CRM / ferramenta de automação (RD Station, HubSpot etc.).
export async function POST(req: Request) {
  const lead = await req.json().catch(() => null);
  const email = typeof lead?.email === "string" ? lead.email.trim() : "";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "E-mail inválido" }, { status: 400 });
  }

  console.log("[lead]", { ...lead, email, receivedAt: new Date().toISOString() });
  return Response.json({ ok: true });
}
