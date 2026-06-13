// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaLinkedin,
//   FaGithub,
//   FaPaperPlane,
// } from 'react-icons/fa';
// import { SiLeetcode } from 'react-icons/si';
// import SectionHeader from '../SectionHeader/SectionHeader';
// import styles from './Contact.module.css';

// const contactInfo = [
//   {
//     icon: <FaEnvelope />,
//     label: 'Email',
//     value: 'swapnilofficial08@gmail.com',
//   },
//   {
//     icon: <FaPhone />,
//     label: 'Phone',
//     value: '+91 9284850474',
//   },
//   {
//     icon: <FaMapMarkerAlt />,
//     label: 'Location',
//     value: 'Pune, India',
//   },
// ];

// const socialLinks = [
//   { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/swapnil-gandhale-206a46253', label: 'LinkedIn' },
//   { icon: <FaGithub />, href: 'https://github.com/SWAPY8', label: 'GitHub' },
//   { icon: <SiLeetcode />, href: 'https://leetcode.com/u/6aFOFsFi6w/', label: 'LeetCode' },
// ];

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }

//     if (!formData.subject.trim()) {
//       newErrors.subject = 'Subject is required';
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = 'Message is required';
//     }

//     return newErrors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     // Form submission logic would go here
//     console.log('Form submitted:', formData);
//     setFormData({ name: '', email: '', subject: '', message: '' });
//     setErrors({});
//   };

//   return (
//     <section id="contact" className={styles.contact}>
//       <SectionHeader
//         title="Get In Touch"
//         subtitle="Have a question or want to work together?"
//       />

//       <div className={styles.contactGrid}>
//         {/* Left Column — Info */}
//         <div className={styles.contactInfo}>
//           {contactInfo.map((item, index) => (
//             <motion.div
//               key={item.label}
//               className={styles.infoCard}
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//             >
//               <div className={styles.infoIcon}>{item.icon}</div>
//               <div>
//                 <p className={styles.infoLabel}>{item.label}</p>
//                 <p className={styles.infoValue}>{item.value}</p>
//               </div>
//             </motion.div>
//           ))}

//           <div className={styles.socialLinks}>
//             {socialLinks.map((link) => (
//               <motion.a
//                 key={link.label}
//                 href={link.href}
//                 className={styles.socialLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={link.label}
//                 whileHover={{ scale: 1.1, y: -3 }}
//                 transition={{ type: 'spring', stiffness: 300 }}
//               >
//                 {link.icon}
//               </motion.a>
//             ))}
//           </div>
//         </div>

//         {/* Right Column — Form */}
//         <motion.form
//           className={styles.contactForm}
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className={styles.formGroup}>
//             <label className={styles.formLabel} htmlFor="name">
//               Name
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               className={`${styles.formInput} ${
//                 errors.name ? styles.error : ''
//               }`}
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Your name"
//             />
//             {errors.name && (
//               <p className={styles.formError}>{errors.name}</p>
//             )}
//           </div>

//           <div className={styles.formGroup}>
//             <label className={styles.formLabel} htmlFor="email">
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               className={`${styles.formInput} ${
//                 errors.email ? styles.error : ''
//               }`}
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="your.email@example.com"
//             />
//             {errors.email && (
//               <p className={styles.formError}>{errors.email}</p>
//             )}
//           </div>

//           <div className={styles.formGroup}>
//             <label className={styles.formLabel} htmlFor="subject">
//               Subject
//             </label>
//             <input
//               id="subject"
//               name="subject"
//               type="text"
//               className={`${styles.formInput} ${
//                 errors.subject ? styles.error : ''
//               }`}
//               value={formData.subject}
//               onChange={handleChange}
//               placeholder="What's this about?"
//             />
//             {errors.subject && (
//               <p className={styles.formError}>{errors.subject}</p>
//             )}
//           </div>

//           <div className={styles.formGroup}>
//             <label className={styles.formLabel} htmlFor="message">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               className={`${styles.formTextarea} ${
//                 errors.message ? styles.error : ''
//               }`}
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Tell me about your project..."
//               rows={5}
//             />
//             {errors.message && (
//               <p className={styles.formError}>{errors.message}</p>
//             )}
//           </div>

//           <motion.button
//             type="submit"
//             className={styles.submitBtn}
//             whileHover={{ y: -2 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <FaPaperPlane /> Send Message
//           </motion.button>
//         </motion.form>
//       </div>
//     </section>
//   );
// }

//---------------------------------------------------------------------------------------

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './Contact.module.css';

// ─── REPLACE THESE WITH YOUR EMAILJS CREDENTIALS ───────────────────────────
const EMAILJS_SERVICE_ID  = 'service_y2fhrmu';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_hnzow8s';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'oT1FBEZmqSxBvOzYN';   // e.g. 'aBcDeFgHiJkLmNoP'
// ────────────────────────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'swapnilofficial08@gmail.com',
  },
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+91 9284850474',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Pune, India',
  },
];

const socialLinks = [
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/swapnil-gandhale-206a46253',
    label: 'LinkedIn',
  },
  {
    icon: <FaGithub />,
    href: 'https://github.com/SWAPY8',
    label: 'GitHub',
  },
  {
    icon: <SiLeetcode />,
    href: 'https://leetcode.com/u/6aFOFsFi6w/',
    label: 'LeetCode',
  },
];

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [formData, setFormData]   = useState(INITIAL_FORM);
  const [errors, setErrors]       = useState({});
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent]       = useState(false);
  const [sendError, setSendError] = useState('');

  // ── Validation ─────────────────────────────────────────────────────────────
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear the field error as soon as the user starts typing again
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }

    // Clear any previous send-level error too
    if (sendError) setSendError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSending(true);
    setSendError('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          subject:    formData.subject,
          message:    formData.message,
          reply_to:   formData.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSent(true);
      setFormData(INITIAL_FORM);
      setErrors({});

      // Auto-reset the success banner after 6 seconds
      setTimeout(() => setIsSent(false), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setSendError(
        "Something went wrong. Please try again or email me directly at swapnilofficial08@gmail.com"
      );
    } finally {
      setIsSending(false);
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <section id="contact" className={styles.contact}>
      <SectionHeader
        title="Get In Touch"
        subtitle="Have a question or want to work together?"
      />

      <div className={styles.contactGrid}>
        {/* ── Left Column — Info ─────────────────────────────────────────── */}
        <div className={styles.contactInfo}>
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              className={styles.infoCard}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={styles.infoIcon}>{item.icon}</div>
              <div>
                <p className={styles.infoLabel}>{item.label}</p>
                <p className={styles.infoValue}>{item.value}</p>
              </div>
            </motion.div>
          ))}

          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── Right Column — Form ────────────────────────────────────────── */}
        <motion.form
          className={styles.contactForm}
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Name */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`${styles.formInput} ${errors.name ? styles.error : ''}`}
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              disabled={isSending}
            />
            {errors.name && (
              <p className={styles.formError}>{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`${styles.formInput} ${errors.email ? styles.error : ''}`}
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              disabled={isSending}
            />
            {errors.email && (
              <p className={styles.formError}>{errors.email}</p>
            )}
          </div>

          {/* Subject */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className={`${styles.formInput} ${errors.subject ? styles.error : ''}`}
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              disabled={isSending}
            />
            {errors.subject && (
              <p className={styles.formError}>{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`${styles.formTextarea} ${errors.message ? styles.error : ''}`}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={5}
              disabled={isSending}
            />
            {errors.message && (
              <p className={styles.formError}>{errors.message}</p>
            )}
          </div>

          {/* Send-level error */}
          <AnimatePresence>
            {sendError && (
              <motion.p
                className={styles.sendError}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
              >
                {sendError}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Success banner */}
          <AnimatePresence>
            {isSent && (
              <motion.div
                className={styles.successBanner}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <FaCheckCircle className={styles.successIcon} />
                <span>Message sent! I'll get back to you soon.</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit button */}
          <motion.button
            type="submit"
            className={styles.submitBtn}
            whileHover={!isSending ? { y: -2 } : {}}
            whileTap={!isSending ? { scale: 0.98 } : {}}
            disabled={isSending}
          >
            {isSending ? (
              <>
                <span className={styles.spinner} aria-hidden="true" />
                Sending…
              </>
            ) : (
              <>
                <FaPaperPlane />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}