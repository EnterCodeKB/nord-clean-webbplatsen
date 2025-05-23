import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "altan",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when field is being edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Namn krävs";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-post krävs";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Ogiltig e-postadress";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Meddelande krävs";
    }

    if (!formData.consent) {
      newErrors.consent = "Du måste godkänna behandling av dina uppgifter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(
        "Tack för ditt meddelande! Vi återkommer så snart som möjligt.",
        {
          duration: 5000,
        }
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "altan",
        message: "",
        consent: false,
      });
    } catch (error) {
      toast.error("Det gick inte att skicka meddelandet. Försök igen senare.", {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        className="bg-brand-blue py-12 md:py-20"
        aria-labelledby="contact-heading"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              id="contact-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Kontakta oss
            </h1>
            <p className="text-xl text-white/90">
              Vi hjälper dig gärna med dina frågor om våra tjänster
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-12 md:py-16 bg-white"
        aria-labelledby="contact-info-heading"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2
                  id="contact-info-heading"
                  className="text-2xl font-bold mb-6"
                >
                  Kontaktuppgifter
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-brand-blue mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Telefon</h3>
                      <a
                        href="tel:+46706273885"
                        className="text-gray-600 hover:text-brand-blue"
                      >
                        070 627 38 85
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-brand-blue mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">E-post</h3>
                      <a
                        href="mailto:kontakt@pwnord.se"
                        className="text-gray-600 hover:text-brand-blue"
                      >
                        kontakt@pwnord.se
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-brand-blue mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Adress</h3>
                      <address className="not-italic text-gray-600">
                        PWNORD AB 123 45 Stockholm
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-brand-blue mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Öppettider</h3>
                      <p className="text-gray-600">
                        Måndag-Fredag: 08:00-17:00
                      </p>
                      <p className="text-gray-600">Lördag-Söndag: Stängt</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Kontaktformulär</h2>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium">
                      Namn <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-brand-blue focus:outline-none ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-sm mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium">
                      E-post <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-brand-blue focus:outline-none ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-1 font-medium">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block mb-1 font-medium">
                      Tjänst
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:outline-none"
                    >
                      <option value="altan">Rengöring av altan</option>
                      <option value="terrass">Rengöring av terrass</option>
                      <option value="uteplats">Rengöring av uteplats</option>
                      <option value="fasad">Rengöring av gatan</option>
                      <option value="dack">Rengöring av däck</option>
                      <option value="annan">Annan tjänst</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-1 font-medium">
                      Meddelande <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-brand-blue focus:outline-none ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                    ></textarea>
                    {errors.message && (
                      <p
                        id="message-error"
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={handleCheckboxChange}
                        className={`h-4 w-4 text-brand-blue focus:ring-2 focus:ring-brand-blue border-gray-300 rounded ${
                          errors.consent ? "border-red-500" : ""
                        }`}
                        aria-invalid={!!errors.consent}
                        aria-describedby={
                          errors.consent ? "consent-error" : undefined
                        }
                      />
                    </div>
                    <div className="ml-2">
                      <label
                        htmlFor="consent"
                        className="text-sm font-medium text-gray-700"
                      >
                        Jag godkänner att PWNORD behandlar mina personuppgifter
                        enligt{" "}
                        <a
                          href="/integritetspolicy"
                          className="text-brand-blue hover:underline"
                        >
                          integritetspolicyn
                        </a>{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      {errors.consent && (
                        <p
                          id="consent-error"
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.consent}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="bg-brand-blue hover:bg-brand-darkblue transition-colors duration-200 w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Skickar..." : "Skicka meddelande"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
