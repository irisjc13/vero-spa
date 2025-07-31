import { Contact2 } from "@/components/contact-page"

export default function ContactPage() {
  return (
          <Contact2 
        title="Contáctanos"
        description="Estamos disponibles para responder tus preguntas o agendar tu cita."
        phone="+57 302 2586139"
        web={{ label: "Agenda tu cita", url: "https://wa.me/573022586139" }}
      />
  )
}