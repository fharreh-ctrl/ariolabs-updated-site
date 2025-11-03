import { CaseStudyLayout } from '@/components/layout/CaseStudyLayout';

export default function BossPage() {
  return (
    <CaseStudyLayout
      title="AI-Powered Client Prospecting System"
      industry="Outsourcing / Business Development"
      problem="As a startup-scale operation, the BOSS sales team lacked the manpower and capacity to effectively prospect, nurture, and convert leads at scale, causing them to miss opportunities."
      approach={
        <div>
          <p className="mb-4">
            We built a full-funnel AI sales assistant to augment their small team. The system was designed to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Score Leads with AI:</strong> Automatically analyze and score incoming leads to prioritize the most promising prospects.</li>
            <li><strong>Automate Email Outreach:</strong> Send personalized, automated email sequences to nurture leads.</li>
            <li><strong>Integrate Scheduling & CRM:</strong> Seamlessly connect with their booking system and update the CRM pipeline in real-time.</li>
            <li><strong>Personalize Follow-ups:</strong> Use an AI assistant to draft and suggest personalized follow-up messages based on lead interactions.</li>
          </ul>
        </div>
      }
      solution="The AI-powered system handled all top-of-funnel activities, including prospect prioritization and automated communications. This allowed the human sales team to focus exclusively on warm, qualified leads, effectively simulating the output of a much larger sales department."
      results={[
        { metric: '2 B2B clients closed in 2 weeks', value: '2' },
        { metric: '70% reduction in manual tasks', value: '70%' },
        { metric: 'Streamlined sales reporting', value: '✓' },
      ]}
      highlight="The AI system filled the gap of a full marketing and sales development department at a cost suitable for an SME."
      tools={[
        'AI Lead Scoring',
        'Automated Email Platform',
        'CRM Integration',
        'Calendly API',
        'Generative AI',
      ]}
    />
  );
}
