import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Download, Mail, Printer, CheckCircle, MapPin, Calendar, User, Building, FileText } from 'lucide-react';

export default function FormWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // User Information
    yourName: '',
    yourEmail: '',
    yourPhone: '',
    yourAddress: '',
    
    // Agency Information
    agencyName: '',
    agencyEmail: '',
    agencyAddress: '',
    agencyFax: '',
    
    // Request Details
    useSimplified: true,
    cameraLocations: [],
    locationInput: '',
    allLocations: false,
    
    // Date Range
    dateRangeType: 'inception', // 'inception', 'specific', 'recent'
    startDate: '',
    endDate: '',
    
    // Additional Options
    requestFeeWaiver: false,
    electronicDelivery: true,
  });

  const [generatedRequest, setGeneratedRequest] = useState('');

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addLocation = () => {
    if (formData.locationInput.trim()) {
      setFormData(prev => ({
        ...prev,
        cameraLocations: [...prev.cameraLocations, prev.locationInput.trim()],
        locationInput: ''
      }));
    }
  };

  const removeLocation = (index) => {
    setFormData(prev => ({
      ...prev,
      cameraLocations: prev.cameraLocations.filter((_, i) => i !== index)
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateRequest = () => {
    const today = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    let dateRange = '';
    if (formData.dateRangeType === 'inception') {
      dateRange = 'All records from program inception to present';
    } else if (formData.dateRangeType === 'recent') {
      dateRange = 'January 1, 2024 to present';
    } else {
      dateRange = `${formData.startDate} to ${formData.endDate}`;
    }

    let locations = '';
    if (formData.allLocations) {
      locations = '- All surveillance camera locations operated by ' + formData.agencyName;
    } else {
      locations = formData.cameraLocations.map(loc => `- ${loc}`).join('\n');
      if (locations) {
        locations += '\n- All other surveillance camera locations operated by your department';
      } else {
        locations = '- All surveillance camera locations operated by ' + formData.agencyName;
      }
    }

    const template = `# ${formData.useSimplified ? 'SIMPLIFIED ' : ''}PUBLIC RECORDS REQUEST
## Law Enforcement Surveillance Camera Systems
### Washington State RCW 42.56

---

**Date:** ${today}

**To:** ${formData.agencyName} - Public Records Officer  
**Email:** ${formData.agencyEmail}
${formData.agencyAddress ? `**Address:** ${formData.agencyAddress}` : ''}
${formData.agencyFax ? `**Fax:** ${formData.agencyFax}` : ''}

**From:**  
${formData.yourName}  
${formData.yourAddress ? formData.yourAddress + '  \n' : ''}${formData.yourEmail}  
${formData.yourPhone}

---

## IMPORTANT RECENT LEGAL PRECEDENT

**Skagit County Superior Court Ruling (November 2025):**

Judge Elizabeth Yost Neidzwski of Skagit County Superior Court ruled that surveillance camera data, including images captured by Flock cameras, qualifies as public records subject to Washington's Public Records Act (RCW 42.56). The judge found that the scope of surveillance was "so broad and indiscriminate" — with most images capturing people not suspected of any crime — that the data must be released under public records law.

**Key Court Finding:** "The Flock data do qualify as public records subject to the Public Records Act."

**Federal Access Concerns:**

A University of Washington Center for Human Rights report (October 2025) revealed that federal agents, including U.S. Border Patrol and ICE, had accessed Washington's surveillance camera networks, often without local agencies' knowledge. At least 8 Washington agencies directly shared data with Border Patrol, and at least 10 agencies had "back door" access by federal agencies without explicit authorization.

---

## PUBLIC RECORDS REQUEST

Dear Public Records Officer,

Pursuant to Washington State's Public Records Act (RCW 42.56), I request copies of the following public records:

### REQUESTED RECORDS

All records related to automated surveillance camera systems operated by, accessible to, or used in partnership with ${formData.agencyName}, including:

**Technology Systems Covered:**
- Automatic License Plate Readers (ALPR): Flock Safety, Motorola/Vigilant, Genetec, ELSAG, Neology, or similar
- Video surveillance: Ring Law Enforcement Portal, Axon systems, Real-Time Crime Centers, community camera registries
- Facial recognition systems integrated with camera networks
- Any other mass surveillance camera technology

**Specific Camera Locations:**
${locations}

### Specific Records Requested:

1. **Contracts & Costs:** All agreements with surveillance technology vendors (Flock Safety, Ring/Amazon, Axon, Motorola, Genetec, etc.), purchase orders, invoices, and total program costs

2. **Policies:** All policies and procedures governing surveillance camera use, data retention policies, privacy assessments, and policies regarding federal agency access

3. **Camera Details:** Installation dates, locations (with maps if available), complete inventory by type/manufacturer, and operational status of all surveillance cameras

4. **Data Sharing & Federal Access:** 
   - Lists of agencies with access to your surveillance data
   - Data-sharing agreements (local, state, federal)
   - **Network audit logs showing all searches by any agency, including federal agencies**
   - Records of whether "National Lookup" features were enabled
   - Documentation of federal agency access (ICE, Border Patrol, FBI, etc.)
   - Records showing whether your agency was aware of federal access

5. **Usage Data:** For the period ${dateRange}:
   - Total license plate reads or footage hours per camera/system
   - Number and types of alerts generated
   - Cases where alerts led to stops or arrests
   - Statistics on external agency access

6. **Communications:** Emails between department staff and surveillance technology vendors, and communications regarding federal agency access

**Time Period:** ${dateRange}

**Format:** ${formData.electronicDelivery ? 'Electronic copies via email (PDF preferred)' : 'Physical copies via mail'}

---

## RESPONSE REQUIREMENTS

Per RCW 42.56.520, please respond within five (5) business days. If any records are partially exempt, please provide all non-exempt portions with redactions explained per RCW 42.56.210.

${formData.requestFeeWaiver ? `
## FEE WAIVER REQUEST

I request a waiver or reduction of fees pursuant to RCW 42.56.120 as this request is in the public interest and not for commercial purposes. The disclosure of this information will contribute significantly to public understanding of government surveillance operations and accountability.
` : ''}

Please acknowledge receipt of this request and contact me if clarification is needed.

**Contact:** ${formData.yourEmail} (preferred)${formData.yourPhone ? ' | ' + formData.yourPhone : ''}

Thank you for your prompt attention to this matter.

Sincerely,

${formData.yourName}  
${today}

---

**Legal Support:**
If denied based on privacy concerns, reference the Skagit County Superior Court ruling (*Rodriguez v. City of Sedro Woolley*, Nov. 2025) that confirmed surveillance data is subject to RCW 42.56.

**Key Issues to Monitor:**
Based on recent UW findings, many WA agencies may be unaware of federal access to their surveillance systems. Your request helps ensure transparency and accountability.
`;

    setGeneratedRequest(template);
    setCurrentStep(steps.length - 1);
  };

  const printRequest = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Public Records Request - ${formData.agencyName}</title>
          <style>
            body {
              font-family: 'Times New Roman', serif;
              line-height: 1.6;
              max-width: 8.5in;
              margin: 0 auto;
              padding: 1in;
            }
            h1 { font-size: 18pt; margin-bottom: 0.5em; }
            h2 { font-size: 14pt; margin-top: 1.5em; margin-bottom: 0.5em; }
            h3 { font-size: 12pt; margin-top: 1em; margin-bottom: 0.5em; }
            p, li { font-size: 11pt; }
            strong { font-weight: bold; }
            hr { border: none; border-top: 1px solid #000; margin: 1em 0; }
          </style>
        </head>
        <body>
          ${generatedRequest.split('\n').map(line => {
            if (line.startsWith('# ')) return `<h1>${line.substring(2)}</h1>`;
            if (line.startsWith('## ')) return `<h2>${line.substring(3)}</h2>`;
            if (line.startsWith('### ')) return `<h3>${line.substring(4)}</h3>`;
            if (line.startsWith('**') && line.endsWith('**')) {
              return `<p><strong>${line.substring(2, line.length - 2)}</strong></p>`;
            }
            if (line.startsWith('- ')) return `<li>${line.substring(2)}</li>`;
            if (line === '---') return '<hr>';
            if (line.trim()) return `<p>${line}</p>`;
            return '<br>';
          }).join('\n')}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const emailRequest = () => {
    const subject = encodeURIComponent(`Public Records Request - Surveillance Cameras`);
    const body = encodeURIComponent(`Dear Public Records Officer,

Attached please find my public records request regarding surveillance camera systems operated by ${formData.agencyName}.

This request is submitted pursuant to the Washington State Public Records Act, RCW 42.56.

Please confirm receipt of this request within five (5) business days as required by RCW 42.56.520.

I prefer to receive records electronically via email to minimize costs and facilitate timely delivery.

If you have any questions or need clarification, please contact me promptly.

Thank you for your attention to this matter.

Sincerely,

${formData.yourName}
${formData.yourEmail}
${formData.yourPhone}

---
[COPY THE GENERATED REQUEST BELOW AND ATTACH AS PDF]
`);

    window.location.href = `mailto:${formData.agencyEmail}?subject=${subject}&body=${body}`;
  };

  const steps = [
    {
      title: 'Your Information',
      icon: User,
      description: 'Tell us about yourself',
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Your Full Name *</label>
            <input
              type="text"
              value={formData.yourName}
              onChange={(e) => updateField('yourName', e.target.value)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Jane Smith"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Your Email Address *</label>
            <input
              type="email"
              value={formData.yourEmail}
              onChange={(e) => updateField('yourEmail', e.target.value)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="jane.smith@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Your Phone Number</label>
            <input
              type="tel"
              value={formData.yourPhone}
              onChange={(e) => updateField('yourPhone', e.target.value)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="(360) 555-1234"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Your Mailing Address (optional)</label>
            <input
              type="text"
              value={formData.yourAddress}
              onChange={(e) => updateField('yourAddress', e.target.value)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="123 Main St, Olympia, WA 98501"
            />
          </div>
        </div>
      )
    },
    {
      title: 'Agency Information',
      icon: Building,
      description: 'Which agency are you requesting from?',
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Agency Name *</label>
            <input
              type="text"
              value={formData.agencyName}
              onChange={(e) => updateField('agencyName', e.target.value)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Olympia Police Department"
              required
            />
            <p className="text-sm text-gray-400 mt-2">Examples: Olympia Police Department, Lacey Police Department, Thurston County Sheriff's Office</p>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Agency Public Records Email *</label>
            <input
              type="email"
              value={formData.agencyEmail}
              onChange={(e) => updateField('agencyEmail', e.target.value)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="publicrecords@olympiawa.gov"
              required
            />
            <p className="text-sm text-gray-400 mt-2">
              Common examples: publicrecords@[city].gov or publicrecords@[city].org
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Agency Address (optional)</label>
            <input
              type="text"
              value={formData.agencyAddress}
              onChange={(e) => updateField('agencyAddress', e.target.value)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="900 Plum Street SE, Olympia, WA 98501"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Agency Fax (if known)</label>
            <input
              type="text"
              value={formData.agencyFax}
              onChange={(e) => updateField('agencyFax', e.target.value)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="(360) 555-5678"
            />
          </div>
        </div>
      )
    },
    {
      title: 'Camera Locations',
      icon: MapPin,
      description: 'Which cameras do you want information about?',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.allLocations}
                onChange={(e) => updateField('allLocations', e.target.checked)}
                className="w-5 h-5 text-blue-500 bg-slate-700 border-slate-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="font-semibold">Request ALL surveillance camera locations</span>
            </label>
            <p className="text-sm text-gray-300 mt-2 ml-8">
              Check this if you don't know specific locations or want comprehensive information about all cameras.
            </p>
          </div>

          {!formData.allLocations && (
            <>
              <div>
                <label className="block text-sm font-semibold mb-2">Add Specific Camera Locations</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={formData.locationInput}
                    onChange={(e) => updateField('locationInput', e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addLocation())}
                    className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 4th Ave & Capitol Way, Olympia"
                  />
                  <button
                    onClick={addLocation}
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition"
                  >
                    Add
                  </button>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Add specific intersections, street addresses, or areas where you've seen cameras.
                </p>
              </div>

              {formData.cameraLocations.length > 0 && (
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Specified Locations:</label>
                  <ul className="space-y-2">
                    {formData.cameraLocations.map((location, index) => (
                      <li key={index} className="flex items-center justify-between bg-slate-700 px-4 py-2 rounded-lg">
                        <span>{location}</span>
                        <button
                          onClick={() => removeLocation(index)}
                          className="text-red-400 hover:text-red-300 text-sm font-semibold"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {formData.cameraLocations.length === 0 && (
                <div className="bg-yellow-900 bg-opacity-30 border border-yellow-500 rounded-lg p-4">
                  <p className="text-sm text-yellow-200">
                    <strong>Tip:</strong> If you don't know specific locations, check "Request ALL surveillance camera locations" above.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      )
    },
    {
      title: 'Date Range',
      icon: Calendar,
      description: 'What time period should the request cover?',
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <label className="flex items-start space-x-3 cursor-pointer p-4 bg-slate-700 rounded-lg border-2 border-transparent hover:border-blue-500 transition">
              <input
                type="radio"
                name="dateRange"
                checked={formData.dateRangeType === 'inception'}
                onChange={() => updateField('dateRangeType', 'inception')}
                className="w-5 h-5 text-blue-500 bg-slate-600 border-slate-500 mt-0.5"
              />
              <div>
                <div className="font-semibold">From Program Inception to Present (Recommended)</div>
                <div className="text-sm text-gray-400">Get all records since the surveillance program started</div>
              </div>
            </label>

            <label className="flex items-start space-x-3 cursor-pointer p-4 bg-slate-700 rounded-lg border-2 border-transparent hover:border-blue-500 transition">
              <input
                type="radio"
                name="dateRange"
                checked={formData.dateRangeType === 'recent'}
                onChange={() => updateField('dateRangeType', 'recent')}
                className="w-5 h-5 text-blue-500 bg-slate-600 border-slate-500 mt-0.5"
              />
              <div>
                <div className="font-semibold">Recent Period (2024 to Present)</div>
                <div className="text-sm text-gray-400">Focus on the most recent year of data</div>
              </div>
            </label>

            <label className="flex items-start space-x-3 cursor-pointer p-4 bg-slate-700 rounded-lg border-2 border-transparent hover:border-blue-500 transition">
              <input
                type="radio"
                name="dateRange"
                checked={formData.dateRangeType === 'specific'}
                onChange={() => updateField('dateRangeType', 'specific')}
                className="w-5 h-5 text-blue-500 bg-slate-600 border-slate-500 mt-0.5"
              />
              <div className="flex-1">
                <div className="font-semibold mb-3">Specific Date Range</div>
                {formData.dateRangeType === 'specific' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm mb-1">Start Date</label>
                      <input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => updateField('startDate', e.target.value)}
                        className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">End Date</label>
                      <input
                        type="date"
                        value={formData.endDate}
                        onChange={(e) => updateField('endDate', e.target.value)}
                        className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                )}
              </div>
            </label>
          </div>
        </div>
      )
    },
    {
      title: 'Additional Options',
      icon: CheckCircle,
      description: 'Customize your request',
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-4">Request Template Type</label>
            <div className="space-y-3">
              <label className="flex items-start space-x-3 cursor-pointer p-4 bg-slate-700 rounded-lg border-2 border-transparent hover:border-blue-500 transition">
                <input
                  type="radio"
                  name="templateType"
                  checked={formData.useSimplified}
                  onChange={() => updateField('useSimplified', true)}
                  className="w-5 h-5 text-blue-500 bg-slate-600 border-slate-500 mt-0.5"
                />
                <div>
                  <div className="font-semibold">Simplified Template (Recommended)</div>
                  <div className="text-sm text-gray-400">2 pages with essential information</div>
                </div>
              </label>

              <label className="flex items-start space-x-3 cursor-pointer p-4 bg-slate-700 rounded-lg border-2 border-transparent hover:border-blue-500 transition">
                <input
                  type="radio"
                  name="templateType"
                  checked={!formData.useSimplified}
                  onChange={() => updateField('useSimplified', false)}
                  className="w-5 h-5 text-blue-500 bg-slate-600 border-slate-500 mt-0.5"
                />
                <div>
                  <div className="font-semibold">Comprehensive Template</div>
                  <div className="text-sm text-gray-400">6 pages with detailed investigation items</div>
                </div>
              </label>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-700">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.requestFeeWaiver}
                onChange={(e) => updateField('requestFeeWaiver', e.target.checked)}
                className="w-5 h-5 text-blue-500 bg-slate-700 border-slate-600 rounded focus:ring-2 focus:ring-blue-500 mt-0.5"
              />
              <div>
                <div className="font-semibold">Request Fee Waiver</div>
                <div className="text-sm text-gray-400">Ask the agency to waive fees due to public interest</div>
              </div>
            </label>
          </div>

          <div>
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.electronicDelivery}
                onChange={(e) => updateField('electronicDelivery', e.target.checked)}
                className="w-5 h-5 text-blue-500 bg-slate-700 border-slate-600 rounded focus:ring-2 focus:ring-blue-500 mt-0.5"
              />
              <div>
                <div className="font-semibold">Prefer Electronic Delivery</div>
                <div className="text-sm text-gray-400">Receive records via email (usually free or low cost)</div>
              </div>
            </label>
          </div>
        </div>
      )
    },
    {
      title: 'Review & Generate',
      icon: FileText,
      description: 'Review your information and generate the request',
      content: generatedRequest ? (
        <div className="space-y-6">
          <div className="bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <div>
                <h3 className="text-xl font-bold">Your Request is Ready!</h3>
                <p className="text-gray-300">Choose how you'd like to submit it:</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <button
                onClick={printRequest}
                className="flex flex-col items-center justify-center p-6 bg-slate-700 hover:bg-slate-600 rounded-lg transition"
              >
                <Printer className="w-8 h-8 mb-2 text-blue-400" />
                <span className="font-semibold">Print</span>
                <span className="text-sm text-gray-400 mt-1">Print and mail</span>
              </button>

              <button
                onClick={emailRequest}
                className="flex flex-col items-center justify-center p-6 bg-slate-700 hover:bg-slate-600 rounded-lg transition"
              >
                <Mail className="w-8 h-8 mb-2 text-green-400" />
                <span className="font-semibold">Email</span>
                <span className="text-sm text-gray-400 mt-1">Open email client</span>
              </button>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(generatedRequest);
                  alert('Request copied to clipboard!');
                }}
                className="flex flex-col items-center justify-center p-6 bg-slate-700 hover:bg-slate-600 rounded-lg transition"
              >
                <Download className="w-8 h-8 mb-2 text-purple-400" />
                <span className="font-semibold">Copy</span>
                <span className="text-sm text-gray-400 mt-1">Copy to clipboard</span>
              </button>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 max-h-96 overflow-y-auto">
            <h4 className="font-semibold mb-4">Preview of Your Request:</h4>
            <pre className="whitespace-pre-wrap text-sm text-gray-300 font-mono">
              {generatedRequest}
            </pre>
          </div>

          <div className="bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Next Steps:</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
              <li>Choose a submission method above (email is recommended)</li>
              <li>The agency must respond within 5 business days</li>
              <li>Save a copy of your request and their response</li>
              <li>Follow up if you don't hear back within 5 business days</li>
            </ol>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-slate-700 rounded-lg p-6 space-y-4">
            <h4 className="font-semibold text-lg">Review Your Information:</h4>
            
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Your Name:</span>
                <div className="font-semibold">{formData.yourName || '(not provided)'}</div>
              </div>
              <div>
                <span className="text-gray-400">Your Email:</span>
                <div className="font-semibold">{formData.yourEmail || '(not provided)'}</div>
              </div>
              <div>
                <span className="text-gray-400">Agency:</span>
                <div className="font-semibold">{formData.agencyName || '(not provided)'}</div>
              </div>
              <div>
                <span className="text-gray-400">Agency Email:</span>
                <div className="font-semibold">{formData.agencyEmail || '(not provided)'}</div>
              </div>
              <div>
                <span className="text-gray-400">Camera Locations:</span>
                <div className="font-semibold">
                  {formData.allLocations ? 'All locations' : 
                   formData.cameraLocations.length > 0 ? 
                   `${formData.cameraLocations.length} specific location(s)` : 
                   'All locations'}
                </div>
              </div>
              <div>
                <span className="text-gray-400">Date Range:</span>
                <div className="font-semibold">
                  {formData.dateRangeType === 'inception' ? 'Since inception' :
                   formData.dateRangeType === 'recent' ? '2024 to present' :
                   'Custom range'}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={generateRequest}
            disabled={!formData.yourName || !formData.yourEmail || !formData.agencyName || !formData.agencyEmail}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold text-lg transition flex items-center justify-center"
          >
            <CheckCircle className="w-6 h-6 mr-2" />
            Generate My Request
          </button>

          {(!formData.yourName || !formData.yourEmail || !formData.agencyName || !formData.agencyEmail) && (
            <p className="text-sm text-yellow-400 text-center">
              Please complete all required fields (*) to generate your request
            </p>
          )}
        </div>
      )
    }
  ];

  const currentStepData = steps[currentStep];
  const Icon = currentStepData.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Public Records Request Builder
          </h1>
          <p className="text-xl text-gray-300">
            Answer a few questions and we'll generate a customized request for you
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.slice(0, -1).map((step, index) => (
              <React.Fragment key={index}>
                <div className={`flex flex-col items-center ${index <= currentStep ? 'opacity-100' : 'opacity-40'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index < currentStep ? 'bg-green-500' :
                    index === currentStep ? 'bg-blue-500' : 'bg-slate-700'
                  }`}>
                    {index < currentStep ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <span className="font-bold">{index + 1}</span>
                    )}
                  </div>
                  <span className="text-xs mt-2 hidden md:block">{step.title}</span>
                </div>
                {index < steps.length - 2 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    index < currentStep ? 'bg-green-500' : 'bg-slate-700'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-slate-800 rounded-xl shadow-2xl p-8 mb-8">
          {/* Step Header */}
          <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-slate-700">
            <div className="bg-blue-500 p-3 rounded-lg">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{currentStepData.title}</h2>
              <p className="text-gray-400">{currentStepData.description}</p>
            </div>
          </div>

          {/* Step Content */}
          <div className="mb-8">
            {currentStepData.content}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t border-slate-700">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:text-gray-600 disabled:cursor-not-allowed rounded-lg font-semibold transition"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </button>

            {currentStep < steps.length - 2 && (
              <button
                onClick={nextStep}
                className="flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            )}

            {currentStep === steps.length - 2 && (
              <button
                onClick={nextStep}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg font-semibold transition"
              >
                Review & Generate
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            )}
          </div>
        </div>

        {/* Help Text */}
        <div className="text-center text-sm text-gray-400">
          <p>Need help? All fields marked with * are required.</p>
          <p className="mt-2">Your information is processed locally and never sent to our servers.</p>
        </div>
      </div>
    </div>
  );
}
