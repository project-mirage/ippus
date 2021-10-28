import React from "react";
import * as css from "./HowItWorks.module.sass";
import HowItWorksCard from "./HowItWorksCard";
import FadeInUp from "../../animations/FadeInUp";

export default function HowItWorksCollection({ howItWorksData }) {
    const people = (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M34 42V38C34 35.8783 33.1571 33.8434 31.6569 32.3431C30.1566 30.8429 28.1217 30 26 30H10C7.87827 30 5.84344 30.8429 4.34315 32.3431C2.84285 33.8434 2 35.8783 2 38V42"
                stroke="#002652"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M18 22C22.4183 22 26 18.4183 26 14C26 9.58172 22.4183 6 18 6C13.5817 6 10 9.58172 10 14C10 18.4183 13.5817 22 18 22Z"
                stroke="#002652"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M46 42V38C45.9987 36.2275 45.4087 34.5056 44.3227 33.1046C43.2368 31.7037 41.7163 30.7031 40 30.26"
                stroke="#002652"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M32 6.26001C33.7208 6.70061 35.2461 7.70141 36.3353 9.10463C37.4245 10.5078 38.0157 12.2337 38.0157 14.01C38.0157 15.7864 37.4245 17.5122 36.3353 18.9154C35.2461 20.3186 33.7208 21.3194 32 21.76"
                stroke="#002652"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
    const heart = (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M41.6802 9.21999C40.6587 8.198 39.4459 7.38728 38.1109 6.83416C36.776 6.28103 35.3452 5.99634 33.9002 5.99634C32.4553 5.99634 31.0244 6.28103 29.6895 6.83416C28.3546 7.38728 27.1417 8.198 26.1202 9.21999L24.0002 11.34L21.8802 9.21999C19.8169 7.1566 17.0183 5.99741 14.1002 5.99741C11.1822 5.99741 8.38362 7.1566 6.32024 9.21999C4.25685 11.2834 3.09766 14.0819 3.09766 17C3.09766 19.9181 4.25685 22.7166 6.32024 24.78L8.44024 26.9L24.0002 42.46L39.5602 26.9L41.6802 24.78C42.7022 23.7585 43.5129 22.5456 44.0661 21.2107C44.6192 19.8758 44.9039 18.445 44.9039 17C44.9039 15.555 44.6192 14.1242 44.0661 12.7893C43.5129 11.4544 42.7022 10.2415 41.6802 9.21999V9.21999Z"
                stroke="#002652"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
    const globe = (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                stroke="#002652"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M4 24H44"
                stroke="#002652"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M24 4C29.0026 9.47671 31.8455 16.5841 32 24C31.8455 31.4159 29.0026 38.5233 24 44C18.9974 38.5233 16.1545 31.4159 16 24C16.1545 16.5841 18.9974 9.47671 24 4Z"
                stroke="#002652"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
    const signals = (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M24 40V20"
                stroke="#002652"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M36 40V8"
                stroke="#002652"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M12 40V32"
                stroke="#002652"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
    const dollar = (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M24 2V46"
                stroke="#002652"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M34 10H19C17.1435 10 15.363 10.7375 14.0503 12.0503C12.7375 13.363 12 15.1435 12 17C12 18.8565 12.7375 20.637 14.0503 21.9497C15.363 23.2625 17.1435 24 19 24H29C30.8565 24 32.637 24.7375 33.9497 26.0503C35.2625 27.363 36 29.1435 36 31C36 32.8565 35.2625 34.637 33.9497 35.9498C32.637 37.2625 30.8565 38 29 38H12"
                stroke="#002652"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );

    const icons = [dollar, people, heart, globe, signals];

    return (
        <>
            <FadeInUp>
                <h1 className={css.heading}>How it works</h1>
            </FadeInUp>
            <div className={css.container}>
                {howItWorksData.map((e, i) => (
                    <HowItWorksCard
                        img={icons[i]}
                        title={e.benefitTitle}
                        description={e.benefitDescription}
                    />
                ))}
            </div>
        </>
    );
}
