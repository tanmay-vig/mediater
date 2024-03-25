import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="bg-black text-center pt-5">
            <motion.h1
                className="text-warning fw-bolder fs-1"
                initial={{ opacity: 0, scale: 0.5 , x: -300 }}
                animate={{ opacity: 1, scale: 1  , x:0}}
                transition={{ duration: 2 }}
            >
                Connecting Brands with Creativity
            </motion.h1>
            <br />
            <motion.h2 className="text-white fw-bold" 
            initial={{ opacity: 0, scale: 0.3 , y: +50}}
            animate={{ opacity: 1, scale: 1  , y:0  }}
            transition={{ duration: 2 }} >
                Welcome to Mediater <br /> Your Gateway to Digital
                Collaboration!
            </motion.h2>{" "}
            <br />
            <motion.div className="text-white fw-bold justify-content-center mx-5"
            initial={{opacity: 0 , scale:0.5}}
            animate={{opacity:1 , scale:1}}
            transition={{ ease: "easeIn" , duration:2}}>
                At Mediater , we redefine collaboration by seamlessly connecting
                content creators with businesses,
                <br /> fostering a dynamic ecosystem of innovation and
                creativity. Our platform serves as the catalyst for strategic
                alliances, <br />
                unlocking endless possibilities in the digital landscape. Join
                the revolution, where every collaboration is an opportunity to
                elevate and innovate.
            </motion.div>
        </div>
    );
}
