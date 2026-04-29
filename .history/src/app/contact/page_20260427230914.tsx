import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import ContactFormSection from "@/components/contact/contact-form-section";
import ContactDetails from "@/components/contact/contact-details";

export default function ContactPage() {
  return (
    <>
      <SiteHeader light />

      <main className="contact-page">

        <PageHero
          eyebrow="Contact"
          title="Let’s talk about your next painting project."
          copy="Reach out to Crestline Painting to discuss commercial, multi-family, strata, custom home, or interior painting work across British Columbia."
        />

        {/* 🔥 TRUST / INFO FIRST */}
        <ContactDetails />

        {/* 🔥 FORM */}
        <ContactFormSection />

      </main>

      <SiteFooter />
    </>
  );
}