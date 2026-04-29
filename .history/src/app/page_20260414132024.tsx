import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import HomeHero from "@/components/home/home-hero";
import HomeServicesPreview from "@/components/home/home-services-preview";
import HomeAboutPreview from "@/components/home/home-about-preview";
import HomeProjectsPreview from "@/components/home/home-projects-preview";
import HomeCta from "@/components/home/home-cta";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeHero />
        <HomeServicesPreview />
        <HomeAboutPreview />
        <HomeProjectsPreview />
        <HomeCta />
      </main>
      <SiteFooter />
    </>
  );
}