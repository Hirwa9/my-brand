
import { motion } from 'framer-motion';

const Stairs = () => {

    const stairsCount = 3;

    // Variants
    const stairAnimation = {
        initial: {
            top: "0%",
        },
        animate: {
            top: "100%",
        },
        exit: {
            top: ["100%", "0%"],
        },
    }

    // Calculate the reverse index for stagged delays
    const reverseIndex = (index: number) => {
        const totalSteps = stairsCount;
        return totalSteps - index - 1;
    }

    return (
        <>
            {/* Render n (3 for this case) motion divs each represening a step of the stairs
            Each dive woth the same animation, and dynamically calculated delay
            based on correspondeing reversed index, creating a stagged effect. */}

            {[...Array(stairsCount)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: .6,
                        ease: 'backIn',
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className='relative w-full h-full bg-accent'
                />
            ))}
        </>
    );
}

export default Stairs;