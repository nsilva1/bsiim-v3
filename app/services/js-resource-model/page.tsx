import React from 'react';
import {
    Briefcase,
    Users,
    TrendingUp,
    Globe,
    CheckCircle2,
    CircleDollarSign,
    Network,
    Rocket,
    Presentation,
    MailQuestion
} from 'lucide-react';

export const metadata = {
    title: 'JS-Resource Model | Services | BSIIM Ltd',
    description: 'A strategic resource-development framework by BSIIM Ltd to equip individuals with professional readiness for the global workforce.',
}

const JSResourceProfile = () => {
    const coreGoals = [
        { title: "Job Creation", desc: "Create blue-collar jobs and sustainable small enterprises.", icon: <Briefcase className="w-5 h-5" /> },
        { title: "Professional Services", desc: "Serve as consultants, coaches, trainers, and mentors.", icon: <Users className="w-5 h-5" /> },
        { title: "Global Readiness", desc: "Build portfolios and resumes that meet international standards.", icon: <Globe className="w-5 h-5" /> },
        { title: "Career Placement", desc: "Secure employment in industries reflecting personal values.", icon: <CheckCircle2 className="w-5 h-5" /> }
    ];

    const benefits = [
        {
            category: "Earnings & Incentives",
            items: ["10%-30% commission for successful invites", "Immediate payment upon registration", "Seasonal bonuses and performance rewards"],
            icon: <CircleDollarSign className="text-emerald-600" />
        },
        {
            category: "Professional Advancement",
            items: ["Upgrade to Technical Delegate, VIP, or VVIP", "Subsidized professional training programs", "International-standard resume strengthening"],
            icon: <TrendingUp className="text-blue-600" />
        },
        {
            category: "Networking & Exposure",
            items: ["Security, Tech, and Management networks", "Global professional leader connections", "Conference and exhibition participation"],
            icon: <Network className="text-purple-600" />
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pb-20">
            {/* Header Section */}
            <header className="bg-indigo-950 text-white py-20 px-6 relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="h-px w-12 bg-indigo-400"></span>
                        <span className="uppercase tracking-[0.3em] text-indigo-300 text-sm font-semibold">Strategic Framework</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">JS-RESOURCE <span className="text-indigo-400">MODEL</span></h1>
                    <p className="text-xl text-indigo-100 max-w-3xl leading-relaxed opacity-90">
                        A strategic resource-development framework designed to equip individuals with the competencies and professional readiness required to excel in the global workforce.
                    </p>
                </div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
            </header>

            <main className="max-w-6xl mx-auto px-6 mt-10">
                {/* Core Empowerment Cards */}
                <div className="grid md:grid-cols-4 gap-6 mb-16">
                    {coreGoals.map((goal, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full">
                            <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                                {goal.icon}
                            </div>
                            <h3 className="font-bold text-slate-800 mb-2">{goal.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{goal.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Philosophy Section */}
                <section className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Rocket className="text-indigo-600" />
                            Strategic Emphasis
                        </h2>
                        <div className="space-y-4">
                            {[
                                { label: "Employability", text: "Work readiness and job creation focus." },
                                { label: "Leadership", text: "Professional ethics and leadership development." },
                                { label: "Discipline", text: "Personal growth and long-term career planning." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-200">
                                    <div className="mt-1 text-indigo-600"><CheckCircle2 size={18} /></div>
                                    <div>
                                        <span className="font-bold text-slate-800 block">{item.label}</span>
                                        <span className="text-slate-600 text-sm">{item.text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-indigo-900 rounded-3xl p-10 text-white shadow-2xl">
                        <h3 className="text-2xl font-bold mb-4 italic">"Transforming individuals into productive assets and capable leaders."</h3>
                        <p className="text-indigo-200 opacity-80 leading-relaxed mb-6">
                            Graduates emerge with the confidence and character to lead projects, build teams, and make a meaningful impact within their communities.
                        </p>
                        <div className="pt-6 border-t border-indigo-800 flex gap-8">
                            <div><div className="text-2xl font-bold">100%</div><div className="text-xs text-indigo-300 uppercase tracking-wider">Commitment</div></div>
                            <div><div className="text-2xl font-bold">Global</div><div className="text-xs text-indigo-300 uppercase tracking-wider">Standards</div></div>
                        </div>
                    </div>
                </section>

                {/* Membership Benefits Grid */}
                <section className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Membership Ecosystem</h2>
                        <p className="text-slate-500 max-w-xl mx-auto">Access a broad suite of professional opportunities and economic privileges.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative group overflow-hidden">
                                <div className="mb-6">{React.cloneElement(benefit.icon, { size: 32 })}</div>
                                <h4 className="text-xl font-bold mb-4 text-slate-800">{benefit.category}</h4>
                                <ul className="space-y-3">
                                    {benefit.items.map((item, i) => (
                                        <li key={i} className="text-sm text-slate-600 flex gap-2">
                                            <span className="text-indigo-400 font-bold">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                    {React.cloneElement(benefit.icon, { size: 64 })}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Earning Process & Weekly Gatherings */}
                <div className="grid lg:grid-cols-5 gap-8">
                    <section className="lg:col-span-3 bg-white rounded-3xl p-10 border border-slate-100 shadow-sm">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <CircleDollarSign className="text-emerald-500" />
                            How to Earn (10%-30%)
                        </h3>
                        <div className="space-y-6">
                            {[
                                { step: "01", title: "Prospecting", text: "Obtain the email addresses of prospective participants." },
                                { step: "02", title: "Official Contact", text: "Send emails to the official WhatsApp platform and forward proposals." },
                                { step: "03", title: "Confirmation", text: "Ensure follow-up and receive commission immediately after payment confirmation." }
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-6 items-start">
                                    <span className="text-4xl font-black text-slate-100">{step.step}</span>
                                    <div>
                                        <h5 className="font-bold text-slate-800">{step.title}</h5>
                                        <p className="text-slate-500 text-sm leading-relaxed">{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="lg:col-span-2 bg-indigo-50 rounded-3xl p-8">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Presentation className="text-indigo-600" size={20} />
                            Weekly Gatherings
                        </h3>
                        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 border border-indigo-100">
                            <h4 className="font-bold text-sm uppercase text-indigo-400 mb-4 tracking-widest">Active Projects</h4>
                            <p className="font-bold text-slate-800 mb-2">Lemonade Company Proposal</p>
                            <p className="text-xs text-slate-500 mb-4 italic">3-Week Team Project (Weeks 4-6)</p>
                            <ul className="text-xs space-y-2 text-slate-600">
                                <li className="flex gap-2"><span>-</span> PowerPoint presentation for loan request</li>
                                <li className="flex gap-2"><span>-</span> Break-Even Analysis practice</li>
                                <li className="flex gap-2"><span>-</span> Mock interview sessions</li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-medium text-indigo-900 bg-indigo-200/50 p-4 rounded-xl">
                            <MailQuestion size={18} />
                            <span>Groups: 4-5 Students per team</span>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default JSResourceProfile;