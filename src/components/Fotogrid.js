export default function Fotogrid(props) {

    const foto = props.inicio


    return (
        <article>
            <div className="photo-item">
                <img src={foto.image} alt="Service"/>
            </div>
        </article>

    );
}