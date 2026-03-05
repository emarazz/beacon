import { Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Colors } from "@/ui/colors";

const services = [
  { title: "TIRES AND WHEELS", id: "tires-and-wheels", src: "/img/services/tires-and-wheels.webp", alt: "Tires and Wheels" },
  { title: "DIAGNOSTICS", id: "diagnostics", src: "/img/services/diagnostics.webp", alt: "Diagnostics" },
  { title: "EXHAUSTS SYSTEM", id: "exhausts-system", src: "/img/services/exhausts-system.webp", alt: "Exhausts system" },
  { title: "ELECTRICAL", id: "electrical", src: "/img/services/electrical.webp", alt: "Electrical" },
  { title: "AUTO A/C", id: "auto-ac", src: "/img/services/auto-ac.webp", alt: "Auto A/C" },
  { title: "SUSPENSION", id: "suspension", src: "/img/services/suspension.webp", alt: "Suspension" },
  { title: "ENGINE", id: "engine", src: "/img/services/engine.webp", alt: "Engine" },
  { title: "OIL ENGINE", id: "oil-engine", src: "/img/services/oil-engine.webp", alt: "Oil engine" },
  { title: "BRAKE SYSTEM", id: "brake-system", src: "/img/services/brake-system.webp", alt: "Brake system" },
  { title: "MAINTENANCE", id: "maintenance", src: "/img/services/maintenance.webp", alt: "Maintenance" },
]

export default function FeaturedServices() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(5, 1fr)" },
        gap: 4,
      }}
    >
      {services.map((service) => (
        <Box key={service.id} display="flex" flexDirection="column" gap={2} alignItems="center">
          <Box display={{ xs: "none", sm: "block" }}>
            <Image
              src={service.src}
              alt={service.alt}
              width={80}
              height={80}
            />
          </Box>

          <Button
            variant="contained"
            LinkComponent={Link}
            href={`/services#${service.id}`}
            fullWidth
            sx={{
              borderRadius: 0,
              backgroundColor: Colors.black,
              color: Colors.white,
              "&:hover": {
                backgroundColor: Colors.yellow,
                color: Colors.black,
              },
            }}
          >
            {service.title}
          </Button>
        </Box>
      ))}
    </Box>
  )
}
