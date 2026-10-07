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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="card-surface shine-border group relative overflow-hidden p-6 text-center"
    >
      <div className="relative mx-auto h-32 w-32">
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.accent} blur-md opacity-60`}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
        />
        <div
          className={`relative h-full w-full overflow-hidden rounded-full bg-gradient-to-br ${member.accent} shadow-glow ring-4 ring-white`}
        >
          <img
            src={member.photo}
            alt={member.name[locale]}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-ink-900">
        {member.name[locale]}
      </h3>
      <p className="mt-1 text-sm font-medium text-brand-700">
        {member.role[locale]}
      </p>

      <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-brand-200/30 blur-2xl transition group-hover:bg-brand-300/40" />
    </motion.article>
  );
}
