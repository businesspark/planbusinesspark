import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

interface ContactFormProps {
  colorScheme?: "yellow" | "green" | "default";
}

const ContactForm = ({ colorScheme = "default" }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Contact Form Inquiry from ${values.name}`);
      const body = encodeURIComponent(
        `Name: ${values.name}\n` +
        `Email: ${values.email}\n` +
        `Phone: ${values.phone}\n\n` +
        `Message:\n${values.message}`
      );
      const mailtoLink = `mailto:sales@aaraamproperties.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      toast.success("Opening your email client... We'll get back to you soon!");
      
      // Reset form after a short delay
      setTimeout(() => {
        form.reset();
        setIsSubmitting(false);
      }, 500);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error. Please try again.");
      setIsSubmitting(false);
    }
  };

  const buttonClass = 
    colorScheme === "yellow" 
      ? "bg-planM-primary hover:bg-planM-accent" 
      : colorScheme === "green"
      ? "bg-planI-primary hover:bg-planI-accent"
      : "bg-primary hover:bg-primary/90";

  return (
    <div className="bg-card rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} className="rounded-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your.email@example.com" {...field} className="rounded-xl" />
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
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+91 00000 00000" {...field} className="rounded-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your requirements..."
                    className="min-h-[120px] rounded-xl resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${buttonClass} text-white py-6 text-lg rounded-xl transition-all hover:scale-[1.02]`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
