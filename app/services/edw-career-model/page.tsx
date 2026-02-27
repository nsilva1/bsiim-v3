import {
    Target,
    TrendingUp,
    Users,
    Briefcase,
    BookOpen,
    Compass,
    Zap,
    MapPin,
    Mail,
    Phone
} from 'lucide-react';

export const metadata = {
    title: 'EdW-Career Model | Services | BSIIM Ltd',
    description: 'The Education Solution by BSIIM Ltd helping candidates connect studies to professional capabilities and find fulfillment in their life endeavors.',
}

const EdWCareerModel = () => {
    const objectives = [
        { text: "Train individuals to become more productive and realize their full potential.", icon: <TrendingUp size={20} /> },
        { text: "Match individuals to suitable jobs based on talents, skills, and habits.", icon: <Briefcase size={20} /> },
        { text: "Improve individual performances and human capital resources.", icon: <Users size={20} /> },
        { text: "Accelerate business productivity through informed career decisions.", icon: <Zap size={20} /> }
    ];

    const services = [
        { title: "TRAIN", desc: "We help you train your teachers to sustain superior performance." },
        { title: "ENHANCE", desc: "We help to enhance teachers performance to become competent." },
        { title: "GUIDE", desc: "We help you guide students in making the right career decisions." },
        { title: "ACCELERATE", desc: "We help to accelerate student learning ability for the 21st century." }
    ];

    const targetAudience = [
        "Professionals seeking to reach their career peak",
        "Working or retiring persons seeking growth without leaving current jobs",
        "Organizations wanting staff to become productive assets",
        "Career Mobilization for those moving to desired careers",
        "Candidates needing international standard portfolios",
        "Correctional Centers (Custodial and Un-custodial)"
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pb-20">
            {/* Hero Section */}
            <header className="bg-purple-900 text-white py-16 px-6 relative">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="md:w-2/3">
                        <h2 className="text-purple-300 font-bold tracking-widest uppercase text-sm mb-2">Amethyst International</h2>
                        <h1 className="text-5xl md:text-6xl font-black mb-4">EdW-CAREER MODEL</h1>
                        <p className="text-xl text-purple-100 max-w-2xl leading-relaxed">
                            The Education Solution: Helping candidates connect studies to professional professionalism and find fulfillment in their life endeavors.
                        </p>
                    </div>
                    <div className="mt-8 md:mt-0 bg-white p-4 rounded-2xl shadow-2xl text-purple-900 text-center">
                        <p className="text-sm font-bold uppercase tracking-tighter">Grow to your peak in</p>
                        <p className="text-5xl font-black">3 WEEKS</p>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 mt-10">
                {/* Core Services Grid */}
                <div className="grid md:grid-cols-4 gap-4 mb-16">
                    {services.map((s, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-600 hover:transform hover:-translate-y-1 transition-all">
                            <h3 className="text-purple-600 font-black text-xl mb-2">{s.title}</h3>
                            <p className="text-sm text-slate-600 leading-snug">{s.desc}</p>
                        </div>
                    ))}
                </div>

                {/* About & Objectives */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold border-l-4 border-purple-600 pl-4">About the Model</h2>
                        <p className="text-slate-700 leading-relaxed">
                            Designed to help individuals make informed decisions on career paths, professional courses, and scholarships.
                            Our education solution helps candidates become specialists and consultants while accessing JS-Resources for jobs or SG-Business for startups.
                        </p>
                        <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <Target className="text-purple-600" /> Key Focus Areas
                            </h4>
                            <ul className="grid grid-cols-1 gap-3">
                                {objectives.map((obj, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-slate-700 items-start">
                                        <span className="text-purple-600 mt-1">{obj.icon}</span>
                                        {obj.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                        <h2 className="text-2xl font-bold mb-6">Target Audience</h2>
                        <div className="space-y-3">
                            {targetAudience.map((target, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 hover:border-purple-200 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                                    <span className="text-sm font-medium text-slate-700">{target}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Specialized Domains */}
                <section className="mb-20">
                    <h2 className="text-center text-3xl font-bold mb-10">Program Domains</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                            <BookOpen className="text-emerald-600 mb-4" />
                            <h4 className="font-bold text-emerald-900">Cognitive Domain</h4>
                            <p className="text-sm text-emerald-800 opacity-80">In-service training focused on mental skills and knowledge acquisition.</p>
                        </div>
                        <div className="bg-pink-50 p-6 rounded-2xl border border-pink-100">
                            <Compass className="text-pink-600 mb-4" />
                            <h4 className="font-bold text-pink-900">Affective Domain</h4>
                            <p className="text-sm text-pink-800 opacity-80">Emotional Intelligence training to manage attitudes and feelings.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                            <Zap className="text-blue-600 mb-4" />
                            <h4 className="font-bold text-blue-900">Psychomotor Domain</h4>
                            <p className="text-sm text-blue-800 opacity-80">BSIIM Young Star Sporting Development focused on physical skills.</p>
                        </div>
                    </div>
                </section>

                {/* Contact & Registration Info */}
                <section className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-12 relative z-10">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Contact & Location</h3>
                            <div className="space-y-4 text-slate-300">
                                <p className="flex items-center gap-3">
                                    <MapPin size={20} className="text-purple-400" />
                                    Plot 484, Obafemi Awolowo Way, Utako District, Abuja
                                </p>
                                <p className="flex items-center gap-3">
                                    <Mail size={20} className="text-purple-400" />
                                    info@bsiimplatform.com
                                </p>
                                <p className="flex items-center gap-3">
                                    <Phone size={20} className="text-purple-400" />
                                    +234-8175637632
                                </p>
                            </div>
                        </div>
                        <div className="text-center md:text-right flex flex-col justify-center items-center md:items-end">
                            <p className="text-purple-400 font-bold mb-2 uppercase tracking-widest text-xs">Ready to start?</p>
                            <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all mb-4">
                                Register Today
                            </button>
                            <p className="text-xs text-slate-400">Tuesdays at 10:30 am</p>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                </section>
            </main>
        </div>
    );
};

export default EdWCareerModel;