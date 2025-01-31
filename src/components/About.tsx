export const About = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Our Company</h2>
            <p className="text-lg text-muted-foreground mb-4">
              With over 20 years of experience in property management, we provide comprehensive
              solutions for property owners and tenants alike.
            </p>
            <p className="text-lg text-muted-foreground">
              Our team of experts ensures that your property is well-maintained,
              efficiently managed, and continues to grow in value.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
              alt="Team meeting"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};