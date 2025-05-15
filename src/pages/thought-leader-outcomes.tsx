import { createSignal, For, Show } from 'solid-js';
import styles from './thought-leader-outcomes.module.css';
import PageTitle from '../components/page-title';

const ThoughtLeaderTractionOutcomes = () => {
  const [activePhase, setActivePhase] = createSignal<number|null>(null);

  const phases = [
    {
      id: 1,
      title: "DISCOVERY & VALIDATION",
      color: "#FFEDD0",
      textColor: "#d35400",
      description: "Finding your domain and validating market interest",
      stages: [
        {
          id: 1,
          name: "THE EXPLORER",
          icon: "SPARK",
          iconColor: "#FFE082",
          description: "Finding your natural domain of insight and interest",
          outcomes: [
            "Validated interest in specific topics through engagement metrics (comments, shares, time spent)",
            "Clear pattern of which content topics consistently generate the strongest audience response",
            "Identification of 3-5 specific audience pain points that resonate based on feedback",
            "Growing list of engaged followers who respond specifically to your unique perspective",
            "Evidence of people asking for your take on related topics (signals recognition of your insight)"
          ],
          transitionRequirements: "Before moving to the Flame stage, you must be able to consistently generate content that attracts a specific audience around identifiable pain points, with metrics showing which topics create the strongest engagement."
        },
        {
          id: 2,
          name: "THE PROBLEM SOLVER",
          icon: "FLAME",
          iconColor: "#FFD54F",
          description: "Creating tangible assets that solve specific problems",
          outcomes: [
            "Suite of problem-focused assets (PDFs, checklists, templates) that address specific pain points",
            "Initial monetization through low-ticket offers ($12-197 range) with 5%+ conversion rate",
            "Clear sales data showing which problems audience members will pay to solve",
            "Growing email list or following specifically tied to problem-solution assets",
            "Consistent lead generation system producing qualified prospects who recognize your solutions",
            "Feedback data validating that your solutions actually deliver results"
          ],
          transitionRequirements: "Before moving to the Torch stage, you must have validated that your audience will pay for your solutions and have metrics showing which specific pain points and solutions generate the most commercial traction."
        }
      ]
    },
    {
      id: 2,
      title: "DISTINCTIVE VOICE DEVELOPMENT",
      color: "#FFDDC5",
      textColor: "#e67e22",
      description: "Creating a unique perspective that stands out from conventional wisdom",
      stages: [
        {
          id: 3,
          name: "THE DISTINCTIVE VOICE",
          icon: "TORCH",
          iconColor: "#FFCA28",
          description: "Developing a unique perspective that challenges conventional wisdom",
          outcomes: [
            "Clear articulation of your \"pattern interrupt\" position within your niche",
            "Gap analysis identifying unaddressed needs between market pain and existing solutions",
            "Unique mechanism or framework that visibly differentiates your approach",
            "Higher engagement rates when your distinctive position is emphasized (shares, comments, sales)",
            "Evidence of your audience using your terminology or frameworks in their own communications",
            "Growing organic mentions and references to your distinctive approach",
            "Invitations to share your perspective with new audiences"
          ],
          transitionRequirements: "Before moving to the Beacon stage, your distinctive position must be clearly articulated, generating higher engagement than generic content, with evidence that your audience is adopting your perspective."
        },
        {
          id: 4,
          name: "THE RECOGNIZED EXPERT",
          icon: "BEACON",
          iconColor: "#FFC107",
          description: "Building consistent methodologies that deliver reliable results",
          outcomes: [
            "Documented methodology showing how your approach can be systematically applied",
            "Case studies demonstrating consistent results across different applications",
            "Premium pricing accepted by market based on recognized expertise (2-3x industry average)",
            "Growing inbound requests specifically seeking your distinctive methodology",
            "Clear brand identity consistently recognized across platforms and touchpoints",
            "Evidence that clients/customers specifically seek you out rather than alternatives",
            "Referrals that specifically mention your unique approach or methodology"
          ],
          transitionRequirements: "Before moving to the Campfire stage, your methodology must be clearly documented with evidence that it delivers consistent results, and your market must recognize your expertise through premium pricing and specific demand."
        }
      ]
    },
    {
      id: 3,
      title: "COMMUNITY BUILDING",
      color: "#FFCBA8",
      textColor: "#d35400",
      description: "Creating environments where others connect around your ideas",
      stages: [
        {
          id: 5,
          name: "THE COMMUNITY BUILDER",
          icon: "CAMPFIRE",
          iconColor: "#FFB300",
          description: "Creating environments where followers connect around your ideas",
          outcomes: [
            "Active community platform with members regularly engaging with each other (not just you)",
            "Measurable improvement in members' results within first 90 days (reducing churn)",
            "Feed-forward metrics identifying leading indicators of member success",
            "Community-generated content and resources extending your methodology",
            "Peer-to-peer support reducing your direct involvement in problem-solving",
            "Community rituals, language, and practices that reinforce shared identity",
            "Member success stories being shared organically within and beyond the community"
          ],
          transitionRequirements: "Before moving to the Bonfire stage, your community must demonstrate self-sustaining engagement with measurable results for members, established rituals and practices, and reduced dependence on your direct involvement."
        },
        {
          id: 6,
          name: "THE SCALE ARCHITECT",
          icon: "BONFIRE",
          iconColor: "#FFA000",
          description: "Developing systems that allow others to deliver your methodology",
          outcomes: [
            "Training program that consistently produces competent practitioners of your methodology",
            "Certification system with clear standards and assessment processes",
            "Network of certified practitioners successfully implementing your approach",
            "Tiered engagement model allowing for multiple levels of involvement and commitment",
            "Quality control mechanisms ensuring consistent results across practitioners",
            "Growing revenue from training, certification, and licensing",
            "Evidence that practitioners can successfully represent your methodology"
          ],
          transitionRequirements: "Before moving to the Signal Fire stage, you must have a proven system for training others to implement your methodology with consistent results, with evidence that practitioners can successfully deliver your approach without your direct involvement."
        }
      ]
    },
    {
      id: 4,
      title: "INDUSTRY INFLUENCE",
      color: "#FFB592",
      textColor: "#c0392b",
      description: "Reshaping professional standards and practices across a field",
      stages: [
        {
          id: 7,
          name: "THE INDUSTRY INFLUENCER",
          icon: "SIGNAL FIRE",
          iconColor: "#FF8F00",
          description: "Creating ecosystem changes that shift industry practices",
          outcomes: [
            "Comprehensive business model enabling others to build businesses around your approach",
            "Licensing structure for your intellectual property with growing adoption",
            "Software, tools, and systems that embody your methodology for scalable implementation",
            "Strategic partnerships with complementary service providers and platforms",
            "Industry publications and groups referring to your approach as a standard",
            "Competitors beginning to adopt elements of your methodology",
            "Invitations to inform industry standards or best practices"
          ],
          transitionRequirements: "Before moving to the Hearth stage, your methodology must be packaged into comprehensive business models and systems that others can implement at scale, with evidence of industry-wide recognition and adoption."
        },
        {
          id: 8,
          name: "THE PARADIGM SHIFTER",
          icon: "HEARTH",
          iconColor: "#FF6F00",
          description: "Developing a distinctive language system that transforms how people think",
          outcomes: [
            "Proprietary terminology that has entered broader industry vocabulary",
            "Comprehensive body of knowledge documenting your approach (books, courses, etc.)",
            "Educational institutions teaching your methodology or concepts",
            "Linguistic framework that allows for consistent application across contexts",
            "New practitioners being trained in your methodology without your direct involvement",
            "Other thought leaders building upon or responding to your conceptual framework",
            "Evidence of your approach influencing adjacent fields and disciplines"
          ],
          transitionRequirements: "Before moving to the Forge stage, your approach must be codified into a comprehensive language system that can be taught and transferred systematically, with evidence that your terminology is entering broader industry vocabulary."
        }
      ]
    },
    {
      id: 5,
      title: "LEGACY CREATION",
      color: "#FF9E7C",
      textColor: "#a93226",
      description: "Building enduring institutions and cross-disciplinary impact",
      stages: [
        {
          id: 9,
          name: "THE TORCH IGNITOR",
          icon: "FORGE",
          iconColor: "#E65100",
          description: "Building institutions that sustain and evolve your approach",
          outcomes: [
            "Multiple autonomous businesses successfully built on your methodological foundation",
            "Formal institution(s) dedicated to advancing and evolving your approach",
            "Next-generation leaders emerging as recognized authorities within your framework",
            "Investment structure for identifying and supporting promising implementations",
            "Governance model ensuring integrity while enabling evolution",
            "Cross-industry applications demonstrating the versatility of your approach",
            "Philanthropic initiatives extending your methodology to underserved contexts"
          ],
          transitionRequirements: "Before moving to the Constellation stage, your approach must be embodied in sustainable institutions with next-generation leadership, with evidence that it can continue to evolve and expand beyond your direct involvement."
        },
        {
          id: 10,
          name: "THE NAVIGATIONAL WAYPOINT",
          icon: "CONSTELLATION",
          iconColor: "#BF360C",
          description: "Creating enduring impact across multiple domains and generations",
          outcomes: [
            "Your approach influences policy, education, or cultural narratives beyond your original domain",
            "Multiple fields and disciplines adapt and apply your core principles",
            "Your terminology enters common language beyond professional contexts",
            "Educational curricula at various levels incorporate your principles",
            "Research foundation advancing the theoretical underpinnings of your approach",
            "Intergenerational transmission of your principles with continued relevance",
            "Your methodology creates measurable positive impact at societal scale"
          ],
          transitionRequirements: "At the Constellation stage, your ideas have transcended their original context to become enduring principles that guide thinking and practice across domains, with continued relevance and application beyond your lifetime."
        }
      ]
    }
  ];

  const handlePhaseClick = (phaseId: number|null) => {
    setActivePhase(activePhase() === phaseId ? null : phaseId);
  };

  return (
    <>
      <PageTitle>Traction-Based Outcomes</PageTitle>
      <div class={styles.container}>
        <div class={styles.header}>
          <h1 class={styles.title}>Traction-Based Outcomes</h1>
          <p class={styles.description}>
            The specific traction-based outcomes that signal progression through each 
            phase of the Thought Leader Journey. Each stage represents a distinct level of market impact and 
            requires specific outcomes to be achieved before transitioning to the next phase.
          </p>
        </div>

        {/* Journey Timeline */}
        <div class={styles.journeyTimeline}>
          <div class={styles.timelineLine}></div>
          <div class={styles.phaseContainer}>
            <For each={phases}>
              {(phase) => (
                <div 
                  class={`${styles.phaseMarker} ${activePhase() === phase.id ? styles.activePhase : ''}`}
                  onClick={() => handlePhaseClick(phase.id)}
                >
                  <div 
                    class={styles.phaseCircle}
                    style={{ "background-color": phase.color, "color": phase.textColor }}
                  >
                    {phase.id}
                  </div>
                  <div class={styles.phaseLabel}>
                    <div class={styles.phaseNumber} style={{ "color": phase.textColor }}>PHASE {phase.id}</div>
                    <div class={styles.phaseName}>{phase.title}</div>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>

        {/* Phase Details */}
        <For each={phases}>
          {(phase) => (
            <Show when={activePhase() === phase.id}>
              <div class={styles.phaseDetails}>
                <div 
                  class={styles.phaseHeader}
                  style={{ "background-color": `${phase.color}33` /* 20% opacity */ }}
                >
                  <h3 class={styles.phaseTitle} style={{ "color": phase.textColor }}>
                    PHASE {phase.id}: {phase.title}
                  </h3>
                  <p class={styles.phaseDescription}>{phase.description}</p>

                  {/* Stages within the Phase - always expanded */}
                  <div class={styles.stagesGrid}>
                    <For each={phase.stages}>
                      {(stage) => (
                        <div class={styles.stageCard}>
                          <div class={styles.stageHeader}>
                            <div 
                              class={styles.stageIcon}
                              style={{ "background-color": stage.iconColor }}
                            >
                              {stage.id}
                            </div>
                            <div class={styles.stageTitle}>
                              <h4 class={styles.stageName}>{stage.name}</h4>
                              <div class={styles.stageIconName}>{stage.icon}</div>
                            </div>
                          </div>
                          <p class={styles.stageDescription}>{stage.description}</p>
                          
                          {/* Always showing stage details */}
                          <div class={styles.stageDetails}>
                            <h5 class={styles.outcomesTitle}>Key Traction Outcomes:</h5>
                            <ul class={styles.outcomesList}>
                              <For each={stage.outcomes}>
                                {(outcome) => (
                                  <li class={styles.outcomeItem}>{outcome}</li>
                                )}
                              </For>
                            </ul>
                            
                            <h5 class={styles.transitionTitle}>Transition Requirements:</h5>
                            <p class={styles.transitionRequirements}>{stage.transitionRequirements}</p>
                          </div>
                        </div>
                      )}
                    </For>
                  </div>
                </div>
              </div>
            </Show>
          )}
        </For>

        <Show when={!activePhase()}>
          <div class={styles.noSelectionContainer}>
            <div class={styles.noSelectionIcon}>👆</div>
            <p class={styles.noSelectionText}>Click on any phase above to explore its stages and outcomes</p>
          </div>
        </Show>

        {/* Implementation Framework */}
        <div class={styles.implementationSection}>
          <h2 class={styles.implementationTitle}>Implementation Framework</h2>
          <p class={styles.implementationIntro}>
            To support thought leaders in achieving these traction-based outcomes, each stage requires:
          </p>
          
          <div class={styles.frameworkGrid}>
            <For each={[
              {
                title: "Diagnostic Tools",
                description: "Assessment mechanisms to identify current position and readiness for transition"
              },
              {
                title: "Outcome Accelerators",
                description: "Systems and resources specifically designed to achieve the key traction outcomes"
              },
              {
                title: "Transition Facilitators",
                description: "Processes for navigating the critical shifts between stages"
              },
              {
                title: "Measurement Systems",
                description: "Metrics and tracking tools to validate achievement of traction markers"
              },
              {
                title: "Implementation Support",
                description: "Resources, templates, and guidance for executing the required strategies"
              }
            ]}>
              {(item) => (
                <div class={styles.frameworkCard}>
                  <h3 class={styles.frameworkItemTitle}>{item.title}</h3>
                  <p class={styles.frameworkItemDescription}>{item.description}</p>
                </div>
              )}
            </For>
          </div>
          
          <p class={styles.frameworkConclusion}>
            This framework integrates the developmental aspects of thought leadership with concrete, 
            measurable market responses, ensuring that progression through stages is based on actual 
            traction rather than theoretical understanding.
          </p>
        </div>
      </div>
    </>
  );
};

export default ThoughtLeaderTractionOutcomes;