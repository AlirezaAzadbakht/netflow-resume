import { useTranslations } from "use-intl";
import { SectionHeader } from "./SectionHeader";
import { SectionReveal } from "./SectionReveal";
import { TeamCard } from "./TeamCard";
import { team } from "@/data/team";

export function Team() {
  const t = useTranslations("team");

  return (
    <section id="team" className="scroll-mt-nav px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeader
            index="04"
            kicker={t("kicker")}
            title={t("title")}
            subtitle={<p>{t("subtitle")}</p>}
          />
        </SectionReveal>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <TeamCard key={m.id} member={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
