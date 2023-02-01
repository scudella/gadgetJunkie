import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.svg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            recusandae soluta perspiciatis numquam sequi repellendus saepe
            distinctio excepturi dolores quo pariatur sit quas, quidem
            consequatur laborum quae eaque modi assumenda dolor. Obcaecati culpa
            quae atque eaque officiis! Dolorum ullam dignissimos obcaecati natus
            libero, porro repellendus dicta, eius doloribus deserunt
            perspiciatis?
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
