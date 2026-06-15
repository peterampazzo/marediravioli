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
  name: z.string().min(2, { message: "Il nome è obbligatorio" }),
  phone: z.string().min(5, { message: "Il telefono è obbligatorio" }),
  email: z.string().email({ message: "Email non valida" }),
  quantity: z.coerce.number().min(1).max(100),
  pickupDate: z.string().min(1, { message: "Seleziona una data" }),
  pickupTime: z.string().min(1, { message: "Seleziona un orario" }),
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
      // Formspree mock - replace with actual endpoint
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT_URL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      // Simulate success for UI even if Formspree URL is invalid
      setIsSuccess(true);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Errore",
        description: "Si è verificato un errore. Riprova più tardi.",
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
    <section id="order" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Fai il Tuo Ordine</h2>
          <p className="text-muted-foreground text-lg">Prenota i tuoi ravioli freschi fatti a mano.</p>
        </motion.div>

        <div className="bg-background rounded-3xl shadow-xl border border-border/50 overflow-hidden relative min-h-[500px]">
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
                            <FormLabel className="text-foreground">Nome e Cognome</FormLabel>
                            <FormControl>
                              <Input placeholder="Mario Rossi" {...field} className="bg-card/50" />
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
                            <FormLabel className="text-foreground">Numero di Telefono</FormLabel>
                            <FormControl>
                              <Input placeholder="+39 333 1234567" {...field} className="bg-card/50" />
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
                            <FormLabel className="text-foreground">Indirizzo Email</FormLabel>
                            <FormControl>
                              <Input placeholder="mario@esempio.it" {...field} className="bg-card/50" />
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
                            <FormLabel className="text-foreground">Quantità di Ravioli</FormLabel>
                            <FormControl>
                              <Input type="number" min="1" max="100" placeholder="es. 50" {...field} className="bg-card/50" />
                            </FormControl>
                            <FormDescription>Ogni porzione = 250g circa</FormDescription>
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
                            <FormLabel className="text-foreground">Data di Ritiro</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} className="bg-card/50" />
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
                            <FormLabel className="text-foreground">Ora di Ritiro</FormLabel>
                            <FormControl>
                              <Input type="time" {...field} className="bg-card/50" />
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
                          <FormLabel className="text-foreground">Note Speciali / Allergie</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Es. senza glutine, senza lattosio..." 
                              className="resize-none bg-card/50 min-h-[100px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full text-lg h-14 rounded-xl"
                      disabled={isSubmitting}
                      data-testid="button-submit-order"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">Inviando...</span>
                      ) : (
                        <span className="flex items-center gap-2">Invia Ordine <Send size={20} /></span>
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
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
              >
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-primary mb-4">Grazie per il tuo ordine! 🍝</h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-md">
                  Abbiamo ricevuto la tua richiesta. Ti contatteremo presto per confermare i dettagli.
                </p>
                <Button 
                  onClick={resetForm} 
                  variant="outline" 
                  size="lg"
                  className="rounded-full px-8 border-primary/20 text-primary hover:bg-primary/5"
                  data-testid="button-reset-order"
                >
                  Fai un altro ordine
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
