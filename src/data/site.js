export const siteName = "Thyra World";
export const founderName = "Shubham Salehria";

export const contactEmail = "shubham.salehria1994@gmail.com";
export const whatsappNumber = "918894303410";
export const whatsappDisplay = "+91 88943 03410";
export const whatsappBaseUrl = `https://wa.me/${whatsappNumber}`;

export const instagramHandle = "thyraworld";
export const instagramProfile = "https://www.instagram.com/thyraworld/";
export const shubhamInstagramHandle = "shubhamsalehria";
export const shubhamInstagramProfile = "https://www.instagram.com/shubhamsalehria/";

// Formspree endpoint backing every form on the site.
export const formspreeEndpoint = "https://formspree.io/f/xlgqojwk";

/**
 * The Contact page renders one form whose fields adapt to the chosen intent.
 * `value` is what lands in the Formspree submission, so keep these readable —
 * they become the subject line and the first thing you read in the email.
 */
export const enquiryTypes = [
  {
    value: "Product enquiry",
    label: "Product enquiry",
    blurb: "Ask about a product, colours, availability, or delivery.",
    cta: "Send enquiry",
  },
  {
    value: "Custom order",
    label: "Custom order",
    blurb: "Share a custom idea, or send a design from the Design Studio.",
    cta: "Send custom order",
  },
  {
    value: "Freelance crocheter",
    label: "Work with us",
    blurb: "You love crocheting and want to earn from it as a freelancer.",
    cta: "Send application",
  },
  {
    value: "Learn crochet",
    label: "Learn crochet",
    blurb: "Join the waitlist for lessons and the Thyra World community.",
    cta: "Join the waitlist",
  },
];

export function createWhatsAppLink(productName) {
  const message = productName
    ? `Hi Thyra World, I'm interested in ${productName}. Please share more details.`
    : "Hi Thyra World, I would like to enquire about your handmade products.";

  return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export function createMailtoLink(subject = "Enquiry from Thyra World website") {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;
}
