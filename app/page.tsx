import { Hero } from "@/components/sections/Hero";
import { AutoScrollingGallery } from "@/components/sections/AutoScrollingGallery";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { IndustrySolutions } from "@/components/sections/IndustrySolutions";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { VideoCutout } from "@/components/sections/VideoCutout";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { GlobalMap } from "@/components/sections/GlobalMap";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <div className="bg-[var(--bg-primary)] transition-colors duration-500">
      <Hero />
      <AutoScrollingGallery />
      <ProductCategories />
      <FeaturedProducts />
      <IndustrySolutions />
      <ProjectShowcase />
      <VideoCutout />
      <AboutPreview />
      <GlobalMap />
      <ContactCTA />
    </div>
  );
}
