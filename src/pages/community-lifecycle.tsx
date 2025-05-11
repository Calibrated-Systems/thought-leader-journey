import { For } from 'solid-js';
import styles from './community-lifecycle.module.css';
import PageTitle from '../components/page-title';

// Define TypeScript interfaces for the data
interface Indicator {
  id: number;
  text: string;
}

interface Phase {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  textColor: string;
  description: string;
  perception: string;
  behavior: string;
  indicators: string[];
}

interface InflectionPoint {
  id: number;
  position: string;
  title: string;
  description: string;
  implications: string;
}

const CommunityLifecycle = () => {
  // Phase data
  const phases: Phase[] = [
    {
      id: 1,
      title: "Practical Problem-Solving",
      subtitle: "Value-Driven Engagement",
      color: "#FFEDD0",
      textColor: "#d35400",
      description: "The community initially engages with the thought leader to solve specific problems. The relationship is primarily transactional and utilitarian.",
      perception: "This helps me solve my specific problems",
      behavior: "Individual application of solutions",
      indicators: [
        "Direct questions about implementation details",
        "Focus on immediate results and application",
        "Pragmatic engagement with content",
        "Low emotional investment in relationship"
      ]
    },
    {
      id: 2,
      title: "Enhanced Awareness",
      subtitle: "Perspective Shift",
      color: "#FFDDC5",
      textColor: "#e67e22",
      description: "The community begins to see their challenges differently through the thought leader's distinctive lens. Ideas reshape how they understand their field.",
      perception: "This changes how I think about my work",
      behavior: "Reconceptualizing problems and solutions",
      indicators: [
        "\"Aha moment\" testimonials",
        "Deeper questions about principles and frameworks",
        "Sharing insights with peers and colleagues",
        "Growing interest in foundational concepts"
      ]
    },
    {
      id: 3,
      title: "Identity & Belonging",
      subtitle: "Community Formation",
      color: "#FFCBA8",
      textColor: "#d35400",
      description: "The thought leader's ideas become incorporated into how community members see themselves. They identify with the approach and seek others who share this identity.",
      perception: "I am someone who believes in this approach",
      behavior: "Connecting with like-minded practitioners",
      indicators: [
        "Use of 'we' language when discussing the approach",
        "Spontaneous community formation",
        "Defending the methodology to outsiders",
        "Desire to connect with peers using same approach"
      ]
    },
    {
      id: 4,
      title: "Social Recognition",
      subtitle: "Professional Identity",
      color: "#FFB592",
      textColor: "#c0392b",
      description: "The thought leader's frameworks become socially recognized markers of expertise. Adopting these ideas signals credibility and professional belonging.",
      perception: "This methodology is recognized in our field",
      behavior: "Professional identification through methodology",
      indicators: [
        "Methodology appears in job descriptions",
        "Credentials based on the approach have market value",
        "Industry publications reference the framework",
        "Practitioners list expertise in their professional profiles"
      ]
    },
    {
      id: 5,
      title: "Collective Transformation",
      subtitle: "Cultural Change",
      color: "#FF9E7C",
      textColor: "#a93226",
      description: "The ideas transcend individual impact and begin reshaping collective institutions, systems, and cultural narratives within and beyond the original domain.",
      perception: "This has changed how we approach this domain",
      behavior: "Systemic implementation and evolution",
      indicators: [
        "Educational curricula incorporate the approach",
        "Policy and organizational systems reflect the ideas",
        "Terminology enters common language",
        "Adjacent fields begin adopting core principles"
      ]
    }
  ];

  // Inflection point data
  const inflectionPoints: InflectionPoint[] = [
    {
      id: 1,
      position: "Between Phase 2 and 3",
      title: "The Personal Relevance Threshold",
      description: "This is where community members shift from seeing the thought leader's ideas as useful tools to seeing them as part of their identity. The relationship transforms from transactional to meaningful. Followers no longer just apply the ideas—they embody them and identify with them.",
      implications: "Thought leaders must facilitate connection among followers rather than simply delivering more content. The community needs spaces to explore identity and belonging with others on the same path."
    },
    {
      id: 2,
      position: "Within Phase 3",
      title: "The Following-to-Movement Transition",
      description: "The community evolves from being centralized around the thought leader to becoming a decentralized network with its own momentum. The identity shifts from 'followers of [Person]' to '[Approach] practitioners.'",
      implications: "Thought leaders must shift from being the primary source of value to being the architect of a value-generating ecosystem. This requires releasing control while maintaining integrity of the core approach."
    },
    {
      id: 3,
      position: "Between Phase 4 and 5",
      title: "The Cultural Integration Point",
      description: "The methodology moves beyond conscious adoption to becoming 'the way things are done' in a field or domain. It shifts from being a distinct approach to being integrated into standard practice.",
      implications: "Thought leaders must focus on institutional embedding rather than individual adoption. Success means the approach becomes so normalized it's no longer seen as a specific methodology but as 'common sense.'"
    }
  ];

  return (
    <>
      <PageTitle>Community Lifecycle</PageTitle>
      <div class={styles.container}>
        <div class={styles.header}>
          <h1 class={styles.title}>The Community Transformation Journey</h1>
          <p class={styles.subtitle}>How audiences evolve from problem-seeking consumers to culture-shaping co-creators</p>
        </div>

        <div class={styles.introduction}>
          <p>The thought leader's journey isn't just about their personal evolution—it's equally about how their community transforms around them. This framework maps the five distinct phases of community development, from practical problem-solving to cultural transformation, with critical inflection points that signal profound shifts in the community's relationship with the thought leader and their ideas.</p>
        </div>

        <div class={styles.timelineContainer}>
          <div class={styles.timeline}></div>
          <div class={styles.phases}>
            <For each={phases}>
              {(phase) => (
                <div class={styles.phase} style={{ "background-color": phase.color }}>
                  <h3 class={styles.phaseTitle} style={{ "color": phase.textColor }}>Phase {phase.id}: {phase.title}</h3>
                  <h4 class={styles.phaseSubtitle} style={{ "color": phase.textColor }}>{phase.subtitle}</h4>
                  <p class={styles.description}>{phase.description}</p>
                  
                  <div class={styles.indicators}>
                    <p class={styles.indicatorTitle} style={{ "color": phase.textColor }}>Community Perception:</p>
                    <p class={styles.description}>"{phase.perception}"</p>
                    
                    <p class={styles.indicatorTitle} style={{ "color": phase.textColor }}>Primary Behavior:</p>
                    <p class={styles.description}>{phase.behavior}</p>
                    
                    <p class={styles.indicatorTitle} style={{ "color": phase.textColor }}>Key Indicators:</p>
                    <ul class={styles.indicatorList}>
                      <For each={phase.indicators}>
                        {(indicator) => (
                          <li>{indicator}</li>
                        )}
                      </For>
                    </ul>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>

        <div class={styles.inflectionPointsContainer}>
          <h2 class={styles.inflectionTitle}>Critical Community Inflection Points</h2>
          
          <For each={inflectionPoints}>
            {(point) => (
              <div class={styles.inflection}>
                <div class={styles.inflectionHeader}>
                  <span class={styles.marker}></span>
                  <span>{point.title} ({point.position})</span>
                </div>
                <p class={styles.description}>{point.description}</p>
                <p class={`${styles.description} ${styles.implications}`}>Implications for Thought Leaders:</p>
                <p class={styles.description}>{point.implications}</p>
              </div>
            )}
          </For>
        </div>

        <div class={styles.footnote}>
          <p>Note: This community transformation framework operates in parallel with the thought leader's personal development stages, brand recognition levels, and organizational structure evolution. These dimensions interlock to create the complete Thought Leader Journey of Influence.</p>
        </div>
      </div>
    </>
  );
};

export default CommunityLifecycle;