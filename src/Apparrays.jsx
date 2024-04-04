import heroes from "./data/arraymarvel.js";
import './app/style.css'
import img2 from './img/bee-e2ca1dfc.png'

const App = () => {
    return (

        <div className="container">
            <div className="box">

                <div style={{ width: 100, height: 100, backgroundColor: "green" }}></div>
                <img src="/caterpillar.png" alt="" />
                <img src={img2} alt="" />


            </div>
            <div>
                {heroes.map((hero) => (
                    <div key={hero.tittle}>
                        <h1>{hero.tittle}</h1>
                        <img src={hero.img} alt={hero.alt} />
                    </div>
                ))}
            </div>
        </div >

    );
};

export default App;
