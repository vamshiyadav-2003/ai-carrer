import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import DashboardPreview from "./components/DashboardPreview.jsx";
import JobMatchDemo from "./components/JobMatchDemo.jsx";
import WhyWorkflow from "./components/WhyWorkflow.jsx";
import Features from "./components/Features.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import BuiltFor from "./components/BuiltFor.jsx";
import ResumeInsights from "./components/ResumeInsights.jsx";
import ApplicationTracker from "./components/ApplicationTracker.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import CommandPalette from "./components/CommandPalette.jsx";
import AddAppModal from "./components/AddAppModal.jsx";
import Toast from "./components/Toast.jsx";

const INITIAL_APPLICATIONS = [
  {
    id: "app-1",
    companyInitials: "SC",
    companyName: "Sample Company",
    role: "Business Intelligence Analyst",
    location: "Remote · Full-time",
    status: "interview",
    statusLabel: "Interview",
    date: "Aug 14, 2026",
    matchScore: 89,
    notes: "Technical interview scheduled for Thursday with Lead Data Architect."
  },
  {
    id: "app-2",
    companyInitials: "EC",
    companyName: "Example Company",
    role: "Data Analyst",
    location: "Hybrid · New York, NY",
    status: "applied",
    statusLabel: "Applied",
    date: "Aug 16, 2026",
    matchScore: 87,
    notes: "Submitted tailored resume with quantified SQL project metrics."
  },
  {
    id: "app-3",
    companyInitials: "DC",
    companyName: "Demo Company",
    role: "Analytics Associate",
    location: "Remote · Contract",
    status: "shortlisted",
    statusLabel: "Shortlisted",
    date: "Aug 10, 2026",
    matchScore: 91,
    notes: "Passed recruiter screening call. Awaiting technical assessment invite."
  }
];

export default function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [applications, setApplications] = useState(INITIAL_APPLICATIONS);
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Keyboard shortcut listener for Cmd+K / Ctrl+K Easter Egg
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  const handleAddApplication = (newApp) => {
    setApplications((prev) => [newApp, ...prev]);
    setToastMessage("Application added successfully");
    setIsToastVisible(true);
  };

  const handleTriggerToast = (msg) => {
    setToastMessage(msg);
    setIsToastVisible(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onTriggerToast={handleTriggerToast}
      />

      {/* Main Section Pipeline */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Hero Product Visual / Workspace Preview */}
        <DashboardPreview />

        {/* 3. Interactive AI Job Match Simulator */}
        <JobMatchDemo />

        {/* 4. Why AI Career Copilot Workflow (Discover -> Understand -> Improve -> Track) */}
        <WhyWorkflow />

        {/* 5. Core Capabilities Grid */}
        <Features />

        {/* 6. 3-Step How It Works */}
        <HowItWorks />

        {/* 7. Built For Ambitious Job Seekers */}
        <BuiltFor />

        {/* 8. Resume AI Analysis Section */}
        <ResumeInsights />

        {/* 9. Application Tracker Pipeline */}
        <ApplicationTracker
          applications={applications}
          onOpenAddModal={() => setIsAddModalOpen(true)}
        />

        {/* 10. Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer onTriggerToast={handleTriggerToast} />

      {/* Easter Egg Cmd+K Spotlight Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* Add Application Modal */}
      <AddAppModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddApplication={handleAddApplication}
      />

      {/* Toast Feedback Notification */}
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
    </div>
  );
}
