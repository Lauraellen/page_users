import Sidebar from '../../components/Sidebar';
import Lottie from "lottie-react";
import animationData from '../../lotties/home.json'

import './style.css';

export default function Home() {

    return (
        <div>
            <Sidebar />
            <div className="content">
                <div className="lottie">
                    <Lottie
                        animationData={animationData} loop={true} size={300}
                    />
                </div>
            </div>
        </div>
    )
}