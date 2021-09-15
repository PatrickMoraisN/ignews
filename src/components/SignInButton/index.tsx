import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';
import { signIn, useSession } from 'next-auth/client';
export function SignInButton() {
  const [session] = useSession();

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04d361"/>
      Patrick Morais
      <FiX color="#737380"/>
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417"/>
      Sign in with GitHub
    </button>
  );
}