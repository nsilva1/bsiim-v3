import {
  ShieldCheck,
  BookOpen,
  Briefcase,
  TrendingUp,
  Users,
  Globe,
  Target,
  Award
} from 'lucide-react';

export const metadata = {
  title: 'About Us | Amethyst International BSIIM Ltd',
  description: 'Learn about our mission, vision, and core models designed to cultivate visionary leaders and empower individuals through knowledge and intelligent investment.',
}

const AboutUs = () => {
  const coreSpecialties = [
    { title: "Security & Intelligence", icon: <ShieldCheck className="w-6 h-6" />, desc: "Global expertise in safety, intelligence, HUINT, and security consciousness." },
    { title: "Transformative Education", icon: <BookOpen className="w-6 h-6" />, desc: "Innovative career advancement and human capital development programs." },
    { title: "Business Consultancy", icon: <Briefcase className="w-6 h-6" />, desc: "Strategic operations design and institutional capacity building." },
    { title: "Wealth Empowerment", icon: <TrendingUp className="w-6 h-6" />, desc: "Sustainable financial solutions through our proprietary BSIIM framework." }
  ];

  const values = [
    { name: "Integrity", text: "Upholding honesty and transparency in all dealings." },
    { name: "Excellence", text: "Delivering world-class performance in every service." },
    { name: "Innovation", text: "Pioneering creative, intelligent, and adaptable solutions." },
    { name: "Empowerment", text: "Building capacity and confidence through education." }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans leading-relaxed">
      {/* Hero Section */}
      <section className="relative bg-slate-950 py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4">
            Amethyst International BSIIM Ltd
          </h1>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Building Intelligent People for a <span className="text-indigo-500">Prosperous Society</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            A dynamic platform merging enterprise, empowerment, and ethical investment to transform individual potential into sustainable prosperity.
          </p>

        </div>
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/10 blur-3xl rounded-full -mr-20 -mt-20"></div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-slate-900">Who We Are</h3>
            <p className="text-lg text-slate-600 mb-6">
              Amethyst International BSIIM Ltd is a multifaceted organization passionately committed to advancing global conferences, exhibitions, and training programs.
            </p>
            <p className="text-slate-600 mb-8">
              Through extensive research into socio-economic realities, we unlock latent potential within individuals and organizations, promoting inclusive growth across sectors. We believe work is the foundation of progress and success is achieved through discipline and continuous learning.
            </p>
            <div className="bg-slate-50 p-6 border-l-4 border-indigo-600 italic text-slate-700">
              "We are not just building businesses—we are building people, communities, and nations".
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {coreSpecialties.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="text-indigo-600 mb-4">{item.icon}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The BSIIM Framework Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Our Core Models</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            The Business Success Intelligent Initiative Model (BSIIM) is our comprehensive platform for human capacity building and wealth creation.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <Target className="text-indigo-600 mb-4" />
            <h4 className="text-xl font-bold mb-4">ALTI</h4>
            <p className="text-slate-600 text-sm mb-4">
              Amethyst Leadership Training Initiative—cultivating visionary leaders who drive socio-economic transformation.
            </p>
            <ul className="text-xs text-indigo-600 font-bold space-y-2 uppercase tracking-wider">
              <li>• Ethics & Integrity</li>
              <li>• Strategic Innovation</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-indigo-600">
            <Globe className="text-indigo-600 mb-4" />
            <h4 className="text-xl font-bold mb-4">Asset Solutions</h4>
            <p className="text-slate-600 text-sm mb-4">
              Enabling property ownership and high-yield investments through creative finance and structured plans.
            </p>
            <ul className="text-xs text-indigo-600 font-bold space-y-2 uppercase tracking-wider">
              <li>• Real Estate Model</li>
              <li>• Investment ROI</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <Award className="text-indigo-600 mb-4" />
            <h4 className="text-xl font-bold mb-4">Career Growth</h4>
            <p className="text-slate-600 text-sm mb-4">
              Helping individuals transition to suitable roles while developing essential workplace productivity skills.
            </p>
            <ul className="text-xs text-indigo-600 font-bold space-y-2 uppercase tracking-wider">
              <li>• EdW-Career Model</li>
              <li>• JS-Resource Model</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-16">Our Core Values</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i}>
              <h4 className="text-indigo-600 font-black text-4xl mb-2 opacity-20">{i + 1}</h4>
              <h5 className="font-bold text-xl mb-2 italic underline underline-offset-4 decoration-indigo-400">{v.name}</h5>
              <p className="text-sm text-slate-500">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Goals & Conclusion */}
      <section className="bg-indigo-900 py-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <Users className="mx-auto mb-6 opacity-50" size={48} />
          <h3 className="text-3xl md:text-4xl font-bold mb-8 italic">
            "Empowering individuals through knowledge, leadership, and intelligent investment".
          </h3>
          <p className="text-indigo-200 text-lg mb-10 leading-relaxed">
            By 2030, we aim to build a community of over 100,000 empowered investors and operate in 10 international markets, redefining success for the 21st-century economy.
          </p>
          <div className="flex justify-center gap-8 border-t border-indigo-800 pt-10">
            <div>
              <div className="text-3xl font-bold">50k+</div>
              <div className="text-xs text-indigo-300 uppercase font-bold tracking-widest">Growth Forecast</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-xs text-indigo-300 uppercase font-bold tracking-widest">Integrity</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;