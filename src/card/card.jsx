import styles from "./card.module.scss";
import img from "../img/adidas.png";
import { useEffect, useRef } from "react";

const Card = () => {
    const cardRef = useRef(null);
    const containerRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const handleCardHover = (e) => {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

            cardRef.current.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
        };

        const handleContainerLeave = (e) => {
            cardRef.current.style.transition = "all 0.5s ease-in-out";
            cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;

            titleRef.current.style.transform = "translateZ(150px)";
        };

        const handleContainerIn = (e) => {
            setTimeout(() => {
                cardRef.current.style.transition = "none";

            }, 300);
        };

        cardRef.current.addEventListener("mousemove", handleCardHover);
        containerRef.current.addEventListener("mouseleave", handleContainerLeave);
        containerRef.current.addEventListener("mouseenter", handleContainerIn);

        return () => {
            cardRef.current.removeEventListener("mousemove", handleCardHover);
            containerRef.current.removeEventListener("mouseleave", handleContainerLeave);
            containerRef.current.removeEventListener("mouseenter", handleContainerIn);
        };
    }, []);

    return (
        <div className={styles.container} ref={containerRef}>
            <div className={styles.card} ref={cardRef}>
                <div className={styles.sneaker}>
                    <div className={styles.circle}></div>
                    <img src={img} alt="adidas" />
                </div>
                <div className={styles.info}>
                    <h1 className={styles.title} ref={titleRef}>
                        Adidas ZX
                    </h1>
                    <h3>FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
                    <div className={styles.sizes}>
                        <button>39</button>
                        <button>40</button>
                        <button className={styles.active}>42</button>
                        <button>44</button>
                    </div>
                    <div className={styles.purchase}>
                        <button>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
