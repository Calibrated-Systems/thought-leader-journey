import { createSignal, For, Show } from 'solid-js';
import styles from './embodied-influence.module.css';
import PageTitle from '../components/page-title';

const EmbodiedInfluenceMetaLifecycle = () => {
  const [selectedPhase, setSelectedPhase] = createSignal<number | null>(null);
  const [showPersona, setShowPersona] = createSignal<boolean>(false);

  // Define the phases with their data
  const phases = [
    {
      id: 1,
      name: "AWAKENING INSIGHT",
      subtitle: "The experiential emergence of distinctive perspective",
      color: "#FFF2CC",
      darkColor: "#F1C232",
      textColor: "#5B4421",
      iconName: "✨",
      persona: "Maya the Pattern Recognizer",
      livedExperience: [
        "Initial resonance with ideas that feel misaligned with conventional wisdom",
        "Intuitive recognition of patterns others don't see",
        "Moments of insight that feel personally significant",
        "Tentative expression of these insights in safe environments"
      ],
      valueExpression: [
        "Authenticity in questioning established frameworks",
        "Courage in exploring uncharted conceptual territory",
        "Curiosity that drives deeper investigation"
      ],
      communityExperience: [
        "Finding kindred thinkers with similar questions",
        "Early validation from others experiencing similar disconnects",
        "Shared excitement about alternative possibilities"
      ],
      threshold: "From private insights to public expression",
      personaStory: "Maya spent a decade in corporate marketing, increasingly frustrated with how traditional approaches weren't addressing what she intuitively sensed about changing consumer behavior. While everyone focused on demographic data, she kept noticing patterns in how values influenced purchasing decisions across demographic boundaries.\n\nCurrently, Maya finds herself drawing connections in her journal that don't fit existing marketing frameworks. She experiences moments of excitement when client data confirms her intuitions, followed by frustration when trying to explain these insights to colleagues using conventional language. She's started a small blog where she tentatively shares some of her observations, finding unexpected resonance with readers from diverse industries.\n\nMaya embodies authenticity by acknowledging when traditional frameworks don't match her observations, rather than forcing data to fit existing models. Her curiosity drives her to collect unconventional examples that support her emerging perspective, even when they don't immediately apply to her paid work.\n\nHer community is still nascent—a few like-minded professionals who comment on her blog, a mentor who encourages her \"interesting perspective,\" and a small LinkedIn group where she tests her ideas. These connections provide crucial validation that she's not simply misunderstanding established principles.\n\nMaya struggles with impostor syndrome, questioning whether her insights are truly original or valuable. She worries about professional credibility if she pushes her alternative framework too publicly. Yet she feels increasingly compelled to develop her ideas further.\n\nShe's beginning to experiment with language and frameworks to articulate her observations more clearly, collecting examples and testing metaphors that might help others grasp what she sees—the first steps toward crossing the threshold to Distinctive Articulation."
    },
    {
      id: 2,
      name: "DISTINCTIVE ARTICULATION",
      subtitle: "The experiential process of giving form to formless insight",
      color: "#D9EAD3",
      darkColor: "#6AA84F",
      textColor: "#274E13",
      iconName: "🔍",
      persona: "Eliot the Framework Builder",
      livedExperience: [
        "Struggling to find language for intuitive understanding",
        "Excitement in creating frameworks that clarify thinking",
        "Relief when concepts previously difficult to express gain structure",
        "Growing confidence as articulation improves"
      ],
      valueExpression: [
        "Clarity in distilling complex insights",
        "Integrity in representing nuance accurately",
        "Creativity in developing original frameworks"
      ],
      communityExperience: [
        "Witnessing others understand and build upon your articulation",
        "Dialogue that refines and strengthens conceptual models",
        "Emerging vocabulary that facilitates deeper connection"
      ],
      threshold: "From articulation to application",
      personaStory: "After years of working as a management consultant, Eliot became disenchanted with traditional leadership models that seemed disconnected from the emerging realities he witnessed in organizations. Through his work with dozens of companies, he recognized patterns of success that contradicted established wisdom, particularly around how trust operates in distributed teams.\n\nEliot now spends evenings refining his \"Trust Geometry\" framework—a novel approach that visualizes how trust forms and breaks along multiple dimensions in modern organizations. He experiences profound satisfaction when a concept that existed as a foggy intuition suddenly crystallizes into a clear model. Recently, a presentation of his early framework at a small industry meetup generated unexpected enthusiasm, with attendees asking for materials they could share with their teams.\n\nEliot embodies creativity by developing original diagrams and metaphors that make his insights accessible. His commitment to integrity shows in his meticulous documentation of case examples, ensuring his models reflect real-world complexity rather than oversimplified theories.\n\nHis community is evolving from passive listeners to engaged thinkers. A core group of professionals regularly exchanges emails with him, testing his concepts in their environments and offering refinements. Several have begun adopting his terminology in their own presentations, and one university professor has invited him to guest lecture on his emerging framework.\n\nEliot struggles with the challenge of balancing comprehensiveness and accessibility. Making his framework thorough enough to handle edge cases often makes it too complex for newcomers to grasp quickly. He also faces skepticism from established thought leaders who question his credentials to reimagine leadership principles.\n\nHe's beginning to shift from pure conceptualization to practical application, creating assessment tools and exercises that translate his framework into actionable practices—preparing for the threshold to Embodied Practice. He sometimes wonders if his ideas will work as well in practice as they do in theory, yet feels compelled to test them in increasingly real-world scenarios."
    },
    {
      id: 3,
      name: "EMBODIED PRACTICE",
      subtitle: "The experiential integration of thought into lived application",
      color: "#D0E0E3",
      darkColor: "#45818E",
      textColor: "#0C343D",
      iconName: "🧪",
      persona: "Nadia the Living Laboratory",
      livedExperience: [
        "Testing concepts against reality and refining them",
        "Deepening understanding through implementation",
        "Discovering unexpected implications through application",
        "Experiencing personal transformation through living the values"
      ],
      valueExpression: [
        "Commitment to walking the talk",
        "Adaptability in refining approaches",
        "Resilience in facing implementation challenges"
      ],
      communityExperience: [
        "Sharing practical application stories and lessons",
        "Collective problem-solving around implementation barriers",
        "Mutual support in maintaining practice during challenges"
      ],
      threshold: "From personal practice to guided facilitation",
      personaStory: "Nadia developed a novel approach to organizational conflict resolution after her experiences as a mediator revealed limitations in traditional methods. Her framework, \"Resonant Resolution,\" emerged from her observations of how emotional frequency patterns influenced conflict outcomes. While the conceptual model attracted interest, Nadia recognized that its true value would only emerge through application.\n\nCurrently, Nadia runs a consultancy where she exclusively applies her Resonant Resolution methodology. She treats each client engagement as a living laboratory, meticulously documenting how the approach works in various contexts and refining the methodology based on outcomes. Recently, she made a difficult decision to turn down a high-paying client whose values conflicted with the core principles of her approach, choosing integrity over immediate profit.\n\nNadia embodies commitment by integrating her framework into her daily operations and personal interactions. Her adaptability shows in how she's created specialized variations of her core tools for different industries, and her resilience appears when she openly discusses how initial implementation failures led to critical improvements in her methodology.\n\nHer community now consists of clients-turned-advocates who experienced transformative results, practitioners she's trained in early versions of her method, and a growing network of professionals who apply elements of her approach in their own work. Monthly practice sessions bring this community together to work through real challenges using her framework.\n\nNadia struggles with the tension between maintaining methodological purity and allowing for necessary adaptations in different contexts. She sometimes feels overwhelmed by requests for training and guidance that exceed her capacity, and worries about practitioners misapplying her methods without sufficient understanding of the underlying principles.\n\nShe's beginning to document her methodology more systematically, creating training materials and considering certification requirements—early steps toward crossing the threshold to Facilitated Transformation. Though hesitant about shifting from direct practice to teaching others, she recognizes that her approach will only achieve its potential impact through multiplication."
    },
    {
      id: 4,
      name: "FACILITATED TRANSFORMATION",
      subtitle: "The experiential process of enabling others' growth through your approach",
      color: "#CFE2F3",
      darkColor: "#3D85C6",
      textColor: "#0B5394",
      iconName: "🧭",
      persona: "Marcus the Guide",
      livedExperience: [
        "Witnessing others transform through your guidance",
        "Experiencing the joy of effective facilitation",
        "Navigating the responsibility of guiding others' development",
        "Learning to balance structure with emergence"
      ],
      valueExpression: [
        "Empathy in understanding others' journeys",
        "Generosity in sharing knowledge and tools",
        "Discernment in adapting approach to individuals"
      ],
      communityExperience: [
        "From audience to engaged practitioners",
        "Peer-to-peer learning and support",
        "Early emergence of community identifiers and language"
      ],
      threshold: "From guided facilitation to community orchestration",
      personaStory: "Marcus developed an innovative leadership development approach that integrates contemplative practices with neurobiological insights, challenging traditional competency-based models. After years of refining his \"Conscious Leadership\" framework through personal application and client work, he reached a turning point when demand for his approach outpaced his capacity for one-on-one implementation.\n\nNow, Marcus leads immersive workshops and year-long training programs where he guides cohorts of leaders through his methodology. He experiences profound fulfillment witnessing transformations in participants, particularly when they achieve breakthroughs his guidance facilitated but didn't directly create. Recently, he redesigned his core program after noticing how different learning styles responded to various elements of his curriculum.\n\nMarcus embodies empathy through his careful attunement to each participant's developmental edge, pushing just enough to catalyze growth without overwhelming them. His generosity shows in how freely he shares his intellectual property with participants, and his discernment appears in how he adapts his teaching approach based on individual and group needs.\n\nHis community has evolved from individual clients to a network of practitioners at various stages of integrating his methodology. Former participants form accountability partnerships and regional meetups, and an active online forum enables ongoing learning conversations. Many participants report not just implementing his techniques but fundamentally changing their leadership identity through his program.\n\nMarcus struggles with the responsibility of holding space for deep personal transformation in group settings, sometimes questioning whether his facilitation adequately supports the vulnerable work participants undertake. He also faces challenges in scaling his approach while maintaining the depth and nuance that make it effective.\n\nHe's beginning to identify and mentor particularly skilled graduates who demonstrate the capacity to facilitate his work with their own communities—early preparation for crossing the threshold to Community Orchestration. While initially uncomfortable delegating aspects of his approach to others, he's coming to recognize that the full impact of his work depends on empowering others to become facilitators rather than remaining the sole source of guidance."
    },
    {
      id: 5,
      name: "COMMUNITY ORCHESTRATION",
      subtitle: "The experiential creation of environments for collective value expression",
      color: "#D9D2E9",
      darkColor: "#8E7CC3",
      textColor: "#351C75",
      iconName: "🌐",
      persona: "Amara the Ecosystem Cultivator",
      livedExperience: [
        "Shifting from direct teaching to environment creation",
        "Balancing leadership with enabling others' leadership",
        "Experiencing the dynamics of community evolution",
        "Navigating how to maintain integrity while enabling diversity"
      ],
      valueExpression: [
        "Trust in the community's capacity",
        "Openness to emergent expressions",
        "Stewardship of core principles"
      ],
      communityExperience: [
        "Self-organizing around shared values",
        "Co-creation of resources and approaches",
        "Community identity formation and celebration",
        "Multiple paths of engagement and contribution"
      ],
      threshold: "From community to movement",
      personaStory: "Amara developed a revolutionary approach to sustainable urban design that integrated community participation, ecological principles, and economic viability. After successfully facilitating numerous city projects and training hundreds of practitioners, she realized that the full potential of her \"Living Cities\" methodology required an interconnected ecosystem of diverse experts and community leaders working in concert.\n\nCurrently, Amara leads a global nonprofit that serves as a hub for her methodology rather than as a direct service provider. She curates resources, connects practitioners, and maintains the integrity of the approach while intentionally stepping back from controlling its implementation. Recently, she launched a digital platform where certified practitioners can collaborate across specialties and geographies, creating solutions she could never have developed alone.\n\nAmara embodies trust by delegating significant authority to regional leaders who adapt her methodology to local contexts. Her openness shows in how she embraces innovations that extend her original framework, even when they challenge her initial assumptions. Her stewardship manifests in how she guides the community back to core principles when adaptations risk undermining foundational values.\n\nHer community has evolved into a self-organizing network with multiple centers of expertise and leadership. Annual convergences bring together practitioners from various disciplines to cross-pollinate ideas. Specialized working groups develop applications for different contexts, from informal settlements to corporate campuses. The community has developed its own rituals, recognition systems, and communication patterns that reflect their shared values.\n\nAmara struggles with balancing quality control and grassroots innovation. She sometimes questions whether her reduced direct involvement risks diluting the methodology's impact, yet recognizes that trying to maintain central control would limit its evolution. She also navigates the community politics that inevitably emerge as different leaders interpret and prioritize aspects of the approach differently.\n\nShe's beginning to focus on creating governance structures that can outlast her direct involvement and mechanisms for resolving intellectual property questions as the methodology spreads—preparation for crossing the threshold to Movement Cultivation. Though sometimes nostalgic for the days of direct implementation, she finds deeper fulfillment in witnessing the multiplication of impact through the community she's orchestrated."
    },
    {
      id: 6,
      name: "MOVEMENT CULTIVATION",
      subtitle: "The experiential expansion of influence beyond direct reach",
      color: "#F4CCCC",
      darkColor: "#E06666",
      textColor: "#990000",
      iconName: "🔄",
      persona: "Raymond the Movement Architect",
      livedExperience: [
        "Recognizing your approach taking on life beyond your direct influence",
        "Navigating the tension between control and healthy evolution",
        "Finding new roles as founder/originator as movement grows",
        "Wrestling with misinterpretations while celebrating innovations"
      ],
      valueExpression: [
        "Humility in recognizing the collective's wisdom",
        "Generosity in releasing ownership",
        "Discernment in guiding without controlling"
      ],
      communityExperience: [
        "Distributed leadership and innovation",
        "Cross-pollination with adjacent communities",
        "Multiple expressions of core values in diverse contexts",
        "Intergenerational transmission of principles"
      ],
      threshold: "From movement to cultural integration",
      personaStory: "Raymond's work began twenty years ago with a radical approach to education that integrated contemplative practice, systems thinking, and project-based learning. After developing a robust community of practice around his \"Integral Learning\" methodology, he witnessed something unexpected: organizations, government agencies, and community groups began adopting and adapting his principles far beyond the education sector.\n\nNow, Raymond divides his time between guiding the foundation that stewards his original methodology and engaging with the diverse movements that have grown from it. He provides wisdom and historical context while deliberately creating space for next-generation leaders to direct emerging applications. Recently, he navigated a challenging situation when two major branches of the movement developed seemingly contradictory approaches, helping them recognize complementarity rather than competition.\n\nRaymond embodies humility by publicly acknowledging when newer leaders develop innovations that improve upon his original framework. His generosity shows in how freely he connects people and resources across the movement without seeking credit or control. His discernment appears in how he distinguishes between helpful evolutions and concerning distortions of core principles.\n\nHis original community has transformed into an ecosystem of interconnected initiatives across multiple sectors. Regional hubs operate with significant autonomy while remaining connected to the broader movement. Different organizations have developed specialized applications for healthcare, business, government, and community development, each with distinct leadership and support structures but united by shared foundational principles.\n\nRaymond struggles with letting go when he believes initiatives are missing crucial elements of the approach, balancing his wisdom from experience with respect for others' leadership. He sometimes feels the movement is becoming too diffuse, yet recognizes that this diversity creates resilience and adaptive capacity that a more centralized approach would lack.\n\nHe's increasingly focused on documenting the foundational wisdom, values, and evolutionary history of the movement to ensure its essence persists beyond specific applications—preparing for the threshold to Cultural Integration. Though he occasionally misses the clarity of his early work, he finds profound meaning in witnessing how his initial insights have catalyzed transformations he never could have created alone."
    },
    {
      id: 7,
      name: "CULTURAL INTEGRATION",
      subtitle: "The experiential transformation of broader fields through value expression",
      color: "#EAD1DC",
      darkColor: "#C27BA0",
      textColor: "#85200C",
      iconName: "🌍",
      persona: "Elena the Legacy Wisdom Keeper",
      livedExperience: [
        "Witnessing your terminology enter broader discourse",
        "Seeing principles integrated into systems and institutions",
        "Navigating the simplification that comes with broader adoption",
        "Finding meaningful roles in a landscape you've helped transform"
      ],
      valueExpression: [
        "Legacy-mindedness in ensuring sustainability",
        "Wisdom in distinguishing essence from form",
        "Grace in witnessing evolution beyond original vision"
      ],
      communityExperience: [
        "Transformation of professional standards and practices",
        "Integration into educational frameworks",
        "Emergence of derivative and complementary approaches",
        "Cultural markers and references that transcend original community"
      ],
      threshold: "",
      personaStory: "Thirty years ago, Elena pioneered a revolutionary approach to conflict transformation that integrated indigenous wisdom traditions with modern systems thinking. What began as a controversial alternative to conventional negotiation methods evolved into a global community, then a diverse movement spanning disciplines from diplomacy to business to family therapy. Today, elements of her \"Harmonic Resolution\" approach have become so deeply integrated into these fields that younger practitioners often don't recognize their revolutionary origins.\n\nNow in her seventies, Elena dedicates herself to preserving the essence of her approach while celebrating its evolution beyond her original vision. She serves as an elder guide rather than an active leader, writing books that distill core principles, mentoring emerging thought leaders across various disciplines, and occasionally offering perspective when fundamental misunderstandings arise. Recently, she collaborated with a major university to establish an interdisciplinary research center that studies the long-term impacts of methodologies derived from her work.\n\nElena embodies legacy-mindedness by focusing on the transmission of wisdom rather than preservation of specific forms. Her wisdom appears in how she helps practitioners distinguish between essential principles and contextual applications. Her grace shows in how she celebrates when others receive recognition for innovations built upon her foundational work.\n\nThe community that once revolved around her has transformed into a cultural current that flows through multiple domains. Her terminology has entered mainstream vocabulary, with concepts like \"resonant listening\" and \"conflict harmony\" appearing in corporate training manuals, university curricula, and political discourse. Various professions have established standards and certifications based on elements of her approach, each adapted to their specific contexts while maintaining core principles.\n\nElena sometimes struggles with seeing simplified or commercialized versions of her work that miss its deeper dimensions, yet recognizes that this simplification is part of how new ideas become culturally integrated. She occasionally feels invisible despite her profound influence, particularly when newer generations build upon her work without understanding its origins.\n\nHer focus now centers on creating arcs of connection between the original wisdom that inspired her and the future expressions she won't live to see—cultivating an intergenerational transmission that preserves the living essence of her contribution while allowing it to continue evolving. Though she sometimes feels melancholy about the inevitable distortions that come with widespread adoption, she finds profound peace in witnessing how her life's work has catalyzed transformations far beyond what she could have accomplished directly.\n\nIn Elena, we see the full embodiment of cultural integration—where personal insight has undergone the full journey to become an embedded element of how humanity approaches challenges and opportunities. Her experience illustrates how true thought leadership ultimately transcends the leader to become part of our collective inheritance, continuing to evolve long after its originator has stepped back from active direction."
    }
  ];

  const Section = (props: any) => (
    <div class={styles.section}>
      <h3 class={styles.sectionTitle}>{props.title}</h3>
      <ul class={styles.sectionList}>
        <For each={props.items}>
          {(item) => (
            <li class={styles.sectionItem}>{item}</li>
          )}
        </For>
      </ul>
    </div>
  );

  const PersonaSection = (props: any) => {
    return (
      <div class={styles.personaContainer}>
        <div class={styles.personaHeader}>
          <div 
            class={styles.personaIcon}
            style={{ "background-color": props.phase.darkColor, "color": 'white' }}
          >
            {props.phase.iconName}
          </div>
          <h3 class={styles.personaTitle}>{props.phase.persona}</h3>
        </div>
        <div class={styles.personaContent}>
          <For each={props.phase.personaStory.split('\n\n')}>
            {(paragraph) => (
              <p class={styles.personaParagraph}>{paragraph}</p>
            )}
          </For>
        </div>
      </div>
    );
  };

  const PhaseDetail = (props: any) => {
    if (!props.phase) return null;
    
    return (
      <div class={styles.phaseDetailContainer}>
        <div class={styles.phaseCard} style={{ "background-color": props.phase.color }}>
          <div class={styles.phaseCardHeader}>
            <div class={styles.phaseCardContent}>
              <h2 class={styles.phaseTitle} style={{ "color": props.phase.textColor }}>
                {props.phase.id}. {props.phase.name}
              </h2>
              <p class={styles.phaseSubtitle} style={{ "color": props.phase.textColor }}>
                {props.phase.subtitle}
              </p>
              
              <Section title="Lived Experience" items={props.phase.livedExperience} />
              <Section title="Value Expression" items={props.phase.valueExpression} />
              <Section title="Community Experience" items={props.phase.communityExperience} />
              
              <Show when={props.phase.threshold}>
                <div class={styles.thresholdContainer}>
                  <h3 class={styles.thresholdTitle}>Transformation Threshold:</h3>
                  <p class={styles.thresholdText}>{props.phase.threshold}</p>
                </div>
              </Show>
            </div>
            <div class={styles.phaseIcon}>{props.phase.iconName}</div>
          </div>
        </div>
        
        <div class={styles.personaButtonContainer}>
          <button
            onClick={() => setShowPersona(!showPersona())}
            class={styles.personaButton}
          >
            {showPersona() ? "Hide Persona Story" : "Show Persona Story"}
          </button>
        </div>
        
        <Show when={showPersona()}>
          <PersonaSection phase={props.phase} />
        </Show>
      </div>
    );
  };

  return (
    <>
      <PageTitle>Embodied Influence Meta-Lifecycle</PageTitle>
      <div class={styles.container}>
        <header class={styles.header}>
          <h1 class={styles.title}>The Embodied Influence Meta-Lifecycle</h1>
          <p class={styles.subtitle}>
            An experiential framework mapping the journey from initial insight to cultural integration,
            focused on the lived experience of embodying and expressing thought leadership values.
          </p>
        </header>

        {/* Horizontal Journey Map */}
        <div class={styles.journeyMapContainer}>
          <div class={styles.journeyLine}></div>
          
          <div class={styles.phasesContainer}>
            <For each={phases}>
              {(phase) => (
                <div 
                  class={`${styles.phaseCircleContainer} ${selectedPhase() === phase.id ? styles.selectedPhase : ''}`}
                  onClick={() => setSelectedPhase(selectedPhase() === phase.id ? null : phase.id)}
                >
                  <div 
                    class={styles.phaseCircle}
                    style={{ "background-color": phase.color }}
                  >
                    {phase.iconName}
                  </div>
                  <div class={styles.phaseNumber} style={{ "color": phase.darkColor }}>{phase.id}</div>
                  <div class={styles.phaseName}>{phase.name}</div>
                </div>
              )}
            </For>
          </div>

          {/* Threshold labels */}
          <div class={styles.thresholdsContainer}>
            <For each={phases}>
              {(phase) => (
                <Show when={phase.id < 7}>
                  <div class={styles.thresholdLabel}>
                    {phase.threshold}
                  </div>
                </Show>
              )}
            </For>
          </div>
        </div>

        {/* Selected Phase Detail */}
        <Show when={selectedPhase()}>
          <PhaseDetail phase={phases.find(p => p.id === selectedPhase())} />
        </Show>

        <Show when={!selectedPhase()}>
          <div class={styles.noSelectionContainer}>
            <div class={styles.noSelectionIcon}>👆</div>
            <p class={styles.noSelectionText}>Click on any phase above to explore its details and persona story</p>
          </div>
        </Show>
        
        <div class={styles.implementationContainer}>
          <h2 class={styles.implementationTitle}>Implementation Framework</h2>
          <p class={styles.implementationDesc}>For each phase, the meta-lifecycle provides:</p>
          <div class={styles.implementationGrid}>
            <For each={[
              { title: "Experience Maps", desc: "Guides to the subjective experience of each phase" },
              { title: "Value Expression Frameworks", desc: "Tools for authentic embodiment of values at each stage" },
              { title: "Community Architectures", desc: "Structures that support collective value expression" },
              { title: "Transformation Practices", desc: "Rituals and processes for navigating thresholds" },
              { title: "Expression Indicators", desc: "Signs that values are being authentically lived" }
            ]}>
              {(item) => (
                <div class={styles.implementationCard}>
                  <h3 class={styles.implementationCardTitle}>{item.title}</h3>
                  <p class={styles.implementationCardDesc}>{item.desc}</p>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmbodiedInfluenceMetaLifecycle;