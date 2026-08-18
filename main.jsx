import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CarFront,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  Facebook,
  FileText,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Tag,
  TradeIn,
  UserRound,
  X
} from "lucide-react";
import "./styles.css";

const PHONE = "0818435450";
const PHONE_DISPLAY = "081 843 5450";
const EMAIL = "embedzi@nttgroup.co.za";
const WHATSAPP = "27818435450";
const LOCATION = "90 Krogh Street, Louis Trichardt";
const INSTAGRAM = "https://www.instagram.com/mbedzi_ntt_motor_group/";
const FACEBOOK = "https://www.facebook.com/share/1FgHWpgwvN/?mibextid=wwXIfr";
const NTT = "https://www.nttgroup.co.za/";

const brands = [
  "Toyota", "Mercedes-Benz", "Isuzu", "Volkswagen", "Audi", "Kia",
  "Hyundai", "Suzuki", "Mahindra", "Ford", "Nissan", "Mazda",
  "BYD", "Honda", "Peugeot", "Citroën", "Jeep"
];

const brandLinks = {
  Toyota: "https://www.ntttoyota.co.za/",
  Volkswagen: "https://www.nttvw.co.za/",
  Nissan: "https://www.nttnissan.co.za/",
  Audi: "https://www.nttaudi.co.za/",
  Isuzu: "https://www.nttisuzu.co.za/",
  Suzuki: "https://www.nttsuzuki.co.za/",
  Ford: "https://www.nttford.co.za/",
  Kia: "https://www.nttkia.co.za/",
  Mazda: "https://www.nttmazda.co.za/",
  "Mercedes-Benz": "https://www.nttmercedes.co.za/",
  Mahindra: "https://www.nttmahindra.co.za/",
  BYD: "https://www.nttbyd.co.za/"
};

const benefits = [
  {
    icon: Search,
    title: "I source the right car",
    text: "Tell me what you want and I can help narrow down the right vehicle, specification and dealership."
  },
  {
    icon: ShieldCheck,
    title: "Backed by NTT",
    text: "Your enquiry connects to an established South African dealership network with multiple vehicle brands."
  },
  {
    icon: Banknote,
    title: "Finance & trade-ins",
    text: "Need finance or want to trade in your current vehicle? We can help you take the next step."
  },
  {
    icon: MapPin,
    title: "Nationwide reach",
    text: "Based in Louis Trichardt, with access to NTT dealerships and vehicles beyond your local area."
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    condition: "New",
    brand: "Isuzu",
    model: "",
    finance: "Yes",
    tradeIn: "No",
    message: ""
  });

  const whatsappMessage = useMemo(() => {
    const lines = [
      "Hello Phumudzo, I'd like help finding my dream car.",
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Email: ${form.email || "-"}`,
      `Vehicle: ${form.condition} ${form.brand}${form.model ? ` ${form.model}` : ""}`,
      `Finance: ${form.finance}`,
      `Trade-in: ${form.tradeIn}`,
      `Message: ${form.message || "-"}`
    ];
    return lines.join("\n");
  }, [form]);

  const setField = (e) => {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({
      name: "",
      phone: "",
      email: "",
      condition: "New",
      brand: "Isuzu",
      model: "",
      finance: "Yes",
      tradeIn: "No",
      message: ""
    });
  };

  return (
    <div className="site-shell">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span><CheckCircle2 size={15} /> Personal vehicle sourcing</span>
          <span><MapPin size={15} /> Louis Trichardt • Nationwide reach</span>
          <a href={`tel:${PHONE}`}><Phone size={15} /> {PHONE_DISPLAY}</a>
        </div>
      </div>

      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand-lockup" aria-label="Phumudzo Eugene Mbedzi home">
            <div className="ntt-mark">NTT</div>
            <div>
              <strong>NTT</strong>
              <span>MOTOR GROUP</span>
            </div>
          </a>

          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#brands" onClick={() => setMenuOpen(false)}>Brands</a>
            <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#finance" onClick={() => setMenuOpen(false)}>Finance</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>

          <a className="nav-cta" href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Phumudzo, I'd like help finding my dream car.")}`} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> WhatsApp Me
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-bg" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={16} /> THE DREAM CAR CONNECTOR</div>
              <h1>One consultant.<br /><span>So many ways</span> to find your car.</h1>
              <p className="hero-lead">
                I help you find new, demo and quality used vehicles through the NTT Motor Group network — with personal guidance from first enquiry to delivery.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#contact">Find My Car <ArrowRight size={19} /></a>
                <a className="button secondary" href={`tel:${PHONE}`}><Phone size={18} /> Call {PHONE_DISPLAY}</a>
              </div>
              <div className="hero-trust">
                <span><BadgeCheck size={18} /> NTT Motor Group</span>
                <span><BadgeCheck size={18} /> Multiple leading brands</span>
                <span><BadgeCheck size={18} /> Nationwide reach</span>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-photo">
                <img src="/images/phumudzo-1.jpeg" alt="Phumudzo Eugene Mbedzi, NTT Motor Group vehicle sales consultant" />
                <div className="photo-caption">
                  <span>Phumudzo Eugene Mbedzi</span>
                  <small>Vehicle Sales Consultant</small>
                </div>
              </div>
              <div className="hero-card-bottom">
                <div><Phone size={17} /><strong>{PHONE_DISPLAY}</strong></div>
                <div><Mail size={17} /><strong>{EMAIL}</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container stats-grid">
            <div><strong>65</strong><span>NTT dealerships nationwide*</span></div>
            <div><strong>New</strong><span>Demo & used vehicles</span></div>
            <div><strong>Finance</strong><span>Options available</span></div>
            <div><strong>1-on-1</strong><span>Personal consultant support</span></div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container about-grid">
            <div className="about-image">
              <img src="/images/phumudzo-2.jpeg" alt="Phumudzo Eugene Mbedzi in an NTT Motor Group showroom" />
              <div className="image-badge"><Star size={18} fill="currentColor" /> THE DREAM CAR CONNECTOR</div>
            </div>
            <div className="section-copy">
              <div className="eyebrow dark">ABOUT YOUR CONSULTANT</div>
              <h2>Personal service. <span>Big network.</span></h2>
              <p className="lead">
                I’m Phumudzo Eugene Mbedzi, a vehicle sales consultant passionate about connecting people with their dream cars.
              </p>
              <p>
                Instead of spending hours jumping between dealerships, tell me what you need. I’ll help you explore the right options across the NTT Motor Group network and guide you through the next steps.
              </p>
              <div className="contact-list">
                <a href={`tel:${PHONE}`}><span className="icon-box"><Phone /></span><span><small>Call me</small><strong>{PHONE_DISPLAY}</strong></span></a>
                <a href={`mailto:${EMAIL}`}><span className="icon-box"><Mail /></span><span><small>Email me</small><strong>{EMAIL}</strong></span></a>
                <div><span className="icon-box"><MapPin /></span><span><small>Based at</small><strong>{LOCATION}</strong></span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section dark-section">
          <div className="container">
            <div className="section-heading centered">
              <div className="eyebrow">THE NTT ADVANTAGE</div>
              <h2>More choice. Less <span>running around.</span></h2>
              <p>Use one personal point of contact to start your vehicle search, backed by a wider dealership network.</p>
            </div>
            <div className="benefit-grid">
              {benefits.map(({ icon: Icon, title, text }) => (
                <article className="benefit-card" key={title}>
                  <div className="benefit-icon"><Icon /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="brands" className="section brands-section">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow dark">OUR VEHICLE OPTIONS</div>
              <h2>Tell me the brand.<br /><span>I’ll help find the car.</span></h2>
              <p>These are the brands you can ask me about. Availability varies by dealership and stock.</p>
            </div>
            <div className="brand-grid">
              {brands.map((brand) => (
                <a
                  key={brand}
                  className="brand-tile"
                  href={brandLinks[brand] || `#contact`}
                  target={brandLinks[brand] ? "_blank" : undefined}
                  rel={brandLinks[brand] ? "noreferrer" : undefined}
                  onClick={(e) => {
                    if (!brandLinks[brand]) {
                      e.preventDefault();
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <span>{brand}</span>
                  <ArrowRight size={16} />
                </a>
              ))}
            </div>
            <p className="fine-print">Brand availability, dealership representation and stock can change. Ask Phumudzo to confirm the latest options.</p>
          </div>
        </section>

        <section className="section feature-section">
          <div className="container feature-card">
            <div className="feature-image">
              <img src="/images/phumudzo-2.jpeg" alt="Phumudzo Eugene Mbedzi with NTT Motor Group branding" />
            </div>
            <div className="feature-copy">
              <div className="eyebrow dark">YOUR SEARCH, SIMPLIFIED</div>
              <h2>From “I’m looking” to <span>“That’s my car.”</span></h2>
              <p>Whether you already know the exact model or only know your budget and lifestyle, start with a conversation.</p>
              <ul>
                <li><CheckCircle2 /> New vehicles</li>
                <li><CheckCircle2 /> Demo vehicles</li>
                <li><CheckCircle2 /> Quality used vehicles</li>
                <li><CheckCircle2 /> Finance enquiries</li>
                <li><CheckCircle2 /> Trade-in discussions</li>
                <li><CheckCircle2 /> Nationwide sourcing</li>
              </ul>
              <a className="button primary" href="#contact">Start My Search <ArrowRight size={19} /></a>
            </div>
          </div>
        </section>

        <section id="how" className="section how-section">
          <div className="container">
            <div className="section-heading centered">
              <div className="eyebrow dark">HOW IT WORKS</div>
              <h2>Three simple steps.</h2>
            </div>
            <div className="steps">
              <div className="step"><div className="step-number">01</div><Search /><h3>Tell me what you want</h3><p>Brand, model, body type, budget or simply describe your ideal car.</p></div>
              <div className="step"><div className="step-number">02</div><ClipboardCheck /><h3>I help source the options</h3><p>We narrow down suitable vehicles and the dealership options available to you.</p></div>
              <div className="step"><div className="step-number">03</div><CarFront /><h3>Move towards delivery</h3><p>Once you choose your vehicle, I help guide you through the purchase process.</p></div>
            </div>
          </div>
        </section>

        <section id="finance" className="section finance-section">
          <div className="container finance-grid">
            <div>
              <div className="eyebrow">FINANCE & TRADE-IN</div>
              <h2>Let’s make the numbers <span>make sense.</span></h2>
              <p>Finance options are available through NTT. If you’re buying with finance, I can help you understand the next step and what information you’ll need.</p>
              <div className="finance-points">
                <div><CircleDollarSign /> Finance enquiry</div>
                <div><TradeIn /> Trade-in discussion</div>
                <div><FileText /> Supporting documents</div>
                <div><ShieldCheck /> Secure process</div>
              </div>
              <p className="finance-note">Finance approval is subject to lender assessment and applicable terms and conditions.</p>
            </div>
            <div className="finance-card">
              <div className="finance-card-icon"><Banknote /></div>
              <h3>Ready to check your options?</h3>
              <p>Start your vehicle enquiry and tell me whether you need finance or have a vehicle to trade in.</p>
              <a className="button white" href="#contact">Start Finance Enquiry <ArrowRight size={18} /></a>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <div className="eyebrow dark">FIND YOUR DREAM CAR</div>
              <h2>Let’s start with <span>what you want.</span></h2>
              <p>Complete the short form. When you submit, WhatsApp opens with your enquiry ready to send directly to me.</p>
              <div className="direct-actions">
                <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Phumudzo, I'd like help finding my dream car.")}`} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp me</a>
                <a href={`tel:${PHONE}`}><Phone /> Call me</a>
                <a href={`mailto:${EMAIL}`}><Mail /> Email me</a>
              </div>
              <div className="socials">
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
                <a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
                <a href={NTT} target="_blank" rel="noreferrer" aria-label="NTT Motor Group website"><BadgeCheck /></a>
              </div>
            </div>

            <div className="form-card">
              {submitted ? (
                <div className="success">
                  <CheckCircle2 size={62} />
                  <h3>Your enquiry is ready.</h3>
                  <p>WhatsApp should have opened with your vehicle enquiry. Send the message to complete the handover.</p>
                  <button className="button dark-button" onClick={resetForm}>Submit another enquiry</button>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <div className="form-row">
                    <label>Full name<input name="name" required value={form.name} onChange={setField} placeholder="Your name" /></label>
                    <label>Phone number<input name="phone" required type="tel" value={form.phone} onChange={setField} placeholder="08X XXX XXXX" /></label>
                  </div>
                  <div className="form-row">
                    <label>Email address<input name="email" type="email" value={form.email} onChange={setField} placeholder="you@example.com" /></label>
                    <label>Vehicle condition<select name="condition" value={form.condition} onChange={setField}><option>New</option><option>Demo</option><option>Used</option></select></label>
                  </div>
                  <div className="form-row">
                    <label>Preferred brand<select name="brand" value={form.brand} onChange={setField}>{brands.map((b) => <option key={b}>{b}</option>)}<option>Other</option></select></label>
                    <label>Preferred model<input name="model" value={form.model} onChange={setField} placeholder="e.g. D-Max Double Cab" /></label>
                  </div>
                  <div className="form-row">
                    <label>Need finance?<select name="finance" value={form.finance} onChange={setField}><option>Yes</option><option>No</option><option>Not sure</option></select></label>
                    <label>Do you have a trade-in?<select name="tradeIn" value={form.tradeIn} onChange={setField}><option>No</option><option>Yes</option><option>Not sure</option></select></label>
                  </div>
                  <label>Message / requirements<textarea name="message" rows="4" value={form.message} onChange={setField} placeholder="Tell me your budget, colour, body type, must-have features or anything else that matters."></textarea></label>
                  <button className="submit-button" type="submit"><MessageCircle /> Send enquiry on WhatsApp</button>
                  <p className="privacy-note">By submitting, you choose to open WhatsApp with the information you entered so you can send it to Phumudzo.</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand-lockup footer-brand"><div className="ntt-mark">NTT</div><div><strong>NTT</strong><span>MOTOR GROUP</span></div></div>
            <p>Phumudzo Eugene Mbedzi<br />Vehicle Sales Consultant<br /><span>The Dream Car Connector</span></p>
          </div>
          <div>
            <h4>Contact</h4>
            <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span>{LOCATION}</span>
          </div>
          <div>
            <h4>Online</h4>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer">Facebook</a>
            <a href={NTT} target="_blank" rel="noreferrer">NTT Motor Group</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Phumudzo Eugene Mbedzi. All rights reserved.</span>
          <span>NTT Motor Group • Vehicle sales</span>
        </div>
      </footer>

      <div className="mobile-bar">
        <a href={`tel:${PHONE}`}><Phone size={18} /><span>Call</span></a>
        <a className="mobile-whatsapp" href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Phumudzo, I'd like help finding my dream car.")}`} target="_blank" rel="noreferrer"><MessageCircle size={19} /><span>WhatsApp</span></a>
        <a href="#contact"><CarFront size={18} /><span>Find My Car</span></a>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
