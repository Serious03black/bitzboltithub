import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/shared/PageHeader";
import SEO from "@/components/shared/SEO";
import Section from "@/components/shared/Section";
import CustomButton from "@/components/shared/CustomButton";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  AlertTriangle, 
  ExternalLink, 
  CheckCircle2, 
  Code2, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  GraduationCap, 
  Gift, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building,
  Laptop
} from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  employmentType: string;
  workMode: string;
  experience: string;
  salary: string;
  location: string;
  workingDays: string;
  description: string;
  responsibilities: string[];
  skills: {
    category: string;
    items: string[];
  }[];
  eligibility: string[];
  benefits: string[];
}

const jobOpenings: JobOpening[] = [
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    department: "Software Development",
    employmentType: "Permanent, Full-Time",
    workMode: "100% Remote | Work From Home",
    experience: "0–3 Years (Fresher can also apply)",
    salary: "₹35,000 – ₹45,000 / month",
    location: "Remote (All India)",
    workingDays: "Monday to Friday",
    description:
      "We are looking for a skilled and motivated Full Stack Developer to join our development team on a permanent, full-time basis. The candidate will be responsible for designing, developing, testing, and maintaining scalable web applications and software solutions. The ideal candidate should have practical knowledge of frontend and backend development, database management, API integration, and modern development practices.",
    responsibilities: [
      "Develop responsive and user-friendly web applications.",
      "Build and maintain frontend applications using React.js, HTML, CSS, JavaScript, and related technologies.",
      "Develop backend applications using Node.js, Express.js, PHP, Python, Java, or relevant frameworks.",
      "Design, develop, and manage databases using MySQL, MongoDB, or PostgreSQL.",
      "Develop and integrate RESTful APIs and third-party services.",
      "Implement authentication, authorization, and application security.",
      "Debug, troubleshoot, and optimize application performance.",
      "Collaborate with UI/UX designers, developers, and project managers.",
      "Maintain clean, reusable, and well-documented code.",
      "Participate in code reviews, testing, deployment, and maintenance activities.",
      "Work with Git and GitHub for version control and collaboration.",
      "Ensure timely delivery of assigned development tasks."
    ],
    skills: [
      {
        category: "Frontend Development",
        items: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap / Tailwind CSS", "Responsive Web Design"]
      },
      {
        category: "Backend Development",
        items: ["Node.js & Express.js", "PHP / Python / Java", "REST API Development", "Authentication & Authorization"]
      },
      {
        category: "Database Management",
        items: ["MySQL", "MongoDB", "PostgreSQL (additional advantage)"]
      },
      {
        category: "Tools & Technologies",
        items: ["Git & GitHub", "VS Code", "Postman", "npm", "Basic deployment and hosting"]
      }
    ],
    eligibility: [
      "Bachelor's degree or diploma in Computer Science, IT, or a related field, or equivalent practical experience.",
      "Strong understanding of programming fundamentals and web architecture.",
      "Good problem-solving and analytical skills.",
      "Ability to work independently in a remote environment.",
      "Good communication and teamwork skills.",
      "A portfolio, GitHub profile, or live project demonstrations will be an advantage."
    ],
    benefits: [
      "Permanent, full-time employment with immediate onboarding.",
      "100% remote work opportunity (Work from home).",
      "Opportunity to work on real-world high-impact software projects.",
      "Professional growth and technical learning opportunities.",
      "Collaborative and supportive development environment.",
      "Performance-based career growth and regular appraisals."
    ]
  },
  {
    id: "php-developer",
    title: "PHP Developer",
    department: "Backend & Web Development",
    employmentType: "Permanent, Full-Time",
    workMode: "100% Remote | Work From Home",
    experience: "0–3 Years (Fresher can also apply)",
    salary: "₹35,000 – ₹45,000 / month",
    location: "Remote (All India)",
    workingDays: "Monday to Friday",
    description:
      "We are seeking an enthusiastic PHP Developer to develop and maintain dynamic web applications, backend APIs, and database-driven solutions. You will be responsible for creating robust server-side code, optimizing queries, and integrating third-party services in a collaborative, fast-paced remote engineering team.",
    responsibilities: [
      "Build efficient, testable, and reusable PHP modules and web applications.",
      "Develop and maintain web services and RESTful APIs for frontend and mobile consumption.",
      "Work with modern PHP frameworks (such as Laravel, CodeIgniter) or Core PHP architecture.",
      "Design, implement, and optimize MySQL database schemas, complex queries, and indexes.",
      "Implement robust security protocols, user authentication, and data validation.",
      "Integrate payment gateways, SMS/email APIs, and third-party web services.",
      "Debug, troubleshoot, and optimize performance across database and backend code.",
      "Collaborate with frontend developers, UI/UX designers, and QA engineers.",
      "Maintain version control using Git and GitHub with standard branch management."
    ],
    skills: [
      {
        category: "Backend & Core PHP",
        items: ["Core PHP (PHP 7.x / 8.x)", "Laravel or CodeIgniter", "OOP Concepts", "MVC Architecture", "RESTful APIs"]
      },
      {
        category: "Database & Storage",
        items: ["MySQL / MariaDB", "Schema Design", "Query Optimization", "Database Indexing"]
      },
      {
        category: "Frontend Knowledge",
        items: ["HTML5", "CSS3", "JavaScript", "AJAX", "Bootstrap / Tailwind CSS"]
      },
      {
        category: "Development Tools",
        items: ["Git & GitHub", "Composer", "Postman", "VS Code", "XAMPP / LAMP"]
      }
    ],
    eligibility: [
      "Bachelor's degree or diploma in Computer Science, IT, BCA, MCA, or related practical experience.",
      "Solid knowledge of PHP programming, object-oriented concepts, and relational databases.",
      "Freshers with strong academic/personal PHP projects are highly encouraged to apply.",
      "Ability to write clean, maintainable, and well-structured code.",
      "Strong analytical mindset and troubleshooting capability in a remote setup."
    ],
    benefits: [
      "Permanent, full-time employment position.",
      "100% remote flexibility — work from your home comfort.",
      "Competitive salary of ₹35,000 – ₹45,000 / month with growth incentives.",
      "Mentorship from experienced senior backend architects.",
      "5-day work week (Monday to Friday).",
      "Opportunity to architect modern web platforms and enterprise tools."
    ]
  },
  {
    id: "java-developer",
    title: "Java Developer",
    department: "Enterprise Software Engineering",
    employmentType: "Permanent, Full-Time",
    workMode: "100% Remote | Work From Home",
    experience: "0–3 Years (Fresher can also apply)",
    salary: "₹35,000 – ₹45,000 / month",
    location: "Remote (All India)",
    workingDays: "Monday to Friday",
    description:
      "We are looking for a passionate Java Developer to build and maintain high-performance, scalable enterprise applications and microservices. The candidate will work on developing secure backend systems, integrating APIs, and managing persistent databases in a modern distributed architecture.",
    responsibilities: [
      "Design and develop scalable Java-based applications, microservices, and backend APIs.",
      "Build services using Core Java, Spring Boot, Spring MVC, and Hibernate / JPA.",
      "Design, build, and optimize database schemas using MySQL or PostgreSQL.",
      "Develop secure RESTful web services with authentication (JWT, OAuth2, Spring Security).",
      "Write unit and integration tests using JUnit and Mockito to ensure software quality.",
      "Troubleshoot, identify bottlenecks, and optimize Java memory and query performance.",
      "Work collaboratively with cross-functional remote teams in an Agile sprint environment.",
      "Maintain source code and collaboration through Git and GitHub.",
      "Document architectural designs, APIs, and operational runbooks."
    ],
    skills: [
      {
        category: "Java & Frameworks",
        items: ["Core Java (11/17/21)", "OOPs & Multithreading", "Spring Boot", "Spring MVC", "Hibernate / JPA"]
      },
      {
        category: "APIs & Security",
        items: ["RESTful APIs", "JSON", "Microservices Basics", "JWT / Spring Security"]
      },
      {
        category: "Databases",
        items: ["MySQL", "PostgreSQL", "Relational Modeling", "Hibernate ORM"]
      },
      {
        category: "Build & Tools",
        items: ["Maven / Gradle", "Git & GitHub", "Postman", "IntelliJ IDEA / Eclipse", "Docker Basics"]
      }
    ],
    eligibility: [
      "Bachelor's degree or diploma in Computer Science, IT, BCA/MCA, B.Tech, or equivalent practical experience.",
      "Strong understanding of Core Java, data structures, algorithms, and OOP concepts.",
      "Passionate freshers with strong Java projects or developers with up to 3 years experience.",
      "Good logical thinking and eager to learn enterprise architectures.",
      "Effective communication skills and self-motivation for 100% remote work."
    ],
    benefits: [
      "Permanent, full-time enterprise developer role.",
      "100% remote work environment from day one.",
      "Salary package: ₹35,000 – ₹45,000 / month.",
      "Continuous hands-on exposure to modern Spring Boot and microservices.",
      "5 days working schedule (Monday to Friday).",
      "Clear promotional ladder and performance appraisal system."
    ]
  }
];

const ASSESSMENT_URL = "https://icubeworld.in/exam";

const Careers = () => {
  const [selectedJobId, setSelectedJobId] = useState<string>("all");
  const [expandedJobId, setExpandedJobId] = useState<string>("full-stack-developer");

  const filteredJobs = selectedJobId === "all" 
    ? jobOpenings 
    : jobOpenings.filter((job) => job.id === selectedJobId);

  const toggleExpand = (id: string) => {
    setExpandedJobId(expandedJobId === id ? "" : id);
  };

  return (
    <>
      <SEO 
        title="Careers - Remote Software Developer Openings" 
        description="Join Bitzbolt. We are hiring Full Stack Developers, PHP Developers, and Java Developers. 100% Remote, ₹35,000 - ₹45,000/month. Freshers can apply. Assessment required at icubeworld.in/exam."
        keywords="careers, remote jobs, full stack developer, php developer, java developer, bitzbolt hiring, work from home tech jobs, freshers developer jobs"
      />
      
      <PageHeader 
        title="Careers at Bitzbolt" 
        subtitle="Shape the Digital Future With Us — 100% Remote Engineering Opportunities"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Intro Section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-purple-gold">
              Current Job Openings
            </h2>
            <p className="text-foreground/80 text-lg">
              Explore permanent, full-time remote engineering positions at Bitzbolt. We welcome both freshers with strong practical skills and experienced developers ready to build enterprise solutions.
            </p>
          </div>

          {/* Job Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            <button
              onClick={() => setSelectedJobId("all")}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedJobId === "all"
                  ? "bg-gradient-to-r from-[#FF5803] to-[#FDBA01] text-white shadow-md"
                  : "bg-card text-foreground/80 hover:bg-muted border border-border"
              }`}
            >
              All Openings ({jobOpenings.length})
            </button>
            {jobOpenings.map((job) => (
              <button
                key={job.id}
                onClick={() => setSelectedJobId(job.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedJobId === job.id
                    ? "bg-gradient-to-r from-[#FF5803] to-[#FDBA01] text-white shadow-md"
                    : "bg-card text-foreground/80 hover:bg-muted border border-border"
                }`}
              >
                {job.title}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="space-y-8">
            {filteredJobs.map((job, index) => {
              const isExpanded = expandedJobId === job.id;

              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden transition-all duration-300 hover:border-[#FF5803]/40"
                >
                  {/* Card Header */}
                  <div className="p-6 sm:p-8 bg-card/60 backdrop-blur-sm border-b border-border">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-3 py-1 text-xs font-bold uppercase rounded-full bg-[#FF5803]/10 text-[#FF5803] border border-[#FF5803]/20">
                            {job.department}
                          </span>
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                            {job.workMode}
                          </span>
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                            {job.employmentType}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                          {job.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-foreground/70">
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 text-[#FF5803] mr-1.5" />
                            <span className="font-bold text-foreground">{job.salary}</span>
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 text-[#FF5803] mr-1.5" />
                            <span>{job.experience}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 text-[#FF5803] mr-1.5" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 text-[#FF5803] mr-1.5" />
                            <span>{job.workingDays}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <a
                          href={ASSESSMENT_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-xl font-bold text-white text-center bg-gradient-to-r from-[#FF5803] via-[#FF6900] to-[#FDBA01] hover:from-[#FF6900] hover:to-[#FF5803] shadow-[0_0_20px_rgba(255,88,3,0.35)] transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <span>Apply & Assessment</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>

                        <button
                          onClick={() => toggleExpand(job.id)}
                          className="px-4 py-3 rounded-xl font-semibold border border-border hover:bg-muted text-foreground transition-colors flex items-center justify-center gap-2 text-sm"
                        >
                          <span>{isExpanded ? "Hide Details" : "View Details"}</span>
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Collapsible Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="p-6 sm:p-8 space-y-8 bg-muted/20"
                      >
                        {/* Notice in job details */}
                        <div className="p-4 rounded-xl bg-[#FF5803]/10 border border-[#FF5803]/30 flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-[#FF5803] flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-foreground/90">
                            <strong>Assessment Mandatory:</strong> All candidates must complete the online test at{" "}
                            <a 
                              href={ASSESSMENT_URL} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-[#FF5803] font-bold underline hover:text-[#FF7800]"
                            >
                              icubeworld.in/exam
                            </a>{" "}
                            to be considered for this position.
                          </div>
                        </div>

                        {/* About the Role */}
                        <div>
                          <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                            <Code2 className="w-5 h-5 text-[#FF5803]" />
                            About the Role
                          </h4>
                          <p className="text-foreground/80 leading-relaxed">
                            {job.description}
                          </p>
                        </div>

                        {/* Key Responsibilities */}
                        <div>
                          <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                            Key Responsibilities
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                            {job.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start text-foreground/80 text-sm">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF5803] mt-2 mr-2.5 flex-shrink-0"></span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Required Technical Skills */}
                        <div>
                          <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-[#FDBA01]" />
                            Required Technical Skills
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {job.skills.map((skillGroup, i) => (
                              <div key={i} className="p-4 rounded-xl bg-card border border-border">
                                <h5 className="font-semibold text-sm text-[#FF5803] mb-2.5">
                                  {skillGroup.category}
                                </h5>
                                <div className="flex flex-wrap gap-1.5">
                                  {skillGroup.items.map((skill, j) => (
                                    <span 
                                      key={j} 
                                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted text-foreground/80 border border-border"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Eligibility Criteria */}
                        <div>
                          <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-blue-500" />
                            Eligibility Criteria
                          </h4>
                          <ul className="space-y-2">
                            {job.eligibility.map((item, i) => (
                              <li key={i} className="flex items-start text-foreground/80 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Employment Benefits */}
                        <div>
                          <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                            <Gift className="w-5 h-5 text-[#FF7800]" />
                            Employment Benefits
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {job.benefits.map((benefit, i) => (
                              <div key={i} className="p-3 rounded-lg bg-card border border-border text-sm flex items-start gap-2">
                                <ShieldCheck className="w-4 h-4 text-[#FF5803] flex-shrink-0 mt-0.5" />
                                <span className="text-foreground/80">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action CTA */}
                        <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div>
                            <div className="text-sm font-semibold text-foreground">
                              Ready to join {job.title} team?
                            </div>
                            <div className="text-xs text-foreground/60">
                              Step 1: Complete online assessment at icubeworld.in/exam
                            </div>
                          </div>
                          <a
                            href={ASSESSMENT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-white text-center bg-gradient-to-r from-[#FF5803] via-[#FF6900] to-[#FDBA01] hover:from-[#FF6900] hover:to-[#FF5803] shadow-[0_0_25px_rgba(255,88,3,0.35)] transition-all flex items-center justify-center gap-2"
                          >
                            <span>Complete Assessment & Apply</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Application Process 3-Step Guide */}
          <div className="mt-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gradient-purple-gold">
                Simple 3-Step Application Process
              </h3>
              <p className="text-foreground/70">
                Follow these simple steps to complete your application with Bitzbolt.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="p-6 rounded-2xl bg-card border-2 border-[#FF5803] relative overflow-hidden shadow-lg">
                <div className="absolute top-3 right-4 text-4xl font-black text-[#FF5803]/20">01</div>
                <div className="w-12 h-12 rounded-xl bg-[#FF5803]/10 text-[#FF5803] flex items-center justify-center mb-4 font-bold text-lg">
                  1
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Complete Assessment</h4>
                <p className="text-foreground/70 text-sm mb-4">
                  Visit <strong className="text-[#FF5803]">icubeworld.in/exam</strong> and complete the technical evaluation for your chosen stream.
                </p>
                <a
                  href={ASSESSMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-[#FF5803] hover:underline"
                >
                  Go to Assessment Link <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
              {/* Step 2 */}
              <div className="p-6 rounded-2xl bg-card border-2 border-[#FF5803] relative overflow-hidden shadow-lg">
                <div className="absolute top-3 right-4 text-4xl font-black text-[#FF5803]/20">02</div>
                <div className="w-12 h-12 rounded-xl bg-[#FF5803]/10 text-[#FF5803] flex items-center justify-center mb-4 font-bold text-lg">
                  2
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Manual Verification</h4>
                <p className="text-foreground/70 text-sm mb-4">
                  Team <strong className="text-[#FF5803]">icubeworld</strong>  manually verfiy your answer share the status with us.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-2xl bg-card border border-border relative overflow-hidden shadow-md">
                <div className="absolute top-3 right-4 text-4xl font-black text-foreground/10">03</div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 font-bold text-lg">
                  3
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Profile Review</h4>
                <p className="text-foreground/70 text-sm">
                  Our technical panel reviews your test scores and contact you for resume sharing and interview round.
                </p>
              </div>

                {/* Step 4 */}
                <div className="p-6 rounded-2xl bg-card border border-border relative overflow-hidden shadow-md">
                  <div className="absolute top-3 right-4 text-4xl font-black text-foreground/10">04</div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 font-bold text-lg">
                    4
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Discussion & Offer</h4>
                  <p className="text-foreground/70 text-sm">
                    Shortlisted candidates have a virtual discussion with the team, followed by instant rollout of the formal offer letter!
                  </p>
                </div>
                {/* Step 3 */}
              <div className="p-6 rounded-2xl bg-card border border-border relative overflow-hidden shadow-md">
                <div className="absolute top-3 right-4 text-4xl font-black text-foreground/10">Notice </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Notice</h4>
                <p className="text-foreground/70 text-sm">
Completing the assessment does not guarantee qualification for the next round. Evaluation is based on logic, syntax, code quality, production-level standards, and problem-solving skills. Successful code execution alone does not mean you have passed.                </p>
              </div>

              </div>
            </div>

          {/* Bottom Help & Contact Notice */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-[#050C1E] via-[#0A1E2F] to-[#050C1E] text-white border border-[#FF5803]/30 text-center">
            <h4 className="text-2xl font-bold mb-3">Have Questions About Careers at Bitzbolt?</h4>
            <p className="text-white/80 max-w-xl mx-auto mb-6 text-sm sm:text-base">
              Reach out to our recruitment team at <strong className="text-[#FDBA01]">contact@bitzbolt.com</strong> or take your technical assessment directly to get started.
            </p>
            
          </div>

        </div>
      </div>
    </>
  );
};

export default Careers;
