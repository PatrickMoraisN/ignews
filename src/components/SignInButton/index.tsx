import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';
import { signIn, signOut, useSession } from 'next-auth/client';
export function SignInButton() {
  const [session] = useSession();
  console.log(session)
  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <FaGithub color="#04d361"/>
      <img src={`${session.user.image}`} alt="" />
      {session.user.name}
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