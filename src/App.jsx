import React, { useState } from 'react';
import { AlertCircle, Eye, Camera, FileText, Users, Shield, ChevronDown, Download, ExternalLink, CheckCircle, XCircle, Share2, BookOpen } from 'lucide-react';

export default function SurveillanceAwarenessPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toolkitFiles = [
    { 
      name: 'Simplified Template', 
      path: import.meta.env.BASE_URL + 'Template_download/flock_camera_records_request_SIMPLIFIED.pdf', 
      filename: 'Surveillance_Camera_Request_SIMPLIFIED.pdf',
      type: 'template'
    },
    { 
      name: 'Comprehensive Template', 
      path: import.meta.env.BASE_URL + 'Template_download/flock_camera_records_request_template.pdf', 
      filename: 'Surveillance_Camera_Request_COMPREHENSIVE.pdf',
      type: 'template'
    },
    { 
      name: 'Complete How-To Guide', 
      path: import.meta.env.BASE_URL + 'Template_download/HOW_TO_GUIDE_public_records_requests.pdf', 
      filename: 'How_To_Guide.pdf',
      type: 'guide'
    },
    { 
      name: 'Quick Start Guide', 
      path: import.meta.env.BASE_URL + 'Template_download/QUICK_START_one_page_guide.pdf', 
      filename: 'Quick_Start_Guide.pdf',
      type: 'guide'
    },
    { 
      name: 'Legal Context Document', 
      path: import.meta.env.BASE_URL + 'Template_download/LEGAL_CONTEXT_surveillance_cameras.pdf', 
      filename: 'Legal_Context.pdf',
      type: 'guide'
    },
    { 
      name: 'Email Templates', 
      path: import.meta.env.BASE_URL + 'Template_download/EMAIL_TEMPLATES_all_scenarios.pdf', 
      filename: 'Email_Templates.pdf',
      type: 'guide'
    },
    { 
      name: 'Quick Reference', 
      path: import.meta.env.BASE_URL + 'Template_download/QUICK_REFERENCE_surveillance_requests.pdf', 
      filename: 'Quick_Reference.pdf',
      type: 'guide'
    },
    { 
      name: 'Toolkit Index', 
      path: import.meta.env.BASE_URL + 'Template_download/TOOLKIT_INDEX_master_guide.pdf', 
      filename: 'Toolkit_Index.pdf',
      type: 'guide'
    }
  ];

  const downloadAllFiles = () => {
    setShowDownloadModal(true);
  };

  const viewTemplate = (file) => {
    // Open PDF in new tab for viewing
    window.open(file.path, '_blank');
  };

  const shareThisCampaign = async () => {
    const shareData = {
      title: 'WA Surveillance Watch',
      text: 'Demand transparency on law enforcement surveillance cameras in Washington State. Get free templates to file public records requests.',
      url: window.location.href
    };

    // Try Web Share API first (works on mobile and modern browsers)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or error occurred
        if (err.name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    } else {
      // Fallback: Copy URL to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard! Share it with others to spread awareness.');
      } catch (err) {
        // Final fallback: Show the URL
        prompt('Copy this link to share:', window.location.href);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 80% 80%, rgba(74, 144, 226, 0.3), transparent 50%)'
        }}></div>
        
        <nav className="relative z-10 container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Eye className="w-8 h-8 text-red-400" />
            <span className="text-xl font-bold">WA Surveillance Watch</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('problem')} className="hover:text-blue-300 transition">The Issue</button>
            <button onClick={() => scrollToSection('victory')} className="hover:text-blue-300 transition">Recent Victory</button>
            <button onClick={() => scrollToSection('action')} className="hover:text-blue-300 transition">Take Action</button>
            <button onClick={() => scrollToSection('resources')} className="hover:text-blue-300 transition">Resources</button>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              BREAKING: Court Rules Surveillance Data Must Be Public
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your City Is Watching.<br />
              <span className="text-blue-300">Are You Watching Back?</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Law enforcement across Washington State is using automated cameras to track every vehicle, every day. 
              Without oversight. Without transparency. Until now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('action')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105 flex items-center justify-center"
              >
                <FileText className="w-5 h-5 mr-2" />
                Get the Templates
              </button>
              <button 
                onClick={() => scrollToSection('problem')}
                className="bg-white bg-opacity-10 hover:bg-opacity-20 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </header>

      {/* Stats Section */}
      <section className="bg-slate-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">80+</div>
              <div className="text-gray-400">WA Cities Using ALPR</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">2,000</div>
              <div className="text-gray-400">Plates Scanned Per Minute</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">18+</div>
              <div className="text-gray-400">Agencies With Federal Access</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-400">Of Drivers Photographed</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">The Problem</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-slate-800 p-8 rounded-xl border-2 border-red-500">
              <Camera className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Mass Surveillance Without Oversight</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Cameras photograph EVERY vehicle that passes, not just suspects</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Data stored for weeks or months, tracking your movements</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-2 mt-1 flex-shrink-0" />
                  <span>No warrant required to collect or search this data</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Communities often unaware cameras exist</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border-2 border-orange-500">
              <AlertCircle className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Unauthorized Federal Access</h3>
              <p className="text-gray-300 mb-4">
                A University of Washington report (October 2025) revealed shocking findings:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-400 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>8 WA agencies</strong> directly shared data with Border Patrol</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-400 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>10+ agencies</strong> had "back door" federal access without knowledge</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Data used to track <strong>abortion seekers</strong> and <strong>immigrants</strong></span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Auburn & Lakewood were <strong>unaware</strong> and revoked access</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-red-900 to-orange-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="w-8 h-8 mr-3" />
              Washington's Shield Law Being Violated
            </h3>
            <p className="text-lg text-gray-200">
              Washington State law (RCW 10.93.160) <strong>prohibits</strong> the use of surveillance systems for civil immigration enforcement. 
              Yet federal agencies accessed local surveillance data, potentially violating state law and putting vulnerable communities at risk.
            </p>
          </div>
        </div>
      </section>

      {/* Victory Section */}
      <section id="victory" className="py-20 bg-gradient-to-br from-green-900 to-emerald-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-green-400 text-green-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              LANDMARK VICTORY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Court Rules: Surveillance Data Is Public Record
            </h2>
            <p className="text-xl text-gray-200">
              November 2025 - Skagit County Superior Court
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">What Happened</h3>
                <p className="text-gray-200 mb-4">
                  Jose Rodriguez, a tattoo artist, filed public records requests with dozens of Washington agencies 
                  seeking surveillance camera images. When two cities sued to block his requests, Judge Elizabeth 
                  Yost Neidzwski ruled decisively:
                </p>
                <div className="bg-green-800 bg-opacity-50 p-4 rounded-lg border-l-4 border-green-400">
                  <p className="italic text-lg">
                    "The Flock data do qualify as public records subject to the Public Records Act."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Why It Matters</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Surveillance that is "broad and indiscriminate" MUST be disclosed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Privacy arguments rejected by the court</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Affects dozens of WA police departments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Both cities turned off cameras after losing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>You now have legal precedent to demand transparency</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Take Action Section */}
      <section id="action" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Take Action Now</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've created a complete toolkit to help you demand transparency from your local police department. 
              Everything you need is here, ready to use.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  activeTab === 'overview' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('templates')}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  activeTab === 'templates' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                Templates
              </button>
              <button
                onClick={() => setActiveTab('guides')}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  activeTab === 'guides' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                How-To Guides
              </button>
              <button
                onClick={() => setActiveTab('contacts')}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  activeTab === 'contacts' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                Local Contacts
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="bg-slate-800 p-8 rounded-xl">
                <h3 className="text-3xl font-bold mb-6">Quick Start - 3 Steps to Transparency</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Download the Template</h4>
                      <p className="text-gray-300">
                        Choose the Simplified Template (recommended for beginners) or Comprehensive Template (for detailed investigation). 
                        Both are fully compliant with Washington State law.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Fill in the Blanks</h4>
                      <p className="text-gray-300">
                        Replace the [BRACKETED] items with your information and the camera locations in your area. 
                        Takes about 15 minutes. Our guide walks you through every step.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Submit & Follow Up</h4>
                      <p className="text-gray-300">
                        Email your request to your local police department. They must respond within 5 business days. 
                        Use our email templates for any follow-up needed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-slate-700 rounded-lg border border-slate-600">
                  <h4 className="text-xl font-bold mb-3 flex items-center">
                    <Users className="w-6 h-6 mr-2" />
                    Total Time Investment
                  </h4>
                  <p className="text-lg">
                    <strong className="text-white">About 1 hour</strong> for your first request. 
                    You'll get faster with practice. Many people have successfully done this!
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'templates' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800 p-6 rounded-xl border-2 border-blue-500">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">Simplified Template</h3>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      RECOMMENDED
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    2 pages with essential information. Perfect for first-time requesters. 
                    Covers all surveillance technologies and includes the court ruling.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-gray-400">
                    <li>+ Camera locations & contracts</li>
                    <li>+ Policies & data sharing</li>
                    <li>+ Federal access records</li>
                    <li>+ Network audit logs</li>
                  </ul>
                  <div className="space-y-3">
                    <button 
                      onClick={() => viewTemplate(toolkitFiles[0])}
                      className="w-full bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center"
                    >
                      <BookOpen className="w-5 h-5 mr-2" />
                      Open PDF
                    </button>
                    <a 
                      href={import.meta.env.BASE_URL + "Template_download/flock_camera_records_request_SIMPLIFIED.pdf"}
                      download="Surveillance_Camera_Request_SIMPLIFIED.pdf"
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Template
                    </a>
                  </div>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border-2 border-purple-500">
                  <h3 className="text-2xl font-bold mb-4">Comprehensive Template</h3>
                  <p className="text-gray-300 mb-4">
                    6 pages with detailed investigation items. For journalists, researchers, 
                    or follow-up requests. Covers 8 detailed record categories.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-gray-400">
                    <li>+ Everything in Simplified, plus:</li>
                    <li>+ Technical specifications</li>
                    <li>+ Training materials</li>
                    <li>+ Extensive correspondence</li>
                    <li>+ Financial analyses</li>
                  </ul>
                  <div className="space-y-3">
                    <button 
                      onClick={() => viewTemplate(toolkitFiles[1])}
                      className="w-full bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center"
                    >
                      <BookOpen className="w-5 h-5 mr-2" />
                      Open PDF
                    </button>
                    <a 
                      href={import.meta.env.BASE_URL + "Template_download/flock_camera_records_request_template.pdf"}
                      download="Surveillance_Camera_Request_COMPREHENSIVE.pdf"
                      className="w-full bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Template
                    </a>
                  </div>
                </div>

                <div className="md:col-span-2 bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <FileText className="w-6 h-6 mr-2" />
                    Complete Toolkit (All Files)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2">Request Templates:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>- Simplified Template</li>
                        <li>- Comprehensive Template</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Guides & Resources:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>- Complete How-To Guide</li>
                        <li>- Quick Start One-Page Guide</li>
                        <li>- Legal Context Document</li>
                        <li>- Email Templates (10 scenarios)</li>
                        <li>- Quick Reference Guide</li>
                        <li>- Master Toolkit Index</li>
                      </ul>
                    </div>
                  </div>
                  <button 
                    onClick={downloadAllFiles}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition flex items-center justify-center"
                  >
                    <Download className="w-6 h-6 mr-2" />
                    Download Complete Toolkit (All Files)
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'guides' && (
              <div className="grid md:grid-cols-2 gap-6">
                {toolkitFiles.filter(f => f.type === 'guide').map((file, index) => (
                  <div key={index} className="bg-slate-800 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3">{file.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {file.name === 'Complete How-To Guide' && 'Step-by-step walkthrough with 7 detailed steps, troubleshooting, and Thurston County contacts.'}
                      {file.name === 'Quick Start Guide' && 'One-page printable reference card. Get started in 5 minutes.'}
                      {file.name === 'Legal Context Document' && 'Deep dive into court ruling, UW report, and how to cite precedent in appeals.'}
                      {file.name === 'Email Templates' && '10 ready-to-use templates for submission, follow-ups, appeals, and more.'}
                      {file.name === 'Quick Reference' && 'Handy reference guide with legal rights, what to request, and troubleshooting.'}
                      {file.name === 'Toolkit Index' && 'Master guide to all files with usage instructions and best practices.'}
                    </p>
                    <div className="space-y-2">
                      <button
                        onClick={() => viewTemplate(file)}
                        className="w-full text-blue-400 hover:text-blue-300 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded transition flex items-center text-sm"
                      >
                        <BookOpen className="w-4 h-4 mr-1" />
                        Open PDF
                      </button>
                      <a 
                        href={file.path}
                        download={file.filename}
                        className="w-full text-blue-400 hover:text-blue-300 flex items-center text-sm px-4 py-2"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Download File
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'contacts' && (
              <div className="bg-slate-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Thurston County Area Contacts</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-3">City of Olympia</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> publicrecords@olympiawa.gov</p>
                      <p><strong>Phone:</strong> (360) 753-8300</p>
                      <p className="text-gray-400">Olympia Police Department</p>
                    </div>
                  </div>

                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-3">City of Lacey</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> publicrecords@cityoflacey.org</p>
                      <p><strong>Phone:</strong> (360) 459-4333</p>
                      <p className="text-gray-400">Lacey Police Department</p>
                    </div>
                  </div>

                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-3">City of Tumwater</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> publicrecords@ci.tumwater.wa.us</p>
                      <p><strong>Phone:</strong> (360) 754-4200</p>
                      <p className="text-gray-400">Tumwater Police Department</p>
                    </div>
                  </div>

                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-3">Thurston County</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> publicrecords@co.thurston.wa.us</p>
                      <p><strong>Phone:</strong> (360) 786-5500</p>
                      <p className="text-gray-400">Sheriff's Office</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900 bg-opacity-50 p-6 rounded-lg border border-blue-500">
                  <h4 className="font-bold mb-3">Finding Contacts for Other Cities</h4>
                  <p className="text-sm text-gray-300 mb-2">
                    Search online for: "[City Name] Police public records" or call your city hall and ask: 
                    "What's the best way to submit a public records request?"
                  </p>
                  <p className="text-sm text-gray-400">
                    The Complete How-To Guide includes contact information for major Washington cities and counties.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Additional Resources</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-900 p-6 rounded-xl">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">ACLU of Washington</h3>
              <p className="text-gray-400 text-sm mb-4">
                Privacy & surveillance advocacy, legal assistance
              </p>
              <a href="https://www.aclu-wa.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
                Visit Website <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <p className="text-sm text-gray-500 mt-2">Phone: (206) 624-2184</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <FileText className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">WA Attorney General</h3>
              <p className="text-gray-400 text-sm mb-4">
                Public records guidance, dispute resolution
              </p>
              <a href="https://www.atg.wa.gov/open-government" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
                Public Records Resources <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <p className="text-sm text-gray-500 mt-2">Phone: (360) 753-6200</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <Users className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">UW Human Rights Center</h3>
              <p className="text-gray-400 text-sm mb-4">
                Surveillance research, federal access report
              </p>
              <a href="https://jsis.washington.edu/humanrights/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
                Read the Report <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border-2 border-green-500">
              <FileText className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Court Case Document</h3>
              <p className="text-gray-400 text-sm mb-4">
                Rodriguez v. City of Sedro Woolley ruling (Nov 2025)
              </p>
              <a href="https://www.courts.wa.gov/opinions/pdf/862693.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
                Read Full Ruling <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <p className="text-sm text-gray-500 mt-2">Skagit County Superior Court</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Will I get in trouble for filing a request?",
                a: "No. Filing public records requests is a constitutional right protected by Washington law. Agencies should not retaliate."
              },
              {
                q: "Do I need to be a journalist or have a special reason?",
                a: "No. Any person can request public records. You don't need to explain why you want the information."
              },
              {
                q: "How much will this cost?",
                a: "Electronic records are usually free or minimal cost (under $10). You can also request a fee waiver if costs are high."
              },
              {
                q: "What if my city denies my request citing privacy?",
                a: "Use our appeal template citing the November 2025 Skagit County court ruling that rejected privacy arguments for broad surveillance."
              },
              {
                q: "How long does the process take?",
                a: "Agencies must respond within 5 business days. They may need additional time to compile records, but you'll know within 5 days."
              },
              {
                q: "What if I don't know where cameras are located?",
                a: "That's okay! Request 'all surveillance camera locations' and the agency must provide a complete inventory."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-750 transition"
                >
                  <span className="font-semibold pr-8">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform flex-shrink-0 ${
                      expandedFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Demand Transparency?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Join hundreds of Washington residents who are exercising their rights and bringing 
            accountability to surveillance in their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={downloadAllFiles}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition transform hover:scale-105"
            >
              <Download className="inline w-5 h-5 mr-2" />
              Get the Toolkit
            </button>
            <button 
              onClick={shareThisCampaign}
              className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition"
            >
              <Share2 className="inline w-5 h-5 mr-2" />
              Share This Campaign
            </button>
          </div>
          
          <div className="mt-12 text-sm text-gray-300">
            <p className="mb-2">
              Questions? Contact{' '}
              <a href="https://www.aclu-wa.org" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">
                the ACLU of Washington
              </a>
              {' '}or your local advocacy organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-6 text-center text-gray-400 text-sm">
          <p className="mb-2">
            This campaign provides information and tools for exercising your rights under Washington's Public Records Act (RCW 42.56).
          </p>
          <p className="mb-4">
            Not legal advice. For specific legal guidance, consult an attorney.
          </p>
          <p className="text-xs text-gray-500">
            Based on Rodriguez v. City of Sedro Woolley (Nov 2025) and UW Center for Human Rights Report (Oct 2025)
          </p>
        </div>
      </footer>

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setShowDownloadModal(false)}>
          <div className="bg-slate-800 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Download Complete Toolkit</h3>
              <button 
                onClick={() => setShowDownloadModal(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                &times;
              </button>
            </div>
            <p className="text-gray-300 mb-6">
              Click each file below to download. Save all files to a folder on your computer for easy access.
            </p>
            <div className="space-y-3">
              {toolkitFiles.map((file, index) => (
                <a
                  key={index}
                  href={file.path}
                  download={file.filename}
                  className="flex items-center justify-between bg-slate-700 hover:bg-slate-600 p-4 rounded-lg transition"
                >
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 mr-3 text-blue-400" />
                    <span className="font-semibold">{file.name}</span>
                  </div>
                  <Download className="w-5 h-5 text-gray-400" />
                </a>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-900 bg-opacity-50 rounded-lg border border-blue-500">
              <p className="text-sm text-gray-300">
                <strong>Tip:</strong> Right-click any file and select "Save Link As..." if the download doesn't start automatically.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
