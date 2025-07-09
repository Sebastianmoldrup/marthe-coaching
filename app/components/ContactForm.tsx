"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

type ContactFormProps = {
  setFormDataAction: React.Dispatch<React.SetStateAction<{ name: string; email: string; phone: string }>>;
}

export default function ContactForm({ setFormDataAction }: ContactFormProps) {

  const formSchema = z.object({
    name: z.string().min(2, {
      message: "feil",
    }),
    email: z.string().email({
      message: "Ugyldig e-postadresse",
    }),
    phone: z.string().min(8, {
      message: "Telefonnummer må være minst 8 tegn",
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert("Takk! Du hører fra meg snart 💌");
    setFormDataAction(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ditt fulle navn</FormLabel>
              <FormControl>
                <Input placeholder="Marthe coaching" {...field} />
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
                <Input placeholder="Marthe@coaching.com" {...field} />
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
              <FormLabel>Telefonnummer</FormLabel>
              <FormControl>
                <Input placeholder="12 34 56 78" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Bekreft og registrer deg</Button>
      </form>
    </Form>
  )
}
