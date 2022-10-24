import styled from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styled.header}>
      <div className={styled.headerContent}>
        <img src="./images/Logo-Header.svg" alt="logo" />
      </div>
    </header>
  );
}
