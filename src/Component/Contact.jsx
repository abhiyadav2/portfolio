  import React, { useRef } from "react";
  import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
  import emailjs from "emailjs-com";

  export default function Contact() {
    const formRef = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_5j9ix5u",
          "template_dsp5l1j",
          formRef.current,
          "kEuD0Yl8L1zdP0PJM"
        )
        .then(() => alert("Message sent successfully!"))
        .catch((err) => alert("Message failed!"));
    };

    return (
      <section id="contact" className="min-h-screen px-6 py-24  text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT FORM */}
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/20">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">

              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg outline-none"
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg outline-none"
              />

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg outline-none"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT INFORMATION */}
          <div className="flex flex-col justify-center space-y-6 text-gray-200">

            <p className="text-lg">
              Want to collaborate or need help?  
              <br />I'm always open to new ideas and projects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="flex gap-3">
                <Phone className="w-6 h-6" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-300">+91 7992153750</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="w-6 h-6" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-300">krishnayadavabc123@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-3">
                <MessageCircle className="w-6 h-6" />
                <div>
                  <h4 className="font-semibold">Whatsapp</h4>
                  <p className="text-gray-300">7992153750</p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="w-6 h-6" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-300">
                    GAURI SHANKAR NAGAR , MASRANI LANE ,HALAV POOL, KURLA WEST , MUMBAI, 400070
                  </p>
                </div>
              </div>
            </div>

            <iframe
              className="w-full h-64 rounded-xl border border-white/20"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5140.8812469752365!2d72.88538032364094!3d19.073815190987773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1778423207981!5m2!1sen!2sin"
            ></iframe>

          </div>
        </div>
      </section>
    );
  }
 