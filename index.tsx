import styles from '../styles/home.module.scss';
import cl from 'classnames';
import {Logo} from '../components/Logo';
import {SocialNetworks} from "../components/SocialNetworks";
import {Button} from "../components/Button";
import {Navigation} from "../components/Navigation";
import {Title} from "../components/Title";


export default function Home() {
    return (
        <div>
            <section className={cl(styles.section, styles.sectionMain)}>
                <header
                    className={styles.header}>
                    <Logo/>
                    <SocialNetworks/>
                    <Button
                        size='Medium'
                        onClick={() => {
                        }}
                    >
                        Whitepaper
                    </Button>
                </header>

                {/*<Navigation />*/}
                <div>
                    <Title size='Medium'>
                        FROM DUSK TO&nbsp;DAWN
                    </Title>
                    <ul className={styles.buttonList}>
                        <li>
                            <Button
                                size='Small'
                                onClick={() => {
                            }}>
                                Mint

                            </Button>
                        </li>
                        <li>
                            <Button
                                size='Medium'
                                onClick={() => {
                            }}>
                                Connect Wallet
                            </Button>
                        </li>
                    </ul>
                </div>
            </section>

        </div>
    )
}
