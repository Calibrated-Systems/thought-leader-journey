import { For, Show } from 'solid-js';
import styles from './critical-inflection-points.module.css';
import PageTitle from '../components/page-title';

// Define TypeScript interfaces
interface NodalChoice {
  title: string;
  description: string;
  examples: string[];
  benefits: string[];
  challenges: string[];
}

interface CoreChoice {
  title: string;
  description: string;
  examples: string[];
  benefits: string[];
  challenges: string[];
}

interface KeyShift {
  aspect: string;
  before: string;
  after: string;
}

interface InflectionPoint {
  id: number;
  name: string;
  description: string;
  timing: string;
  significance: string;
  before: string[];
  after: string[];
  nodalChoice?: NodalChoice;
  coreChoice?: CoreChoice;
  successFactors?: string[];
  failureConsequences?: string[];
  keyShifts?: KeyShift[];
  keyIndicators?: string[];
  structuralRequirements?: string[];
  warningSign: string;
}

interface Phase {
  id: number;
  name: string;
  color: string;
  textColor: string;
  inflectionPoint?: InflectionPoint;
}

const ThoughtLeaderInflectionPoints = () => {
  // Phase and inflection point data
  const phases: Phase[] = [
    {
      id: 1,
      name: "DISCOVERY & VALIDATION",
      color: "#FFEDD0", 
      textColor: "#d35400",
    },
    {
      id: 2,
      name: "DISTINCTIVE VOICE DEVELOPMENT",
      color: "#FFDDC5",
      textColor: "#e67e22",
      inflectionPoint: {
        id: 1,
        name: "Nodal vs. Core Pillar Decision",
        description: "This critical juncture requires thought leaders to decide whether to excel within existing knowledge frameworks or create entirely new intellectual architecture.",
        timing: "Typically occurs between the Torch and Beacon stages when your distinctive voice has emerged but before full methodology development.",
        significance: "This choice fundamentally shapes your entire journey and the type of impact you'll have. It determines whether you'll be known for specialized application or paradigm innovation.",
        before: [
          "Uncertainty about strategic direction",
          "Trying to balance novelty with established credibility",
          "Mixed messaging about your unique contribution",
          "Confusion about which audience to prioritize"
        ],
        after: [
          "Clear strategic focus",
          "Aligned messaging and positioning",
          "Appropriate allocation of resources",
          "Coherent brand identity and promise"
        ],
        nodalChoice: {
          title: "The Nodal Pillar Path",
          description: "You choose to work within established frameworks, becoming the go-to expert for specific applications, contexts, or audiences. You don't challenge the fundamental paradigm but instead perfect its implementation in your domain.",
          examples: [
            "The coach who specializes in applying established leadership principles to healthcare executives",
            "The consultant who adapts proven management methods for the nonprofit sector",
            "The trainer who translates complex technical frameworks for non-technical audiences"
          ],
          benefits: [
            "Easier initial credibility and market acceptance",
            "Established language and frameworks to build upon",
            "Clear market positioning against competitors",
            "More straightforward path to revenue"
          ],
          challenges: [
            "May eventually hit a ceiling on influence and pricing",
            "Dependent on the continued relevance of the core framework",
            "Potential competition from others in the same space",
            "May be seen as a 'version of' rather than a unique voice"
          ]
        },
        coreChoice: {
          title: "The Core Pillar Path",
          description: "You choose to create a fundamentally new framework or paradigm. Your work challenges existing assumptions and offers a distinctive lens that reframes how people understand the domain.",
          examples: [
            "The psychologist who creates a new therapeutic modality rather than specializing in an existing one",
            "The business thinker who develops a novel strategic framework rather than applying established ones",
            "The educator who designs a new learning methodology instead of optimizing existing approaches"
          ],
          benefits: [
            "Potential for category-defining thought leadership",
            "Higher ceiling on long-term influence and revenue",
            "Ownership of intellectual property and terminology",
            "Opportunity to create lasting legacy beyond personal brand"
          ],
          challenges: [
            "Longer path to mainstream acceptance and credibility",
            "Higher burden of proof for effectiveness",
            "Requires more investment in foundational content and research",
            "More difficult to explain value proposition initially"
          ]
        },
        warningSign: "Be wary of trying to straddle both paths simultaneously. The 'fork in the road' requires a clear choice to progress effectively. Without deciding, you risk creating confusing messaging and diffuse impact."
      }
    },
    {
      id: 3,
      name: "COMMUNITY BUILDING",
      color: "#FFCBA8",
      textColor: "#d35400",
      inflectionPoint: {
        id: 2,
        name: "Personal Brand to Intellectual Property Transition",
        description: "This inflection point represents the shift from being personally synonymous with your ideas to creating transferable intellectual property that can function without your direct involvement.",
        timing: "Typically occurs during the later Campfire stage and throughout the Bonfire stage when community demand begins exceeding your personal capacity.",
        significance: "This transition determines whether your impact will be limited by your personal bandwidth or can scale beyond your direct involvement. It's the difference between creating a practice and creating a movement.",
        before: [
          "You are the primary delivery channel for your ideas",
          "Your presence is required for implementation",
          "Content and value are tied to your personality",
          "Growth limited by your time and energy"
        ],
        after: [
          "Systems deliver your ideas without your direct involvement",
          "Others can implement with consistent results",
          "Value is tied to methodology rather than personality",
          "Growth limited by systems, not your personal capacity"
        ],
        successFactors: [
          "Codification - Creating clear frameworks and models others can teach",
          "Certification - Developing systems to train and authorize others",
          "Contextualization - Providing guidelines for adaptation across contexts",
          "Canonization - Establishing core principles vs. flexible applications",
          "Community governance - Creating structures for community leadership"
        ],
        failureConsequences: [
          "Community stagnation (ceiling based on your capacity)",
          "Community rupture (advanced practitioners leave to create competing approaches)",
          "Exhaustion (burnout from trying to personally meet growing demand)",
          "Limited legacy (ideas diminish when you move on)"
        ],
        keyShifts: [
          {
            aspect: "Business Model",
            before: "Revenue primarily from your direct creation and delivery",
            after: "Revenue increasingly from licensing, certification, community infrastructure"
          },
          {
            aspect: "Identity",
            before: "\"I am the expert with the answers\"",
            after: "\"I am the architect of a system that creates experts\""
          },
          {
            aspect: "Focus",
            before: "Creating content and delivering directly",
            after: "Creating systems and infrastructure for others to deliver"
          },
          {
            aspect: "Relationship to Community",
            before: "Primary source of value and wisdom",
            after: "Curator and steward of collective wisdom"
          }
        ],
        warningSign: "If you find yourself overwhelmed with implementation requests, unable to meet demand, and seeing others begin to teach 'their version' of your approach without clear guidelines, you're at this inflection point but haven't successfully navigated it yet."
      }
    },
    {
      id: 4,
      name: "INDUSTRY INFLUENCE",
      color: "#FFB592",
      textColor: "#c0392b",
      inflectionPoint: {
        id: 3,
        name: "Following to Movement Transformation",
        description: "This critical shift transforms your community from a centralized following to a decentralized movement with its own momentum and distributed leadership.",
        timing: "Typically begins during the Bonfire stage and becomes critical during the Signal Fire stage when your approach starts gaining broader recognition.",
        significance: "This transformation enables exponential rather than linear growth by allowing distributed leadership and innovation without sacrificing core integrity.",
        before: [
          "Centralized around you as the thought leader",
          "Direction primarily guided by your vision",
          "Identity tied directly to you personally",
          "Linear growth through direct connection to you"
        ],
        after: [
          "Decentralized network with multiple nodes",
          "Self-sustaining momentum with guiding principles",
          "Independent identity beyond your personal brand",
          "Exponential growth through multiple diffusion points"
        ],
        keyIndicators: [
          "Community members begin teaching each other without your direct involvement",
          "Independent applications emerge that you didn't explicitly create or authorize",
          "Terminology evolves beyond your original definitions",
          "Sub-communities form around specific applications or interpretations",
          "Leaders emerge organically from within the community",
          "External entities reference the approach without necessarily mentioning you",
          "Cultural artifacts emerge (symbols, rituals, inside jokes) that you didn't create"
        ],
        structuralRequirements: [
          "Values and Principles - Clear core principles that define the movement",
          "Governance - Transparent decision-making processes and leadership paths",
          "Standards - Quality guidelines for implementation and teaching",
          "Recognition - Systems to acknowledge contributions and leadership",
          "Innovation Frameworks - Clear processes for evolving the methodology"
        ],
        warningSign: "If you find yourself becoming the bottleneck for growth, creating policies that restrict rather than enable contribution, or feeling threatened by emerging leaders, you may be resisting this necessary transformation."
      }
    },
    {
      id: 5,
      name: "LEGACY CREATION",
      color: "#FF9E7C",
      textColor: "#a93226"
    }
  ];

  return (
    <>
      <PageTitle>Inflection Points</PageTitle>
      <div class={styles.container}>
        <div class={styles.header}>
          <h1 class={styles.title}>Critical Inflection Points</h1>
          <p class={styles.subtitle}>Navigating the transformative thresholds in the Thought Leader Journey</p>
        </div>

        <div class={styles.introduction}>
          <p>Beyond the gradual progression through developmental stages, the Thought Leader Journey features critical inflection points—transformative thresholds that fundamentally alter how you operate, scale, and create impact. These inflection points represent significant strategic decisions or structural transformations that, when navigated successfully, enable breakthrough growth and expanded influence.</p>
          <p>Each inflection point requires letting go of familiar patterns and embracing new models of operation, identity, and relationship with your audience. Failure to navigate these transitions is the primary reason many thought leaders plateau despite having valuable ideas and initial traction.</p>
        </div>

        <div class={styles.journeyContainer}>
          <div class={styles.journeyLine}></div>
          
          <For each={phases}>
            {(phase) => (
              <>
                <div class={styles.phaseContainer}>
                  <div 
                    class={styles.phaseMarker} 
                    style={{ 
                      "background-color": phase.color, 
                      "color": phase.textColor 
                    }}
                  >
                    {phase.id}
                  </div>
                  <div class={styles.phaseContent}>
                    <h2 class={styles.phaseTitle}>{phase.name}</h2>
                  </div>
                </div>
                
                <Show when={phase.inflectionPoint !== undefined}>
                  <div class={styles.inflectionContainer}>
                    <div class={styles.inflectionMarker}>
                      <span style={{ "color": "white", "font-weight": "bold" }}>{phase.inflectionPoint!.id}</span>
                    </div>
                    <h3 class={styles.inflectionTitle}>{phase.inflectionPoint!.name}</h3>
                    <p class={styles.description}>{phase.inflectionPoint!.description}</p>
                    
                    <p class={styles.sectionTitle}>Timing</p>
                    <p class={styles.description}>{phase.inflectionPoint!.timing}</p>
                    
                    <p class={styles.sectionTitle}>Strategic Significance</p>
                    <p class={styles.description}>{phase.inflectionPoint!.significance}</p>
                    
                    <div class={styles.beforeAfterContainer}>
                      <div class={styles.beforeAfterColumn}>
                        <h4 class={styles.columnTitle}>Before</h4>
                        <ul class={styles.list}>
                          <For each={phase.inflectionPoint!.before}>
                            {(item) => (
                              <li class={styles.listItem}>{item}</li>
                            )}
                          </For>
                        </ul>
                      </div>
                      
                      <div class={styles.beforeAfterColumn}>
                        <h4 class={styles.columnTitle}>After</h4>
                        <ul class={styles.list}>
                          <For each={phase.inflectionPoint!.after}>
                            {(item) => (
                              <li class={styles.listItem}>{item}</li>
                            )}
                          </For>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Conditionally render content for inflection point 1 */}
                    <Show when={phase.inflectionPoint!.id === 1}>
                      <div class={styles.personaContainer}>
                        <h4 class={styles.personaTitle}>{phase.inflectionPoint!.nodalChoice!.title}</h4>
                        <p class={styles.description}>{phase.inflectionPoint!.nodalChoice!.description}</p>
                        
                        <p style={{ "font-weight": "bold", "margin-top": "10px", "margin-bottom": "5px" }}>Examples:</p>
                        <ul class={styles.list}>
                          <For each={phase.inflectionPoint!.nodalChoice!.examples}>
                            {(example) => (
                              <li class={styles.listItem}>{example}</li>
                            )}
                          </For>
                        </ul>
                        
                        <div class={styles.beforeAfterContainer}>
                          <div class={styles.beforeAfterColumn}>
                            <h4 class={styles.columnTitle}>Benefits</h4>
                            <ul class={styles.list}>
                              <For each={phase.inflectionPoint!.nodalChoice!.benefits}>
                                {(benefit) => (
                                  <li class={styles.listItem}>{benefit}</li>
                                )}
                              </For>
                            </ul>
                          </div>
                          
                          <div class={styles.beforeAfterColumn}>
                            <h4 class={styles.columnTitle}>Challenges</h4>
                            <ul class={styles.list}>
                              <For each={phase.inflectionPoint!.nodalChoice!.challenges}>
                                {(challenge) => (
                                  <li class={styles.listItem}>{challenge}</li>
                                )}
                              </For>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div class={styles.personaContainer}>
                        <h4 class={styles.personaTitle}>{phase.inflectionPoint!.coreChoice!.title}</h4>
                        <p class={styles.description}>{phase.inflectionPoint!.coreChoice!.description}</p>
                        
                        <p style={{ "font-weight": "bold", "margin-top": "10px", "margin-bottom": "5px" }}>Examples:</p>
                        <ul class={styles.list}>
                          <For each={phase.inflectionPoint!.coreChoice!.examples}>
                            {(example) => (
                              <li class={styles.listItem}>{example}</li>
                            )}
                          </For>
                        </ul>
                        
                        <div class={styles.beforeAfterContainer}>
                          <div class={styles.beforeAfterColumn}>
                            <h4 class={styles.columnTitle}>Benefits</h4>
                            <ul class={styles.list}>
                              <For each={phase.inflectionPoint!.coreChoice!.benefits}>
                                {(benefit) => (
                                  <li class={styles.listItem}>{benefit}</li>
                                )}
                              </For>
                            </ul>
                          </div>
                          
                          <div class={styles.beforeAfterColumn}>
                            <h4 class={styles.columnTitle}>Challenges</h4>
                            <ul class={styles.list}>
                              <For each={phase.inflectionPoint!.coreChoice!.challenges}>
                                {(challenge) => (
                                  <li class={styles.listItem}>{challenge}</li>
                                )}
                              </For>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Show>
                    
                    {/* Conditionally render content for inflection point 2 */}
                    <Show when={phase.inflectionPoint!.id === 2}>
                      <p class={styles.sectionTitle}>Success Factors</p>
                      <ul class={styles.list}>
                        <For each={phase.inflectionPoint!.successFactors!}>
                          {(factor) => (
                            <li class={styles.listItem}>{factor}</li>
                          )}
                        </For>
                      </ul>
                      
                      <p class={styles.sectionTitle}>Failure Consequences</p>
                      <ul class={styles.list}>
                        <For each={phase.inflectionPoint!.failureConsequences!}>
                          {(consequence) => (
                            <li class={styles.listItem}>{consequence}</li>
                          )}
                        </For>
                      </ul>
                      
                      <p class={styles.sectionTitle}>Key Shifts Required</p>
                      <For each={phase.inflectionPoint!.keyShifts!}>
                        {(shift) => (
                          <div style={{ "margin-bottom": "15px" }}>
                            <p style={{ "font-weight": "bold", "margin-bottom": "5px" }}>{shift.aspect}:</p>
                            <div class={styles.beforeAfterContainer}>
                              <div class={styles.beforeAfterColumn}>
                                <p style={{ "font-size": "14px" }}><strong>Before:</strong> {shift.before}</p>
                              </div>
                              <div class={styles.beforeAfterColumn}>
                                <p style={{ "font-size": "14px" }}><strong>After:</strong> {shift.after}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </For>
                    </Show>
                    
                    {/* Conditionally render content for inflection point 3 */}
                    <Show when={phase.inflectionPoint!.id === 3}>
                      <p class={styles.sectionTitle}>Key Indicators of the Shift</p>
                      <ul class={styles.list}>
                        <For each={phase.inflectionPoint!.keyIndicators!}>
                          {(indicator) => (
                            <li class={styles.listItem}>{indicator}</li>
                          )}
                        </For>
                      </ul>
                      
                      <p class={styles.sectionTitle}>Structural Requirements</p>
                      <ul class={styles.list}>
                        <For each={phase.inflectionPoint!.structuralRequirements!}>
                          {(requirement) => (
                            <li class={styles.listItem}>{requirement}</li>
                          )}
                        </For>
                      </ul>
                    </Show>
                    
                    <div class={styles.warningContainer}>
                      <p class={styles.warningTitle}>Warning Sign</p>
                      <p class={styles.description}>{phase.inflectionPoint!.warningSign}</p>
                    </div>
                  </div>
                </Show>
              </>
            )}
          </For>
        </div>

        <div class={styles.footnote}>
          <p>Note: These inflection points don't occur at fixed times in a thought leader's journey. They emerge when your impact reaches certain thresholds that require new structural approaches. Some thought leaders may encounter these inflection points earlier or later than others, depending on their domain, audience size, and rate of growth. The key is recognizing when you've reached a transition point and being willing to evolve your approach accordingly.</p>
        </div>
      </div>
    </>
  );
};

export default ThoughtLeaderInflectionPoints;