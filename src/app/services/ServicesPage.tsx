import { Box, Button, Container, Divider, Paper, Typography } from "@mui/material"
import Navbar from "@/ui/Navbar"
import Image from "next/image"
import { Colors } from "@/ui/colors"
import Link from "next/link"

const deals = [
  { src: "img/deals/deal1.webp", alt: "Special deal 1" },
  { src: "img/deals/deal2.webp", alt: "Special deal 2" },
  { src: "img/deals/deal3.webp", alt: "Special deal 3" },
  { src: "img/deals/deal4.webp", alt: "Special deal 4" }
]

const services = [
  {
    title: "TIRES AND WHEELS",
    id: "tires-and-wheels",
    src: "/img/services/tires-and-wheels.webp",
    alt: "Tires and Wheels",
    text: <>Tire installation<br />Tire rotation<br />Wheel alignment<br />Wheel balancing </>,
  },
  {
    title: "DIAGNOSTICS",
    id: "diagnostics",
    src: "/img/services/diagnostics.webp",
    alt: "Diagnostics",
    text: <>Scanning<br />Trouble Codes<br />Multi-system diagnostics</>
  },
  {
    title: "EXHAUSTS SYSTEM",
    id: "exhausts-system",
    src: "/img/services/exhausts-system.webp",
    alt: "Exhausts system",
    text: <>Exhaust repairs<br />Exhaust rattles<br />Exhaust Leaks<br />Oxygen sensor issues </>
  },
  {
    title: "ELECTRICAL",
    id: "electrical",
    src: "/img/services/electrical.webp",
    alt: "Electrical",
    text: <>Electrical diagnosis<br />Battery testing<br />Power accessories replacement<br />Light bulb replacement </>
  },
  {
    title: "AUTO A/C",
    id: "auto-ac",
    src: "/img/services/auto-ac.webp",
    alt: "Auto A/C",
    text: <>A/C repair<br />A/C compressor diagnosis<br />Refrigerant leaks<br />Refrigerant recharge </>
  },
  {
    title: "SUSPENSION",
    id: "suspension",
    src: "/img/services/suspension.webp",
    alt: "Suspension",
    text: <>Ball joint replacement<br />Tie rod and shocks replacement<br />Struts replacement<br />Sway bar link replacement </>
  },
  {
    title: "ENGINE",
    id: "engine",
    src: "/img/services/engine.webp",
    alt: "Engine",
    text: <>Spark plugs replacement<br />Engine air filters replacement<br />Fuel pump and filter diagnosis<br />PCV valve replacement</>
  },
  {
    title: "OIL ENGINE",
    id: "oil-engine",
    src: "/img/services/oil-engine.webp",
    alt: "Oil engine",
    text: <>Oil change<br />Oil filter replacement
    </>
  },
  {
    title: "BRAKE SYSTEM",
    id: "brake-system",
    src: "/img/services/brake-system.webp",
    alt: "Brake system",
    text: <>Brake inspection<br />Brake pads replacement<br />Brake rotors replacement<br />Brake fluid replacement </>
  },
  {
    title: "MAINTENANCE",
    id: "maintenance",
    src: "/img/services/maintenance.webp",
    alt: "Maintenance",
    text: <>{"< 30 000 mile service"}<br />30 000 mile service<br />60 000 mile service<br />90 000 mile service </>
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar variant="white" />
      <Box component="main">
        <Container
          component="section"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            paddingTop: 6,
            paddingBottom: 10,
          }}
        >
          <Box>
            <Typography variant="h2">
              <b>SPECIALS</b>
            </Typography>

            <Divider sx={{ mt: 0.25 }} />
          </Box>

          <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }} gap={2}>
            {deals.map((deal, index) => (
              <Box key={`special-${index + 1}`} sx={{ position: "relative", aspectRatio: "9/16" }}>
                <Image
                  fill
                  src={deal.src}
                  alt={deal.alt}
                  style={{ objectFit: "cover" }}
                />
              </Box>
            ))}
          </Box>
        </Container>

        <Container
          component="section"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            paddingBottom: 16,
          }}
        >
          <Box>
            <Typography variant="h2">
              <b>SERVICES</b> WE PROVIDE
            </Typography>

            <Divider sx={{ mt: 0.25 }} />
          </Box>

          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: "repeat(2, 1fr)" }}
            gap={4}
          >
            {services.map((service) => (
              <Paper
                key={service.id}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 2,
                  padding: 2
                }}
              >
                <Box display="flex" flexDirection={"column"} gap={1}>
                  <Box display="flex" bgcolor={Colors.black} justifyContent="center">
                    <Typography variant="button" color={Colors.white} px={2} py={0.75}>
                      {service.title}
                    </Typography>
                  </Box>

                  <Typography>
                    {service.text}
                  </Typography>
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center">
                  <Image
                    src={service.src}
                    alt={service.alt}
                    width={120}
                    height={120}
                  />
                </Box>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  )
}
