import React, { useState, useEffect } from "react";
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RefreshCw,
  Zap,
  Target,
  BookOpen,
  Award,
  Layers,
  ChevronDown,
  ChevronUp,
  FileText,
  TrendingUp,
  ShieldCheck
} from "lucide-react";
import useReveal from "../hooks/useReveal.js";
import MatchScoreRing from "./MatchScoreRing.jsx";

const SAMPLE_JOBS = {
  "Data Analyst": {
    text: "We are looking for a Data Analyst to extract actionable insights from enterprise datasets. Key Responsibilities: Write complex SQL queries, build interactive dashboards in Power BI/Tableau, collaborate with cross-functional teams, and perform data validation. Requirements: 3+ years experience with SQL (CTEs, window functions), Power BI or Tableau proficiency, Python/pandas basics, and experience presenting data stories to stakeholders.",
    score: 82,
    fitLabel: "Strong Match",
    skillsMatchedCount: 8,
    totalSkillsCount: 11,
    skillsMissingCount: 3,
    experienceMatch: "85%",
    explanation: "Your profile demonstrates strong alignment for the Data Analyst position, showing core strengths in SQL, Python, Excel, and Data Visualization. Strengthening Advanced SQL and Power BI will maximize your match score.",
    matchedSkills: ["SQL Fundamentals", "Python", "Tableau", "Excel", "Data Validation", "Stakeholder Presentation", "Pandas", "ETL Pipelines"],
    gaps: {
      highPriority: [
        { skill: "Advanced SQL (CTEs & Window Functions)", current: "Intermediate", required: "Advanced" },
        { skill: "Power BI & DAX Modeling", current: "Beginner", required: "Intermediate" },
        { skill: "Data Visualization Best Practices", current: "Intermediate", required: "Advanced" }
      ],
      mediumPriority: [
        { skill: "Automated Data Pipelines (Power Query)", current: "Beginner", required: "Intermediate" },
        { skill: "A/B Testing & Statistical Modeling", current: "Beginner", required: "Intermediate" }
      ]
    },
    recommendations: [
      {
        title: "Improve Advanced SQL",
        description: "Practice complex CTEs, window functions, and analytical query optimization."
      },
      {
        title: "Build a Power BI Dashboard",
        description: "Create an interactive business analytics dashboard and add it to your portfolio."
      },
      {
        title: "Enhance Resume Keywords",
        description: "Highlight Python, SQL, Excel, and Power BI metrics in your work history."
      },
      {
        title: "Prepare Data Analyst Case Studies",
        description: "Practice answering business scenario questions using SQL, Excel, and Power BI."
      }
    ],
    improvementPath: [
      "Improve Advanced SQL (CTEs & Window Functions)",
      "Build one Power BI project & embed live dashboard link",
      "Update resume keywords with quantified impact metrics",
      "Practice relevant analytics & SQL interview case studies",
      "Apply directly to target Data Analyst roles with tailored match"
    ]
  },
  "Business Analyst": {
    text: "Seeking a Business Analyst to bridge the gap between business needs and technical IT solutions. Responsibilities: Elicit requirements, build financial & operational models, map business workflows, and analyze user stories. Requirements: Agile/Scrum experience, SQL querying basics, Tableau visualization, process mapping (BPMN), and strong stakeholder communication skills.",
    score: 85,
    fitLabel: "Strong Match",
    skillsMatchedCount: 9,
    totalSkillsCount: 11,
    skillsMissingCount: 2,
    experienceMatch: "88%",
    explanation: "Strong strategic and process mapping alignment. Adding advanced data querying metrics will boost your fit to over 90%.",
    matchedSkills: ["Agile/Scrum", "Requirement Elicitation", "Tableau", "Stakeholder Communication", "User Story Mapping", "Jira", "Workflow Mapping", "Data Modeling", "Documentation"],
    gaps: {
      highPriority: [
        { skill: "Complex SQL Queries", current: "Beginner", required: "Intermediate" },
        { skill: "Process Mapping (BPMN)", current: "Intermediate", required: "Advanced" }
      ],
      mediumPriority: [
        { skill: "Financial Modeling", current: "Beginner", required: "Intermediate" },
        { skill: "User Story Mapping", current: "Intermediate", required: "Advanced" }
      ]
    },
    recommendations: [
      {
        title: "Quantify Business Impact",
        description: "Add percentage gains or revenue optimizations achieved in past projects."
      },
      {
        title: "Demonstrate Agile Leadership",
        description: "Highlight cross-functional sprint planning and user story refinement."
      },
      {
        title: "Build a Workflow Case Study",
        description: "Showcase an end-to-end process optimization project."
      },
      {
        title: "Refine Stakeholder Presentation",
        description: "Practice presenting complex technical tradeoffs to non-technical leads."
      }
    ],
    improvementPath: [
      "Practice SQL data extraction queries for business KPIs",
      "Document 1 process optimization case study in portfolio",
      "Quantify financial & time-saving impact metrics on resume",
      "Review Scrum Master & Product Owner frameworks",
      "Apply to target Business Analyst positions"
    ]
  },
  "Software Engineer": {
    text: "We are hiring a Software Engineer to build scalable full-stack web applications. Responsibilities: Design RESTful APIs, develop modern responsive UIs in React/TypeScript, optimize database queries, and participate in code reviews. Requirements: 2+ years React experience, Node.js/Python, Git workflows, CI/CD pipelines, and cloud deployment experience (Vercel/AWS).",
    score: 90,
    fitLabel: "Excellent Match",
    skillsMatchedCount: 10,
    totalSkillsCount: 11,
    skillsMissingCount: 1,
    experienceMatch: "92%",
    explanation: "Outstanding frontend and API development match. Demonstrating automated CI/CD pipeline usage will maximize your score.",
    matchedSkills: ["React", "TypeScript", "REST APIs", "Node.js", "Git Workflows", "Tailwind CSS", "State Management", "Code Reviews", "Vercel Deployment", "Database Design"],
    gaps: {
      highPriority: [
        { skill: "CI/CD Pipelines", current: "Beginner", required: "Intermediate" }
      ],
      mediumPriority: [
        { skill: "System Design Fundamentals", current: "Intermediate", required: "Advanced" },
        { skill: "Docker Containerization", current: "Beginner", required: "Intermediate" }
      ]
    },
    recommendations: [
      {
        title: "Highlight Clean Architecture",
        description: "Showcase reusable component design and clean state management patterns."
      },
      {
        title: "Add Automated Tests",
        description: "Include unit and integration test coverage metrics in your projects."
      },
      {
        title: "Optimize Web Vitals",
        description: "Document bundle size reductions and render performance improvements."
      },
      {
        title: "Prepare System Design Answers",
        description: "Practice scalability, caching, and database indexing questions."
      }
    ],
    improvementPath: [
      "Set up GitHub Actions CI/CD pipeline for main project",
      "Add Docker container setup to repository",
      "Document Web Vitals & performance optimizations",
      "Practice front-end system design case studies",
      "Submit applications to senior software engineering roles"
    ]
  },
  "AI/ML Engineer": {
    text: "Looking for an AI/ML Engineer to build and deploy generative AI applications. Responsibilities: Fine-tune LLMs, build RAG pipelines with vector databases, implement semantic search, and optimize model inference latencies. Requirements: Python, PyTorch, LangChain/LlamaIndex, Pinecone/Milvus, and experience shipping production AI endpoints.",
    score: 88,
    fitLabel: "Strong Match",
    skillsMatchedCount: 9,
    totalSkillsCount: 11,
    skillsMissingCount: 2,
    experienceMatch: "86%",
    explanation: "Solid deep learning and Python foundation. Adding production RAG benchmark results will elevate your application.",
    matchedSkills: ["Python", "PyTorch", "LLM Integration", "LangChain", "Semantic Search", "Prompt Engineering", "FastAPI", "Transformer Models", "Git"],
    gaps: {
      highPriority: [
        { skill: "Vector Databases (Pinecone/Milvus)", current: "Beginner", required: "Advanced" },
        { skill: "RAG Pipeline Optimization", current: "Intermediate", required: "Advanced" }
      ],
      mediumPriority: [
        { skill: "Model Quantization & TensorRT", current: "None", required: "Beginner" },
        { skill: "LLM Evaluation Frameworks", current: "Beginner", required: "Intermediate" }
      ]
    },
    recommendations: [
      {
        title: "Showcase RAG Benchmarks",
        description: "Document retrieval accuracy and latency reductions achieved in production."
      },
      {
        title: "Publish Open Source Demos",
        description: "Share live demo links and GitHub repositories for AI agents."
      },
      {
        title: "Highlight Vector Indexing",
        description: "Detail experience with embeddings, chunking strategies, and hybrid search."
      },
      {
        title: "Prepare LLM Architecture Questions",
        description: "Practice fine-tuning vs RAG trade-offs and prompt engineering."
      }
    ],
    improvementPath: [
      "Build an end-to-end RAG project with Pinecone & LangChain",
      "Benchmark latency and retrieval accuracy metrics",
      "Add open-source repository link to resume header",
      "Practice GenAI & ML engineering interview questions",
      "Apply to AI/ML engineering roles"
    ]
  }
};

const ANALYSIS_STEPS = [
  "Reading job requirements",
  "Comparing your skills",
  "Identifying skill gaps",
  "Generating recommendations"
];

// Helper to dynamically analyze custom pasted job descriptions
function analyzeJobDescriptionText(text, selectedRoleHint = "") {
  const lower = text.toLowerCase();

  // 1. Dynamic Role Identification
  let detectedTitle = "";

  if (lower.includes("data analyst") || lower.includes("analytics engineer") || lower.includes("data analytics") || lower.includes("bi analyst")) {
    detectedTitle = "Data Analyst";
  } else if (lower.includes("ai engineer") || lower.includes("ml engineer") || lower.includes("machine learning") || lower.includes("ai/ml") || lower.includes("llm")) {
    detectedTitle = "AI / ML Engineer";
  } else if (lower.includes("software engineer") || lower.includes("frontend engineer") || lower.includes("full stack") || lower.includes("web developer")) {
    detectedTitle = "Software Engineer";
  } else if (lower.includes("business analyst") || lower.includes("systems analyst") || lower.includes("product analyst")) {
    detectedTitle = "Business Analyst";
  } else if (selectedRoleHint && SAMPLE_JOBS[selectedRoleHint]) {
    detectedTitle = selectedRoleHint;
  } else {
    // Score keyword density per role
    const dataScore = (lower.match(/data|sql|python|excel|power bi|tableau|analytics|visualization|google sheets|power query|dashboard/g) || []).length;
    const aiScore = (lower.match(/ai|ml|pytorch|llm|rag|vector|embeddings|model|deep learning|prompt/g) || []).length;
    const softwareScore = (lower.match(/react|typescript|node|frontend|api|javascript|web|git|css|software/g) || []).length;
    const baScore = (lower.match(/business analyst|scrum|agile|requirements|bpmn|stakeholder|use case|jira/g) || []).length;

    const maxScore = Math.max(dataScore, aiScore, softwareScore, baScore);
    if (maxScore > 0) {
      if (maxScore === dataScore) detectedTitle = "Data Analyst";
      else if (maxScore === aiScore) detectedTitle = "AI / ML Engineer";
      else if (maxScore === softwareScore) detectedTitle = "Software Engineer";
      else detectedTitle = "Business Analyst";
    } else {
      detectedTitle = "Data Analyst";
    }
  }

  // 2. Extracted Skills Taxonomy
  const candidateSkills = [
    { name: "SQL", aliases: ["sql", "query", "queries", "database"] },
    { name: "Python", aliases: ["python", "pandas", "numpy"] },
    { name: "Excel", aliases: ["excel", "spreadsheet", "vlookup", "pivot"] },
    { name: "Power BI", aliases: ["power bi", "powerbi", "dax"] },
    { name: "Tableau", aliases: ["tableau"] },
    { name: "Data Analysis", aliases: ["data analysis", "analytics", "data insights", "analytical"] },
    { name: "Data Visualization", aliases: ["visualization", "visualizations", "charts", "dashboard"] },
    { name: "Google Sheets", aliases: ["google sheets", "sheets"] },
    { name: "Power Query", aliases: ["power query", "powerquery", "etl"] },
    { name: "Automation", aliases: ["automation", "automate", "scripting"] },
    { name: "APIs & Integration", aliases: ["api", "apis", "integration", "pipeline"] },
    { name: "AI Productivity Tools", aliases: ["ai tools", "chatgpt", "copilot", "generative ai"] },
    { name: "React & Modern Web", aliases: ["react", "typescript", "javascript", "web"] },
    { name: "PyTorch & LLMs", aliases: ["pytorch", "llm", "rag", "langchain"] },
    { name: "Agile & Requirements", aliases: ["agile", "scrum", "requirements", "stakeholder"] },
    { name: "Git & Version Control", aliases: ["git", "github", "version control"] },
  ];

  // Filter skills present in the submitted text
  const presentSkills = candidateSkills.filter((skill) =>
    skill.aliases.some((alias) => lower.includes(alias))
  );

  const matchedSkillsNames = presentSkills.map((s) => s.name);

  // Fallback skills if text had general wording
  if (matchedSkillsNames.length === 0) {
    if (detectedTitle === "Data Analyst") {
      matchedSkillsNames.push("SQL", "Python", "Excel", "Data Analysis", "Data Visualization");
    } else if (detectedTitle === "AI / ML Engineer") {
      matchedSkillsNames.push("Python", "PyTorch", "LLM Integration", "Semantic Search", "Prompt Engineering");
    } else if (detectedTitle === "Software Engineer") {
      matchedSkillsNames.push("React", "TypeScript", "REST APIs", "Git Workflows", "Node.js");
    } else {
      matchedSkillsNames.push("Requirements Elicitation", "Stakeholder Communication", "Agile/Scrum", "Tableau", "User Stories");
    }
  }

  // Role-Specific Skill Gaps
  const highPriorityGaps = [];
  const mediumPriorityGaps = [];

  if (detectedTitle === "Data Analyst") {
    if (!lower.includes("sql") || lower.includes("advanced sql") || lower.includes("cte")) {
      highPriorityGaps.push({ skill: "Advanced SQL (CTEs & Window Functions)", current: "Intermediate", required: "Advanced" });
    }
    if (!lower.includes("power bi") && !lower.includes("dax")) {
      highPriorityGaps.push({ skill: "Power BI & DAX Data Modeling", current: "Beginner", required: "Intermediate" });
    }
    if (!lower.includes("automation") && !lower.includes("etl")) {
      mediumPriorityGaps.push({ skill: "Automated Data Pipelines (Power Query)", current: "Beginner", required: "Intermediate" });
    }
    if (!lower.includes("testing") && !lower.includes("a/b")) {
      mediumPriorityGaps.push({ skill: "A/B Testing & Statistical Modeling", current: "Beginner", required: "Intermediate" });
    }
    if (highPriorityGaps.length === 0) {
      highPriorityGaps.push({ skill: "Advanced Power Query & DAX Modeling", current: "Intermediate", required: "Advanced" });
    }
    if (mediumPriorityGaps.length === 0) {
      mediumPriorityGaps.push({ skill: "Automated Python Data Integration", current: "Beginner", required: "Intermediate" });
    }
  } else if (detectedTitle === "AI / ML Engineer") {
    highPriorityGaps.push({ skill: "Vector Databases (Pinecone/Milvus)", current: "Beginner", required: "Advanced" });
    highPriorityGaps.push({ skill: "RAG Pipeline Latency Optimization", current: "Intermediate", required: "Advanced" });
    mediumPriorityGaps.push({ skill: "Model Quantization & TensorRT", current: "None", required: "Beginner" });
    mediumPriorityGaps.push({ skill: "LLM Evaluation Frameworks", current: "Beginner", required: "Intermediate" });
  } else if (detectedTitle === "Software Engineer") {
    highPriorityGaps.push({ skill: "Automated CI/CD Pipelines", current: "Beginner", required: "Intermediate" });
    highPriorityGaps.push({ skill: "System Design & Scalability", current: "Intermediate", required: "Advanced" });
    mediumPriorityGaps.push({ skill: "Docker Containerization", current: "Beginner", required: "Intermediate" });
  } else {
    // Business Analyst
    highPriorityGaps.push({ skill: "Complex SQL Data Extraction Queries", current: "Beginner", required: "Intermediate" });
    highPriorityGaps.push({ skill: "Process Mapping (BPMN 2.0)", current: "Intermediate", required: "Advanced" });
    mediumPriorityGaps.push({ skill: "Financial & Operational Modeling", current: "Beginner", required: "Intermediate" });
  }

  // Synchronized Metrics Calculation
  const totalSkillsCount = 11;
  const skillsMatchedCount = Math.min(10, Math.max(7, matchedSkillsNames.length + 2));
  const skillsMissingCount = highPriorityGaps.length + mediumPriorityGaps.length;

  const score = Math.min(96, Math.max(78, 75 + skillsMatchedCount * 2 + (text.length % 5)));
  const fitLabel = score >= 88 ? "Excellent Match" : score >= 81 ? "Strong Match" : "Good Match";
  const experienceMatch = `${Math.min(96, score + 3)}%`;

  // Concise, relevant explanation
  const topMatchedStr = matchedSkillsNames.slice(0, 4).join(", ");
  const topGapStr = highPriorityGaps[0]?.skill || "Advanced Skills";

  const explanation = `Your profile demonstrates strong alignment for the ${detectedTitle} position, showing key strength in ${topMatchedStr}. Strengthening ${topGapStr} will maximize your match score.`;

  // Consistent Recommendations
  const recommendations = [
    {
      title: `Tailor Bullet Points for ${detectedTitle}`,
      description: `Highlight ${topMatchedStr} in your experience section with quantified outcome metrics.`
    },
    {
      title: `Bridge ${topGapStr}`,
      description: `Complete a practical project focusing on ${topGapStr} to move from ${highPriorityGaps[0]?.current || "Intermediate"} to ${highPriorityGaps[0]?.required || "Advanced"}.`
    },
    {
      title: "Quantify Business Impact",
      description: "Ensure bullet points quantify achievements with specific percentages, time saved, or efficiency gains."
    },
    {
      title: `Prepare ${detectedTitle} Technical Case Studies`,
      description: `Practice answering role-specific scenario questions and analytical trade-offs for ${detectedTitle} interviews.`
    }
  ];

  // Consistent Improvement Path
  const improvementPath = [
    `Master ${topGapStr} concepts and practical applications`,
    `Build a portfolio project demonstrating ${matchedSkillsNames.slice(0, 2).join(" & ")}`,
    `Refactor resume phrasing to highlight keywords present in this ${detectedTitle} job posting`,
    `Conduct mock interview practice targeting ${detectedTitle} technical standards`,
    `Submit application with verified match score of ${score}%`
  ];

  return {
    text: text,
    score: score,
    fitLabel: fitLabel,
    skillsMatchedCount: skillsMatchedCount,
    totalSkillsCount: totalSkillsCount,
    skillsMissingCount: skillsMissingCount,
    experienceMatch: experienceMatch,
    explanation: explanation,
    matchedSkills: matchedSkillsNames,
    gaps: {
      highPriority: highPriorityGaps,
      mediumPriority: mediumPriorityGaps
    },
    recommendations: recommendations,
    improvementPath: improvementPath
  };
}

export default function JobMatchDemo() {
  const [jobDescription, setJobDescription] = useState(SAMPLE_JOBS["Data Analyst"].text);
  const [selectedRole, setSelectedRole] = useState("Data Analyst");
  const [validationError, setValidationError] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);
  const [showImprovePath, setShowImprovePath] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  
  const [ref, isVisible] = useReveal();

  const handlePresetSelect = (roleName) => {
    const preset = SAMPLE_JOBS[roleName];
    if (preset) {
      setSelectedRole(roleName);
      setJobDescription(preset.text);
      setValidationError("");
    }
  };

  const handleAnalyze = (e) => {
    e?.preventDefault();
    if (!jobDescription || !jobDescription.trim()) {
      setValidationError("Please paste or enter a job description to analyze your match.");
      return;
    }

    setValidationError("");
    setIsAnalyzing(true);
    setLoadingStep(0);
    setShowImprovePath(false);

    // Calculate dynamic analysis result based on input text
    let matchedData = null;
    if (selectedRole && SAMPLE_JOBS[selectedRole] && SAMPLE_JOBS[selectedRole].text.trim() === jobDescription.trim()) {
      matchedData = SAMPLE_JOBS[selectedRole];
    } else {
      matchedData = analyzeJobDescriptionText(jobDescription, selectedRole);
    }

    // Step-by-step progress simulation (~1200ms total for polished feel)
    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < ANALYSIS_STEPS.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 280);

    setTimeout(() => {
      clearInterval(interval);
      setIsAnalyzing(false);
      setAnalysisResult(matchedData);
      setHasAnalyzed(true);
    }, 1250);
  };

  const handleReset = () => {
    setHasAnalyzed(false);
    setIsAnalyzing(false);
    setShowImprovePath(false);
    setValidationError("");
  };

  return (
    <section id="interactive-demo" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
            <Zap className="w-3.5 h-3.5" />
            Recruiter Match Simulator
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            See Your Job Match in Seconds
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Paste a job description and let AI identify your match, skill gaps, and next best actions.
          </p>
        </div>

        {/* STEP 1: ENTER JOB FORM */}
        <div ref={ref} className="mt-10 max-w-3xl mx-auto">
          {!hasAnalyzed && !isAnalyzing && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 shadow-sm">
              <form onSubmit={handleAnalyze} className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="job-description-input" className="block text-sm font-bold text-slate-800">
                      Target Job Description
                    </label>
                    <span className="text-xs font-medium text-slate-500">
                      Step 1 of 6 · Input
                    </span>
                  </div>

                  <textarea
                    id="job-description-input"
                    rows={5}
                    value={jobDescription}
                    onChange={(e) => {
                      setJobDescription(e.target.value);
                      if (validationError) setValidationError("");
                    }}
                    placeholder="Paste a job description here..."
                    className={`w-full rounded-xl border bg-white p-4 text-slate-900 placeholder:text-slate-400 text-sm leading-relaxed transition-all shadow-xs focus:outline-none focus:ring-2 ${
                      validationError
                        ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500/20"
                        : "border-slate-300 focus:border-blue-600 focus:ring-blue-600/20"
                    }`}
                  />

                  {validationError && (
                    <p className="mt-2 text-xs font-semibold text-rose-600 flex items-center gap-1.5 animate-slide-down">
                      <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                      <span>{validationError}</span>
                    </p>
                  )}
                </div>

                {/* Example Job Buttons */}
                <div>
                  <p className="text-xs font-bold text-slate-600 mb-2">Or select an example job description:</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {Object.keys(SAMPLE_JOBS).map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => handlePresetSelect(role)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all border ${
                          selectedRole === role
                            ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                            : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Primary CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-base font-bold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <Sparkles className="h-5 w-5" />
                    <span>Analyze Job</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 2: ANALYZE LOADING STATE */}
          {isAnalyzing && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-md space-y-6">
              <div className="flex items-center gap-3">
                <RefreshCw className="h-6 w-6 text-blue-600 animate-spin shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Analyzing your profile...</h3>
                  <p className="text-xs text-slate-500 font-mono">Evaluating qualifications against requirements</p>
                </div>
              </div>

              {/* Progress items checklist */}
              <div className="space-y-3 bg-white p-5 rounded-xl border border-slate-200">
                {ANALYSIS_STEPS.map((step, idx) => {
                  const isDone = idx < loadingStep;
                  const isCurrent = idx === loadingStep;
                  return (
                    <div
                      key={step}
                      className={`flex items-center gap-3 text-sm transition-all duration-300 ${
                        isDone
                          ? "text-emerald-700 font-semibold"
                          : isCurrent
                          ? "text-blue-600 font-bold"
                          : "text-slate-400 font-medium"
                      }`}
                    >
                      {isDone ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      ) : isCurrent ? (
                        <RefreshCw className="h-4 w-4 text-blue-600 animate-spin shrink-0" />
                      ) : (
                        <div className="h-4 w-4 rounded-full border border-slate-300 shrink-0" />
                      )}
                      <span>{step}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3, 4, 5, 6, 7: ANALYSIS RESULTS */}
          {!isAnalyzing && hasAnalyzed && analysisResult && (
            <div className="space-y-8 animate-fade-in">

              {/* RECRUITER TOP SUMMARY BAR */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900 text-white p-4 sm:p-5 rounded-2xl shadow-lg border border-slate-800">
                <div className="text-center p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Match Score</p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono mt-0.5">{analysisResult.score}%</p>
                </div>
                <div className="text-center p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Skill Gaps</p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono mt-0.5">{analysisResult.skillsMissingCount}</p>
                </div>
                <div className="text-center p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Recommendations</p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono mt-0.5">{analysisResult.recommendations.length}</p>
                </div>
                <div className="text-center p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Overall Fit</p>
                  <p className="text-base sm:text-lg font-bold text-white mt-1.5">{analysisResult.fitLabel}</p>
                </div>
              </div>

              {/* STEP 3: MATCH SCORE DISPLAY */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8 shadow-md">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200">
                  
                  {/* Left: SVG Match Circle */}
                  <div className="flex items-center gap-6">
                    <MatchScoreRing score={analysisResult.score} size={108} active={isVisible} />
                    <div>
                      <span className="inline-flex items-center gap-1 rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800 border border-emerald-200 mb-1">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        {analysisResult.fitLabel}
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900">{analysisResult.score}% Match</h3>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">Target: {selectedRole}</p>
                    </div>
                  </div>

                  {/* Right: Breakdown metrics */}
                  <div className="grid grid-cols-2 gap-3 w-full sm:w-auto">
                    <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
                      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Skills Matched</p>
                      <p className="text-base font-extrabold text-slate-900 font-mono mt-0.5">
                        {analysisResult.skillsMatchedCount} / {analysisResult.totalSkillsCount}
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
                      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Experience Match</p>
                      <p className="text-base font-extrabold text-blue-600 font-mono mt-0.5">
                        {analysisResult.experienceMatch}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Explanation Card */}
                <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50/80 p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 font-mono mb-1">
                        AI Match Evaluation
                      </h4>
                      <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                        "{analysisResult.explanation}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 4: SKILL GAPS */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    <h3 className="text-xl font-bold text-slate-900">Skill Gaps</h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 font-mono">
                    {analysisResult.gaps.highPriority.length + analysisResult.gaps.mediumPriority.length} Missing / To-Improve
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* High Priority Gaps */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="h-2 w-2 rounded-full bg-rose-500" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 font-mono">
                        High Priority
                      </h4>
                    </div>
                    {analysisResult.gaps.highPriority.map((item) => (
                      <div
                        key={item.skill}
                        className="rounded-xl border border-rose-100 bg-rose-50/30 p-3.5 transition-all hover:bg-rose-50/60"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-900">{item.skill}</span>
                          <span className="text-xs font-bold text-rose-700 bg-rose-100/80 px-2 py-0.5 rounded-md border border-rose-200">
                            Required
                          </span>
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-slate-600">
                          <span className="bg-white px-2 py-0.5 rounded border border-slate-200">{item.current}</span>
                          <ArrowRight className="h-3 w-3 text-slate-400" />
                          <span className="bg-slate-900 text-white px-2 py-0.5 rounded font-bold">{item.required}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Medium Priority Gaps */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 font-mono">
                        Medium Priority
                      </h4>
                    </div>
                    {analysisResult.gaps.mediumPriority.map((item) => (
                      <div
                        key={item.skill}
                        className="rounded-xl border border-amber-100 bg-amber-50/30 p-3.5 transition-all hover:bg-amber-50/60"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-900">{item.skill}</span>
                          <span className="text-xs font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md border border-amber-200">
                            Recommended
                          </span>
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-slate-600">
                          <span className="bg-white px-2 py-0.5 rounded border border-slate-200">{item.current}</span>
                          <ArrowRight className="h-3 w-3 text-slate-400" />
                          <span className="bg-slate-900 text-white px-2 py-0.5 rounded font-bold">{item.required}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* STEP 5: AI RECOMMENDATIONS */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-4">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-900">AI Recommendations</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {analysisResult.recommendations.map((rec, index) => (
                    <div
                      key={rec.title}
                      className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs hover:shadow-md transition-all space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700 font-mono shrink-0">
                          {index + 1}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900">{rec.title}</h4>
                      </div>
                      <p className="text-xs font-medium text-slate-600 leading-relaxed pl-8">
                        {rec.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* STEP 6 & STEP 7: ACTION BUTTONS */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-md text-center space-y-6">
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  
                  {/* STEP 6 CTA */}
                  <button
                    type="button"
                    onClick={() => setShowImprovePath((prev) => !prev)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-base font-bold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <TrendingUp className="h-5 w-5" />
                    <span>{showImprovePath ? "Hide Improvement Path" : "Improve My Match"}</span>
                    {showImprovePath ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
                  </button>

                  {/* STEP 7 CTA */}
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 border border-slate-300 px-6 py-3.5 text-base font-bold text-slate-700 hover:bg-slate-200 hover:text-slate-900 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
                  >
                    <RefreshCw className="h-4 w-4" />
                    <span>Analyze Another Job</span>
                  </button>
                </div>

                {/* EXPANDABLE STEP 6: YOUR FASTEST IMPROVEMENT PATH */}
                {showImprovePath && (
                  <div className="mt-6 text-left rounded-xl border border-blue-200 bg-blue-50/50 p-5 sm:p-6 space-y-4 animate-slide-down">
                    <div className="flex items-center gap-2 border-b border-blue-200/60 pb-3">
                      <Target className="h-5 w-5 text-blue-600" />
                      <h4 className="text-base font-bold text-slate-900">Your Fastest Improvement Path</h4>
                    </div>

                    <ol className="space-y-3">
                      {analysisResult.improvementPath.map((stepItem, idx) => (
                        <li key={idx} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-blue-100 shadow-2xs">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white font-mono">
                            {idx + 1}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-800 pt-0.5">
                            {stepItem}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
