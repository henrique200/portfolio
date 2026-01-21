import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import { ContactRow } from "./ContactRow";

export function ContactInfoCard() {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 shadow">
      <p className="text-xs font-semibold text-white/60">Onde me encontrar</p>

      <div className="mt-3 grid gap-3">
        <ContactRow
          icon={<FiMail size={18} />}
          label="Email"
          value="sjosehenrique852@gmail.com"
          href="mailto:sjosehenrique852@gmail.com"
          display="sjosehenrique852@gmail.com"
        />

        <ContactRow
          icon={<FaLinkedin size={18} />}
          label="LinkedIn"
          value="https://www.linkedin.com/in/jose-henrique-silva-61227a1b4/"
          href="https://www.linkedin.com/in/jose-henrique-silva-61227a1b4/"
          display="jose-henrique-silva-desenvolvedor-frontend"
        />

        <ContactRow
          icon={<FaGithub size={18} />}
          label="GitHub"
          value="https://github.com/henrique200"
          href="https://github.com/henrique200"
          display="github.com/henrique200"
        />

        <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-3">
          <p className="text-xs font-semibold text-white/80">
            Preferência de contato
          </p>
          <p className="mt-1 text-xs text-white/60">
            Respondo mais rápido pelo LinkedIn 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
