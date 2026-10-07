import { motion } from "framer-motion";
import { useLocale } from "use-intl";
import type { TeamMember } from "@/data/team";

export function TeamCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const locale = useLocale() as "en" | "fa";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="overflow-hidden bg-ink-900/5">
        <img
          src={member.photo}
          alt={member.name[locale]}
          width={640}
          height={800}
          loading="lazy"
          decoding="async"
          className="aspect-[4/5] h-auto w-full object-cover grayscale transition duration-500 hover:grayscale-0"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink-900">
        {member.name[locale]}
      </h3>
      <p className="mt-1 text-sm text-ink-500">{member.role[locale]}</p>
    </motion.article>
  );
}
