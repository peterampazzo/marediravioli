import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { BatchConfig } from "@/types/batch";

const orderSchema = z.object({
  name: z.string().min(2, { message: "Full name is required" }),
  phone: z.string().min(5, { message: "Phone number is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  quantity: z.coerce.number().min(1, { message: "Minimum 1" }).max(100, { message: "Maximum 100" }),
  notes: z.string().optional(),
});

type OrderFormValues = z.infer<typeof orderSchema>;

interface OrderFormProps {
  batch: BatchConfig;
}

export default function OrderForm({ batch }: OrderFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: { name: "", phone: "", email: "", quantity: 1, notes: "" },
  });

  const onSubmit = async (data: OrderFormValues) => {
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

  const inputClass = "w-full bg-transparent border-b border-foreground/20 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-foreground/60 transition-colors";
  const labelClass = "block text-[10px] font-semibold tracking-[0.18em] uppercase text-foreground/50 mb-1";
  const errorClass = "text-xs text-secondary mt-1";

  return (
    <section id="order" className="py-24 bg-card border-t border-foreground/8">
      <div className="container mx-auto px-5 md:px-8 max-w-2xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-foreground/40 mb-3">Join the next batch</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground">Place Your Order</h2>
          <div className="w-12 h-px bg-foreground/20 mt-5" />
        </motion.div>

        <AnimatePresence mode="wait">
          {batch.isSoldOut ? (
            /* SOLD OUT */
            <motion.div
              key="sold-out"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="border border-foreground/12 p-10 text-center"
              data-testid="sold-out-message"
            >
              <p className="text-5xl mb-6">🌊</p>
              <h3 className="font-serif font-bold text-2xl text-foreground mb-3">Wow, Copenhagen!</h3>
              <p className="text-foreground/60 mb-8 max-w-sm mx-auto leading-relaxed">
                We are fully booked for this batch. Follow our Instagram to catch the next ravioli wave!
              </p>
              <a
                href="https://instagram.com/marediravioli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-[#FDFBF7] text-sm font-semibold tracking-wide transition-all hover:opacity-85"
                data-testid="button-sold-out-instagram"
              >
                <Instagram size={16} /> @marediravioli
              </a>
            </motion.div>
          ) : (
            /* ORDER FORM */
            <motion.div
              key="form-container"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Batch info */}
              <div className="border border-foreground/12 p-5 mb-8 bg-[#FDFBF7]/60 flex flex-col sm:flex-row gap-4 sm:gap-10">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-foreground/40 mb-1">Pickup date</p>
                  <p className="font-serif font-bold text-foreground">{batch.nextPickupDate}</p>
                </div>
                <div className="hidden sm:block w-px bg-foreground/12" />
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-foreground/40 mb-1">This batch filling</p>
                  <p className="font-serif font-bold text-foreground">{batch.nextFilling}</p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className={labelClass}>Full Name</label>
                        <input {...register("name")} placeholder="Jane Smith" className={inputClass} data-testid="input-name" />
                        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className={labelClass}>Phone Number</label>
                        <input {...register("phone")} placeholder="+45 12 34 56 78" className={inputClass} data-testid="input-phone" />
                        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className={labelClass}>Email Address</label>
                        <input {...register("email")} placeholder="jane@example.com" className={inputClass} data-testid="input-email" />
                        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className={labelClass}>Quantity of Ravioli</label>
                        <input type="number" {...register("quantity")} min="1" max="100" placeholder="e.g. 50" className={inputClass} data-testid="input-quantity" />
                        <p className="text-[10px] text-foreground/35 mt-1.5">Each serving ≈ 250g</p>
                        {errors.quantity && <p className={errorClass}>{errors.quantity.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Special Notes / Allergies</label>
                      <textarea {...register("notes")} placeholder="E.g. gluten-free, dairy-free..." rows={3}
                        className="w-full bg-transparent border-b border-foreground/20 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-foreground/60 transition-colors resize-none"
                        data-testid="input-notes" />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-foreground text-[#FDFBF7] text-sm font-semibold tracking-[0.1em] uppercase transition-all hover:opacity-85 disabled:opacity-40"
                      data-testid="button-submit-order"
                    >
                      {isSubmitting ? "Sending…" : "Send Order"}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="py-16 text-center border border-foreground/12"
                    data-testid="success-message"
                  >
                    <p className="text-4xl mb-6">🍝</p>
                    <h3 className="font-serif font-bold text-2xl text-foreground mb-3">Thank you!</h3>
                    <p className="text-foreground/60 mb-8 max-w-sm mx-auto leading-relaxed">
                      We received your order. We'll be in touch to confirm the details — see you at pickup!
                    </p>
                    <button
                      onClick={() => { reset(); setIsSuccess(false); }}
                      className="text-sm font-semibold tracking-[0.12em] uppercase text-foreground/50 border-b border-foreground/30 pb-0.5 hover:text-foreground transition-colors"
                      data-testid="button-reset-order"
                    >
                      Place another order
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
