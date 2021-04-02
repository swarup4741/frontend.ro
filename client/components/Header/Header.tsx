import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLink } from '@fortawesome/free-solid-svg-icons';

import { connect, ConnectedProps } from 'react-redux';

import AccountTooltip from './AccountTooltip/AccountTooltip';
import Button from '~/components/Button';
import { RootState } from '~/redux/root.reducer';

import styles from './Header.module.scss';
import AsideMenu from '../layout/AsideMenu/AsideMenu';
import NavLinks from '../NavLinks/NavLinks';

interface Props {
  href?: string;
  demoPage?: boolean;
  withNavMenu?: boolean;
  onMenuClick?: () => void;
}

function Header({
  href = '/',
  demoPage,
  onMenuClick,
  isLoggedIn,
  withNavMenu = false,
}: ConnectedProps<typeof connector> & Props) {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  return (
    <>

      <header className={styles.header}>
        <div className="d-flex justify-content-between w-100 align-items-center h-100">
          {onMenuClick && (
            <Button
              onClick={onMenuClick}
              className={`header__menu-btn ${styles.menu}`}
            >
              <FontAwesomeIcon icon={faBars} />
            </Button>
          )}
          <Link href={href}>
            <a className={styles.logo}>
              <img
                srcSet="/logo.png 500w, /logo-square--S.jpg 165w"
                sizes="(max-width: 600px) 165px, 500px"
                src="/logo.png"
                alt="FrontEnd.ro logo"
              />
            </a>
          </Link>
          {demoPage && (
            <p className={`${styles['demo-label']} text-white mx-5 text-bold`}>
              DEMO
            </p>
          )}
        </div>
        <div className="d-flex align-items-center">
          {isLoggedIn ? <AccountTooltip /> : null}
          {withNavMenu && (
            <Button className={styles['nav-menu']} variant="light" onClick={() => setIsNavMenuOpen(true)}>
              Nav
              <FontAwesomeIcon icon={faLink} />
            </Button>
          )}
        </div>
      </header>
      {
        withNavMenu && (
        <AsideMenu
          hideScrollOnBody
          title="FrontEnd.ro"
          isOpen={isNavMenuOpen}
          className={styles['aside-menu']}
          close={() => setIsNavMenuOpen(false)}
        >
          <div className={styles['nav-wrapper']}>
            <NavLinks />
          </div>
        </AsideMenu>
        )
      }

    </>
  );
}

function mapStateToProps(state: RootState) {
  return {
    isLoggedIn: !!state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(Header);
