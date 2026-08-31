import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Instagram, MapPin, Utensils } from "lucide-react";
import { formatPickupDate, getEffectiveBatchStatus } from "@/config/batch";
import { buildTallyEmbedUrl } from "@/config/tally";
import { SOCIAL_LINKS } from "@/config/social";
import type { BatchConfig } from "@/types/batch";

interface OrderFormProps {
  batch: BatchConfig;
  tallyFormUrl?: string;
}

const configuredTallyUrl = import.meta.env.VITE_TALLY_FORM_URL?.trim();

export default function OrderForm({
  batch,
  tallyFormUrl = configuredTallyUrl,
}: OrderFormProps) {
  const batchStatus = getEffectiveBatchStatus(batch);
  const pickupDate = formatPickupDate(batch);
  const tallyEmbedUrl = buildTallyEmbedUrl(batch, tallyFormUrl);

  const followCommunityLink = (
    <a
      href={SOCIAL_LINKS.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 bg-[#1D4E89] text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-[#163d6e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D4E89] transition-colors"
    >
      <Instagram size={15} aria-hidden="true" /> Follow Our Community
    </a>
  );

  return (
    <section id="pickup" className="scroll-mt-20 py-12 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Next Community Pickup
          </h2>
          <p className="text-foreground/65 text-sm max-w-md mx-auto">
            Request a spot for an upcoming batch and pick it up in Copenhagen
            after we confirm by email.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {batchStatus === "sold-out" ? (
              <motion.div
                key="sold-out"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-3xl p-8 text-center shadow-sm border border-border"
                data-testid="sold-out-message"
              >
                <p className="text-5xl mb-4" aria-hidden="true">
                  🌊
                </p>
                <h3 className="font-bold text-xl text-primary mb-2">
                  This Batch Is Fully Requested
                </h3>
                <p className="text-foreground/65 mb-6 text-sm leading-relaxed">
                  All available spots have been requested. Follow our community
                  to hear about the next batch.
                </p>
                {followCommunityLink}
              </motion.div>
            ) : batchStatus !== "open" ? (
              <motion.div
                key="closed"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-3xl p-8 text-center shadow-sm border border-border"
                data-testid="closed-message"
              >
                <p className="text-5xl mb-4" aria-hidden="true">
                  🍝
                </p>
                <h3 className="font-bold text-xl text-primary mb-2">
                  The Next Batch Is Being Planned
                </h3>
                <p className="text-foreground/65 mb-6 text-sm leading-relaxed">
                  We’ll share the next Copenhagen pickup date and filling as
                  soon as they’re confirmed.
                </p>
                {followCommunityLink}
              </motion.div>
            ) : !tallyEmbedUrl ? (
              <motion.div
                key="not-configured"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-3xl p-8 text-center shadow-sm border border-border"
                data-testid="form-unavailable-message"
              >
                <p className="text-5xl mb-4" aria-hidden="true">
                  📬
                </p>
                <h3 className="font-bold text-xl text-primary mb-2">
                  Online Requests Aren’t Open Yet
                </h3>
                <p className="text-foreground/65 mb-6 text-sm leading-relaxed">
                  The pickup is being prepared for online requests. Follow our
                  community for the opening announcement.
                </p>
                {followCommunityLink}
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-4"
              >
                <div className="bg-[#1D4E89] rounded-2xl p-4 flex flex-col gap-3 sm:flex-row sm:gap-0 sm:divide-x sm:divide-white/20">
                  <div className="flex items-center gap-3 sm:flex-1 sm:px-4">
                    <Calendar
                      size={16}
                      className="shrink-0 text-white/70"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-white/65 leading-none mb-0.5">
                        Date
                      </p>
                      <p className="font-bold text-white text-sm">
                        {pickupDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:flex-1 sm:px-4">
                    <MapPin
                      size={16}
                      className="shrink-0 text-white/70"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-white/65 leading-none mb-0.5">
                        Location
                      </p>
                      <p className="font-bold text-white text-sm">
                        {batch.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:flex-1 sm:px-4">
                    <Utensils
                      size={16}
                      className="shrink-0 text-white/70"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-white/65 leading-none mb-0.5">
                        Batch
                      </p>
                      <p className="font-bold text-white text-sm leading-tight">
                        {batch.filling}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-sm sm:p-4">
                  <iframe
                    src={tallyEmbedUrl}
                    title="Request a Mare di Ravioli pickup spot"
                    loading="lazy"
                    width="100%"
                    height="760"
                    className="block min-h-[760px] w-full border-0 sm:min-h-[700px]"
                    referrerPolicy="strict-origin-when-cross-origin"
                    data-testid="tally-form"
                  />
                </div>

                <p className="px-3 text-center text-xs leading-relaxed text-foreground/60">
                  Pickup only in Copenhagen. We use your details only to manage
                  this pickup and contact you about your request. The form is
                  securely processed by Tally in Europe.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
