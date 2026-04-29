import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import ContactDetails from "@/components/contact/contact-details";
import ContactFormSection from "@/components/contact/contact-form-section";
import ContactServiceAreas from "@/components/contact/contact-service-areas";
import ContactCtaStrip from "@/components/contact/contact-cta-strip";

export default function ContactPage() {
  return (
    <>
      <SiteHeader light />
      <main>
        <PageHero
          eyebrow="Contact Crestline Painting"
          title="A clear, professional contact experience built for real project inquiries."
          copy="Reach out to Crestline Painting with your project type, service needs, location, and timing. The more detail provided up front, the easier it is to deliver a clear, useful first response for commercial, multi-family, strata, custom home, and maintenance work across British Columbia."
        />
        <ContactDetails />
        <ContactFormSection />
        <ContactServiceAreas />
        <ContactCtaStrip />
      </main>
      <SiteFooter />
    </>
  );
}