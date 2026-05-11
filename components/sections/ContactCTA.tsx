"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, MessageCircle, Mail, Globe, ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { sendWhatsAppMessage } from "@/lib/utils";

const schema = z.object({
  name:    z.string().min(2, "Name is required"),
  email:   z.string().email("Enter a valid email"),
  phone:   z.string().optional(),
  company: z.string().optional(),
  country: z.string().optional(),
  message: z.string().min(10, "Please describe your requirements (min 10 chars)"),
});
type FormData = z.infer<typeof schema>;

export function ContactCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "contact_form" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section bg-[var(--bg-primary)] relative overflow-hidden transition-colors duration-500" ref={ref}>
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{ background: "radial-gradient(ellipse 60% 70% at 0% 50%, #3b82f6 0%, transparent 60%)" }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{ background: "radial-gradient(ellipse 40% 60% at 100% 50%, #06b6d4 0%, transparent 60%)" }} />

      <div className="container-axion relative">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

          {/* ── Left: copy + contacts ─────────────────────── */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">Get in Touch</span>
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }} className="text-[var(--text-primary)] mb-5">
              Let&apos;s Build the Next<br />
              <span className="text-gradient">Visual Experience</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25 }} className="text-[var(--text-secondary)] text-lg leading-relaxed mb-10 font-medium">
              Partner with Axion Technology for advanced visual technology solutions engineered for modern environments.
            </motion.p>

            {/* Contact methods */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }} className="space-y-3 mb-8">
              <a href="mailto:sales@axiontechnology.com"
                className="flex items-center gap-4 p-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 hover:border-blue-500/50 hover:bg-[var(--bg-primary)] transition-all duration-300 group shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Mail size={17} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-secondary)]/60 font-medium mb-0.5 uppercase tracking-tighter">Email Us</p>
                  <p className="text-[var(--text-primary)] text-sm font-bold group-hover:text-blue-500 transition-colors"
                    style={{ fontFamily: "var(--font-satoshi)" }}>
                    sales@axiontechnology.com
                  </p>
                </div>
                <ArrowRight size={15} className="ml-auto text-[var(--text-secondary)]/20 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </a>

              <a href="https://www.axiontechnology.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 hover:border-blue-500/50 hover:bg-[var(--bg-primary)] transition-all duration-300 group shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Globe size={17} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-secondary)]/60 font-medium mb-0.5 uppercase tracking-tighter">Website</p>
                  <p className="text-[var(--text-primary)] text-sm font-bold group-hover:text-blue-500 transition-colors"
                    style={{ fontFamily: "var(--font-satoshi)" }}>
                    www.axiontechnology.com
                  </p>
                </div>
                <ArrowRight size={15} className="ml-auto text-[var(--text-secondary)]/20 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </a>
            </motion.div>

            {/* WhatsApp */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 }}>
              <MagneticButton onClick={() => sendWhatsAppMessage()} strength={0.2}
                className="flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-sm transition-all shadow-xl"
                style={{ background: "linear-gradient(135deg,#2563eb,#128C7E)" }}>
                <MessageCircle size={20} />
                WhatsApp Inquiry
              </MagneticButton>
              <p className="text-[10px] text-[var(--text-secondary)]/40 mt-3 ml-2 font-bold uppercase tracking-widest">Typical response: 2 Hours</p>
            </motion.div>

            {/* Mini stat row */}
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.55 }}
              className="grid grid-cols-3 gap-3 mt-10">
              {[
                { val: "< 2hr", lbl: "Response time" },
                { val: "24/7",  lbl: "Support" },
                { val: "Free",  lbl: "Consultation" },
              ].map(s => (
                <div key={s.lbl} className="p-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 text-center backdrop-blur-sm">
                  <p className="text-xl font-black text-[var(--text-primary)] leading-none" style={{ fontFamily: "var(--font-satoshi)" }}>{s.val}</p>
                  <p className="text-[10px] text-[var(--text-secondary)]/50 mt-1.5 font-bold uppercase tracking-tighter">{s.lbl}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: form ──────────────────────────────── */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-[2rem] border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 backdrop-blur-xl p-8 lg:p-10 shadow-2xl">

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}>
                  <CheckCircle size={64} className="text-emerald-500" />
                </motion.div>
                <h3 className="text-2xl font-black text-[var(--text-primary)]" style={{ fontFamily: "var(--font-satoshi)" }}>
                  Inquiry Received!
                </h3>
                <p className="text-[var(--text-secondary)] text-sm max-w-xs leading-relaxed">
                  Thank you. Our engineering team will review your requirements and respond within 2 business hours.
                </p>
                <button onClick={() => setStatus("idle")}
                  className="mt-4 text-xs font-bold text-[var(--text-secondary)] hover:text-blue-500 border border-[var(--border-color)] px-6 py-2.5 rounded-full transition-all hover:bg-[var(--bg-primary)]">
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-[var(--text-primary)] font-black text-2xl mb-1" style={{ fontFamily: "var(--font-satoshi)" }}>
                    Request a Consultation
                  </h3>
                  <p className="text-[var(--text-secondary)]/60 text-sm">Fill out the form and our team will be in touch shortly.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-black text-[var(--text-secondary)]/60 mb-2 uppercase tracking-widest">Full Name *</label>
                      <input {...register("name")} placeholder="Your name"
                        className={`w-full px-5 py-3.5 rounded-xl bg-[var(--bg-primary)] border text-[var(--text-primary)] text-sm placeholder:text-[var(--text-secondary)]/20 outline-none transition-all shadow-inner
                          ${errors.name ? "border-red-500/60" : "border-[var(--border-color)] focus:border-blue-500/60"}`} />
                      {errors.name && <p className="text-[11px] text-red-500 font-bold mt-1.5">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-[var(--text-secondary)]/60 mb-2 uppercase tracking-widest">Email Address *</label>
                      <input {...register("email")} placeholder="your@company.com" type="email"
                        className={`w-full px-5 py-3.5 rounded-xl bg-[var(--bg-primary)] border text-[var(--text-primary)] text-sm placeholder:text-[var(--text-secondary)]/20 outline-none transition-all shadow-inner
                          ${errors.email ? "border-red-500/60" : "border-[var(--border-color)] focus:border-blue-500/60"}`} />
                      {errors.email && <p className="text-[11px] text-red-500 font-bold mt-1.5">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-black text-[var(--text-secondary)]/60 mb-2 uppercase tracking-widest">Phone Number</label>
                      <input {...register("phone")} placeholder="+973 XXXX XXXX"
                        className="w-full px-5 py-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-secondary)]/20 outline-none transition-all focus:border-blue-500/60 shadow-inner" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-[var(--text-secondary)]/60 mb-2 uppercase tracking-widest">Company Name</label>
                      <input {...register("company")} placeholder="Your company"
                        className="w-full px-5 py-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-secondary)]/20 outline-none transition-all focus:border-blue-500/60 shadow-inner" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-[var(--text-secondary)]/60 mb-2 uppercase tracking-widest">Country / Region</label>
                    <input {...register("country")} placeholder="Bahrain, UAE, UK…"
                      className="w-full px-5 py-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-secondary)]/20 outline-none transition-all focus:border-blue-500/60 shadow-inner" />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-[var(--text-secondary)]/60 mb-2 uppercase tracking-widest">Project Requirements *</label>
                    <textarea {...register("message")} rows={4}
                      placeholder="Describe your project — product type, quantity, application, timeline…"
                      className={`w-full px-5 py-3.5 rounded-xl bg-[var(--bg-primary)] border text-[var(--text-primary)] text-sm placeholder:text-[var(--text-secondary)]/20 outline-none transition-all resize-none shadow-inner
                        ${errors.message ? "border-red-500/60" : "border-[var(--border-color)] focus:border-blue-500/60"}`} />
                    {errors.message && <p className="text-[11px] text-red-500 font-bold mt-1.5">{errors.message.message}</p>}
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-3 text-red-500 text-[11px] font-bold bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                      <AlertCircle size={18} />
                      Something went wrong. Please try again or contact us via WhatsApp.
                    </div>
                  )}

                  <MagneticButton type="submit" disabled={status === "loading"} strength={0.2}
                    className="btn btn-primary w-full justify-center gap-2 py-4 text-sm font-black uppercase tracking-[0.2em]">
                    {status === "loading" ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white"
                      />
                    ) : (
                      <><Send size={18} /> Send Inquiry</>
                    )}
                  </MagneticButton>

                  <p className="text-[10px] font-bold text-[var(--text-secondary)]/30 text-center uppercase tracking-widest">
                    Secure & Confidential Inquiry
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
