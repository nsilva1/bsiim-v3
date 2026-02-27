import {
    Rocket,
    TrendingUp,
    ShieldCheck,
    Settings,
    DollarSign,
    Globe,
    Users,
    CheckCircle,
    Award
} from 'lucide-react';

export const metadata = {
    title: 'SG-Business Model | Services | BSIIM Ltd',
    description: 'A comprehensive growth, innovation, and leadership framework for entrepreneurs and businesses from Amethyst International BSIIM Ltd.',
}


const SGBusinessProfile = () => {
    const phases = [
        {
            id: "PHASE 1",
            title: "START",
            objective: "Equip entrepreneurs to conceptualize, structure, and launch viable business ventures.",
            icon: <Rocket className="w-6 h-6" />,
            activities: [
                "Market research and validation to confirm demand and assess competitors.",
                "Legal and financial setup (registration, funding, financial planning).",
                "Brand identity development (logo, mission, customer-aligned strategy).",
                "Mentorship and resource access via the BSIIM Platform."
            ],
            outcome: "A fully registered, market-ready enterprise with a compelling value proposition."
        },
        {
            id: "PHASE 2",
            title: "GROW",
            objective: "Establish scalable growth systems and strategies.",
            icon: <TrendingUp className="w-6 h-6" />,
            activities: [
                "Build digital presence via websites and social campaigns.",
                "Design effective sales funnels and customer journeys.",
                "Strengthen leadership and team capacity through training.",
                "Implement CRM systems for engagement and retention."
            ],
            outcome: "Structured growth, enhanced visibility, and a loyal customer base."
        },
        {
            id: "PHASE 3",
            title: "BUILD",
            objective: "Reinforce business foundations for stability and efficiency.",
            icon: <ShieldCheck className="w-6 h-6" />,
            activities: [
                "Develop Standard Operating Procedures (SOPs) to streamline processes.",
                "Implement financial management systems and regular audits.",
                "Apply data analytics for strategic decisions.",
                "Maintain regulatory compliance and ethical governance."
            ],
            outcome: "An organized and sustainable enterprise with operational excellence."
        },
        {
            id: "PHASE 4",
            title: "IMPROVE",
            objective: "Optimize performance, productivity, and service quality.",
            icon: <Settings className="w-6 h-6" />,
            activities: [
                "Conduct process reviews and internal audits.",
                "Integrate automation and digital transformation.",
                "Leverage customer feedback to refine services.",
                "Host continuous improvement workshops for staff innovation."
            ],
            outcome: "Increased efficiency, innovation, and customer satisfaction."
        },
        {
            id: "PHASE 5",
            title: "TRIPLE INCOME",
            objective: "Significantly enhance profitability through innovation and financial strategy.",
            icon: <DollarSign className="w-6 h-6" />,
            activities: [
                "Develop multiple revenue streams and diversify income sources.",
                "Pursue strategic partnerships and franchising opportunities.",
                "Launch product diversification and licensing initiatives.",
                "Apply value-based pricing models to maximize returns."
            ],
            outcome: "Minimum threefold income growth within 12-24 months."
        },
        {
            id: "PHASE 6",
            title: "REPOSITION & EXPAND",
            objective: "Elevate businesses from local operations to global competitiveness.",
            icon: <Globe className="w-6 h-6" />,
            activities: [
                "Undertake brand repositioning and rebranding initiatives.",
                "Design regional and international market expansion strategies.",
                "Prepare for export readiness and cross-border trade.",
                "Build strategic alliances and secure investment partnerships."
            ],
            outcome: "A revitalized global brand with sustained scalability and market influence."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
            {/* Header Section */}
            <header className="bg-slate-900 text-white py-16 px-6 text-center">
                <h2 className="text-purple-400 font-bold tracking-widest uppercase text-sm mb-2">Amethyst International BSIIM Ltd</h2>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">SG-BUSINESS MODEL</h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    GROWTH, INNOVATION, LEADERSHIP & TRANSFORMATION
                </p>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Executive Summary & Overview */}
                <section className="grid md:grid-cols-2 gap-12 mb-20 items-center">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold border-l-4 border-purple-600 pl-4 text-slate-800">Executive Summary</h3>
                        <p className="text-lg leading-relaxed text-gray-700">
                            The SG-Business Model is a transformative framework designed to empower entrepreneurs and institutions.
                            By integrating academic insight, practical experience, and strategic foresight, we enable clients to
                            <strong> triple income</strong>, reposition, and expand effectively in today’s competitive marketplace.
                        </p>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <h4 className="font-bold text-slate-900 mb-2">Our Mission</h4>
                            <p className="italic text-gray-600">"To foster entrepreneurship, unlock opportunities, and cultivate a prosperous ecosystem where businesses thrive, evolve, and leave lasting legacies."</p>
                        </div>
                    </div>
                    <div className="bg-slate-800 rounded-3xl p-8 text-white shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6">Core Pillars</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <div className="bg-purple-500 p-2 rounded-lg"><Award size={20} /></div>
                                <span>Academic Knowledge</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="bg-purple-500 p-2 rounded-lg"><Users size={20} /></div>
                                <span>Practical Experience</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="bg-purple-500 p-2 rounded-lg"><Rocket size={20} /></div>
                                <span>Strategic Innovation</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Target Participants */}
                <section className="mb-20 text-center">
                    <h3 className="text-3xl font-bold mb-10">Target Participants</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Diaspora Professionals", desc: "Individuals seeking to invest global expertise into Africa-based ventures." },
                            { title: "African Entrepreneurs", desc: "Visionary owners eager to scale and innovate locally and internationally." },
                            { title: "Corporate & Gov Employees", desc: "Professionals preparing for entrepreneurial transitions or side ventures." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-purple-600">
                                <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* The 6 Phases */}
                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold mb-4">SG-Business Model Framework</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">Six interdependent phases addressing critical business stages from conception to global expansion.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {phases.map((phase, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-purple-600 font-bold text-sm tracking-widest">{phase.id}</span>
                                    <div className="text-slate-800">{phase.icon}</div>
                                </div>
                                <h4 className="text-xl font-bold mb-2">{phase.title}</h4>
                                <p className="text-sm text-gray-500 mb-4 h-12 italic">{phase.objective}</p>
                                <div className="space-y-2 mb-4">
                                    {phase.activities.map((act, i) => (
                                        <div key={i} className="flex gap-2 text-sm text-gray-700">
                                            <div className="mt-1 shrink-0 text-green-500"><CheckCircle size={14} /></div>
                                            <p>{act}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-4 border-t border-gray-50 bg-gray-50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                                    <span className="text-xs font-bold text-slate-500 uppercase">Outcome:</span>
                                    <p className="text-sm font-medium text-slate-800">{phase.outcome}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Implementation Table */}
                <section className="mb-20 overflow-hidden rounded-2xl border border-gray-200 bg-white">
                    <div className="bg-slate-800 text-white p-6">
                        <h3 className="text-2xl font-bold">Implementation Model</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 font-bold text-gray-700">Stage</th>
                                    <th className="px-6 py-4 font-bold text-gray-700">Timeline</th>
                                    <th className="px-6 py-4 font-bold text-gray-700">Key Deliverables</th>
                                    <th className="px-6 py-4 font-bold text-gray-700">Support Tools</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 font-medium">Enrollment</td>
                                    <td className="px-6 py-4 text-gray-600">1-2 Weeks</td>
                                    <td className="px-6 py-4 text-gray-600">Membership Registration</td>
                                    <td className="px-6 py-4 text-gray-600">Online Portal</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium">Diagnostic & Training</td>
                                    <td className="px-6 py-4 text-gray-600">2-12 Weeks</td>
                                    <td className="px-6 py-4 text-gray-600">Assessment Report & Strategy Design</td>
                                    <td className="px-6 py-4 text-gray-600">BSIIM Diagnostic Tool</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium">Execution</td>
                                    <td className="px-6 py-4 text-gray-600">3-6 Months</td>
                                    <td className="px-6 py-4 text-gray-600">Implementation & Monitoring</td>
                                    <td className="px-6 py-4 text-gray-600">Mentorship Plan</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium">Review & Scaling</td>
                                    <td className="px-6 py-4 text-gray-600">Ongoing</td>
                                    <td className="px-6 py-4 text-gray-600">Growth Metrics & Repositioning</td>
                                    <td className="px-6 py-4 text-gray-600">BSIIM Data Dashboard</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Outcomes & CTA */}
                <section className="bg-purple-900 rounded-3xl p-12 text-white text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-6">Program Outcomes</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                            <p className="bg-purple-800/50 p-4 rounded-xl">Empowered Scalable Ventures</p>
                            <p className="bg-purple-800/50 p-4 rounded-xl">Increased Cross-Border Trade</p>
                            <p className="bg-purple-800/50 p-4 rounded-xl">Job Creation & Innovation</p>
                            <p className="bg-purple-800/50 p-4 rounded-xl">Tripled Income Growth</p>
                        </div>
                        <p className="text-xl italic font-serif opacity-90 mb-8">
                            "We don't just build businesses; we cultivate legacies that transcend borders."
                        </p>
                        <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-100 transition-colors shadow-xl">
                            Become a Certified Practitioner
                        </button>
                    </div>
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                </section>
            </main>
        </div>
    );
};

export default SGBusinessProfile;