import { motion } from "framer-motion";
import { BRAND_SLOGAN } from "@/config/brand";
import { IMPACT, PARTNER, formatCount } from "@/config/impact";

const partnerWork = [
  "Reef monitoring",
  "Survey dives",
  "Turtle hatchlings",
  "Mangroves",
  "Marine protected areas",
];

export default function About() {
  const stats = [
    { value: formatCount(IMPACT.ravioliMade), label: "ravioli made" },
    { value: `${formatCount(IMPACT.donatedDkk)} DKK`, label: "donated" },
    {
      value: formatCount(IMPACT.turtlesProtected),
      label: `baby turtles protected, ${IMPACT.turtlesPeriod}`,
    },
  ];

  return (
    <>
      {/* ── OUR STORY ── */}
      <section id="story" className="scroll-mt-20 py-14 bg-card">
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl aspect-[4/3] shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700&auto=format&fit=crop&q=80"
                srcSet="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=480&auto=format&fit=crop&q=80 480w, https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700&auto=format&fit=crop&q=80 700w, https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1000&auto=format&fit=crop&q=80 1000w"
                sizes="(min-width: 1024px) 45vw, 100vw"
                alt="A plate of freshly prepared pasta"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <span className="inline-block bg-[#EEF3FA] text-primary text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full self-start">
                Our story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-snug">
                How it started
              </h2>
              <p className="text-foreground/75 leading-relaxed">
                Elena and Val are two Italian friends living in Copenhagen. In
                early 2024 they went diving in the Philippines and saw how much
                life a reef holds, and how much of it is disappearing. Back home
                they wanted to do something about it. They both like cooking, so
                the idea came quickly: make ravioli, sell them, and give the
                profits to ocean conservation.
              </p>
              <p className="text-foreground/75 leading-relaxed">
                The first batch went out in May 2024 from a kitchen in Østerbro.
                Since then Sofia and Pietro have joined as volunteers, Elena has
                spent a winter volunteering with {PARTNER.name}, and the ravioli
                have gone from ricotta and spinach to porcini, pink beetroot
                dough and black kale. Every batch is still rolled by hand.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OUR MISSION ── */}
      <section
        id="mission"
        className="scroll-mt-20 py-14 bg-[#1D4E89] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            <circle cx="700" cy="50" r="200" fill="white" />
            <circle cx="50" cy="350" r="150" fill="white" />
          </svg>
        </div>
        <div className="container mx-auto px-5 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <span className="inline-block bg-white/15 text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full self-start">
                Where the money goes
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
                Ravioli for the ocean
              </h2>
              <p className="text-lg font-bold text-[#F4C542]">{BRAND_SLOGAN}</p>
              <p className="text-white/75 leading-relaxed">
                All the profits from every batch go to{" "}
                <a
                  href={PARTNER.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
                >
                  {PARTNER.name}
                </a>
                , a non-profit that works with coastal communities in the
                Philippines. Their teams run survey dives and reef monitoring,
                guard turtle nesting sites, plant mangroves and help villages
                manage their own marine protected areas.
              </p>
              <p className="text-white/75 leading-relaxed">
                Our donations have paid for survey dives that give local
                communities the data to manage their reefs, and between{" "}
                {IMPACT.turtlesPeriod} they helped{" "}
                {formatCount(IMPACT.turtlesProtected)} baby turtles reach the
                sea. We post every donation and what it paid for on Instagram.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                {partnerWork.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="overflow-hidden rounded-3xl aspect-[4/3] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=700&auto=format&fit=crop&q=80"
                  srcSet="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=480&auto=format&fit=crop&q=80 480w, https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=700&auto=format&fit=crop&q=80 700w, https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=1000&auto=format&fit=crop&q=80 1000w"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  alt="Sunlight over the sea and rocky coastline"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
              <dl className="grid grid-cols-3 gap-3" data-testid="impact-stats">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white/10 px-3 py-4 text-center"
                  >
                    <dt className="order-last text-xs leading-snug text-white/75">
                      {stat.label}
                    </dt>
                    <dd className="text-xl sm:text-2xl font-bold text-[#F4C542] leading-tight mb-1">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-xs text-white/60 text-center">
                Since May 2024, counted up to {IMPACT.asOf}.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
