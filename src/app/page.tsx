import {
  AccText,
  Disclosure,
  DownloadText as DownText,
  Features,
  Featuretext,
  Hero,
  Button,
  Card,
  Contact,
  Footer,
} from "@/components/index";

export default function Home() {
  return (
    <>
      <Hero />
      <Featuretext />
      <div className="lg:flex lg:justify-center lg:items-centers">
        <Features />
      </div>
      <DownText />
      <Card />
      <AccText />
      <Disclosure />
      <div aria-label="button" className="flex items-center justify-center">
        <Button variant="mine" size="lg" className="py-4 mt-4 ">
          More Info
        </Button>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
