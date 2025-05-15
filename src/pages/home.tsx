import { A } from '@solidjs/router';
import styles from './home.module.css';

const Home = () => {
  return (
    <div class={styles.container}>
      <h1 class={styles.title}>Thought Leader Journey of Influence</h1>
      <p class={styles.subtitle}>A comprehensive framework for mapping thought leadership evolution</p>
      
      <p class={styles.intro}>
        This framework maps the complete evolution of thought leadership from initial ideas to lasting legacy.
        It integrates four critical dimensions: the thought leader's personal development, brand recognition lifecycle,
        community transformation, and organizational structure evolution.
      </p>
      
      <div class={styles.cardContainer}>
        <A href="/embodied-influence" class={styles.card}>
          <h2 class={styles.cardTitle} style={{"color": "#4F46E5"}}>Embodied Influence</h2>
          <p>
            An experiential framework mapping the journey from insight to cultural integration, focused on the lived experience of embodying thought leadership values.
          </p>
        </A>
        <A href="/community" class={styles.card}>
          <h2 class={styles.cardTitle} style={{"color": "#d35400"}}>Community Lifecycle</h2>
          <p>
            How audiences evolve from problem-seeking consumers to culture-shaping co-creators across five phases of engagement.
          </p>
        </A>
        
        <A href="/development" class={styles.card}>
          <h2 class={styles.cardTitle} style={{"color": "#e67e22"}}>Developmental Journey</h2>
          <p>
            The personal evolution of a thought leader through ten distinct stages from Explorer to Navigational Waypoint.
          </p>
        </A>
        
        <A href="/recognition" class={styles.card}>
          <h2 class={styles.cardTitle} style={{"color": "#d35400"}}>Brand Recognition</h2>
          <p>
            How market perception progresses from unknown to cultural element with specific signals at each level.
          </p>
        </A>
        
        <A href="/outcomes" class={styles.card}>
          <h2 class={styles.cardTitle} style={{"color": "#3C87D7"}}>Traction-Based Outcomes</h2>
          <p>
            The specific traction-based outcomes that signal progression through each phase of the Thought Leader Journey.
          </p>
        </A>
        
        <A href="/inflection-points" class={styles.card}>
          <h2 class={styles.cardTitle} style={{"color": "#673AB7"}}>Inflection Points</h2>
          <p>
            Critical thresholds that fundamentally alter how thought leaders operate, scale, and create impact.
          </p>
        </A>
      </div>
    </div>
  );
};

export default Home;