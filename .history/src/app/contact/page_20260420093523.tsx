import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import ContactFormSection from "@/components/contact/contact-form-section";

export default function ContactPage() {
  return (
    <>
      <SiteHeader light />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Let’s talk about your next painting project."
          copy="Reach out to Crestline Painting to discuss commercial, multi-family, strata, custom home, or interior painting work across British Columbia."
        />
        <ContactFormSection />
      </main>
      <SiteFooter />
    </>
  );
}