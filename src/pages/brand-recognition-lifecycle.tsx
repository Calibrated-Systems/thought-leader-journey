import { For } from 'solid-js';
import styles from './brand-recognition-lifecycle.module.css';
import PageTitle from '../components/page-title';

// Define TypeScript interfaces
interface RecognitionLevel {
  id: number;
  name: string;
  subtitle: string;
  color: string;
  description: string;
  perception: string;
  signals: string[];
  opportunities: string[];
  nextSteps: string[];
}

interface PhaseAlignment {
  phase: string;
  stages: string;
  recognition: string;
  community: string;
  structure: string;
}

const BrandRecognitionLifecycle = () => {
  // Brand recognition data
  const recognitionLevels: RecognitionLevel[] = [
    {
      id: 1,
      name: "Unknown",
      subtitle: "Pre-recognition Phase",
      color: "#E0E0E0",
      description: "The market is completely unaware of the thought leader or their ideas. No reputation has been established yet.",
      perception: "\"Who are you? I've never heard of this approach.\"",
      signals: [
        "No inbound inquiries coming in",
        "Negligible web traffic and social media followers",
        "No brand mentions in media or industry conversations"
      ],
      opportunities: [
        "Perfect time to experiment and refine approach",
        "Low pressure environment for testing ideas",
        "Freedom to pivot without damaging reputation"
      ],
      nextSteps: [
        "Create consistent content in your area of interest",
        "Begin documenting your unique approach",
        "Identify specific problems you're uniquely positioned to solve"
      ]
    },
    {
      id: 2,
      name: "Discovery",
      subtitle: "Initial Visibility",
      color: "#FFEDD0",
      description: "People begin encountering your content and ideas, but haven't formed a clear understanding of your value yet. You're starting to show up on the radar.",
      perception: "\"I've come across your content before.\"",
      signals: [
        "First-time website visitors and social followers",
        "Content being shared by others occasionally",
        "Early mentions of your name/work in conversations"
      ],
      opportunities: [
        "Capture attention with clear value proposition",
        "Convert discovery into sustained attention",
        "Gather early feedback to refine approach"
      ],
      nextSteps: [
        "Develop clear, consistent messaging about what you offer",
        "Create capture mechanisms for contact information",
        "Build basic nurture sequences to maintain connection"
      ]
    },
    {
      id: 3,
      name: "Resonance",
      subtitle: "Meaningful Connection",
      color: "#FFDDC5",
      description: "Your ideas begin to click with a specific audience. People recognize that your approach speaks to them in a way that others don't. There's an emotional or intellectual connection forming.",
      perception: "\"Your perspective really speaks to me.\"",
      signals: [
        "Emotional responses to your content (\"This is exactly what I needed!\")",
        "Deeper content engagement (full articles read, videos watched)",
        "Unprompted sharing of your content with comments about impact"
      ],
      opportunities: [
        "Deepen connection with resonant audience",
        "Refine messaging based on what resonates most",
        "Begin creating entry-level paid offerings"
      ],
      nextSteps: [
        "Create frameworks that clarify your unique approach",
        "Develop signature content that showcases your perspective",
        "Build entry points for deeper engagement"
      ]
    },
    {
      id: 4,
      name: "Application",
      subtitle: "Practical Implementation",
      color: "#FFC9A0",
      description: "People are actively applying your ideas and methodologies in their work or life. Your approach is proving its practical value through real-world implementation.",
      perception: "\"I'm getting results using your approach.\"",
      signals: [
        "Success stories and case studies emerging",
        "Questions about implementation details",
        "Requests for more advanced guidance",
        "People adapting your methods to their contexts"
      ],
      opportunities: [
        "Create more comprehensive implementation resources",
        "Develop deeper, more advanced offerings",
        "Gather testimonials and case studies"
      ],
      nextSteps: [
        "Document implementation processes and frameworks",
        "Create intermediate/advanced content and programs",
        "Systematically collect success stories"
      ]
    },
    {
      id: 5,
      name: "Identification",
      subtitle: "Identity Integration",
      color: "#FFCBA8",
      description: "People begin identifying themselves through the lens of your methodology. Your approach becomes part of how they see themselves professionally or personally.",
      perception: "\"I am someone who follows/practices this approach.\"",
      signals: [
        "People describing themselves using your terminology",
        "Community formation around your approach",
        "Defending or advocating for your methodology to others"
      ],
      opportunities: [
        "Facilitate community formation",
        "Create membership or belonging structures",
        "Develop clear paths to mastery"
      ],
      nextSteps: [
        "Create community infrastructure",
        "Develop deeper identity markers (certifications, titles)",
        "Formalize levels of implementation"
      ]
    },
    {
      id: 6,
      name: "Advocacy",
      subtitle: "Active Promotion",
      color: "#FFB592",
      description: "Your audience actively promotes your ideas to their networks. They've experienced enough value that they voluntarily become ambassadors for your approach.",
      perception: "\"You need to learn about this approach.\"",
      signals: [
        "Unprompted referrals to your work",
        "People teaching your methods to their networks",
        "User-generated content based on your approach",
        "Defense of your ideas in public forums"
      ],
      opportunities: [
        "Develop formal ambassador or affiliate programs",
        "Create resources that make advocacy easier",
        "Expand into adjacent markets through advocates"
      ],
      nextSteps: [
        "Create shareable resources for advocates",
        "Develop recognition systems for top advocates",
        "Build structures to maintain quality as reach expands"
      ]
    },
    {
      id: 7,
      name: "Integration",
      subtitle: "Systemic Adoption",
      color: "#FFA080",
      description: "Your methodology is being integrated into organizational systems, professional standards, or educational curricula. It's moving beyond individual adoption to becoming standardized practice.",
      perception: "\"This is how we do things here.\"",
      signals: [
        "Organizational implementation of your methodology",
        "Industry publications referencing your approach",
        "Professional certification or credentialing based on your work",
        "Job descriptions mentioning your methodology"
      ],
      opportunities: [
        "Develop enterprise/organizational implementations",
        "Create professional standards and certifications",
        "Build train-the-trainer programs"
      ],
      nextSteps: [
        "Develop organizational implementation guides",
        "Create quality control and consistency mechanisms",
        "Build educational programs for professional development"
      ]
    },
    {
      id: 8,
      name: "Evolution",
      subtitle: "Collaborative Development",
      color: "#FF9E7C",
      description: "Others begin contributing to the evolution of your methodology. Your approach becomes a platform that others build upon, extending its applications beyond your original vision.",
      perception: "\"We're building upon this foundation together.\"",
      signals: [
        "Others publishing extensions of your methodology",
        "Field-specific adaptations emerging",
        "Academic or professional study of your approach",
        "Conference tracks or journals dedicated to your work"
      ],
      opportunities: [
        "Create innovation communities around your work",
        "Develop frameworks for methodological extension",
        "Foster next-generation thought leadership"
      ],
      nextSteps: [
        "Establish principles for maintaining integrity while enabling evolution",
        "Create platforms for shared innovation",
        "Develop next-generation leadership"
      ]
    },
    {
      id: 9,
      name: "Paradigm",
      subtitle: "Field-Defining Framework",
      color: "#FF8C66",
      description: "Your approach becomes a paradigm through which an entire field or domain views its work. It shapes the fundamental assumptions and frameworks of practice for professionals in that area.",
      perception: "\"This is the standard approach in our field.\"",
      signals: [
        "Academic curricula based on your frameworks",
        "Industry standards incorporating your methodology",
        "Your terminology becoming standard language in the field",
        "New practitioners automatically trained in your approach"
      ],
      opportunities: [
        "Focus on maintaining relevance as field evolves",
        "Guide adaptation to emerging challenges",
        "Bridge to adjacent fields and domains"
      ],
      nextSteps: [
        "Create institutions to maintain and evolve the paradigm",
        "Develop mechanisms for quality control as adoption spreads",
        "Codify core principles vs. contextual applications"
      ]
    },
    {
      id: 10,
      name: "Cultural Element",
      subtitle: "Societal Integration",
      color: "#FF7A52",
      description: "Your ideas transcend their original domain and begin influencing broader cultural narratives and social systems. Concepts from your work enter common language and thinking.",
      perception: "\"This is just how we understand the world now.\"",
      signals: [
        "Your terminology entering common language",
        "Multiple domains applying your frameworks",
        "Policy or social systems influenced by your approach",
        "Cultural references to your ideas in media"
      ],
      opportunities: [
        "Focus on ensuring ethical application across domains",
        "Create cross-disciplinary applications",
        "Build lasting institutional legacy"
      ],
      nextSteps: [
        "Establish foundations or institutes for long-term impact",
        "Create cross-domain translation frameworks",
        "Develop ethical guidelines for broad application"
      ]
    }
  ];

  const phaseAlignments: PhaseAlignment[] = [
    {
      phase: "DISCOVERY & VALIDATION",
      stages: "1-2 (Spark-Flame)",
      recognition: "Unknown → Discovery → Resonance",
      community: "Problem-solving",
      structure: "Individual followers → Growing audience"
    },
    {
      phase: "DISTINCTIVE VOICE DEVELOPMENT",
      stages: "3-4 (Torch-Beacon)",
      recognition: "Resonance → Application → Identification",
      community: "Perspective shift",
      structure: "Dedicated audience → Recognized following"
    },
    {
      phase: "COMMUNITY BUILDING",
      stages: "5-6 (Campfire-Bonfire)",
      recognition: "Identification → Advocacy → Integration",
      community: "Identity & belonging",
      structure: "Functioning community → Layered community with leaders"
    },
    {
      phase: "INDUSTRY INFLUENCE",
      stages: "7-8 (Signal Fire-Hearth)",
      recognition: "Integration → Evolution → Paradigm",
      community: "Professional identity & social recognition",
      structure: "Movement with distributed authority → Established institutions"
    },
    {
      phase: "LEGACY CREATION",
      stages: "9-10 (Forge-Constellation)",
      recognition: "Paradigm → Cultural Element",
      community: "Collective transformation",
      structure: "Multi-entity ecosystem → Cultural/social movement"
    }
  ];

  return (
    <>
      <PageTitle>Brand Recognition</PageTitle>
      <div class={styles.container}>
        <div class={styles.header}>
          <h1 class={styles.title}>Brand Recognition Lifecycle</h1>
          <p class={styles.subtitle}>How market perception evolves across the Thought Leader Journey</p>
        </div>

        <div class={styles.introduction}>
          <p>Unlike traditional product or service businesses, a thought leader's brand recognition follows a unique progression that reflects how deeply their ideas are integrated into their audience's thinking and identity. This framework maps ten distinct levels of brand recognition, from complete obscurity to cultural paradigm, with specific signals that indicate progression from one level to the next.</p>
          <p>Understanding your current position on this recognition spectrum helps identify appropriate next steps and avoid strategies that are misaligned with your current level of influence. Each level builds upon the previous and requires completing specific developmental tasks before moving forward.</p>
        </div>

        <div class={styles.progressContainer}>
          <div class={styles.progressBar}>
            <For each={recognitionLevels}>
              {(level, index) => {
                const position = `${index() * (100 / (recognitionLevels.length - 1))}%`;
                return (
                  <>
                    <div 
                      class={styles.progressPoint} 
                      style={{
                        "left": position,
                        "background-color": level.color
                      }}
                    />
                    <div class={styles.progressLabel} style={{ "left": position }}>{level.name}</div>
                  </>
                );
              }}
            </For>
          </div>
        </div>

        <For each={recognitionLevels}>
          {(level) => (
            <div 
              class={styles.levelContainer} 
              style={{
                "background-color": level.color,
                "opacity": 0.9
              }}
            >
              <div class={styles.levelHeader}>
                <div 
                  class={styles.levelNumber}
                  style={{
                    "background-color": level.color,
                    "filter": "brightness(0.8)"
                  }}
                >
                  {level.id}
                </div>
                <div>
                  <h2 class={styles.levelTitle}>{level.name}</h2>
                  <p class={styles.levelSubtitle}>{level.subtitle}</p>
                </div>
              </div>

              <div class={styles.contentSection}>
                <p class={styles.description}>{level.description}</p>
                
                <p class={styles.sectionTitle}>Typical Audience Perception:</p>
                <p class={styles.description}>{level.perception}</p>
                
                <p class={styles.sectionTitle}>Key Signals:</p>
                <ul class={styles.list}>
                  <For each={level.signals}>
                    {(signal) => <li class={styles.item}>{signal}</li>}
                  </For>
                </ul>
                
                <p class={styles.sectionTitle}>Strategic Opportunities:</p>
                <ul class={styles.list}>
                  <For each={level.opportunities}>
                    {(opportunity) => <li class={styles.item}>{opportunity}</li>}
                  </For>
                </ul>
                
                <p class={styles.sectionTitle}>Recommended Next Steps:</p>
                <ul class={styles.list}>
                  <For each={level.nextSteps}>
                    {(step) => <li class={styles.item}>{step}</li>}
                  </For>
                </ul>
              </div>
            </div>
          )}
        </For>

        <div class={styles.alignmentSection}>
          <h2 class={styles.alignmentTitle}>Alignment with Thought Leader Journey Phases</h2>
          <p class={styles.description}>This table shows how brand recognition levels align with the other dimensions of the Thought Leader Journey of Influence framework:</p>
          
          <table class={styles.alignmentTable}>
            <thead>
              <tr>
                <th class={styles.tableHeader}>Phase</th>
                <th class={styles.tableHeader}>Stages</th>
                <th class={styles.tableHeader}>Recognition Levels</th>
                <th class={styles.tableHeader}>Community Experience</th>
                <th class={styles.tableHeader}>Organizational Structure</th>
              </tr>
            </thead>
            <tbody>
              <For each={phaseAlignments}>
                {(alignment) => (
                  <tr class={styles.tableRow}>
                    <td class={styles.tableCell}>{alignment.phase}</td>
                    <td class={styles.tableCell}>{alignment.stages}</td>
                    <td class={styles.tableCell}>{alignment.recognition}</td>
                    <td class={styles.tableCell}>{alignment.community}</td>
                    <td class={styles.tableCell}>{alignment.structure}</td>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </div>

        <div class={styles.footnote}>
          <p>Note: Brand recognition progression is not strictly linear and may develop unevenly across different market segments or geographical regions. Some thought leaders may achieve high recognition levels in niche markets while remaining unknown in broader contexts. The most sustainable path is to build each level of recognition before attempting to move to the next, as skipping levels often leads to temporary success followed by regression.</p>
        </div>
      </div>
    </>
  );
};

export default BrandRecognitionLifecycle;