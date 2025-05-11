import { A } from '@solidjs/router';
import { Show } from 'solid-js';
import styles from './navigation.module.css';

interface NavigationProps {
  isExpanded: boolean;
}

const Navigation = (props: NavigationProps) => {
  return (
    <nav class={`${styles.nav} ${props.isExpanded ? styles.expanded : styles.collapsed}`}>
      <ul class={styles.navMenu}>
        <li class={styles.navItem}>
          <A href="/" class={styles.navLink} activeClass={styles.active} end={true}>
            <span class={styles.icon}>🏠</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Home</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/community" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>👥</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Community Lifecycle</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/development" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>🚀</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Developmental Journey</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/recognition" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>🏆</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Brand Recognition</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/inflection-points" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>📊</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Critical Inflection Points</span>
            </Show>
          </A>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
