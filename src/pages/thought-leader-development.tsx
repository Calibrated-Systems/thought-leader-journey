import { For, Show } from 'solid-js';
import styles from './thought-leader-development.module.css';
import PageTitle from '../components/page-title';

// Define TypeScript interfaces
interface StageFocus {
  id: number;
  text: string;
}

interface StageIndicator {
  id: number;
  text: string;
}

interface Stage {
  id: number;
  name: string;
  icon: string;
  iconColor: string;
  textColor: string;
  description: string;
  focus: string[];
  indicators: string[];
  development: string;
}

interface Transition {
  name: string;
  description: string;
  questions: string[];
}

interface Phase {
  id: number;
  title: string;
  description: string;
  color: string;
  textColor: string;
  stages: Stage[];
  transition: Transition;
}

const ThoughtLeaderDevelopment = () => {
  // Phase and stage data
  const phases: Phase[] = [
    {
      id: 1,
      title: "DISCOVERY & VALIDATION",
      description: "Finding and validating your unique perspective within a market",
      color: "#FFEDD0",
      textColor: "#d35400",
      stages: [
        {
          id: 1,
          name: "The Explorer",
          icon: "SPARK",
          iconColor: "#FFE082",
          textColor: "#d35400",
          description: "You're exploring ideas and fields that naturally interest you. You notice patterns and solutions that others miss. You find yourself offering advice in casual settings and seeing positive reactions, but haven't formalized your expertise.",
          focus: [
            "Exploring topics of natural interest and aptitude",
            "Identifying thought leaders you resonate with",
            "Noticing patterns that others miss",
            "Offering informal guidance in casual settings"
          ],
          indicators: [
            "People ask for your advice in specific domains",
            "Your content receives positive engagement",
            "You find yourself repeatedly solving similar problems"
          ],
          development: "Identifying which domain naturally energizes you and determining where your perspective differs from mainstream"
        },
        {
          id: 2,
          name: "The Problem Solver",
          icon: "FLAME",
          iconColor: "#FFD54F",
          textColor: "#d35400",
          description: "You've identified specific problems within your area of interest and created small, focused solutions to test demand. You're beginning to package your knowledge into easily digestible formats and validating that people will pay for your perspective.",
          focus: [
            "Creating tangible knowledge products",
            "Testing market demand for your solutions",
            "Packaging expertise into accessible formats",
            "Building initial audience through problem-solving"
          ],
          indicators: [
            "Selling your first knowledge products",
            "Consistent positive feedback on solutions",
            "Growing subscriber/follower base"
          ],
          development: "Creating 'minimum viable knowledge products' and developing clear solutions to well-defined problems"
        }
      ],
      transition: {
        name: "FROM INSIGHT TO INCOME",
        description: "Shifting from simply having good ideas to creating knowledge products people will pay for.",
        questions: [
          "Can I package my insights in ways people value enough to purchase?",
          "Have I validated that my perspective resonates with a specific audience?",
          "Am I solving problems people know they have?"
        ]
      }
    },
    {
      id: 2,
      title: "DISTINCTIVE VOICE DEVELOPMENT",
      description: "Creating a unique perspective that stands out from conventional wisdom",
      color: "#FFDDC5",
      textColor: "#e67e22",
      stages: [
        {
          id: 3,
          name: "The Distinctive Voice",
          icon: "TORCH",
          iconColor: "#FFCA28",
          textColor: "#d35400",
          description: "You've moved beyond regurgitating industry knowledge and have developed a distinctive viewpoint. You've created a 'unique mechanism' or framework that reframes common problems in your field, often challenging conventional wisdom.",
          focus: [
            "Developing a unique perspective or approach",
            "Creating a 'pattern interrupt' in your field",
            "Challenging conventional wisdom with new frameworks",
            "Articulating your distinctive value proposition"
          ],
          indicators: [
            "People specifically referencing your unique approach",
            "Your terminology entering audience vocabulary",
            "Requests to explain your methodology to others"
          ],
          development: "Conducting 'gap analysis' between pain and existing solutions and articulating your distinctive mechanism or framework"
        },
        {
          id: 4,
          name: "The Recognized Expert",
          icon: "BEACON",
          iconColor: "#FFC107",
          textColor: "#d35400",
          description: "Your unique approach has gained recognition. You've built reliable systems for consistently delivering value, and clients/customers seek you out specifically for your distinctive methodology rather than generic services in your field.",
          focus: [
            "Building systematic methodology",
            "Creating reliable frameworks for replication",
            "Establishing clear 'before and after' transformations",
            "Codifying your approach into teachable components"
          ],
          indicators: [
            "Being sought out specifically for your methodology",
            "Clear before-and-after results from your approach",
            "People identifying themselves as users of your method"
          ],
          development: "Codifying your approach into teachable components and creating case studies that showcase transformation"
        }
      ],
      transition: {
        name: "FROM EXPERT TO EDUCATOR",
        description: "Moving from doing the work to codifying how the work should be done.",
        questions: [
          "Can I articulate my approach so others can implement it?",
          "Have I developed a distinctive enough voice to stand out?",
          "Do people recognize the unique value of my perspective versus alternatives?"
        ]
      }
    },
    {
      id: 3,
      title: "COMMUNITY BUILDING",
      description: "Creating environments where others connect around your ideas",
      color: "#FFCBA8",
      textColor: "#d35400",
      stages: [
        {
          id: 5,
          name: "The Community Builder",
          icon: "CAMPFIRE",
          iconColor: "#FFB300",
          textColor: "#d35400",
          description: "You've transitioned from serving individual clients to nurturing a community of practitioners or believers in your approach. People don't just consume your content—they engage with each other using your frameworks and language.",
          focus: [
            "Facilitating connection between followers",
            "Creating environments for peer support",
            "Developing deeper implementation systems",
            "Building community infrastructure"
          ],
          indicators: [
            "Spontaneous community formation around your work",
            "People sharing successes with each other",
            "Members using 'we' language when discussing your approach"
          ],
          development: "Creating community infrastructure and guidelines and implementing 'tight feedback loops' for continuous improvement"
        },
        {
          id: 6,
          name: "The Scale Architect",
          icon: "BONFIRE",
          iconColor: "#FFA000",
          textColor: "#d35400",
          description: "You've developed systems that allow your methodology to scale beyond your personal bandwidth. You're now creating mechanisms that turn students/clients into certified practitioners or partners who can deliver your methodology.",
          focus: [
            "Developing systems for others to deliver your methodology",
            "Creating leverage through trained practitioners",
            "Building structural capacity for growth",
            "Establishing quality standards"
          ],
          indicators: [
            "Community members teaching each other your methods",
            "Emergence of 'star students' who exemplify your approach",
            "Requests for certification or authorization programs"
          ],
          development: "Creating certification or training programs and developing quality standards for implementation"
        }
      ],
      transition: {
        name: "FROM EDUCATOR TO ECOSYSTEM",
        description: "Transitioning from teaching individuals to creating self-sustaining communities.",
        questions: [
          "Have I created systems where value exchange happens without my direct involvement?",
          "Are community members becoming effective representatives of the methodology?",
          "Is the community generating its own energy and momentum?"
        ]
      }
    },
    {
      id: 4,
      title: "INDUSTRY INFLUENCE",
      description: "Reshaping professional standards and practices across a field",
      color: "#FFB592",
      textColor: "#c0392b",
      stages: [
        {
          id: 7,
          name: "The Industry Influencer",
          icon: "SIGNAL FIRE",
          iconColor: "#FF8F00",
          textColor: "#d35400",
          description: "Your approach has become influential enough to shift thinking in your entire industry. Professional organizations, publications, and competitors now reference your frameworks. You're creating an ecosystem where many others can build businesses within your intellectual architecture.",
          focus: [
            "Creating industry-level change",
            "Developing business-in-a-box solutions",
            "Building systems for others to build businesses",
            "Establishing IP guidelines and licensing structures"
          ],
          indicators: [
            "Industry publications referencing your frameworks",
            "Organizations implementing your methodology",
            "Professional certification based on your approach",
            "Competitors adopting elements of your language"
          ],
          development: "Developing clear IP guidelines and licensing structures and creating tiered partnership programs for implementation"
        },
        {
          id: 8,
          name: "The Paradigm Shifter",
          icon: "HEARTH",
          iconColor: "#FF6F00",
          textColor: "#d35400",
          description: "You've developed a distinctive language system and intellectual property that can be taught and transferred systematically. Your thinking has been codified into a coherent school of thought that others can apply independently.",
          focus: [
            "Packaging intellectual property into linguistic system",
            "Ensuring methodology integrity across contexts",
            "Building institutions to preserve core principles",
            "Establishing training standards"
          ],
          indicators: [
            "Your terminology becoming standard in your field",
            "Formation of guilds or associations around your methodology",
            "Educational courses based on your frameworks",
            "Multiple books by others building on your foundation"
          ],
          development: "Creating your own codified knowledge system and establishing training institutes or certification bodies"
        }
      ],
      transition: {
        name: "FROM METHODOLOGY TO MOVEMENT",
        description: "Evolving from a proprietary approach to a widely adopted school of thought.",
        questions: [
          "Has my methodology become influential enough to shift industry thinking?",
          "Are there established standards and best practices based on my approach?",
          "Can my intellectual framework stand independent of my personal involvement?"
        ]
      }
    },
    {
      id: 5,
      title: "LEGACY CREATION",
      description: "Building enduring institutions and cross-disciplinary impact",
      color: "#FF9E7C",
      textColor: "#a93226",
      stages: [
        {
          id: 9,
          name: "The Torch Ignitor",
          icon: "FORGE",
          iconColor: "#E65100",
          textColor: "#fff",
          description: "You've moved beyond being the face of your methodology to become the architect of an ecosystem. Your focus shifts to identifying and elevating high-potential implementers of your approach, often taking equity positions rather than fees.",
          focus: [
            "Identifying and elevating next-generation leaders",
            "Creating enterprise value through strategic partnerships",
            "Building long-term institutional structures",
            "Developing succession planning"
          ],
          indicators: [
            "Multiple successful businesses built on your frameworks",
            "Next-generation leaders emerging as authorities",
            "Academic study of your methodology",
            "Your terminology entering broader professional language"
          ],
          development: "Creating holding companies or investment structures and developing succession planning for methodology stewardship"
        },
        {
          id: 10,
          name: "The Navigational Waypoint",
          icon: "CONSTELLATION",
          iconColor: "#BF360C",
          textColor: "#fff",
          description: "Your thinking has become a paradigm that influences multiple industries and domains. Your intellectual architecture creates ripple effects far beyond your original field and continues evolving through the contributions of others.",
          focus: [
            "Creating cross-disciplinary impact",
            "Influencing policy and education",
            "Establishing enduring institutional legacy",
            "Enabling adaptation across domains"
          ],
          indicators: [
            "Policy influence at organizational or governmental levels",
            "Educational curriculum adoption",
            "Cross-field application of your frameworks",
            "Your terminology entering common language",
            "Cultural narratives shifting based on your ideas"
          ],
          development: "Establishing foundations or research institutes and creating cross-disciplinary application methodologies"
        }
      ],
      transition: {
        name: "FROM CREATOR TO CATALYST",
        description: "Transforming from the primary driver to the architectural force behind larger systems of change.",
        questions: [
          "Is my intellectual framework creating change beyond its original domain?",
          "Have I established institutions that will carry the work forward beyond my lifetime?",
          "Has my approach become a lens through which people understand the world?"
        ]
      }
    }
  ];

  return (
    <>
      <PageTitle>Developmental Journey</PageTitle>
      <div class={styles.container}>
        <div class={styles.header}>
          <h1 class={styles.title}>The Thought Leader's Developmental Journey</h1>
          <p class={styles.subtitle}>From Explorer to Navigation Waypoint: The Complete Evolution</p>
        </div>

        <div class={styles.introduction}>
          <p>This framework maps the complete developmental arc of thought leadership across five major phases and ten distinct stages. Each stage represents a qualitative evolution in focus, capability, and impact. The journey includes critical mid-phase transitions that signal progression to the next level of thought leadership development. Understanding your current position on this map provides clarity on both your achievements and your next horizon of growth.</p>
        </div>

        <For each={phases}>
          {(phase) => (
            <div class={styles.phaseContainer}>
              <div class={styles.phaseHeader} style={{ "background-color": phase.color }}>
                <h2 class={styles.phaseTitle} style={{ "color": phase.textColor }}>PHASE {phase.id}: {phase.title}</h2>
                <p class={styles.phaseDescription} style={{ "color": phase.textColor }}>{phase.description}</p>
              </div>

              <div class={styles.stagesContainer}>
                <For each={phase.stages}>
                  {(stage) => (
                    <div class={styles.stageRow}>
                      <div class={styles.stageIconContainer}>
                        <div class={styles.stageIcon} style={{ "background-color": stage.iconColor }}>
                          <span class={styles.stageIconText} style={{ "color": stage.textColor }}>{stage.icon}</span>
                        </div>
                        <span style={{ "font-size": "12px", "text-align": "center" }}>Stage {stage.id}</span>
                      </div>
                      
                      <div class={styles.stageContent}>
                        <h3 class={styles.stageName}>{stage.name}</h3>
                        <p class={styles.stageDescription}>{stage.description}</p>
                        
                        <div class={styles.stageFocus}>
                          <p class={styles.focusTitle}>Primary Focus:</p>
                          <ul class={styles.focusList}>
                            <For each={stage.focus}>
                              {(item) => <li>{item}</li>}
                            </For>
                          </ul>
                          
                          <p class={styles.focusTitle}>Key Indicators:</p>
                          <ul class={styles.focusList}>
                            <For each={stage.indicators}>
                              {(item) => <li>{item}</li>}
                            </For>
                          </ul>
                          
                          <p class={styles.focusTitle}>Essential Development:</p>
                          <p>{stage.development}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </For>
              </div>

              <Show when={phase.id < 5}>
                <div 
                  class={styles.transitionContainer} 
                  style={{ 
                    "margin-bottom": "0", 
                    "border-bottom-left-radius": "0", 
                    "border-bottom-right-radius": "0" 
                  }}
                >
                  <h3 class={styles.transitionTitle}>MID-PHASE TRANSITION: {phase.transition.name}</h3>
                  <p class={styles.transitionDescription}>{phase.transition.description}</p>
                  
                  <p class={styles.questionsTitle}>Critical Questions:</p>
                  <ul class={styles.questionsList}>
                    <For each={phase.transition.questions}>
                      {(question) => <li>{question}</li>}
                    </For>
                  </ul>
                </div>
              </Show>
            </div>
          )}
        </For>

        <div class={styles.footnote}>
          <p>Note: This developmental framework represents the evolution of a thought leader's role, focus, and capabilities. It operates in parallel with the community transformation journey, brand recognition cycle, and organizational structure evolution. The journey isn't necessarily linear—some thought leaders may choose to focus at specific stages where they find fulfillment and impact, rather than progressing through all phases.</p>
          <p>Each stage builds upon the previous one, requiring mastery of earlier capabilities before advancing. The transitions between phases represent significant shifts in how the thought leader approaches their work and interacts with their audience. Success at each stage requires different skills, mindsets, and organizational structures.</p>
        </div>
      </div>
    </>
  );
};

export default ThoughtLeaderDevelopment;