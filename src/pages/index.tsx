import { GetStaticProps } from 'next';
import { Calendar, User } from 'phosphor-react';
import Header from '../components/Header';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home(): JSX.Element {
  return (
    <>
      <Header />

      <main className={styles.homeContainer}>
        <div className={styles.homeContent}>
          <a href="#">
            <h1>Como utilizar Hooks</h1>
            <small>Pensando em sincronização em vez de ciclos de vida.</small>
            <p>
              <span>
                <Calendar />
              </span>
              15 Mar 2021
              <span>
                <User />
              </span>
              Joseph Oliveira
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const postsResponse = await prismic.getByType(
    [prismic.predicates.at('document.type', 'Post')],
    {
      fetch: ['Post.Title'],
      pageSize: 100,
    }
  );

  return {
    props: posts,
  };
};
