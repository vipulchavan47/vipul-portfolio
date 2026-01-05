const ContactSection = () => {
  const handleContact = () => {
    window.location.href = "mailto:vipulchavan3301@gmail.com";
  };

  return (
    <section id="contact" className="py-16 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <h3 
          className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          Let's Connect
        </h3>

        <div 
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "0.85s" }}
        >
          <h4 className="text-xl font-semibold text-foreground mb-4">
            Want to work together?
          </h4>
          <button
            onClick={handleContact}
            className="text-primary hover:text-primary/80 font-mono text-lg underline underline-offset-4 transition-colors"
          >
            vipulchavan3301@gmail.com
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
