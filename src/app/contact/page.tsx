import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import ContactDetails from "@/components/contact/contact-details";
import ContactFormSection from "@/components/contact/contact-form-section";

export default function ContactPage() {
  return (
    <>
      <SiteHeader light />

      <main className="contact-page">
        <PageHero
          eyebrow="Contact"
          title="Let’s talk about your next painting project."
          copy="Contact Crestline Painting to discuss commercial, multi-family, strata, custom home, or interior painting projects across British Columbia."
          backgroundImage="/images/contact/contact-hero.jpg"
          backgroundPosition="center right"
          darkOverlay={false}
        />

        <ContactDetails />
        <ContactFormSection />
      </main>

      <SiteFooter />
    </>
  );
}