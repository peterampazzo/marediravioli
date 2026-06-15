import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Instagram, MapPin, Calendar, Utensils } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { BatchConfig } from "@/types/batch";

const signupSchema = z.object({
  name: z.string().min(2, { message: "Your name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().optional(),
  quantity: z.coerce.number().min(1).max(100),
  notes: z.string().optional(),
});

type SignupValues = z.infer<typeof signupSchema>;

interface OrderFormProps {
  batch: BatchConfig;
}

export default function OrderForm({ batch }: OrderFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", phone: "", quantity: 1, notes: "" },
  });

  const onSubmit = async (data: SignupValues) => {
    setIsSubmitting(true);
    try {
      await fetch("YOUR_FORMSPREE_ENDPOINT_URL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, batch: batch.nextPickupDate, filling: batch.nextFilling }),
      });
      setIsSuccess(true);
    } catch {
      toast({ variant: "destructive", title: "Something went wrong", description: "Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full bg-white border border-[#1D4E89]/15 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-[#1D4E89]/50 focus:ring-2 focus:ring-[#1D4E89]/10 transition-all";
  const labelClass = "block text-xs font-bold tracking-wide text-primary/60 mb-1.5 uppercase";
  const errorClass = "text-xs text-red-500 mt-1";

  return (
    <section id="pickup" className="py-14 bg-card">
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Upcoming Pickup</h2>
          <p className="text-foreground/60 text-base max-w-lg mx-auto">
            Reserve a spot and join the next community ravioli gathering in Copenhagen.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {batch.isSoldOut ? (
              <motion.div
                key="sold-out"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-3xl p-10 text-center shadow-sm border border-border"
                data-testid="sold-out-message"
              >
                <p className="text-5xl mb-4">🌊</p>
                <h3 className="font-bold text-2xl text-primary mb-2">This Batch Is Fully Reserved!</h3>
                <p className="text-foreground/60 mb-6 max-w-sm mx-auto leading-relaxed">
                  All spots are taken for this community gathering. Follow us on Instagram to be the first to know about the next batch!
                </p>
                <a
                  href="https://instagram.com/marediravioli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1D4E89] text-white font-bold px-6 py-3 rounded-full hover:bg-[#163d6e] transition-colors"
                  data-testid="button-sold-out-instagram"
                >
                  <Instagram size={16} /> Follow Our Community
                </a>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-5"
              >
                {/* Event card */}
                <div className="bg-[#1D4E89] rounded-2xl p-5 text-white flex flex-col sm:flex-row gap-5 sm:gap-8">
                  <div className="flex items-start gap-3">
                    <Calendar size={18} className="mt-0.5 shrink-0 text-white/60" />
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-0.5">Date</p>
                      <p className="font-bold text-sm">{batch.nextPickupDate}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-white/60" />
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-0.5">Pickup Location</p>
                      <p className="font-bold text-sm">Copenhagen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Utensils size={18} className="mt-0.5 shrink-0 text-white/60" />
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-0.5">Batch</p>
                      <p className="font-bold text-sm">{batch.nextFilling}</p>
                    </div>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.form
                      key="signup-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-border flex flex-col gap-5"
                    >
                      <h3 className="font-bold text-lg text-primary">Reserve Your Spot</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Your Name</label>
                          <input {...register("name")} placeholder="Jane Smith" className={inputClass} data-testid="input-name" />
                          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className={labelClass}>Email Address</label>
                          <input {...register("email")} placeholder="jane@example.com" className={inputClass} data-testid="input-email" />
                          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Phone (optional)</label>
                          <input {...register("phone")} placeholder="+45 12 34 56 78" className={inputClass} data-testid="input-phone" />
                        </div>
                        <div>
                          <label className={labelClass}>Number of Servings</label>
                          <input type="number" {...register("quantity")} min="1" max="100" placeholder="e.g. 2" className={inputClass} data-testid="input-quantity" />
                          <p className="text-[10px] text-foreground/40 mt-1.5">One serving ≈ 250g</p>
                          {errors.quantity && <p className={errorClass}>{errors.quantity.message}</p>}
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>Allergies or Notes</label>
                        <textarea
                          {...register("notes")}
                          placeholder="e.g. gluten-free, dairy-free, or any questions..."
                          rows={3}
                          className={`${inputClass} resize-none`}
                          data-testid="input-notes"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[#1D4E89] text-white font-bold rounded-full shadow-md hover:bg-[#163d6e] transition-colors disabled:opacity-50 text-sm"
                        data-testid="button-submit"
                      >
                        {isSubmitting ? "Sending…" : "Reserve a Pickup Spot 🍝"}
                      </button>

                      <p className="text-xs text-center text-foreground/40 -mt-2">
                        We'll confirm your spot via email. No delivery — pickup only in Copenhagen.
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-white rounded-3xl p-10 text-center shadow-sm border border-border"
                      data-testid="success-message"
                    >
                      <p className="text-5xl mb-4">🎉</p>
                      <h3 className="font-bold text-2xl text-primary mb-2">You're In!</h3>
                      <p className="text-foreground/60 mb-6 max-w-sm mx-auto leading-relaxed">
                        Your spot is reserved! We'll send you the pickup details by email. See you in Copenhagen!
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                          onClick={() => { reset(); setIsSuccess(false); }}
                          className="px-6 py-3 bg-[#EEF3FA] text-primary font-bold rounded-full hover:bg-[#dce9f7] transition-colors text-sm"
                          data-testid="button-reset"
                        >
                          Reserve Another Spot
                        </button>
                        <a
                          href="https://instagram.com/marediravioli"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1D4E89] text-white font-bold rounded-full hover:bg-[#163d6e] transition-colors text-sm"
                        >
                          <Instagram size={15} /> Follow Our Community
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
