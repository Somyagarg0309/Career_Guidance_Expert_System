import React, { useState } from 'react';
import { Brain, Briefcase, GraduationCap, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';

const CareerGuidanceSystem = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    interests: [],
    skills: [],
    education: '',
    workStyle: '',
    salary: '',
    location: '',
    experience: ''
  });
  const [result, setResult] = useState(null);

  const interestOptions = [
    'Technology', 'Healthcare', 'Business', 'Arts & Design', 
    'Science', 'Education', 'Social Work', 'Engineering',
    'Finance', 'Marketing', 'Law', 'Environment'
  ];

  const skillOptions = [
    'Programming', 'Communication', 'Leadership', 'Problem Solving',
    'Creativity', 'Analysis', 'Teaching', 'Sales',
    'Research', 'Design', 'Management', 'Technical Skills'
  ];

  const educationLevels = [
    'High School', 'Associate Degree', 'Bachelor\'s Degree', 
    'Master\'s Degree', 'PhD', 'Professional Certification'
  ];

  const workStyles = [
    'Independent Work', 'Team Collaboration', 'Mix of Both',
    'Remote Work', 'On-site Work', 'Flexible'
  ];

  const salaryExpectations = [
    'Entry Level ($30k-50k)', 'Mid Level ($50k-80k)', 
    'Senior Level ($80k-120k)', 'Executive Level ($120k+)'
  ];

  const careerDatabase = {
    'Software Developer': {
      interests: ['Technology', 'Engineering'],
      skills: ['Programming', 'Problem Solving', 'Analysis'],
      education: ['Bachelor\'s Degree', 'Master\'s Degree', 'Professional Certification'],
      workStyle: ['Independent Work', 'Team Collaboration', 'Remote Work'],
      salary: ['Mid Level ($50k-80k)', 'Senior Level ($80k-120k)', 'Executive Level ($120k+)'],
      description: 'Design, develop, and maintain software applications',
      growth: 'High demand with 22% projected growth',
      pathways: ['Junior Developer → Senior Developer → Tech Lead → Engineering Manager']
    },
    'Data Scientist': {
      interests: ['Technology', 'Science', 'Business'],
      skills: ['Programming', 'Analysis', 'Problem Solving', 'Research'],
      education: ['Bachelor\'s Degree', 'Master\'s Degree', 'PhD'],
      workStyle: ['Independent Work', 'Team Collaboration', 'Remote Work'],
      salary: ['Senior Level ($80k-120k)', 'Executive Level ($120k+)'],
      description: 'Analyze complex data to help organizations make decisions',
      growth: 'Explosive growth with 36% projected increase',
      pathways: ['Data Analyst → Data Scientist → Senior Data Scientist → Chief Data Officer']
    },
    'Nurse Practitioner': {
      interests: ['Healthcare', 'Social Work'],
      skills: ['Communication', 'Problem Solving', 'Technical Skills'],
      education: ['Master\'s Degree', 'Professional Certification'],
      workStyle: ['Team Collaboration', 'On-site Work'],
      salary: ['Senior Level ($80k-120k)', 'Executive Level ($120k+)'],
      description: 'Provide primary and specialty healthcare services',
      growth: 'Very high demand with 45% projected growth',
      pathways: ['RN → NP → Specialized NP → Clinical Director']
    },
    'Marketing Manager': {
      interests: ['Business', 'Marketing', 'Arts & Design'],
      skills: ['Communication', 'Leadership', 'Creativity', 'Analysis'],
      education: ['Bachelor\'s Degree', 'Master\'s Degree'],
      workStyle: ['Team Collaboration', 'Mix of Both', 'Flexible'],
      salary: ['Mid Level ($50k-80k)', 'Senior Level ($80k-120k)', 'Executive Level ($120k+)'],
      description: 'Plan and execute marketing strategies to promote products/services',
      growth: 'Steady growth with 10% projected increase',
      pathways: ['Marketing Coordinator → Marketing Manager → Senior Manager → CMO']
    },
    'UX Designer': {
      interests: ['Technology', 'Arts & Design', 'Business'],
      skills: ['Creativity', 'Design', 'Problem Solving', 'Communication'],
      education: ['Bachelor\'s Degree', 'Professional Certification'],
      workStyle: ['Team Collaboration', 'Remote Work', 'Flexible'],
      salary: ['Mid Level ($50k-80k)', 'Senior Level ($80k-120k)'],
      description: 'Create user-centered designs for digital products',
      growth: 'High demand with 16% projected growth',
      pathways: ['Junior UX Designer → UX Designer → Senior UX Designer → UX Director']
    },
    'Financial Analyst': {
      interests: ['Finance', 'Business'],
      skills: ['Analysis', 'Problem Solving', 'Communication'],
      education: ['Bachelor\'s Degree', 'Master\'s Degree', 'Professional Certification'],
      workStyle: ['Independent Work', 'Team Collaboration'],
      salary: ['Mid Level ($50k-80k)', 'Senior Level ($80k-120k)', 'Executive Level ($120k+)'],
      description: 'Analyze financial data to guide business decisions',
      growth: 'Moderate growth with 9% projected increase',
      pathways: ['Junior Analyst → Financial Analyst → Senior Analyst → Finance Director']
    },
    'Teacher': {
      interests: ['Education', 'Social Work'],
      skills: ['Communication', 'Teaching', 'Creativity', 'Leadership'],
      education: ['Bachelor\'s Degree', 'Master\'s Degree', 'Professional Certification'],
      workStyle: ['Team Collaboration', 'On-site Work'],
      salary: ['Entry Level ($30k-50k)', 'Mid Level ($50k-80k)'],
      description: 'Educate and inspire students in various subjects',
      growth: 'Steady demand with 4% projected growth',
      pathways: ['Student Teacher → Teacher → Lead Teacher → Principal']
    },
    'Environmental Scientist': {
      interests: ['Environment', 'Science'],
      skills: ['Research', 'Analysis', 'Problem Solving', 'Communication'],
      education: ['Bachelor\'s Degree', 'Master\'s Degree', 'PhD'],
      workStyle: ['Independent Work', 'Team Collaboration'],
      salary: ['Mid Level ($50k-80k)', 'Senior Level ($80k-120k)'],
      description: 'Research and develop solutions to environmental problems',
      growth: 'Growing field with 8% projected increase',
      pathways: ['Research Assistant → Environmental Scientist → Senior Scientist → Director']
    },
    'Lawyer': {
      interests: ['Law', 'Business'],
      skills: ['Communication', 'Analysis', 'Problem Solving', 'Research'],
      education: ['Master\'s Degree', 'Professional Certification'],
      workStyle: ['Independent Work', 'Team Collaboration'],
      salary: ['Senior Level ($80k-120k)', 'Executive Level ($120k+)'],
      description: 'Advise and represent clients in legal matters',
      growth: 'Moderate growth with 8% projected increase',
      pathways: ['Associate → Attorney → Partner → Managing Partner']
    },
    'Project Manager': {
      interests: ['Business', 'Technology', 'Engineering'],
      skills: ['Leadership', 'Communication', 'Management', 'Problem Solving'],
      education: ['Bachelor\'s Degree', 'Master\'s Degree', 'Professional Certification'],
      workStyle: ['Team Collaboration', 'Mix of Both', 'Flexible'],
      salary: ['Mid Level ($50k-80k)', 'Senior Level ($80k-120k)', 'Executive Level ($120k+)'],
      description: 'Plan, execute, and oversee projects to achieve goals',
      growth: 'High demand with 11% projected growth',
      pathways: ['Assistant PM → Project Manager → Senior PM → Program Director']
    }
  };

  const calculateMatch = (career, careerData) => {
    let score = 0;
    let maxScore = 0;

    // Interest matching (30 points)
    maxScore += 30;
    const interestMatch = formData.interests.filter(i => 
      careerData.interests.includes(i)
    ).length;
    score += (interestMatch / Math.max(formData.interests.length, 1)) * 30;

    // Skills matching (30 points)
    maxScore += 30;
    const skillMatch = formData.skills.filter(s => 
      careerData.skills.includes(s)
    ).length;
    score += (skillMatch / Math.max(formData.skills.length, 1)) * 30;

    // Education matching (20 points)
    maxScore += 20;
    if (careerData.education.includes(formData.education)) {
      score += 20;
    }

    // Work style matching (10 points)
    maxScore += 10;
    if (careerData.workStyle.includes(formData.workStyle)) {
      score += 10;
    }

    // Salary matching (10 points)
    maxScore += 10;
    if (careerData.salary.includes(formData.salary)) {
      score += 10;
    }

    return Math.round((score / maxScore) * 100);
  };

  const analyzeCareer = () => {
    const matches = Object.entries(careerDatabase).map(([career, data]) => ({
      career,
      data,
      matchScore: calculateMatch(career, data)
    }));

    matches.sort((a, b) => b.matchScore - a.matchScore);

    setResult({
      topMatches: matches.slice(0, 5),
      insights: generateInsights(matches)
    });
  };

  const generateInsights = (matches) => {
    const insights = [];
    const topMatch = matches[0];

    if (topMatch.matchScore >= 80) {
      insights.push({
        type: 'success',
        message: 'Excellent match! Your profile strongly aligns with the top recommendations.'
      });
    } else if (topMatch.matchScore >= 60) {
      insights.push({
        type: 'info',
        message: 'Good match! Consider developing additional skills to improve alignment.'
      });
    } else {
      insights.push({
        type: 'warning',
        message: 'Moderate match. Consider exploring additional education or skill development.'
      });
    }

    if (formData.skills.length < 3) {
      insights.push({
        type: 'info',
        message: 'Developing more diverse skills can open up additional career opportunities.'
      });
    }

    return insights;
  };

  const handleNext = () => {
    if (step === 4) {
      analyzeCareer();
    }
    setStep(step + 1);
  };

  const handleBack = () => setStep(step - 1);

  const toggleArrayItem = (array, item) => {
    return array.includes(item)
      ? array.filter(i => i !== item)
      : [...array, item];
  };

  const resetSystem = () => {
    setStep(1);
    setFormData({
      interests: [],
      skills: [],
      education: '',
      workStyle: '',
      salary: '',
      location: '',
      experience: ''
    });
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-10 h-10 text-indigo-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Career Guidance Expert System</h1>
              <p className="text-gray-600">AI-powered career path recommendations</p>
            </div>
          </div>

          {/* Progress Bar */}
          {step <= 4 && (
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className={`w-1/4 h-2 mx-1 rounded ${s <= step ? 'bg-indigo-600' : 'bg-gray-200'}`} />
                ))}
              </div>
              <p className="text-sm text-gray-600 text-center">Step {step} of 4</p>
            </div>
          )}

          {/* Step 1: Interests */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">What are your interests?</h2>
              <p className="text-gray-600 mb-6">Select all that apply (at least 2)</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {interestOptions.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => setFormData({
                      ...formData,
                      interests: toggleArrayItem(formData.interests, interest)
                    })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.interests.includes(interest)
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                        : 'border-gray-200 hover:border-indigo-300'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
              <button
                onClick={handleNext}
                disabled={formData.interests.length < 2}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Skills */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">What are your key skills?</h2>
              <p className="text-gray-600 mb-6">Select all that apply (at least 2)</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {skillOptions.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => setFormData({
                      ...formData,
                      skills: toggleArrayItem(formData.skills, skill)
                    })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.skills.includes(skill)
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                        : 'border-gray-200 hover:border-indigo-300'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleBack}
                  className="w-1/2 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={formData.skills.length < 2}
                  className="w-1/2 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Education & Work Style */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Education & Work Preferences</h2>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Education Level</label>
                <select
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none"
                >
                  <option value="">Select education level</option>
                  {educationLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Preferred Work Style</label>
                <select
                  value={formData.workStyle}
                  onChange={(e) => setFormData({ ...formData, workStyle: e.target.value })}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none"
                >
                  <option value="">Select work style</option>
                  {workStyles.map((style) => (
                    <option key={style} value={style}>{style}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleBack}
                  className="w-1/2 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!formData.education || !formData.workStyle}
                  className="w-1/2 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Salary & Experience */}
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Salary & Experience</h2>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Salary Expectations</label>
                <select
                  value={formData.salary}
                  onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none"
                >
                  <option value="">Select salary range</option>
                  {salaryExpectations.map((salary) => (
                    <option key={salary} value={salary}>{salary}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Years of Experience</label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none"
                >
                  <option value="">Select experience level</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleBack}
                  className="w-1/2 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!formData.salary || !formData.experience}
                  className="w-1/2 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Get Recommendations
                </button>
              </div>
            </div>
          )}

          {/* Results */}
          {step === 5 && result && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Career Recommendations</h2>
              
              {/* Insights */}
              <div className="mb-6 space-y-3">
                {result.insights.map((insight, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg flex items-start gap-3 ${
                      insight.type === 'success' ? 'bg-green-50 text-green-800' :
                      insight.type === 'warning' ? 'bg-yellow-50 text-yellow-800' :
                      'bg-blue-50 text-blue-800'
                    }`}
                  >
                    {insight.type === 'success' ? <CheckCircle className="w-5 h-5 mt-0.5" /> : <AlertCircle className="w-5 h-5 mt-0.5" />}
                    <p>{insight.message}</p>
                  </div>
                ))}
              </div>

              {/* Top Matches */}
              <div className="space-y-4 mb-6">
                {result.topMatches.map((match, idx) => (
                  <div key={idx} className="border-2 border-gray-200 rounded-lg p-5 hover:border-indigo-300 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <Briefcase className="w-6 h-6 text-indigo-600" />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{match.career}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-indigo-600 rounded-full"
                                style={{ width: `${match.matchScore}%` }}
                              />
                            </div>
                            <span className="text-sm font-semibold text-indigo-600">{match.matchScore}% Match</span>
                          </div>
                        </div>
                      </div>
                      {idx === 0 && (
                        <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Top Pick
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-3">{match.data.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">{match.data.growth}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Career Path Available</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-sm text-gray-600 font-semibold mb-1">Typical Career Pathway:</p>
                      <p className="text-sm text-gray-700">{match.data.pathways[0]}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={resetSystem}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Start New Assessment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerGuidanceSystem;

