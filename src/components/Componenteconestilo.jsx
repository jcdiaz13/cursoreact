import { Back } from "./styleofcomponents"

const Popup = ({ visible, setVisible }) => {
    return (
        <Back visible={visible}>
            <div>
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate veritatis non quam! Repellat quis est nobis accusamus quia, fugit itaque quidem reprehenderit consequuntur vitae at et magni. Eligendi, ipsa rem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsam vitae libero inventore aut, nobis sapiente dolore? Sint eaque dolorum sunt, ipsam accusantium id illo voluptatem nesciunt. Qui, recusandae corrupti?</p>
                <button onClick={() => setVisible(false)}>Cerrar popup</button>
            </div>
        </Back>
    )
}

export default Popup;