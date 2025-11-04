"use client"

import { useActionState } from "react"
import { submitLead } from "../app/actions"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"

type State = { message?: string; ok?: boolean; errors?: Record<string, string> }

export default function ContactForm() {
  const [state, formAction, pending] = useActionState<State, FormData>(submitLead, {})

  return (
    <form action={formAction} className="rounded-xl border bg-card p-5 md:p-6 space-y-4">
      <h3 className="font-semibold text-lg">{"Solicitar Cotización"}</h3>
      <p className="text-sm text-muted-foreground">
        {"Complete el formulario y nuestro equipo técnico se comunicará con usted en menos de 24 horas."}
      </p>

      {/* Honeypot */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">{"Nombre Completo *"}</Label>
          <Input id="name" name="name" placeholder="Su nombre completo" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">{"Empresa"}</Label>
          <Input id="company" name="company" placeholder="Nombre de la empresa" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{"Email *"}</Label>
          <Input id="email" type="email" name="email" placeholder="email@empresa.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">{"Teléfono *"}</Label>
          <Input id="phone" name="phone" placeholder="+1 (555) 123-4567" required />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="country">{"País"}</Label>
          <Input id="country" name="country" placeholder="País donde se ubica el proyecto" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="tank">{"Tipo de Tanque y Aplicación"}</Label>
          <Input id="tank" name="tank" placeholder="Ej: Tanque de almacenamiento de petróleo, 500,000 galones" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="desc">{"Descripción del Proyecto *"}</Label>
          <Textarea
            id="desc"
            name="desc"
            placeholder="Dimensiones, condiciones operativas y requisitos..."
            required
            rows={5}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <Button type="submit" disabled={pending} className="bg-blue-600 hover:bg-blue-700 text-white">
          {pending ? "Enviando..." : "Enviar Solicitud de Cotización"}
        </Button>
        {state?.message && (
          <p className={state.ok ? "text-green-600 text-sm" : "text-red-600 text-sm"}>{state.message}</p>
        )}
      </div>
    </form>
  )
}
