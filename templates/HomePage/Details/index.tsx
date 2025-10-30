import cn from "classnames";
import Image from "@/components/Image";
import Item from "./Item";
import Illustration1 from "./Illustration1";
import Illustration2 from "./Illustration2";
import Illustration3 from "./Illustration3";
import styles from "./Details.module.sass";

type DetailsProps = {};

const Details = ({}: DetailsProps) => (
    <div className={cn("section", styles.details)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                <div className={styles.check}>
                    <Image
                        className={styles.image}
                        src="/images/fluxxboard-star.png"
                        width={368}
                        height={727}
                        alt=""
                    />
                    <div className={styles.circle}>
                        <div className={styles.dot}></div>
                    </div>
                </div>
                <div className={cn("h2", styles.title)}>
                    Built for Creators
                </div>
                <div className={styles.info}>Every feature designed to turn scattered thoughts into actionable projects</div>
            </div>
            <div className="">
                <Item
                    className={styles.item}
                    title="AI Smart Categorization"
                    content="Stop wasting time organizing. AI automatically assigns ideas to the right project and detects priority levels instantly. Premium Feature"
                    icon="/images/plus.svg"
                    gradient="/images/gradient-1.png"
                >
                    <Illustration1 />
                </Item>
                <Item
                    className={styles.item}
                    classOvarlay={styles.overlay}
                    title="AI Research Assistant"
                    content="Stuck on an idea? Click the sparkle button and get contextual research, actionable suggestions, and next steps in seconds. Premium Feature"
                    icon="/images/numbers.svg"
                    gradient="/images/gradient-2.png"
                >
                    <Illustration2 />
                </Item>
                <Item
                    className={styles.item}
                    classOvarlay={styles.overlay}
                    title="Visual Project Dashboard"
                    content="See all your projects at a glance. Drag and drop ideas between projects. Track progress with beautiful synthwave-styled boards. Free & Premium"
                    icon="/images/laptop.svg"
                    gradient="/images/gradient-3.png"
                >
                    <Illustration3 />
                </Item>
            </div>
        </div>
    </div>
);

export default Details;
