import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";

const Mission = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col md={4}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <Image src="/mission.jpg" fluid rounded />
                    </motion.div>
                </Col>
                <Col md={7}>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                        className="text-white"
                    >
                        <h2 className="text-warning fw-bolder">Mission</h2>
                        <p>
                            Empowering collaboration and innovation, our mission
                            is to seamlessly connect content creators with
                            businesses, fostering meaningful partnerships in the
                            digital landscape. By providing a dynamic platform
                            that facilitates efficient communication, secure
                            transactions, and insightful analytics, we aim to be
                            the catalyst for creativity, growth, and success in
                            the online content creation ecosystem. Our
                            commitment lies in building a vibrant community
                            where creators thrive, businesses prosper, and
                            authentic collaborations flourish.
                        </p>
                    </motion.div>
                </Col>
            </Row>
            <Row className="mt-5">
            <Col md={7}>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                        className="text-white"
                    >
                        <h2 className="text-warning fw-bolder">Vision</h2>
                        <p>
                            Envisioning a future where the boundaries between
                            content creators and businesses dissolve, our app
                            aspires to be the unparalleled hub for dynamic
                            collaboration in the digital realm. We see a
                            landscape where creativity knows no limits, and
                            partnerships transcend traditional boundaries,
                            resulting in a global network of thriving content
                            ecosystems. By pioneering innovation, fostering
                            inclusivity, and driving transformative connections,
                            our vision is to shape the future of online
                            collaboration, where every creator's voice is
                            amplified, and every business finds its ideal
                            collaborator effortlessly.
                        </p>
                    </motion.div>
                </Col>
                <Col md={4}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <Image src="/vission.jpg" fluid rounded />
                    </motion.div>
                </Col>
                
            </Row>
        </Container>
    );
};

export default Mission;
