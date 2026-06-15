import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const orderSchema = z.object({
  name: z.string().min(2, { message: "Full name is required" }),
  phone: z.string().min(5, { message: "Phone number is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  quantity: z.coerce.number().min(1, { message: "Minimum 1" }).max(100, { message: "Maximum 100" }),
  pickupDate: z.string().min(1, { message: "Please select a pickup date" }),
  pickupTime: z.string().min(1, { message: "Please select a pickup time" }),
  notes: z.string().optional(),
});

type OrderFormValues = z.infer<typeof orderSchema>;

export default function OrderForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      quantity: 1,
      pickupDate: "",
      pickupTime: "",
      notes: "",
    },
  });

  const onSubmit = async (data: OrderFormValues) => {
    setIsSubmitting(true);
    try {
      await fetch("YOUR_FORMSPREE_ENDPOINT_URL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setIsSuccess(true);
    } catch {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "We couldn't send your order. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    form.reset();
    setIsSuccess(false);
  };

  return (
    <section id="order" className="py-24 bg-primary relative overflow-hidden">
      {/* Background wave decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="absolute top-0 w-full" viewBox="0 0 1440 120" fill="white" preserveAspectRatio="none">
          <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,48L1440,43L1440,0L0,0Z"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Place Your Order</h2>
          <p className="text-white/70 text-lg">Reserve your hand-made fresh ravioli — and help save the ocean.</p>
        </motion.div>

        <div className="bg-background rounded-3xl shadow-2xl border border-border/30 overflow-hidden relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="p-6 md:p-10"
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-bold">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Smith" {...field} className="bg-card/50" data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-bold">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 555 123 4567" {...field} className="bg-card/50" data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-bold">Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="jane@example.com" {...field} className="bg-card/50" data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-bold">Quantity of Ravioli</FormLabel>
                            <FormControl>
                              <Input type="number" min="1" max="100" placeholder="e.g. 50" {...field} className="bg-card/50" data-testid="input-quantity" />
                            </FormControl>
                            <FormDescription>Each serving ≈ 250g</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="pickupDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-bold">Pickup Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} className="bg-card/50" data-testid="input-pickup-date" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="pickupTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-bold">Pickup Time</FormLabel>
                            <FormControl>
                              <Input type="time" {...field} className="bg-card/50" data-testid="input-pickup-time" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-bold">Special Notes / Allergies</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="E.g. gluten-free, dairy-free, extra spicy..."
                              className="resize-none bg-card/50 min-h-[100px]"
                              {...field}
                              data-testid="input-notes"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-lg h-14 rounded-2xl font-black bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                      data-testid="button-submit-order"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">Sending your order...</span>
                      ) : (
                        <span className="flex items-center gap-2">Send Order <Send size={20} /></span>
                      )}
                    </Button>
                  </form>
                </Form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle className="w-12 h-12 text-primary" />
                </motion.div>
                <h3 className="text-3xl font-black text-primary mb-4">Thank You!</h3>
                <p className="text-lg font-semibold text-foreground mb-2">Your order has been received.</p>
                <p className="text-base text-muted-foreground mb-8 max-w-md">
                  We'll be in touch soon to confirm the details. Together, we're saving the oceans — one raviolo at a time.
                </p>
                <Button
                  onClick={resetForm}
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-primary/30 text-primary hover:bg-primary/5 font-bold"
                  data-testid="button-reset-order"
                >
                  Place another order
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
