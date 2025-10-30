import cn from "classnames";
import Label from "@/components/Label";
import CompletedTasks from "@/components/CompletedTasks";
import Bento from "./Bento";
import Bento13 from "./Bento13";
import Bento11 from "./Bento11";
import styles from "./Work.module.sass";

type WorkProps = {};

const Work = ({}: WorkProps) => (
    <div className={styles.work}>
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                <Label title="STEP BY STEP" />
                <h2 className={cn("h2", styles.title)}>
                    From Chaos to Clarity in 3 Steps
                </h2>
            </div>
            <div className={styles.body}>
                <div className={styles.boxes}>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                </div>
                <div className={styles.list}>
                    <Bento
                        title="Capture"
                        content="Brain dump every idea instantly. No folders, no tags, no friction. Just type and go."
                        number={1}
                    >
                        <Bento13 />
                    </Bento>
                    <Bento
                        title="Organize"
                        content="AI instantly categorizes ideas into projects, detects priorities, and surfaces what matters most."
                        number={2}
                    >
                        <Bento11 />
                    </Bento>
                    <Bento
                        title="Execute"
                        content="Track progress, expand ideas with AI, and turn inspiration into shipped projects."
                        number={3}
                    >
                        <CompletedTasks />
                    </Bento>
                </div>
            </div>
        </div>
    </div>
);

export default Work;
