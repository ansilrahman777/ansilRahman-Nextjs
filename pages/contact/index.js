import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../../variants";
import { ReactTyped } from "react-typed";
import { MailIcon, MapPin, PhoneIcon } from "lucide-react";
import Socials from "../../components/Socials";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwdMNY5Txwb18K0HFyAcSwvfb8_6EFcprOd8Q_vknWxJ6hRXT-r2kTRVt2YzZTtE4kngg/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Error submitting form");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="h-full mt-16">
      <div className="p-5 md:container flex-col xl:flex-row mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="hidden xl:flex flex-col m-auto p-10">
          <div className="flex flex-col justify-center">
            <div className="flex items-center text-2xl mb-4">
              Let&apos;s Work
              <span className="text-accent">Together.</span>
            </div>
            <p className=" max-w-[600px] text-justify">
              Feel free to reach out to discuss your ideas or projects, or if
              you have any inquiries. I&apos;m here to help and collaborate with
              you!
            </p>
          </div>
          <div className="flex flex-col mt-4 md:mt-10 gap-y-3 ">
            <div className="flex items-center gap-2 ">
              <MailIcon size={18} className="text-accent" />
              <div>ansilrahman777@gmail.com</div>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon size={18} className="text-accent" />
              <div>+91 8592959403</div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-accent" />
              <div>Kochi, Kerala, India</div>
            </div>
          </div>
          <div className="hidden mt-10 md:flex ">
            <Socials />
          </div>
        </div>

        {!submitted ? (
          <div className="flex flex-col w-full max-w-[700px] ">
            <motion.h2
              className="h2 text-[43px] text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Let&apos;s <span className="text-accent">connect.</span>
            </motion.h2>

            <motion.form
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit}
            >
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className="textarea"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className="btn border rounded-full border-white/50 max-w-[170px] px-8 transiton-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                disabled={submitting}
              >
                <span className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]">
                  Let&apos;s talk
                </span>
                <BsArrowRight />
              </button>
            </motion.form>
          </div>
        ) : (
          <div className="flex flex-col w-full max-w-[700px] ">
            <motion.h2
              className="h2 text-[52px] text-center mb-12"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Thank you for Connecting
              <ReactTyped
                strings={["...."]}
                typeSpeed={100}
                backSpeed={100}
                loop
                className="text-accent"
              />
            </motion.h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
