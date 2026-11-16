// Mascaramento de dados pessoais para logs. Nunca logue e-mail ou telefone em claro.

export function mascararEmail(email: string): string {
  if (typeof email !== "string") return "***";
  const [usuario = "", dominio = ""] = email.trim().split("@");
  if (!usuario || !dominio) return "***";
  const visivel = usuario.slice(0, 1);
  const pontoFinal = dominio.lastIndexOf(".");
  const tld = pontoFinal > 0 ? dominio.slice(pontoFinal) : "";
  return `${visivel}***@***${tld}`;
}

export function mascararTelefone(telefone: string): string {
  if (typeof telefone !== "string") return "***";
  const digitos = telefone.replace(/\D/g, "");
  if (digitos.length < 4) return "***";
  return `***${digitos.slice(-2)}`;
}

export function mascararIp(ip: string | null): string {
  if (!ip) return "sem-ip";
  if (ip.includes(":")) {
    const partes = ip.split(":");
    return `${partes.slice(0, 2).join(":")}:****`;
  }
  const partes = ip.split(".");
  if (partes.length !== 4) return "***";
  return `${partes[0]}.${partes[1]}.x.x`;
}
